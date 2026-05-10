# AI Summarizer

> A full-stack web application that summarizes plain text and PDF documents using AI — built with Next.js, Express.js, and the OpenRouter API.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Author](#author)
- [License](#license)

---

## Features

- **Text Summarization** — Paste any text and get an instant AI-generated summary
- **PDF Summarization** — Upload PDF documents for automatic extraction and summarization
- **Summary Length Control** — Choose between Short, Medium, and Long summaries
- **Summary Format Control** — Output as Paragraphs or Bullet Points
- **Responsive UI** — Clean, modern interface that works across all screen sizes
- **Modular Architecture** — Scalable backend structure with clear separation of concerns

---

## Tech Stack

| Layer        | Technology                        |
| ------------ | --------------------------------- |
| Frontend     | Next.js, React, TypeScript, Tailwind CSS |
| Backend      | Node.js, Express.js, Multer, PDF Parse |
| AI Provider  | OpenRouter API (GPT-4.1 Mini)     |

---

## Project Structure

```
ai-summarizer/
│
├── backend/
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Express middleware (validation, upload)
│   ├── routes/            # API route definitions
│   ├── services/          # AI and PDF processing logic
│   ├── utils/             # Shared utilities
│   ├── .env               # Backend environment variables
│   ├── package.json
│   └── server.js          # Entry point
│
├── frontend/
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API abstraction layer
│   ├── types/             # TypeScript type definitions
│   ├── public/            # Static assets
│   ├── .env.local         # Frontend environment variables
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- An [OpenRouter](https://openrouter.ai) API key

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-summarizer.git
cd ai-summarizer
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
OPENROUTER_API_KEY=your_openrouter_api_key
```

Start the backend server:

```bash
node server.js
# Running at http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file inside `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
# Running at http://localhost:3000
```


---

## API Reference

### `POST /api/summarize`

Summarizes text or a PDF document.

#### Text Input

```json
{
  "text": "Your text content here...",
  "length": "medium",
  "format": "paragraphs"
}
```

#### PDF Input (multipart/form-data)

| Field    | Type     | Description              |
| -------- | -------- | ------------------------ |
| `file`   | File     | PDF document to summarize |
| `length` | String   | `short`, `medium`, `long` |
| `format` | String   | `paragraphs`, `bullets`  |

#### Options

**`length`**

| Value    | Description             |
| -------- | ----------------------- |
| `short`  | Brief overview          |
| `medium` | Balanced summary        |
| `long`   | Comprehensive breakdown |

**`format`**

| Value        | Description              |
| ------------ | ------------------------ |
| `paragraphs` | Flowing paragraph format |
| `bullets`    | Concise bullet points    |

---

## Deployment

### Frontend

Recommended platforms: **Vercel**, **Netlify**

### Backend

Recommended platforms: **Render**, **Railway**, **Cyclic**

> Make sure to set all environment variables in your hosting platform's dashboard before deploying.

---

## Future Scope

- [ ] User authentication & accounts
- [ ] Summary history with search
- [ ] Export summaries as PDF
- [ ] Multiple AI provider support
- [ ] Dark mode
- [ ] OCR support for scanned PDFs
- [ ] Multi-language summarization
- [ ] Voice-based summarization
- [ ] AI chat assistant
- [ ] User dashboard & analytics

---

## Author

**Mayank Kaushik** — Software Engineer | Full Stack Developer

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

[Next.js](https://nextjs.org) · [OpenRouter](https://openrouter.ai) · [Tailwind CSS](https://tailwindcss.com) · [Express.js](https://expressjs.com) · [React](https://react.dev)

---

*Built to explore practical AI integration with modern full-stack development, maintaining clean and scalable architecture throughout.*
