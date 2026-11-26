# AI Video Assistant

AI Video Assistant is an agentic meeting analysis system that ingests a YouTube URL or local media file, prepares audio, transcribes it, extracts structured meeting outputs, builds meeting-scoped retrieval, and lets you chat with the transcript afterward.

The project is built to show more than a simple LLM pipeline. A coordinator agent decides which tool to run next, retries failed steps, and asks for clarification when the transcript is too weak to analyze reliably.

## What it does

- Accepts YouTube links and local audio or video files
- Converts audio to WAV and chunks it into timestamped pieces
- Transcribes English with Whisper and Hinglish with Sarvam AI
- Generates a meeting title and summary
- Extracts action items, key decisions, and open questions
- Builds a per-meeting Chroma vector store instead of one shared global collection
- Preserves transcript metadata such as source, meeting ID, chunk index, and timestamps
- Supports follow-up Q&A over the meeting transcript through retrieval-augmented generation


## Architecture

The high-level flow looks like this:

1. `utils/audio_processor.py`
   Prepares the source media, converts it to WAV if needed, chunks it, and creates meeting metadata such as `meeting_id`, `source`, `source_title`, and chunk timestamps.

2. `core/coordinator.py`
   Acts as the coordinator agent. It decides whether to run `audio`, `transcript`, `title`, `summary`, `extract`, `rag`, `answer`, `clarify`, or `finish`.

3. `core/transcriber.py`
   Transcribes each audio chunk and returns both:
   - the full transcript text
   - transcript segments with metadata like `chunk_index`, `start_timestamp`, and `end_timestamp`

4. `core/summarizer.py`
   Generates a concise title and map-reduce style summary.

5. `core/extractor.py`
   Produces structured meeting outputs:
   - action items
   - key decisions
   - open questions

6. `core/vector_store.py`
   Builds a Chroma collection per meeting, not one shared collection for all transcripts.

7. `core/rag_engine.py`
   Builds retrieval over transcript segments and answers follow-up questions using retrieved context.

8. `app.py` and `main.py`
   Provide the Streamlit UI and a CLI entry point.

## Agent workflow

The coordinator agent keeps state about:

- source
- language
- meeting ID
- audio chunks
- transcript text
- transcript segments
- pipeline step status
- meeting outputs
- retrieval chain

It then decides what to do next based on that state.

Example decision path:

1. `audio`
2. `transcript`
3. `title`
4. `summary`
5. `extract`
6. `rag`
7. `finish`

If transcription returns too little usable text, the agent can stop and request clarification instead of pretending the analysis is trustworthy.

## Project structure

```text
AI_Video_Assistant/
|-- app.py
|-- main.py
|-- Requirements.txt
|-- core/
|   |-- coordinator.py
|   |-- extractor.py
|   |-- rag_engine.py
|   |-- summarizer.py
|   |-- transcriber.py
|   `-- vector_store.py
|-- utils/
|   `-- audio_processor.py
`-- downloades/
```

## Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd AI_Video_Assistant
```

### 2. Create and activate a virtual environment

Windows PowerShell:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

macOS / Linux:

```bash
python -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r Requirements.txt
```

### 4. Install FFmpeg

`pydub` depends on FFmpeg being available on your machine.

- Windows: install FFmpeg and add it to `PATH`
- macOS: `brew install ffmpeg`
- Ubuntu/Debian: `sudo apt install ffmpeg`

### 5. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
MISTRAL_API_KEY=your_mistral_api_key
SARVAM_API_KEY=your_sarvam_api_key
WHISPER_MODEL=small
SARVAM_STT_MODEL=saaras:v2.5
```

Notes:

- `MISTRAL_API_KEY` is required for title generation, summarization, extraction, and question answering.
- `SARVAM_API_KEY` is required only if you want Hinglish transcription.
- Whisper runs locally.

## Running the app

### Streamlit UI

```bash
streamlit run app.py
```

The UI shows:

- pipeline step status
- agent trace
- meeting metadata
- summary and structured outputs
- timestamped transcript segments
- follow-up chat over the meeting

### CLI

```bash
python main.py
```

The CLI will prompt you for:

- a YouTube URL or local file path
- transcription language

It then prints:

- meeting ID
- source
- generated title
- summary
- action items
- key decisions
- open questions
- transcript timeline

## Retrieval and metadata design

This project avoids a common beginner RAG mistake: reusing one vector collection for unrelated documents.

Instead:

- each meeting gets its own Chroma collection
- transcript chunks become documents with metadata
- retrieval context includes title, chunk index, and time window

Stored metadata includes:

- `meeting_id`
- `meeting_title`
- `source`
- `chunk_index`
- `text_chunk_index`
- `start_ms`
- `end_ms`
- `start_timestamp`
- `end_timestamp`

This makes the system cleaner, easier to debug, and much safer for multi-meeting use.

## Example use cases

- Analyze a recorded standup and extract action items
- Summarize a product meeting from a YouTube recording
- Chat with a transcript to find who decided what
- Inspect meeting chunks by timestamp for auditability

## Known limitations

- No speaker diarization yet
- No citations returned as a formal structured answer object yet
- No persistent meeting index or history UI across runs
- No automated test suite yet
- Streamlit chat is good for demos, but not yet a full production frontend

## Good next improvements

- Add citations in final answers with explicit timestamp references
- Add persistent meeting history and cross-meeting search
- Add evaluation scripts for transcript quality, summary quality, and answer grounding
- Add export to PDF, markdown, or JSON
- Add speaker diarization and richer transcript visualization
- Add automated tests for the coordinator and RAG flow

## Tech stack

- Python
- Streamlit
- Whisper
- Sarvam AI
- Mistral
- LangChain
- ChromaDB
- HuggingFace embeddings
- yt-dlp
- pydub
