import { Configuration } from "openai";

export const INPUT_VALUE = 50;

export const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

