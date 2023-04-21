import { useState } from "react";
import ia from "../lib/ia";

export default function useAI() {
  const [response, setResponse] = useState('')
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState<{message: string} | undefined>()

  const handleError = (err) => {
    setError(err)
    setTimeout(() => {
      setError(undefined)
    }, 5000)
  }

  async function askAI (prompt) {
    isLoading(true)
    setError(undefined)
    try {
      const res = await ia(prompt)
      const json = await res.json()
      const {text} = json.generations[0]
      setResponse(text
        .replaceAll('"', '')
        .replace('--', '')
        .trim()
        )
    } catch (error) {
      handleError(error)
    } finally {
      isLoading(false)
    }
  }

  return {response, error, loading, askAI}
}