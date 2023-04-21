 
async function detectLanguage (prompt) {
  const data = {
    texts: [prompt]
  }

  const OPTIONS = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${import.meta.env.PUBLIC_COHERE_KEY}`,
      "accept": "application/json"
    },
    body: JSON.stringify(data)
  }

  return await fetch('https://api.cohere.ai/v1/detect-language', OPTIONS)
}


export default async function ia (prompt: string): Promise<Response> {
  const data = {
    model: 'xlarge',
    prompt: `This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I dont't can know"
Correct sample: "I don't know"
--
Incorrect sample: ${prompt}
Correct sample:`,
    max_tokens: 200,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE',
  }

 
  const language = await detectLanguage(prompt)
  const lang = await language.json()
  const langCode = lang.results[0].language_code
  if (langCode !== 'en') throw new Error('Language not supported.')
  if (prompt.length > 200) throw new Error('Prompt too long, please shorten it to 200 characters or less.')

  const OPTIONS = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${import.meta.env.PUBLIC_COHERE_KEY}`,
      "accept": "application/json"
    },
    body: JSON.stringify(data)
  }

  try {
    const result = await fetch('https://api.cohere.ai/v1/generate', OPTIONS)
    return result
  } catch (e) {
    throw new Error('Something failed. If this persists please contact the developer.')
  }

}