import {MdAutoFixHigh} from 'react-icons/md'

export default function Modal ({toggle}: {toggle: Function}) {
  return (
    <article>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
              <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                    <MdAutoFixHigh className="w-6 h-6" />
                  </div>
              </div>
              <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                  Welcome to Speller.
              </h3>
              <p className="py-4 text-gray-500 text-md dark:text-gray-300">
                  Speller is a simple, fast, and free spell checker for the web that uses AI from <a target='_blank' href="https://cohere.com/">Cohere</a>.
              </p>
              <p className="py-2 text-gray-500 text-md dark:text-gray-300">It's built with <a target='_blank' href="https://astro.build/">Astro</a>, <a target='_blank' href="https://www.typescriptlang.org/">TypeScript</a>, and <a href="https://tailwindcss.com/">Tailwind CSS</a>.</p>
              <p className="py-2 text-gray-500 text-md dark:text-gray-300">It's also open source. You can find the source code on <a target='_blank' href="https://github.com/Lazajs/Speller">GitHub</a>.</p>   
          
            <button onClick={()=> toggle(false)} type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Got it!
            </button>

          </div>
          
      </div>
    </article>
  )
}