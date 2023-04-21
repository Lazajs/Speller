import { useState } from "react"
import Modal from "./Modal"
import Textarea from "./Textarea"
import Footer from '../components/Footer';

export default function Main () {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      showModal ? <Modal toggle={setShowModal} /> : (
        <section className="w-full mt-8 max-w-[600px] m-auto">
          <h1 className="text-center text-4xl font-bold">Speller.</h1>
          <span className="flex justify-between items-center m-2">
            <h2 className="text-2xl m-2 opacity-8">The AI will fix...</h2>
            <h2 onClick={()=> setShowModal(true)} className="inline-block cursor-pointer underline text-2xl m-2 opacity-8">What is this...?</h2>
          </span>
          <Textarea />
        </section>
        <Footer showFAQ={setShowModal} />
      )
    </>
  )
}