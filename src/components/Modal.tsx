
export default function Modal ({toggle}: {toggle: Function}) {
  return (
    <article>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
              <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                    <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
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

