import Spotlight, { SpotlightCard } from "@/components/spotlight";
import React from "react";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
      <div className="flex flex-col gap-4 relative">
        <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
          Connections
        </h1>

        <h2
        className="text-3xl text-start font-bold text-zinc-200 mt-8 mb-4 px-4"
        >Find the apis you need.</h2>
        <p className="text-zinc-500 max-w-2xl px-4 text-start">
          Build powerful workflows using all your favorite services. Each
          integration has a set of actions that you can use in your workflows.
        </p>
        <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group px-32">
          {/* Card #1 */}
          <SpotlightCard>
            <div className="relative h-full bg-zinc-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src="/card-01.png"
                    width={200}
                    height={200}
                    alt="Card 01"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-zinc-200 font-bold mb-1">
                    Amazing Integration
                  </h2>
                  <p className="text-sm text-zinc-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-zinc-800 hover:bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-zinc-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-zinc-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
          {/* Card #2 */}
          <SpotlightCard>
            <div className="relative h-full bg-zinc-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src="/card-02.png"
                    width={200}
                    height={200}
                    alt="Card 02"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-zinc-200 font-bold mb-1">
                    Amazing Integration
                  </h2>
                  <p className="text-sm text-zinc-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-zinc-800 hover:bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-zinc-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-zinc-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
          {/* Card #3 */}
          <SpotlightCard>
            <div className="relative h-full bg-zinc-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                {/* Image */}
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <Image
                    className="inline-flex"
                    src="/card-03.png"
                    width={200}
                    height={200}
                    alt="Card 03"
                  />
                </div>
                {/* Text */}
                <div className="grow mb-5">
                  <h2 className="text-xl text-zinc-200 font-bold mb-1">
                    Amazing Integration
                  </h2>
                  <p className="text-sm text-zinc-500">
                    Quickly apply filters to refine your issues lists and create
                    custom views.
                  </p>
                </div>
                <a
                  className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-zinc-800 hover:bg-zinc-900 border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-zinc-600 transition-colors duration-150"
                  href="#0"
                >
                  <svg
                    className="fill-zinc-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                  >
                    <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                  </svg>
                  <span>Connect</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </Spotlight>
      </div>
    </div>
  );
};

export default DashboardPage;
