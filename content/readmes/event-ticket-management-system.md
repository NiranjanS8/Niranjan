# Event Ticket Management System

A backend service for managing events, ticket types, ticket purchases, QR code generation, and ticket validation. Built with Spring Boot 4.1.1, Java 21, and PostgreSQL.

## Tech Stack

- **Framework:** Spring Boot 4.1.1, Java 21
- **Database:** PostgreSQL 16
- **ORM:** Hibernate / Spring Data JPA
- **Caching:** Caffeine (in-memory)
- **Object Mapping:** MapStruct 1.6.3, Lombok 1.18.36
- **QR Generation:** Google ZXing 3.5.1
- **Validation:** Jakarta Bean Validation
- **Auth:** Keycloak (OAuth2 Resource Server, JWT)
- **Build:** Maven

## Project Structure

```
src/main/java/com/niranjan/event_ticket_mngmt_system/
├── configurations/       # Security, JPA, Cache, QR code beans
├── controllers/          # REST controllers + global exception handler
├── domain/
│   ├── dtos/             # Request/Response DTOs
│   └── entities/         # JPA entities and enums
├── exceptions/           # Custom exception hierarchy
├── filters/              # Servlet filters (user provisioning)
├── mappers/              # MapStruct mappers
├── repositories/         # Spring Data JPA repositories
├── services/             # Service interfaces
│   └── impl/             # Service implementations
├── util/                 # JWT utilities
└── validators/           # Custom Bean Validation annotations
```

## Domain Model

### Entities and Relationships

```
User ──1:N──> Event          (organizer)
User ──M:N──> Event          (attendees, staff)
Event ──1:N──> TicketType    (cascade all, orphan removal)
TicketType ──1:N──> Ticket
User ──1:N──> Ticket         (purchaser)
Ticket ──1:N──> QrCode
Ticket ──1:N──> TicketValidation
```

### Enums

| Enum | Values |
|---|---|
| EventStatusEnum | `DRAFT`, `PUBLISHED`, `CANCELLED`, `COMPLETED` |
| TicketStatusEnum | `PURCHASED`, `CANCELLED` |
| QrCodeStatusEnum | `ACTIVE`, `EXPIRED` |
| TicketValidationStatusEnum | `VALID`, `INVALID`, `EXPIRED` |
| TicketValidationMethod | `QR_SCAN`, `MANUAL` |

## API Endpoints

### Public

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/published-events` | List published events (paginated, supports `?query=` full-text search) |
| GET | `/api/v1/published-events/{eventId}` | Get published event details with ticket types |

### Event Management (authenticated)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/events` | Create event with ticket types |
| GET | `/api/v1/events` | List events for organizer (paginated) |
| GET | `/api/v1/events/{eventId}` | Get event details |
| PUT | `/api/v1/events/{eventId}` | Update event and ticket types |
| DELETE | `/api/v1/events/{eventId}` | Delete event |

### Tickets (authenticated)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/events/{eventId}/ticket-types/{ticketTypeId}/tickets` | Purchase a ticket |
| GET | `/api/v1/tickets` | List user's tickets (paginated) |
| GET | `/api/v1/tickets/{ticketId}` | Get ticket details |
| GET | `/api/v1/tickets/{ticketId}/qr-code` | Get QR code PNG image |

### Ticket Validation (staff only)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/ticket-validations` | Validate ticket by QR scan or manual check |

## Key Features

### Concurrent Ticket Purchase

Ticket purchases use pessimistic locking (`PESSIMISTIC_WRITE`) on the `TicketType` entity to prevent overselling under concurrent traffic. The purchase flow acquires a row-level lock before checking availability.

### Event Date Validation

Custom `@ValidEventDates` annotation enforces:
- `startDate` must be in the future
- `endDate` must be after `startDate`
- `salesStart` must be before `salesEnd`
- `salesEnd` must be before `endDate`

Applied to both `CreateEventRequestDto` and `UpdateEventRequestDto`.

### Published Events Caching

Caffeine cache on `listPublishedEvents()`:
- 10-minute TTL
- Maximum 200 entries
- Evicted on create, update, or delete of any event

### QR Code Generation

QR codes are generated on ticket purchase using Google ZXing. The stored value is the UUID identifier only (not the full image). The PNG is generated on-demand when the endpoint is called, with `Cache-Control: public, max-age=86400` HTTP headers for client-side caching.

### Ticket Gate Validation

Before marking a ticket as valid at entry:
- Ticket status must be `PURCHASED`
- Event must be currently active (current time between `startDate` and `endDate`)
- First validation is `VALID`, subsequent validations are `INVALID` (re-entry prevention)

### Full-Text Search

Published event search uses PostgreSQL full-text search (`to_tsvector` / `plainto_tsquery`) on event name and venue fields.

### Automatic User Provisioning

A servlet filter auto-creates a local `User` record on first login by extracting data from the Keycloak JWT.

## Infrastructure

### Docker Compose

```bash
docker compose up -d
```

| Service | Port | Description |
|---|---|---|
| PostgreSQL | 5433 | Database |
| Adminer | 8888 | Database UI |
| Keycloak | 9091 | Auth server (imports realm on startup) |

### Application

```bash
# Dev mode (with Docker infra running)
./mvnw spring-boot:run

# Or build and run
./mvnw clean package -DskipTests
java -jar target/event-ticket-mngmt-system-0.0.1-SNAPSHOT.jar
```

Server starts on port `9090`.

### Configuration

Key properties in `application.properties`:

```properties
server.port=9090
spring.datasource.url=jdbc:postgresql://localhost:5433/event_ticket_management
spring.datasource.username=postgres
spring.datasource.password=changemeinprod!
spring.jpa.hibernate.ddl-auto=update
spring.cache.type=caffeine
spring.security.oauth2.resourceserver.jwt.issuer-uri=http://localhost:9091/realms/event-ticket-management
```

## Error Handling

All errors return a consistent JSON response via `GlobalExceptionHandler`:

```json
{
  "message": "Tickets are sold out"
}
```

| Exception | HTTP Status |
|---|---|
| EventNotFoundException | 400 |
| TicketTypeNotFoundException | 400 |
| TicketSoldOutException | 400 |
| EventUpdateException | 400 |
| UserNotFoundException | 400 |
| TicketNotFoundException | 400 |
| QrCodeNotFoundException | 500 |
| QrCodeGenerationException | 500 |
| ConstraintViolationException | 400 |
| MethodArgumentNotValidException | 400 |
| Unknown error | 500 |

## Testing

```bash
./mvnw test
```

Tests use `-Duser.timezone=Asia/Kolkata` to match production timezone behavior.
