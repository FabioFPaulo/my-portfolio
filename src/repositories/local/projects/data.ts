import { IPersonalProjectItem } from "./types";

export const localProjectsData: IPersonalProjectItem[] = [
  {
    id: "hand-gesture-3d-controller",
    title: "Hand-Gesture 3D Controller",
    category: "Computer Vision",
    focus: "Python & Computer Vision",
    description:
      "Engineered a touch-free spatial interaction system for 3D web environments using Python and the MediaPipe library. Developed a real-time hand landmark detection pipeline capable of recognizing custom gestures directly from a camera feed, streaming inputs through WebSockets to a web frontend for low-latency 3D model manipulation.",
    technologies: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "WebSockets",
      "3D Web",
      "Real-Time Interaction",
    ],
    link: "https://github.com/FabioFPaulo/Python/tree/main/Object3dGesturesController",
    linkType: "github",
  },
  {
    id: "interactive-3d-macbook",
    title: "Interactive 3D Product Landing Page",
    category: "WebGL & 3D",
    focus: "WebGL & React",
    description:
      "Technically recreated the Apple MacBook commercial landing page to master real-time 3D model integration in modern web environments. Built using Three.js and React, synchronizing scroll-driven animations with 3D model states to deliver a seamless, high-performance WebGL experience with GSAP.",
    technologies: [
      "Three.js",
      "React",
      "WebGL",
      "GSAP",
      "JavaScript",
      "Responsive 3D",
    ],
    link: "https://fabiofpaulo.github.io/ReactTS/MacbookGsapApp/",
    linkType: "demo",
  },
  {
    id: "mmo-hub",
    title: "MMO Hub",
    category: "Mobile App",
    focus: "Android Development",
    description:
      "Developed a native Android application in Kotlin serving as a one-stop hub for MMO gaming news, game directories, and active giveaways. Integrated public REST APIs with asynchronous data retrieval and smooth state transitions between master game feeds and detailed viewports.",
    technologies: [
      "Kotlin",
      "Android SDK",
      "REST APIs",
      "Coroutines",
      "Mobile Architecture",
    ],
    link: "https://github.com/FabioFPaulo/Android/tree/main/MMOGames",
    linkType: "github",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Web Engineering",
    focus: "React & TypeScript",
    description:
      "Engineered a modern, decoupled personal portfolio leveraging React 18, TypeScript, and Vite with a custom local repository architecture. Features a refined Deep Slate aesthetic, responsive glassmorphism navigation dock, and automated deployment pipelines via GitHub Pages.",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
    ],
    link: "https://fabiofpaulo.github.io/my-portfolio/",
    linkType: "demo",
  },
];
