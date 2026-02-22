"use client";
import Image from "next/image";
import {ImageCard, TextCard, BgImageCard, BgImageTextCard, ColoredTextCard, BgImageTextCardShaded} from "../components/cards";
import {Editable} from "../components/editable";
import {MainPageLander, SubPageLander} from "../components/navigation";
import { ButtonCard, InlineOrderedHeading, SubtitleTextCard, TitleTextCard } from "../components/cardsv2/textCards";
import { StrikeTable } from "../components/cardsv2/etc";
import { TitleImageTextCard } from "../components/cardsv2/imageCards";

export default function Rules() {
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
        title={<><span className="bg-gradient-to-r from-purple-500 to-fuchsia-700 bg-clip-text text-transparent">SERVER RULES & GUIDELINES</span></>}
        description="Select your game below to view the specific rules and guidelines for that server."
        properties="bg-gray-950"
        />

      </div>

      {/* Text below the main area */}
      <main className="grid grid-cols-1 md:grid-cols-1 gap-8 relative z-10 ml-8 mr-8 lg:ml-36 lg:mr-36 xl:ml-96 xl:mr-96">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-8xl mx-auto">
            <TitleTextCard
              header={<p className="text-5xl text-rose-600">🚧 New Rules Page is in Development.</p>}
              description={ <>
              <span className="montserrat-600 text-2xl">We apologize for the inconvenience. Please visit our discord at discord.gg/mayhemindustries to visit the rules.</span>
              </>
              }
              headerProperies={"mt-4 mb-4 p-8 text-center text-purple-500 orbitron-900 border-2 border-yellow-500 bg-yellow-500/10"}
              descriptionProperties={"text-gray-400 text-center text-xl"}
            />

            


          </div>
        </div>
      </main>
    </div>
  );
}



