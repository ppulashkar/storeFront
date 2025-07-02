import KnowledgeManagement from "../assets/svg/Internal/KnowledgeManagement.svg";
import LearningAndDevelopment from "../assets/svg/Internal/LearningAndDevelopment.svg";
import WorkOrchestration from "../assets/svg/Internal/WorkOrchestration.svg";
import RFPAssist from "../assets/svg/Internal/Knowledge Activation/RFPAssist.svg";
import RiskAndComplaince from "../assets/svg/Internal/RiskAndComplaince.svg";
import SkillMapping from "../assets/svg/Internal/Learning & Development/SkillMapping.svg";
import CVMapping from "../assets/svg/Internal/Work Orchestration/CVMapping.svg";
import AuditTrailMonitoring from "../assets/svg/Internal/RiskComplaince/AuditTrailMonitoring.svg";

export const DeloitteInternalUseCaseConstants = [
  {
    id: 1,
    name: "Knowledge Activation",
    icon: KnowledgeManagement,
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
      {
        title: "Skills Mapping",
        icon: SkillMapping,
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
    icon: WorkOrchestration,
    info: [
      {
        title: "CV Matching",
        icon: CVMapping,
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
    icon: RiskAndComplaince,
    info: [
      {
        title: "Audit Trail Monitoring",
        icon: AuditTrailMonitoring,
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
