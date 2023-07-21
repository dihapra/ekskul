export default function When() {
  return (
    <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <h2 className="mb-8 text-4xl text-center font-extrabold text-gray-900 dark:text-white">
        Learning Timeline
      </h2>
      <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-white antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-sky-800 rounded shadow">
                    <h3 className="mb-3 font-bold text-white text-xl">
                      August
                    </h3>
                    <ul className="text-sm leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                      <li>Introduction to basic programming concepts</li>
                      <li>
                        Introduction to HTML: basic web page structure, tags,
                        elements, and attributes
                      </li>
                      <li>Introduction to Git as version control</li>
                      <li>Practice creating simple web pages using HTML</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <h1 className="text-white font-bold">1</h1>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 bg-sky-800 rounded shadow">
                    <h3 className="mb-3 font-bold text-white text-xl">
                      September
                    </h3>
                    <ul className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                      <li>
                        Understanding CSS: styling, element selection, using
                        classes and IDs
                      </li>
                      <li>Practice styling web pages with CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <h1 className="text-white font-bold">2</h1>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-sky-800 rounded shadow">
                    <h3 className="mb-3 font-bold text-white text-xl">
                      October
                    </h3>
                    <ul className="text-sm leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                      <li>
                        Advanced CSS understanding: positioning, layout,
                        responsive design
                      </li>
                      <li>Practice styling more complex web pages with CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <h1 className="text-white font-bold">3</h1>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="p-4 bg-sky-800 rounded shadow">
                    <h3 className="mb-3 font-bold text-white text-xl">
                      November
                    </h3>
                    <ul className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                      <li>
                        Basic JavaScript understanding: variables, data types,
                        basic operations
                      </li>
                      <li>
                        Using JavaScript for simple manipulation of HTML and CSS
                        elements
                      </li>
                      <li>Practice simple interactions with JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <h1 className="text-white font-bold">4</h1>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="p-4 bg-sky-800 rounded shadow">
                    <h3 className="mb-3 font-bold text-white text-xl">
                      December
                    </h3>
                    <ul className="text-sm leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                      <li>Review and solidify basic JavaScript concepts</li>
                      <li>
                        Practice more complex interactions using JavaScript
                      </li>
                      <li>Implement JavaScript in small projects</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                <h1 className="text-white font-bold">5</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
