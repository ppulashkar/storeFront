import KnowledgeActivation from "../assets/svg/Internal/KnowledgeActivation.png";
import LearningAndDevelopment from "../assets/svg/Internal/LearningAndDevelopment.png";
import WorkOrchestration from "../assets/svg/Internal/WorkOrchestration.png";
import RiskAndComplaince from "../assets/svg/Internal/RiskAndComplaince.png";
import RFPAssist from "../assets/svg/Internal/Knowledge Activation/RFPAssist.svg";
import SkillMapping from "../assets/svg/Internal/Learning & Development/SkillMapping.png";
import CVMapping from "../assets/svg/Internal/Work Orchestration/CVMapping.png";
import AuditTrailMonitoring from "../assets/svg/Internal/RiskComplaince/AuditTrailMonitoring.png";

export const DeloitteInternalUseCaseConstants = [
  {
    id: 1,
    name: "Knowledge Activation",
    icon: KnowledgeActivation,
    info: [
      {
        title: "RFP Assist",
        icon: RFPAssist,
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
    icon: LearningAndDevelopment,
    info: [
      // {
      //   title: "Skills Mapping",
      //   icon: SkillMapping,
      //   description:
      //     "AI-powered training recommendations based on employee profiles.",
      //   useCaseOptions: [
      //     { id: "2a", name: "Course Recommendation" },
      //     { id: "2b", name: "Gap Analysis" },
      //   ],
      // },
    ],
  },
  {
    id: 3,
    name: "Work Orchestration",
    icon: WorkOrchestration,
    info: [
      {
        title: "Smart CV Matching",
        icon: CVMapping,
        description:
          "Automate repetitive workflows and assign tasks based on skill match.",
        useCaseOptions: [
          {
            id: 4011,
            name: "CV Matching",
            link: "https://smartmatch-cv-ingenai0007.apps.inmumocpcl.atrapa.deloitte.com/",
            videoLink:
              "https://apcdeloitte.sharepoint.com/:v:/r/sites/AgenticAICoreteam/Shared%20Documents/Agentic%20AI/Use_Cases/_Agentic_AI_Office_Use_Cases/CV%20Matching/Final%20Demo%20Video%20v3.0.mp4?csf=1&web=1&e=Hd0agO",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/ERKWIIEgv6ZIu3P6JBWQ-ssBioyZYX5emZoxicpM472rHg?e=DkjYFg&wdLOR=cF189D71A-E3BA-437B-8421-3940A78F0FAC",
            poweredBy: "Salman Siddiqui",
            sponsoredBy: "Salman Siddiqui",
            agentType: "single",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Risk, Compliance & Governance",
    icon: RiskAndComplaince,
    info: [
      // {
      //   title: "Audit Trail Monitoring",
      //   icon: AuditTrailMonitoring,
      //   description:
      //     "Track, monitor and validate regulatory workflows automatically.",
      //   useCaseOptions: [
      //     { id: "4a", name: "RegTech Analysis" },
      //     { id: "4b", name: "Compliance Dashboard" },
      //   ],
      // },
    ],
  },
];
