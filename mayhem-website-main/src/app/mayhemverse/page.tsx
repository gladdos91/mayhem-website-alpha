"use client";
import Image from "next/image";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../components/cards";
import {Editable} from "../components/editable";
import {SubPageLander} from "../components/navigation";
import { FaDiscord } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { VideoGallery } from "../components/gallery";
import { videos } from "../page";

export default function Mayhemverse() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
        <div className={`absolute inset-0 ${window.matchMedia('(max-width: 768px)').matches ? 'hidden' : 'w-full'} `}>

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
                  <span className="orbitron-900 bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent">JOIN THE MAYHEMVERSE</span>
                </h1>
                <p className="orbitron-800 mx-auto mb-8 text-2xl text-white">
                  Establish your base, forge your destiny.
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
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-36 lg:mr-36 xl:ml-96 xl:mr-96">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8 relative z-10 mt-8">
            
            
            
            
        </div>
      </main>
    </div>
  );
}



