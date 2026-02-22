import { Orbitron, Montserrat, Open_Sans, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {Header, Footer} from "./components/navigation"
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const jetBrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
/*
Background: bg-gray-900
Paragraph text: text-gray-400
Header-text: text-white
Icon: blue-500
Border: border-yellow-500
Card background: bg-gray-800

*/

export const metadata = {
  title: "Mayhem Industries",
  description: "Connect, discuss, and conquer in a community made for gamers.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${open_sans.className} ${orbitron.variable} ${jetBrains_mono.variable} antialiased bg-slate-900 h-screen text-white fadeInQuickly`}>
        <Header />
          <div className="bg-gray-950 min-h-screen">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
