import BSFIBanking from "../assets/BFSI Banking.svg";
import BSFIInsurance from "../assets/BFSI Insurance.svg";
import LifeScience from "../assets/LifeScience&Pharma.svg";
import Consumer from "../assets/Consumer.svg";
import Automobile from "../assets/Automobile&Engineering.svg";
import GovtPSU from "../assets/Govt&PSU.svg";
import TelecomMedia from "../assets/TelecomMedia.svg";

export const IndustryUseCaseConstants = [
  {
    id: 1,
    icon: BSFIBanking,
    name: "Financial Services",
    info: [
      {
        title: "CAM Update",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
     /*  {
        title: "RM Enablement",
        description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 2,
    name: "Consumer - Retail & CPG",
    icon: BSFIInsurance,
    info: [
      {
        title: "Virtual assistant for shopping",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      /* {
        title: "Claim Processesing",
        description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 3,
    icon: LifeScience,
    name: "Life Sciences & Health Care",
    info: [
      {
        title: "Doctor’s payout ",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      /* {
        title: "Shift Planning",
        description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 4,
    icon: TelecomMedia,
    name: "Telecom, Media & Technology",
    info: [
      {
        title: "Customer onboarding & credit vetting",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      {
        title: "Media content ID creation & registration",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      {
        title: "Media Sales Order",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      }
    ],
  },
  {
    id: 5,
    icon: Automobile,
    name: "Energy Resources & Industrials",
    info: [
      {
        title: "Warranty Management ",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
     /*  {
        title: "Warranty Processing",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 6,
    icon: GovtPSU,
    name: "Government",
    info: [
    //   {
    //     title: "Citizen Grievence Management",
    //     description: `Designing and implementing risk management frameworks, 
    //             Risk appetite definition, Strategic, operational, and reputational risk assessments`,
    //     useCaseOptions: [],
    //   },
    ],
  },
//   {
//     id: 7,
//     icon: TelecomMedia,
//     name: "Telcom,Media & Technology",
//     info: [
//       {
//         title: "Advertisement Slots Planning",
//         description: `Designing and implementing risk management frameworks, 
//                 Risk appetite definition, Strategic, operational, and reputational risk assessments`,
//         useCaseOptions: [],
//       },
//     ],
//   },
];