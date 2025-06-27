import KnowledgeMangament from "../assets/KnowledgeManagement.svg";
import RiskProcess from "../assets/RiskProcess.svg";
import { DeloitteInternalData } from "../constants/DeloitteInternalConstants";


export const DeloitteInternalUseCaseConstants = [
  {
    id: 1,
    name: "Knowledge Activation",
    icon: KnowledgeMangament,
    info: [
      {
        title: "RFP Assist",
        description:
          "Enable intelligent search through documents, manuals, and past projects.",
        useCaseOptions: [
          // { id: "1a", name: "Smart Search" },
          // { id: "1b", name: "Document Summarization" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Learning & Development",
    icon: RiskProcess,
    info: [
      {
        title: "Skills Mapping",
        description:
          "AI-powered training recommendations based on employee profiles.",
        useCaseOptions: [
          { id: "2a", name: "Course Recommendation" },
          { id: "2b", name: "Gap Analysis" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Work Orchestration",
    icon: KnowledgeMangament,
    info: [
      {
        title: "CV Matching",
        description:
          "Automate repetitive workflows and assign tasks based on skill match.",
        useCaseOptions: [
          // { id: "3a", name: "Workflow Engine" },
          // { id: "3b", name: "Bot Orchestration" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Risk, Compliance & Governance",
    icon: RiskProcess,
    info: [
      {
        title: "Audit Trail Monitoring",
        description:
          "Track, monitor and validate regulatory workflows automatically.",
        useCaseOptions: [
          { id: "4a", name: "RegTech Analysis" },
          { id: "4b", name: "Compliance Dashboard" },
        ],
      },
    ],
  },
];
