import dotenv from "dotenv";
dotenv.config();

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export const ENV = {
  OPENAI_API_KEY: required("OPENAI_API_KEY"),
  TWILIO_ACCOUNT_SID: required("TWILIO_ACCOUNT_SID"),
  TWILIO_AUTH_TOKEN: required("TWILIO_AUTH_TOKEN"),
  TWILIO_PHONE_NUMBER: required("TWILIO_PHONE_NUMBER"),
  PETER_PHONE: required("PETER_PHONE"),
  ELENA_PHONE: required("ELENA_PHONE"),

  GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  GOOGLE_CALENDAR_ID_PETER: process.env.GOOGLE_CALENDAR_ID_PETER,
  GOOGLE_CALENDAR_ID_ELENA: process.env.GOOGLE_CALENDAR_ID_ELENA,
  GOOGLE_CALENDAR_ID_FAMILY: process.env.GOOGLE_CALENDAR_ID_FAMILY
};
