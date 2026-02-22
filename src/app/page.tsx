"use client";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import {ImageCard, BgImageCard, IconCard} from "./components/cards";
import {Editable} from "./components/editable";
import { MainPageLander } from "./components/navigation";
import {VideoGallery} from './components/gallery';
import { RiComputerFill } from "react-icons/ri";
export const videos = [
  '/videos/home/Background01.mp4',
  '/videos/home/Background02.mp4',
  '/videos/home/Background06.mp4',
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
        <div className="absolute inset-0 hidden md:block w-full">

          <div className="relative h-full w-full bg-slate-950 z-0">
            <div className="fadeInVerySlowly [&>div]:absolute">
              <VideoGallery videos={videos} intervalMs={20000} opacity={50}/>
            </div>
          </div>
        </div>


      <div className="relative h-screen fadeInSlowly bg-black/25 [&>div]:bg-[radial-gradient(circle_1000px_at_10%_500px,#17006180,transparent)]">
        <div className="relative z-10 flex h-full items-center px-4">
              <div className="w-full lg:w-1/2 xl:w-250 pt-24 text-center lg:text-left lg:ml-10 xl:ml-24 ">
                <h1 className="text-6xl xl:text-8xl lg:text-6xl md:text-6xl font-bold tracking-tight text-white">
                  <span className="orbitron-900 text-yellow-300">MAYHEM INDUSTRIES</span>
                </h1>
                <p className="orbitron-800 mx-auto mb-8 text-2xl text-white">
                  Connect, discuss, and conquer in a community made for gamers.
                </p>
                <div className="inline-flex border border-slate-200 rounded-none overflow-hidden">
                  <a
                    href="/servers"
                    className="lg:min-w-xs relative flex items-center justify-center hover:bg-blue-800 bg-slate-950/50 text-slate-200 font-extrabold transition-all duration-200 text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-8 md:py-3 lg:px-16 lg:py-4 border-r border-slate-200 tracking-wide group focus:outline-none"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-slate-200 border-l-[20px] border-l-transparent  transition-all duration-200 -rotate-90"></span>
                    <span className="relative z-10 flex items-center gap-2 montserrat-900">
                      <IoGameController /> JOIN NOW
                    </span>
                  </a>
                  <a
                    href="https://discord.gg/mayhemindustries"
                    className="lg:min-w-xs relative flex items-center justify-center hover:bg-blue-800 bg-slate-950/50 text-slate-200 font-extrabold transition-all duration-200 text-lg md:text-xl lg:text-2xl px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-4 tracking-wide group focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-slate-200 border-r-[20px] border-r-transparent transition-all duration-200 rotate-270"></span>
                    <span className="relative z-10 flex items-center gap-2 montserrat-900">
                      <FaDiscord /> DISCORD
                    </span>
                  </a>
                </div>
              </div>
            </div>
        
      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-10 lg:mr-10 xl:ml-24 xl:mr-24">
        <section className="p-6 rounded-lg mt-16">
          <h2 className="orbitron-900 text-3xl lg:text-5xl font-semibold mb-4 text-blue-400">OUR MISSION</h2>
          <div className="text-lg lg:text-xl text-gray-400"><Editable path="/public/editables/home/ourmission.md"/></div>
        </section>
        <section className="p-6 rounded-lg mt-16">
          <h2 className="orbitron-900 text-3xl lg:text-5xl font-semibold mb-4 text-blue-400">WHAT WE DO</h2>
          <p className="text-lg lg:text-xl text-gray-400">Explore our services and find the perfect fit for your gaming experience.</p>
          {/* ImageCards */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 mt-8">
            <IconCard
              icon={<IoMdChatbubbles className="text-blue-400"/>}
              alt="minecraft"
              text={<>
              <div>
                <p className="text-center text-2xl font-bold text-white">Community Forums</p>
              </div>
              <p className="text-center mt-2 text-gray-400">
                Join discussions, share ideas, and connect with fellow gamers in our vibrant community forums.
              </p>
              </>}
            />

            <IconCard
              icon={<IoGameController className="text-blue-400"/>}
              alt="minecraft"
              text={<>
              <div>
                <p className="text-center text-2xl font-bold text-white">Crossplay</p>
              </div>
              <p className="text-center mt-2 text-gray-400">
                Crossplay for games like Space Engineers and Minecraft, connecting players across platforms.
              </p>
              </>}
            />

            <IconCard
              icon={<RiComputerFill className="text-blue-400"/>}
              alt="minecraft"
              text={<>
              <div>
                <p className="text-center text-2xl font-bold text-white">Multiple Games</p>
              </div>
              <p className="text-center mt-2 text-gray-400">
                Where gamers can stay connected, find factions to join, team up together, and more!
              </p>
              </>}
            />
            
            
          </div>


        </section>

        <section className="p-6 rounded-lg mt-16">
          <h2 className="orbitron-900 text-3xl lg:text-5xl font-semibold mb-4 text-blue-400">OUR SERVERS</h2>
          <p className="text-lg lg:text-xl text-gray-400">We self host all of our hardware with top-of-the-line AM4 and AM5 processors. Experience unparalleled smooth and unbothered gameplay across all of our servers.</p>
          {/* ImageCards */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 mt-8 text-center">
            <BgImageCard
              image="/images/server1.webp"
              alt="servers"
              text={<Editable path="/public/editables/home/our_servers/server1.md"/>}
            />
            <BgImageCard
              image="/images/server2.webp"
              alt="space engineers"
              text={<Editable path="/public/editables/home/our_servers/server2.md"/>}
            />
            <BgImageCard
              image="/images/server3.webp"
              alt="rust"
              text={<Editable path="/public/editables/home/our_servers/server3.md"/>}
            />
            
          </div>


        </section>
      </main>

      {/* Starfield and CometField components */}
      <style jsx global>{`
        .star {
          pointer-events: none;
          position: absolute;
          border-radius: 9999px;
          background: white;
          opacity: 0.7;
          animation: star-twinkle 2s infinite alternate;
        }
        @keyframes star-twinkle {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
