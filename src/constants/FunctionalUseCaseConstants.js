import FinTranform from "../assets/UseCaseFinTransform.png";
import HRTransform from "../assets/UseCaseHRTransform.png";
import Operate from "../assets/UserCircleGear.png";
import RisknAssure from "../assets/UseCaseRisknAssure.png";
import SalesnMarket from "../assets/UseCaseSalesnMarket.png";
import SupplyChain from "../assets/UseCaseSupplyChain.png";
import SalesPlanning from "../assets/svg/SalesMarketing/SalesPlanning.png";
import TradePromo from "../assets/svg/SalesMarketing/TradePromo.png";
import MarketingPlan from "../assets/svg/SalesMarketing/MarketingPlan.png";
import CampaignPerformance from "../assets/svg/SalesMarketing/CampaignPerformance.png";
import SalesAssistant from "../assets/svg/SalesMarketing/SalesAssistant.png";
import DashboardInsightGen from "../assets/svg/SalesMarketing/DashboardInsightGen.png";
import ProcureToPay from "../assets/svg/FinancialTransformation/P2P.png";
import OrderToCash from "../assets/svg/FinancialTransformation/OrderToCash.png";
import RecordToReport from "../assets/svg/FinancialTransformation/RecordToReport.png";
import Reconciliation from "../assets/svg/FinancialTransformation/Reconciliation.png";
import FinanceDocumentation from "../assets/svg/FinancialTransformation/FinanceDocumentation.png";
import SDLC from "../assets/svg/ImplementOperate/SDLC.png";
import ITSM from "../assets/svg/ImplementOperate/ITSM.png";
import AMSOperate from "../assets/svg/ImplementOperate/AMSOperate.png";
import AppDevelopment from "../assets/svg/ImplementOperate/AppDevelopment.png";
import HRRecruitment from "../assets/svg/HR/HRRecruitment.png";
import Productivity from "../assets/svg/HR/Productivity.png";
import SupplyChainLogistics from "../assets/svg/Supply/SupplyChain.png";
import Complaince from "../assets/svg/RiskAssure/Complaince.png";

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
            agentType: "multi",
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
              "https://apcdeloitte.sharepoint.com/sites/AgenticAICoreteam/_layouts/15/stream.aspx?id=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FAsset%5FDemo%5FVideos%2FAgenticAI%2FQuery%20Sense%20Demo%5Fv4%2E0%204%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E644ba142%2D9ece%2D4a03%2D907e%2D3fa01b56c1fa",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EXP05ZVokCxDvjr_GrJeNY8B3K3T8sEk8TnEa_Qh3bMDnw?e=3mUCPq&wdLOR=c60EB9354-8FF4-41C7-9028-B79057357BFA",
            poweredBy: "",
            sponsoredBy: "",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
            agentType: "single",
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
        title: "Sales Assistant",
        icon: SalesAssistant,
        description: `Automation of insights and recommendations from the data on the platform and to identify any mismatches/ missing data for QC`,
        useCaseOptions: [
          {
            id: 1051,
            name: "Qora",
            link: "",
            videoLink:
              "https://apcdeloitte.sharepoint.com/sites/AgenticAICoreteam/_layouts/15/stream.aspx?id=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FAsset%5FDemo%5FVideos%2FAgenticAI%2FQORA%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb93dd50b%2Dbeef%2D43f6%2Dbda1%2D9262c258c2e7",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/Ebp68PLDs_RHtlB9wSd6_V0BkCUZtXdRh5ifJk_EADb8Og?e=XaRkPW&wdLOR=cF21B332C-C617-4B46-A00A-B8144B77C698",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
            agentType: "single",
          },
        ],
      },
      {
        id: 106,
        title: "Dashboard & Insights Generation",
        icon: DashboardInsightGen,
        description: `Automation of insights and recommendations from the data on the platform and to identify any mismatches/ missing data for QC`,
        useCaseOptions: [
          {
            id: 1061,
            name: "Ibic",
            link: "",
            videoLink: "",
            workFlowLink: "",
            description: `Designing and implementing risk management frameworks,
                Risk appetite definition, Strategic, operational, and reputational risk assessments`,
            agentType: "single",
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
            link: "http://13.127.21.116:5001/logout",
            poweredBy: "Agentic CoE",
            sponsoredBy: "Pallav Chaturvedi",
            agentType: "multi",
            videoLink:
              "https://indeloitte-my.sharepoint.com/:v:/g/personal/sreeray_deloitte_com/EVHp2SVECG5MnOmz50OpYbYBcPtZfK7Fwi6liGdIgl3s_A?e=zspb82",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/ETcO-FcOHN9FgTLwCYwO_nMB1qXhQrQiq3yAKR2VXKpQUQ?e=2r6eja&wdLOR=cAEB708D1-FE48-41F0-B87E-441A1A93F786",
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
        title: "Finance Documentation",
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
              "https://apcdeloitte.sharepoint.com/:v:/s/DeloitteIndiaGenAICapabilityVideos/Ed8hZ7_FU31EvsBA3J2tzpIB_TxUwcXtnMnPOEwvPnQ51g?e=myQ2wn",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/DeloitteIndiaGenAICapabilityVideos/EfS4wAaoE7dAkiiCJYJY33ABm3Vh1ubXQgMLFhbYNssUPA?e=it0m2g",
            agentType: "single",
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
          // {
          //   id: 3011,
          //   name: "SDLC Toolkit",
          //   link: "https://agenticaifrontend-392853354701.us-central1.run.app",
          //   poweredBy: "Agentic CoE",
          //   sponsoredBy: "Vadiraj Muthya",
          //   videoLink:
          //     "https://indeloitte-my.sharepoint.com/personal/ssanjayamdekar_deloitte_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fssanjayamdekar%5Fdeloitte%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FBRD%20Generation%20%2D%20Made%20with%20Clipchamp%2027Jun2025%2Emp4&ct=1751443851481&or=Outlook%2DBody&cid=9095CC82%2D7877%2D410D%2D9AE6%2D9B485460D178&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8123f1a4%2Da28a%2D4536%2D9335%2D05bafb70c04f",
          //   workFlowLink:
          //     "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EZiswK9jCB9LsSygSuiCWRcB6lAUdl2Lk7HT5DP7oE09kQ?e=ZFYDcJ&wdLOR=cFDEE89EF-E858-4831-8D90-264AB562B033",
          // }
          {
            id: 3011,
            name: "Code Generation",
            link: "",
            poweredBy: "",
            sponsoredBy: "",
            videoLink: "",
            workFlowLink: "",
          },
          {
            id: 3012,
            name: "Testing",
            link: "",
            poweredBy: "",
            sponsoredBy: "",
            videoLink: "",
            workFlowLink: "",
          },
          {
            id: 3013,
            name: "BRD Generation",
            link: "https://agenticaifrontend-392853354701.us-central1.run.app/",
            poweredBy: "Agentic CoE",
            sponsoredBy: "Vadiraj Muthya",
            videoLink: "",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EZiswK9jCB9LsSygSuiCWRcB6lAUdl2Lk7HT5DP7oE09kQ?e=ZFYDcJ&wdLOR=cC0743E84-D567-4B38-BAC3-118F6EB2DB39",
            agentType: "multi",
          },
          {
            id: 3014,
            name: "Code Migration",
            link: "http://34.93.27.39:8080",
            poweredBy: "",
            sponsoredBy: "",
            videoLink: "",
            workFlowLink: "",
            agentType: "multi",
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
            name: "Recruitment",
            link: "",
            videoLink:
              "https://apcdeloitte.sharepoint.com/sites/AgenticAICoreteam/_layouts/15/stream.aspx?id=%2Fsites%2FAgenticAICoreteam%2FShared%20Documents%2FAgentic%20AI%2FAsset%5FDemo%5FVideos%2FAgenticAI%2FStorefront%2FRecruitment%5FVideo%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb0921ab5%2D8dcf%2D49be%2D81b4%2D643618f2e326",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EYuObaLzUb1GkExxxpKNl7QBoSYkFhS7Oag-I2yAmlDq3Q?e=KrbtIy&wdLOR=c744FC3B6-771B-44B5-9327-432FC271C2D2",
            agentType: "multi",
          },
          // {
          //   id: 4012,
          //   name: "",
          //   link: "",
          //   videoLink: "",
          //   workFlowLink: "",
          //   agentType: "multi",
          // },
        ],
      },
      {
        id: 402,
        title: "Workforce Productivity",
        icon: Productivity,
        description: ``,
        useCaseOptions: [
          {
            id: 4021,
            name: "Performance Management",
            agentType: "multi",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: SupplyChain,
    name: "Supply Chain & Logistics",
    info: [],
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
            videoLink:
              "https://indeloitte-my.sharepoint.com/:v:/g/personal/njohri_deloitte_com/ETOGyVl1HapFiXqAXg3LOiIBagEQdwUbta17oXIyjP6YAw?e=PeohXq",
            workFlowLink:
              "https://apcdeloitte.sharepoint.com/:p:/s/AgenticAICoreteam/EcruwqiUvXdNsXhLskVji40BClnp20KiHqXJbzyusFpXJw?e=yJC9Kx&wdLOR=c117D08CB-486E-4218-BB9D-B76B2012BB9E",
            agentType: "multi",
          },
        ],
      },
    ],
  },
];
