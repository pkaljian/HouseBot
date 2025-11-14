import OpenAI from "openai";
import { HOUSEBOT_SYSTEM_PROMPT } from "./prompt";
import { ENV } from "./env";
import { SmsContext, HousebotReply } from "./types";

const openai = new OpenAI({ apiKey: ENV.OPENAI_API_KEY });

export async function askHousebot(ctx: SmsContext): Promise<HousebotReply> {
  const { body, userId, fromPhone } = ctx;

  const userDescriptor =
    userId === "External"
      ? `External contact from phone ${fromPhone}`
      : `${userId}`;

  const messages = [
    { role: "system" as const, content: HOUSEBOT_SYSTEM_PROMPT },
    {
      role: "user" as const,
      content: `Incoming SMS.\nFrom: ${userDescriptor}\nText: "${body}"`
    }
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-5.1-mini",
    messages,
    temperature: 0.6
  });

  const replyText = completion.choices[0].message.content?.trim() || "Got it!";

  return { text: replyText };
}
