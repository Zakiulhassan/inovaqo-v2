import localFont from "next/font/local";
import {
  Geist,
  Geist_Mono,
  Hanken_Grotesk,
  Roboto_Condensed,
  Archivo_Black,
  Neonderthaw,
} from "next/font/google";

/* Concept 2.0 type stacks.
   NewBlack Typeface and Neurial Grotesk are licensed and self-hosted
   below (--font-newblack, --font-neurial-grotesk).
   Helvetica Bold Condensed and Aeonik are not yet licensed —
   Roboto Condensed / Geist remain as substitutes until those files
   are provided. */

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken-grotesk",
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

export const neonderthaw = Neonderthaw({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-neonderthaw",
});

export const newBlack = localFont({
  variable: "--font-newblack",
  display: "swap",
  src: [
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-UltraLight.woff", weight: "200", style: "normal" },
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-Light.woff", weight: "300", style: "normal" },
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-Medium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-SemiBold.woff", weight: "600", style: "normal" },
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/newblack-typeface/NewBlackTypeface-ExtraBold.woff", weight: "800", style: "normal" },
  ],
});

export const neurialGrotesk = localFont({
  variable: "--font-neurial-grotesk",
  display: "swap",
  src: [
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-Extrabold.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/neurial-grotesk/NeurialGrotesk-ExtraboldItalic.otf", weight: "800", style: "italic" },
  ],
});

export const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  hankenGrotesk.variable,
  robotoCondensed.variable,
  archivoBlack.variable,
  neonderthaw.variable,
  newBlack.variable,
  neurialGrotesk.variable,
].join(" ");
