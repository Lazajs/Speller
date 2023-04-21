import { useEffect, useState } from "react"
import useAI from "../hooks/useAI"

export default function Textarea () {
  const [value, setValue] = useState<string>('') 
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const {askAI, error, response, loading} = useAI()
  const [solved, setSolved] = useState<boolean>(false)
  const handleChange = (event) => setValue(event.target.value)

  const handleSubmit = () => {
    if (value.length > 0) {
      askAI(value)
    }
  }

  useEffect(()=> {
    if (response) {
      setValue(response)
      setSolved(true)
      const timer = setTimeout(() => {
        setSolved(false)
      }
      , 1000)
      return () => clearTimeout(timer)
    }
  }, [response])

  useEffect(() => {
    if (value.length > 0) setIsDisabled(false)
    else setIsDisabled(true)
  }, [value, response])

  return (
    <>
      <label className="text-gray-700 mt-4" htmlFor="name">
        {/** @ts-expect-error **/}
        <textarea onChange={handleChange} value={value} className={`flex-1 w-full resize-none px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border-[3px] ${solved ? 'border-green-600' : 'border-gray-300'} rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg`} id="comment" placeholder="Your ugly text..." name="comment"  rows="13" cols="50">
        </textarea>
      </label>
      {error && <p className="text-red-500 text-xl font-bold m-2 text-center italic">{error.message}</p>}
      {loading ? (
        <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                </path>
            </svg>
            loading
        </button>
      ) :  <button onClick={handleSubmit} disabled={isDisabled} className={`flex-1 w-full bg-indigo-600 px-4 py-2 text-base text-white transition duration-150 ease-in-out ${isDisabled ? 'hidden' : ''} border border-transparent rounded-lg active:bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo`} type="submit">Fix it!</button>
      }
    </>
  )
}

