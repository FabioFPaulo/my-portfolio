import type { IPublicationItem } from "./types";

export const localPublicationsData: IPublicationItem[] = [
  {
    id: "real-time-hci-web-latency",
    year: "2026",
    title: "Real-Time HCI: Solving the Web Latency Problem",
    status: "Accepted & Presented",
    authors: ["Fábio Paulo", "Pedro Filipe Oliveira", "Paulo Matos"],
    venue: "17th International Symposium on Ambient Intelligence",
    conferenceAcronym: "AmI 2026",
    publisher: "Springer / Ambient Intelligence",
    description:
      "This paper addresses the performance challenges of implementing deep-learning algorithms within web-based Human-Computer Interaction (HCI). Traditional web applications rely on a single-threaded JavaScript execution environment, which often leads to main thread blocking when processing computationally intensive deep-learning models alongside complex graphical interfaces. This latency significantly degrades the responsiveness and usability of Natural User Interfaces (NUI). To solve this, the authors propose a distributed architecture that offloads heavy processing to Web Workers, allowing background execution parallel to the user interface. The system utilizes a React-based frontend and integrates TensorFlow.js within a Web Worker to handle hand landmark detection and pattern recognition. Communication between the threads is managed via a structured message-passing pipeline using ImageBitmap transfers to minimize overhead. The architecture was validated across four 3D rendering and visualization environments: Babylon.js, Three.js, PlayCanvas, and deck.gl. Experimental results demonstrate that the distributed model consistently outperforms monolithic execution, achieving performance gains of up to 81.8%. While the monolithic approach suffered from instability and suboptimal frame rates, the proposed parallelized architecture stabilized nearly all environments at the 60 FPS monitor refresh rate limit.",
    topics: [
      "Human-Computer Interaction",
      "Deep Learning",
      "Web Workers",
      "TensorFlow.js",
      "Three.js",
      "Babylon.js",
      "ImageBitmap Pipeline",
      "60 FPS Performance",
    ],
  },
  {
    id: "intelligent-climate-control-university-residences",
    year: "2025",
    title:
      "Intelligent Climate Control in University Residences for Temporary Guests",
    status: "Published",
    authors: ["Fábio Fraga Paulo", "Pedro Filipe Oliveira", "Paulo Matos"],
    venue: "9th International Conference on Smart City Applications (SCA 2024)",
    conferenceAcronym: "SCA 2024",
    publisher: "Springer Science and Business Media Deutschland GmbH",
    publicationDetails:
      "Lecture Notes in Networks and Systems, 2025, 1310 LNNS, pp. 145–154",
    description:
      "Residential buildings are excellent cases for utilizing intelligent climate control solutions. They typically consist of spaces used by individuals or small groups of people, where each individual/group is independent in terms of routines and comfort preferences. Often, these individual spaces are used solely for overnight stays, meaning they remain unoccupied for most of the time. Climatization systems that operate independently of actual space usage or user comfort preferences are highly inefficient for this kind of scenario. Additionally, residents usually pay based on the duration they stay in the residence (per day or month), without any direct allocation of costs related to climatization. This contributes to the residents’ lack of responsibility in their use of the climatization, as they have no financial or environmental impact concerns. In this paper, the authors report a case study conducted in a university residence for short-term stays intended for visiting professors and researchers. The experience was done aiming at the reduction of energy consumption with climatization. The solution ensures that individual space control is allowed according to each resident’s preferences. This case study also posed challenges in assigning and maintaining access permissions to control the climatization system.",
    topics: [
      "Smart City Applications",
      "Energy Efficiency",
      "IoT Climatization",
      "Springer LNNS",
      "Access Permissions",
    ],
  },
  {
    id: "rfid-smart-climate-control-student-residences",
    year: "2025",
    title:
      "RFID-Based Smart Climate Control in Student Residences: A Personalized and Energy-Efficient Approach",
    status: "Accepted for publication (Indexing in progress)",
    authors: ["Fábio Fraga Paulo", "Pedro Filipe Oliveira", "Paulo Matos"],
    venue:
      "11th International Conference on Engineering and Emerging Technologies (ICEET 2025)",
    conferenceAcronym: "ICEET 2025",
    publisher: "IEEE / ICEET",
    link: "https://www.iceet.net",
    description:
      "The integration of smart technologies into residential spaces has opened new possibilities for enhancing user comfort and energy efficiency. This paper presents the development of a smart climate control system for student residences, leveraging RFID (Radio Frequency Identification) technology and a mobile application to personalize environmental settings based on individual user preferences and presence. In this system, each room is equipped with an RFID tag that uniquely identifies its location. Students use a dedicated smartphone application to scan the tag upon entering the room, which not only validates their presence but also triggers a personalized temperature setting. The application allows students to adjust their preferred temperature settings, enabling the system to learn individual routines and comfort preferences over time. At the core of the solution is an autonomous learning module that uses the collected data to predict occupancy patterns and automatically manage the room’s climate. When a student is detected, the system adjusts the temperature to their preferred setting; when the room is unoccupied, it reduces energy consumption by entering an eco-mode. This dynamic approach aims to balance user comfort with energy efficiency. The architecture of the system includes RFID-based room identification, a low cost raspberry that acts as local server, a mobile interface for user interaction, and a centralized control system that handles data analysis and actuator management.",
    topics: [
      "RFID Technology",
      "Mobile Applications",
      "Autonomous Learning",
      "Raspberry Pi",
      "Energy Efficiency",
      "Smart Living",
    ],
  },
  {
    id: "enhancing-video-projector-connectivity",
    year: "2024",
    title:
      "Enhancing Video Projector Connectivity and Management with a Low-Cost Solution",
    status: "Published (IEEE Xplore)",
    authors: ["Fábio Fraga Paulo", "Pedro Filipe Oliveira", "Paulo Matos"],
    venue:
      "10th International Conference on Engineering and Emerging Technologies (ICEET 2024)",
    conferenceAcronym: "ICEET 2024",
    publisher: "Institute of Electrical and Electronics Engineers Inc. (IEEE)",
    publicationDetails:
      "International Conference on Engineering and Emerging Technologies (ICEET), IEEE, 2024",
    description:
      "The video projector serves as an essential device for various purposes, such as education, corporate functions, and conferences. This article presents an affordable setup aimed at upgrading video projection equipment, including older models, with enhanced management and sharing features. The proposed solution tackles frequent connectivity challenges arising from differences in connectors, transmission methods, and mismatches in configurations (like frequency and resolution) between computers and projectors. Such incompatibilities often result in delays and hinder the effective use of video projectors. By incorporating a Raspberry Pi and three dedicated applications, this system introduces an intuitive solution that supports innovative teaching and work methods.",
    topics: [
      "IEEE Xplore",
      "Embedded Systems",
      "Raspberry Pi",
      "Display Protocols",
      "Classroom Tech",
    ],
  },
];
