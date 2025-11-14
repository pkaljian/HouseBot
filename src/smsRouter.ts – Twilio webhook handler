import { Request, Response } from "express";
import { ENV } from "./env";
import { askHousebot } from "./housebot";
import { SmsContext, UserId } from "./types";

function identifyUser(from: string): UserId {
  if (from === ENV.PETER_PHONE) return "Peter";
  if (from === ENV.ELENA_PHONE) return "Elena";
  return "External";
}

export async function handleSms(req: Request, res: Response) {
  const from = req.body.From as string;
  const to = req.body.To as string;
  const body = (req.body.Body as string) || "";

  const userId = identifyUser(from);

  const ctx: SmsContext = { fromPhone: from, toPhone: to, body, userId };

  const reply = await askHousebot(ctx);

  // TwiML response
  res.type("text/xml");
  res.send(`
    <Response>
      <Message>${escapeXml(reply.text)}</Message>
    </Response>
  `);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
