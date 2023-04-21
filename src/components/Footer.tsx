export default function Footer ({showFAQ}: {showFAQ: Function}) {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full fixed bottom-0 py-8">
        <div className="max-w-screen-xl px-4 mx-auto">
            <ul className="flex flex-wrap justify-around max-w-screen-md mx-auto text-lg font-light">
                <li className="my-2">
                    <a onClick={()=> showFAQ(true)} className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                        FAQ
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
                        Github
                    </a>
                </li>
            </ul>
        </div>
    </footer>

  )
}