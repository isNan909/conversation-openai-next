import type { NextApiRequest, NextApiResponse } from 'next'
import { configuration } from '@/utils/constants'
import { OpenAIApi } from 'openai'

interface ResulType {
  result: string
}

const openai = new OpenAIApi(configuration)

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResulType>) {
  const { input } = req.body
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: `You are a expert in large language models(LLMs) that are the algorithmic basis for chatbots like OpenAI's ChatGPT and Google's Bard. Its a topic the customers and users wants to ask questions mostly about Artificial Intelligence and chatbots. Can you answer something about the ${input} and respond to our customers clearly.`,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  const suggestion = response.data?.choices?.[0].text

  if (suggestion === undefined) throw new Error('No suggestion found')

  res.status(200).json({ result: suggestion })
}
