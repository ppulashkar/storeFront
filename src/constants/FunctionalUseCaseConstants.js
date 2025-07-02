import FinTranform from "../assets/UseCaseFinTransform.svg";
import HRTransform from "../assets/UseCaseHRTransform.svg";
import Operate from "../assets/UserCircleGear.svg";
import RisknAssure from "../assets/UseCaseRisknAssure.svg";
import SalesnMarket from "../assets/UseCaseSalesnMarket.svg";
import SupplyChain from "../assets/UseCaseSupplyChain.svg";
import SalesPlanning from "../assets/svg/SalesMarketing/SalesPlanning.svg/";
import TradePromo from "../assets/svg/SalesMarketing/TradePromo.svg";
import MarketingPlan from "../assets/svg/SalesMarketing/MarketingPlan.svg";
import CampaignPerformance from "../assets/svg/SalesMarketing/CampaignPerformance.svg";
import SalesAssistant from "../assets/svg/SalesMarketing/SalesAssistant.svg";
import ProcureToPay from "../assets/svg/FinancialTransformation/P2P.svg";
import OrderToCash from "../assets/svg/FinancialTransformation/OrderToCash.svg";
import RecordToReport from "../assets/svg/FinancialTransformation/RecordToReport.svg";
import Reconciliation from "../assets/svg/FinancialTransformation/Reconciliation.svg";
import FinanceDocumentation from "../assets/svg/FinancialTransformation/FinanceDocumentation.svg";
import SDLC from "../assets/svg/ImplementOperate/SDLC.svg";
import ITSM from "../assets/svg/ImplementOperate/ITSM.svg";
import AMSOperate from "../assets/svg/ImplementOperate/AMSOperate.svg";
import AppDevelopment from "../assets/svg/ImplementOperate/AppDevelopment.svg";
import HRRecruitment from "../assets/svg/HR/HRRecruitment.svg";
import Productivity from "../assets/svg/HR/Productivity.svg";
import SupplyChainLogistics from "../assets/svg/Supply/SupplyChain.svg";
import Complaince from "../assets/svg/RiskAssure/Complaince.svg";

