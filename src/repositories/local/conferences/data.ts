import { IConferenceItem } from "./types";

export const localConferencesData: IConferenceItem[] = [
  {
    id: "iceet-2025",
    conferenceName: "International Conference on Engineering and Emerging Technologies",
    conferenceEdition: "11th Edition",
    conferenceAcronym: "ICEET 2025",
    role: "Oral Presentation",
    startDate: "22 Oct, 2025",
    endDate: "23 Oct, 2025",
    location: "Malaysia",
    paperTitle:
      "RFID-Based Smart Climate Control in Student Residences: A Personalized and Energy-Efficient Approach",
    officialLink: "https://www.iceet.net",
    certificatePdf: `${import.meta.env.BASE_URL}files/iceet_2025_certificate.pdf`,
    driveUrl:
      "https://drive.google.com/file/d/15qpyBBMhvjEnFQPWjML-fwJW_eaBrc1K/view?usp=drive_link",
    description:
      "Delivered an oral presentation at the 11th International Conference on Engineering and Emerging Technologies (ICEET 2025) in Malaysia. Presented research and engineering findings on an intelligent, personalized climate control framework designed for student accommodations, leveraging RFID identification, real-time sensing, and energy-conserving automation algorithms.",
    topics: [
      "RFID Sensing",
      "Smart Climate Control",
      "Energy Efficiency",
      "IoT Automation",
      "Emerging Technologies",
    ],
  },
];
