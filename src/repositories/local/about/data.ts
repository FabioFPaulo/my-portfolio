import type {IAboutData} from "./types";

export const localAboutData: IAboutData = {
    title: "About Me",
    subtitle: "Computer Engineer & MSc in Informatics",
    bio: [
        "Computer Engineer and MSc in Informatics at the Polytechnic University of Bragança, with a hands-on academic path progressing from a CTeSP to a Master's degree.",
        "I specialize in developing dynamic web and mobile applications using TypeScript (React, Angular), Kotlin (Ktor, Android), and Python (Flask).",
        "Recently, I expanded into applied Deep Learning through my MSc thesis on real-time 3D gesture manipulation, where I combined LSTM/GRU models with MediaPipe in a parallelized browser architecture to ensure smooth, lag-free Web3D rendering.",
    ],
    highlights: [
        {
            title: "Academic Journey",
            subtitle: "From CTeSP to Master's Degree (MSc) in Informatics at IPB",
            badge: "Academic",
        },
        {
            title: "Modern Web & Mobile",
            subtitle: "TypeScript (React, Angular), Kotlin (Android, Ktor), Python (Flask)",
            badge: "Stack",
        },
        {
            title: "Applied Deep Learning",
            subtitle: "3D Gesture control using LSTM/GRU & MediaPipe with Web3D parallel architecture",
            badge: "MSc Thesis",
        },
    ],
    specializations: [
        "TypeScript",
        "React",
        "Angular",
        "Kotlin",
        "Android",
        "Python",
        "Flask",
        "Deep Learning",
        "MediaPipe",
        "Web3D",
        "Docker",
    ],
};
