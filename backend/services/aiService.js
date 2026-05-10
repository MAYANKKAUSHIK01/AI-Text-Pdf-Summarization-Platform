import dotenv from "dotenv";

dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({

  apiKey: process.env.OPENROUTER_API_KEY,

  baseURL: "https://openrouter.ai/api/v1",
});

export default async function generateSummary(
  prompt
) {

  const completion =
    await client.chat.completions.create({

      model: "openai/gpt-4.1-mini",

      max_tokens: 500,

      temperature: 0.7,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  return completion.choices[0].message.content;
}