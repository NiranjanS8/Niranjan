# RecruitIQ

An agentic AI recruiting platform: resumes go in, ranked candidates with
grounded reasoning come out. Built with a LangGraph agent pipeline on
FastAPI and a React frontend.

## Architecture

![RecruitIQ architecture](Architecture.png)

## What it does

- **Upload a resume** (PDF/image/text) — parsed via OCR + heuristics into
  structured data with a parsing-confidence flag for low-quality extractions.
- **Score and rank** — a LangGraph agent extracts skills, embeds the resume
  against the job, scores nine rubric dimensions, and computes an overall
  score with per-dimension reasoning.
- **Review with a human in the loop** — approve/reject/edit a candidate, with
  every state change written to an audit log.
- **Agentic features**:
  - Candidate-specific interview questions generated from the weakest scored
    dimensions and strongest resume claims.
  - Grounded Q&A over a candidate's resume with citations and an explicit
    "not stated" guard against hallucination.
  - A JD generator that drafts a structured job description from a one-paragraph
    brief, editable before saving.
  - Interview scheduling with calendar/email provider integrations.
- **Recruiter tooling** — bulk approve/reject, saved filter views, side-by-side
  candidate comparison, per-candidate notes, skill-gap and score breakdowns.
- **Hardened** — prompt-injection fencing on resume content, JWT auth on every
  endpoint, PII encryption at rest with on-demand deletion, duplicate-candidate
  detection, and a provider-agnostic LLM layer with mock fallback for offline
  dev and tests.

## Tech stack

| Layer     | Tech                                                              |
| --------- | ----------------------------------------------------------------- |
| Backend   | Python, FastAPI, LangGraph, SQLAlchemy, PostgreSQL (JSONB)         |
| Frontend  | React, TypeScript, Vite, Tailwind CSS                             |
| LLMs      | LiteLLM abstraction (Claude, GPT, Gemini, Mistral) + deterministic mock provider |
| Storage   | Postgres + encrypted resume file storage (Fernet)                 |

## Project structure

```
backend/
  app/agents/       LangGraph state machine, nodes, and agent prompts
  app/api/          FastAPI routers (auth, jobs, candidates, interviews, ...)
  app/models/       SQLAlchemy models
  app/schemas/      Pydantic request/response schemas
  app/services/     LLM provider abstraction, mock provider, parser, scheduling, ...
  tests/            pytest suite
frontend/
  src/pages/        Views (Jobs, JobDetail, CandidateDetail, Compare, ...)
  src/components/   Reusable UI (bloom score, status pill, Q&A card, ...)
  src/lib/          API client and types
```

## Getting started

Requirements: Python 3.12+ (uv), Node 20+, a local PostgreSQL instance.

```bash
# Backend (http://localhost:8000)
cd backend
cp ../.env.example ../.env   # adjust DATABASE_URL as needed
uv sync
uv run uvicorn main:app --reload

# Frontend (http://localhost:5173)
cd frontend
npm install
npm run dev
```

Sign in with the defaults in `.env` (`RECRUITER_EMAIL` / `RECRUITER_PASSWORD`).

### LLM configuration

Every agent role selects its model independently via `LLM_*` settings in `.env`
(e.g. `LLM_SCORER`, `LLM_QA`, `LLM_JD_GENERATOR`). Set any of them to
`mock/heuristic` for deterministic offline behavior, or to a LiteLLM
`provider/model` string (e.g. `anthropic/claude-sonnet-4-6`) for a real
provider. Only the API key of a provider you actually select is required.

## Testing

```bash
cd backend
uv run pytest
uv run ruff check app tests scripts
```
