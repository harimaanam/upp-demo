import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <div className="header">
          <Navbar />
        </div>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main-content">
          <div class="flex flex-col gap-0 w-full">
            <div class="flex flex-col">
              <div class="flex items-center justify-between mx-5 my-4">
                <div>
                  <button class=" flex items-center cursor-pointer w-fit rounded-1 h-5  ">
                    <span>
                      <svg
                        class="ml-[1.33px] mr-[5.33px]"
                        width="16"
                        height="16"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7 14L8.41 12.59L3.83 8H20V6H3.83L8.42 1.41L7 0L0 7L7 14Z"
                          fill="#1B6EBB"
                        ></path>
                      </svg>
                    </span>
                    <span class="text-xs uppercase font-extrabold tracking-0.5 whitespace-nowrap">
                      TASK VIEW
                    </span>
                  </button>
                  <div>
                    <div class="mt-1 flex gap-5 items-center">
                      <span class="gap-2 leading-8 text-6  whitespace-nowrap font-bold">
                        New Event
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-nowrap gap-5 pt-5 pl-7 pr-10  ">
                <div class="bg-gray-208  rounded-lg drop-shadow border border-gray-204 relative min-w-150 z-index-dynamic-class ">
                  <div class="flex items-center w-full h-17 -mb-1 px-4 cursor-pointer">
                    <div class="flex flex-col items-center justify-center min-w-7 w-8 min-h-8 h-8"></div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </span>

                    <span class="font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap">
                      Division Funded Promotion
                    </span>
                    <span class="border-l-0.5 border-[#C8DAEB] ml-3 px-2">
                      Used to create an Event that contains at least one
                      Allowance and at least one Promotion. Most commonly used
                      Event Type for customer promotions that are funded.
                    </span>
                    <div class="flex items-center ml-auto">
                      <div class="w-full px-6 py-4 leading-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-208 border border-gray-204 rounded-lg drop-shadow relative min-w-150 z-index-dynamic-class ">
                  <div class="flex items-center w-full h-16 -mb-0.5 px-4 cursor-pointer">
                    <div class="flex flex-col items-center justify-center min-w-8 w-8 min-h-8 h-8"></div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </span>
                    <span class="font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap">
                      Division Allowance Only
                    </span>
                    <span class="border-l-0.5 border-[#C8DAEB] ml-3 px-3">
                      Used to create an Event for the purposes of submitting an
                      Allowance where no Promotion or other performance is
                      required. Typically used for long term funding or
                      Manufacturer buying incentives.
                    </span>
                    <div class="flex items-center ml-auto">
                      <div class="w-full px-6 py-4 leading-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-208 border border-gray-204 rounded-lg drop-shadow relative min-w-150 z-index-dynamic-class ">
                  <div class="flex items-center w-full h-17 -mb-0.5 px-4 cursor-pointer">
                    <div class="flex flex-col items-center justify-center min-w-8 w-8 min-h-8 h-8"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>

                    <span class="font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap">
                      Division Promotion Only
                    </span>

                    <div class="flex items-center ml-auto">
                      <div class="w-full px-6 py-4 leading-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-208 border border-gray-204 rounded-lg drop-shadow relative min-w-150 z-index-dynamic-class ">
                  <div class="flex items-center w-full h-17 -mb-0.5 px-4 cursor-pointer">
                    <div class="flex flex-col items-center justify-center min-w-8 w-8 min-h-8 h-8"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>

                    <span class="font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap">
                      Multi Division Funded Promotion
                    </span>

                    <div class="flex items-center ml-auto">
                      <div class="w-full px-6 py-4 leading-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-208 border border-gray-204 rounded-lg drop-shadow relative min-w-150 z-index-dynamic-class ">
                  <div class="flex items-center w-full h-17 -mb-0.5 px-4 cursor-pointer">
                    <div class="flex flex-col items-center justify-center min-w-8 w-8 min-h-8 h-8"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>

                    <span class="font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap">
                      Multi Division Allowance Only
                    </span>

                    <div class="flex items-center ml-auto">
                      <div class="w-full px-6 py-4 leading-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-208 border border-gray-204 rounded-lg drop-shadow relative min-w-150 z-index-dynamic-class ">
                  <div class="flex items-center w-full h-17 -mb-0.5 px-4 cursor-pointer">
                    <div class="flex flex-col items-center justify-center min-w-8 w-8 min-h-8 h-8"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>

                    <span class="font-extrabold text-lg leading-6 text-dark-text select-none whitespace-nowrap">
                      Multi Division Promotion Only
                    </span>

                    <div class="flex items-center ml-auto">
                      <div class="w-full px-6 py-4 leading-5">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
