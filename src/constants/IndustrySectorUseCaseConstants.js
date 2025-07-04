import FinancialServices from "../assets/svg/Sectors/Financial Services.png"
import ConsumerRetailCPG from "../assets/svg/Sectors/Consumer Retail and CPG.png";
import LifeSciencesHealthcare from "../assets/svg/Sectors/Life Sciences and Healthcare.png";
import TelecomMediatech from "../assets/svg/Sectors/Telecom Media and tech.png";
import EnergyResourcesIndustrials from "../assets/svg/Sectors/Energy resources and industrials.png";
import Government from "../assets/svg/Sectors/Government.png";

import CAMUPDATE from "../assets/svg/Sectors/Financial Services/CAMUPDATE.png";
import VirtualShoppingAssistant from "../assets/svg/Sectors/Consumer Retail and CPG/VirtualShoppingAssistant.png";
import DoctorsPayout from "../assets/svg/Sectors/Life Sciences and Healthcare/DoctorsPayout.png";
import WarrantyManagement from "../assets/svg/Sectors/Energy resources and industrials/WarrantyManagement.png";
import CXOnboarding from "../assets/svg/Sectors/Telecom Media and tech/CXOnboarding.png"
import MediaCreationReg from "../assets/svg/Sectors/Telecom Media and tech/MediaCreationReg.png";
import MediaSalesOrders from "../assets/svg/Sectors/Telecom Media and tech/MediaSalesOrders.png";
export const IndustryUseCaseConstants = [
  {
    id: 1,
    icon: FinancialServices,
    name: "Financial Services",
    info: [
      {
        title: "CAM Update",
        icon: CAMUPDATE,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      /*  {
        title: "RM Enablement",
        icon: "",
        description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 2,
    name: "Consumer - Retail & CPG",
    icon: ConsumerRetailCPG,
    info: [
      {
        title: "Virtual assistant for shopping",
        icon: VirtualShoppingAssistant,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      /* {
        title: "Claim Processesing",
        icon: "",
        description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 3,
    icon: LifeSciencesHealthcare,
    name: "Life Sciences & Health Care",
    info: [
      {
        title: "Doctor’s payout ",
        icon: DoctorsPayout,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      /* {
        title: "Shift Planning",
        icon: "",
        description: `End-to-end internal audit services (outsourced or co-sourced), 
                Controls testing Assurance over internal processes, systems, and risk mitigation`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 4,
    icon: TelecomMediatech,
    name: "Telecom, Media & Technology",
    info: [
      {
        title: "Customer onboarding & credit vetting",
        icon: CXOnboarding,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      {
        title: "Media content ID creation & registration",
        icon: MediaCreationReg,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      {
        title: "Media Sales Order",
        icon: MediaSalesOrders,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
    ],
  },
  {
    id: 5,
    icon: EnergyResourcesIndustrials,
    name: "Energy Resources & Industrials",
    info: [
      {
        title: "Warranty Management ",
        icon: WarrantyManagement,
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      },
      /*  {
        title: "Warranty Processing",
        icon: "",
        description: `Designing and implementing risk management frameworks, 
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
        useCaseOptions: [],
      }, */
    ],
  },
  {
    id: 6,
    icon: Government,
    name: "Government",
    info: [
      // {
      //   title: "Citizen Grievence Management",
      //    icon: "",
      //   description: `Designing and implementing risk management frameworks,
      //           Risk appetite definition, Strategic, operational, and reputational risk assessments`,
      //   useCaseOptions: [],
      // },
    ],
  },
  //   {
  //     id: 7,
  //     icon: TelecomMedia,
  //     name: "Telcom,Media & Technology",
  //     info: [
  //       {
  //         title: "Advertisement Slots Planning",
  //          icon: "",
  //         description: `Designing and implementing risk management frameworks,
  //                 Risk appetite definition, Strategic, operational, and reputational risk assessments`,
  //         useCaseOptions: [],
  //       },
  //     ],
  //   },
];