export const FunctionalUseCaseConstants = [
  {
    id: 1,
    icon: SalesnMarket,
    name: "Sales and Marketing",
    info: [
      {
        id: 101,
        title: "Sales Planning",
        icon: SalesPlanning,
        description: `A solution dedicated to streamlining the sales planning process by automating manual tasks like validation, audit, order creation, and KPI checks using a suite of intelligent agents.
Key components include a supervisor agent for coordination, summary agent for meeting notes and reminders, store management agent for inventory handling, and sales agent for sales operations and insights. 
This reduces errors, redundancies, and turnaround time caused by human intervention. It enhances operational efficiency, accelerates case resolution, and delivers a seamless cross-platform experience. `,
        useCaseOptions: [
          {
            id: 1011,
            name: "Sales Beat Planning",
            link: "https://test.salesforce.com/",
            videoLink:
              "https://apcdeloitte.sharepoint.com/:v:/s/AgenticAICoreteam/Eciuu3g6QVBMu1yvHXR3CDABTow1f08eRDDrw4L2BXqB-w?e=wOp3fe",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/sites/AgenticAICoreteam/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FUse%5FCases%2F%5FAgentic%5FAI%5FOffice%5FUse%5FCases%2FSales%20Planning%2FRetailSphere%20by%20Deloitte%2C%20on%20Salesforce%20Agentforce%2Epdf&parent=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FUse%5FCases%2F%5FAgentic%5FAI%5FOffice%5FUse%5FCases%2FSales%20Planning&p=true&ga=1",
            poweredBy: "Manu Singla",
            sponsoredBy: "Manu Singla",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
          },
          /*  {
            id: 1012,
            name: "Campaign Performance",
            link: "",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`
          }, */
        ],
      },
      {
        id: 102,
        title: "Trade Promo Optimizer",
        icon: TradePromo,
        description: ``,
        useCaseOptions: [],
      },
      {
        id: 103,
        title: "Marketing Plan",
        icon: MarketingPlan,
        description: ``,
        useCaseOptions: [
          {
            id: 1031,
            name: "Query Sense ",
            link: "",
            videoLink:
              "https://indeloitte-my.sharepoint.com/:v:/g/personal/kmalar_deloitte_com/ERbGTt8PVi5AoJDkQ0t1K2wBl5HfZxLRFuPuoj_39ep3bg?e=TwKmlI",
            workFlowLink:
              "https://indeloitte-my.sharepoint.com/:p:/g/personal/kmalar_deloitte_com/EcjRzGCxl25Nk5xfUB9SQnMBttXtWT04LKdgrnib9kgB5A?e=MgLAyu",
            poweredBy: "",
            sponsoredBy: "",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
          },
        ],
      },
      {
        id: 104,
        title: "Campaign Performance",
        icon: CampaignPerformance,
        description: `Automation of insights and recommendations from the data on the platform and to identify any mismatches/ missing data for QC`,
        useCaseOptions: [],
      },
      {
        id: 105,
        title: "Sales assistant",
        icon: SalesAssistant,
        description: `Automation of insights and recommendations from the data on the platform and to identify any mismatches/ missing data for QC`,
        useCaseOptions: [
          {
            id: 1051,
            name: "Qora",
            link: "",
            videoLink:
              "https://indeloitte-my.sharepoint.com/:v:/g/personal/kmalar_deloitte_com/EdcTSGPYhJ9GpPFF4TsM5_0B6uVwSzzcIQySJdZTRjqjww?e=AhjoV9",
            workFlowLink:
              "https://indeloitte-my.sharepoint.com/:p:/g/personal/kmalar_deloitte_com/EZBhIxTm095FnWUyo7Th02IBLeROXtQLP-_4WUxLxi19OA?e=mGLBQv",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: FinTranform,
    name: "Finance Transformation",
    info: [
      {
        id: 201,
        title: "Procure to Pay",
        icon: ProcureToPay,
        description: `The solution automates the manual and error-prone P2P process through intelligent agent-led workflows.
It uses OCR, invoice extraction, 3-way matching, validation, exception-handling agents (among others) to streamline vendor onboarding, invoice management, and payment processing. By minimizing human intervention, the tool significantly reduces effort, errors, and delays. 
It enables seamless, autonomous PTP process. The solution leads to significant reduction in man-hours and error elimination, enhancing overall procurement efficiency.`,
        useCaseOptions: [
          {
            id: 2011,
            name: "PR to PO",
          },
          {
            id: 2012,
            name: "Vendor Onboarding",
          },
          {
            id: 2013,
            name: "Invoice Processing",
            link: "http://13.127.21.116:5000/",
            poweredBy: "Agentic CoE",
            sponsoredBy: "Pallav Chaturvedi",
            videoLink:
              "https://indeloitte-my.sharepoint.com/personal/sreeray_deloitte_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsreeray%5Fdeloitte%5Fcom%2FDocuments%2FDesktop%2FAgentic%2FP2P%20Invoice%20Processing%20Demo%20Video%2Emp4&ct=1751286258942&or=Teams%2DHL&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E4562cde1%2D7e7e%2D422d%2Dad98%2D275dc1d630e2",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/ETcO-FcOHN9FgTLwCYwO_nMB1qXhQrQiq3yAKR2VXKpQUQ?e=2r6eja&wdLOR=cAE7C893A-D231-4D2E-9ECF-02F3CDB21B3E",
          },
          {
            id: 2014,
            name: "Payment Processing",
          },
        ],
      },
      {
        id: 202,
        title: "Order to Cash",
        icon: OrderToCash,
        description: ``,
        useCaseOptions: [],
      },
      {
        id: 203,
        title: "Record to Report",
        icon: RecordToReport,
        description: ``,
        useCaseOptions: [],
      },
      {
        id: 204,
        title: "Reconciliation",
        icon: Reconciliation,
        description: `Agentic solution to close deemed settlement transactions using fuzzy logic and getting additional information as needed`,
        useCaseOptions: [],
      },
      {
        id: 205,
        title: "Finance documentation",
        icon: FinanceDocumentation,
        description: `Agentic solution to close deemed settlement transactions using fuzzy logic and getting additional information as needed`,
        useCaseOptions: [
          {
            id: 2051,
            name: "Fin Agent",
            link: "",
            poweredBy: "",
            sponsoredBy: "",
            videoLink:
              "https://apcdeloitte.sharepoint.com/sites/AgenticAICoreteam/_layouts/15/stream.aspx?id=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FAsset%5FDemo%5FVideos%2FAgenticAI%2FFinAgent%20demo%20video%5F27thFeb%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E1751008a%2D9787%2D4a5b%2D9bb4%2D504187432016",
            workFlowLink: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: RisknAssure,
    name: "IT Implement & Operate",
    info: [
      {
        id: 301,
        title: "SDLC",
        icon: SDLC,
        description: `Agentic transformation of entire SDLC process by the use of multiple agents such as Requirement Gathering, Design, Code Generation, Testing, Deployment, Review & Governance. It offers persona based access to relevant workflows across different phases of SDLC`,
        useCaseOptions: [
          {
            id: 3014,
            name: "SDLC Toolkit",
            link: "https://agenticaifrontend-392853354701.us-central1.run.app",
            poweredBy: "Agentic CoE",
            sponsoredBy: "Vadiraj Muthya",
            videoLink:
              "https://indeloitte-my.sharepoint.com/personal/ssanjayamdekar_deloitte_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fssanjayamdekar%5Fdeloitte%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FBRD%20Generation%20%2D%20Made%20with%20Clipchamp%2027Jun2025%2Emp4&ct=1751443851481&or=Outlook%2DBody&cid=9095CC82%2D7877%2D410D%2D9AE6%2D9B485460D178&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8123f1a4%2Da28a%2D4536%2D9335%2D05bafb70c04f",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EZiswK9jCB9LsSygSuiCWRcB6lAUdl2Lk7HT5DP7oE09kQ?e=ZFYDcJ&wdLOR=cFDEE89EF-E858-4831-8D90-264AB562B033",
          },
        ],
      },
      {
        id: 302,
        title: "ITSM",
        icon: ITSM,
        description: ``,
        useCaseOptions: [],
      },
      {
        id: 303,
        title: "AMS Operate",
        icon: AMSOperate,
        description: `Application management services - Incident & service request management, Problem & change management, bug fixes, enhancements & improvements, Data operations & management`,
        useCaseOptions: [],
      },
      {
        id: 304,
        title: "App Development",
        icon: AppDevelopment,
        description: `Application management services - Incident & service request management, Problem & change management, bug fixes, enhancements & improvements, Data operations & management`,
        useCaseOptions: [],
      },
    ],
  },
  {
    id: 4,
    icon: HRTransform,
    name: "HR Transformation",
    info: [
      {
        id: 401,
        title: "HR Recruitment",
        icon: HRRecruitment,
        description: `Agentic tool which allows creation of chat window, custom forms and co-pilot for interactive user experience rather than building UI from scratch.
Low code tool allows easier integration & management of multiple technology solution`,
        useCaseOptions: [
          {
            id: 4011,
            name: "CV Matching",
            link: "https://smartmatch-cv-ingenai0007.apps.inmumocpcl.atrapa.deloitte.com/",
            poweredBy: "Salman Siddiqui",
            sponsoredBy: "Salman Siddiqui",
            videoLink:
              "https://apcdeloitte.sharepoint.com/:v:/r/sites/AgenticAICoreteam/Shared%20Documents/Agentic%20AI/Use_Cases/_Agentic_AI_Office_Use_Cases/CV%20Matching/Final%20Demo%20Video%20v3.0.mp4?csf=1&web=1&e=nD0U2K",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/ERKWIIEgv6ZIu3P6JBWQ-ssBioyZYX5emZoxicpM472rHg?e=DkjYFg&wdLOR=cC91D575B-26A1-4FA4-87DD-979AFD6E8A1E",
          },
          {
            id: 4012,
            name: "Recruitment",
            link: "",
            videoLink:
              "https://apcdeloitte.sharepoint.com/sites/AgenticAICoreteam/_layouts/15/stream.aspx?id=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FAsset%5FDemo%5FVideos%2FAgenticAI%2FStorefront%2FRecruitment%5FVideo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8c339664%2D7231%2D43ec%2Dba7f%2D4f1c4bd00d2c",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EYuObaLzUb1GkExxxpKNl7QBoSYkFhS7Oag-I2yAmlDq3Q?e=KrbtIy&wdLOR=c2270ABD2-0AEC-4ECF-BFBC-0196AB640E68",
          },
        ],
      },
      {
        id: 402,
        title: "Workforce Productivity & Management",
        icon: Productivity,
        description: ``,
        useCaseOptions: [
          {
            id: 4021,
            name: "Performance Management",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: SupplyChain,
    name: "Supply Chain & Logistics",
    info: [
      {
        id: 501,
        title: "Supply chain management",
        icon: SupplyChainLogistics,
        description: ``,
        useCaseOptions: [
          {
            id: 5021,
            name: "Demand forecasting & planning",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: Operate,
    name: "Risk Security & Controls",
    info: [
      {
        id: 601,
        title: "Compliance",
        icon: Complaince,
        description: `The solution automates the manual audit of IT system security controls by leveraging an agentic approach. The agent reads screenshots, extracts parameters, checks compliance against the CSI benchmark guide, and identifies reasons and remediations for non-compliance.
It then compiles the findings into a structured report format. This eliminates the need for repetitive manual reviews and enhances accuracy. 
The solution significantly reduces man-hours and boosts overall audit efficiency.`,
        useCaseOptions: [
          {
            id: 6011,
            name: "IT Systems Audit",
            link: "http://52.66.253.205:5173/login",
            poweredBy: "Agentic CoE",
            sponsoredBy: "Lakshmi Allamsetty",
            videoLink: "videoLink",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EcruwqiUvXdNsXhLskVji40BClnp20KiHqXJbzyusFpXJw?e=yJC9Kx&wdLOR=c117D08CB-486E-4218-BB9D-B76B2012BB9E",
          },
        ],
      },
    ],
  },
];
