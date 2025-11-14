# Housebot 🏠🤖

A SMS-based house manager bot for Peter & Elena.

- Twilio phone number for SMS in/out
- OpenAI for natural language + personality
- Google Calendar as backend (mirrored into Apple Calendar)
- Eventually: tasks, proactive reminders, household maintenance brain

## Dev setup

1. Copy `.env.example` → `.env` and fill in:
   - OPENAI_API_KEY
   - TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN
   - TWILIO_PHONE_NUMBER
   - PETER_PHONE / ELENA_PHONE
   - (optional) Google Calendar envs

2. Install deps:

```bash
npm install
npm run dev
