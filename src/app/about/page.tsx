"use client";
import Image from "next/image";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../components/cards";
import {Editable} from "../components/editable";
import {SubPageLander} from "../components/navigation";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-slate-950 ">
            <div className="fadeInSlowly [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_800px_at_50%_500px,#17006180,transparent)]">
            
            </div>
          </div>
        </div>

        <SubPageLander
        title="ABOUT"
        description="View our server status and be notified of any downtime."
        
        />

      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-36 lg:mr-36 xl:ml-96 xl:mr-96">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8 relative z-10 mt-8">
            
            <ColoredTextCard
                title={<span className="text-2xl lg:text-4xl text-center font-semibold text-white">About Mayhem Industries</span>}
                properties={"bg-purple-800"}
                description={<Editable path="/public/editables/about/about.md" />}
            ></ColoredTextCard>
            
            
        </div>
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



