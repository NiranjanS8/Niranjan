# Patient Management System

Production-style microservices backend with REST + gRPC communication, Kafka event-driven architecture, centralized auth via API Gateway, and cloud-native deployment on AWS.

## Architecture & Features

- **Microservices Communication:** Decoupled service architecture combining high-throughput gRPC for internal RPC calls and REST APIs for external clients.
- **Event-Driven Workflows:** Kafka messaging topics for asynchronous patient event publication, status notifications, and inter-service data consistency.
- **API Gateway & Security:** Centralized JWT authentication, token validation, rate-limiting, and route forwarding enforced at the gateway layer.
- **Cloud-Native & Containerized:** Fully dockerized services with AWS CDK deployment definitions and LocalStack testing harness for local cloud emulation.

## Tech Stack

- **Backend:** Java, Spring Boot, gRPC, Protobuf
- **Messaging:** Apache Kafka
- **Database:** PostgreSQL
- **Security:** Spring Security, JWT
- **DevOps & Cloud:** Docker, AWS CDK, LocalStack
