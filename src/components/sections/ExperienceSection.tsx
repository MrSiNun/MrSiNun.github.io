import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";

type ExperienceItem = {
  title: string;
  org: string;
  date: string;
  location: string;
  summary?: string;
  bullets: string[];
  tools?: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Machine Learning & AI Systems Multi-Omics Integration Lead Researcher",
    org: "University of Liverpool",
    date: "December 2024 – Present",
    location: "Liverpool",
    summary:
      "Leading a pioneering biomedical AI project integrating multi-omics data and synthetic neonatal clinical datasets for neonatal jaundice risk prediction within the MSc in Data Science & AI programme.",
    bullets: [
      "Designed and implemented a full-stack machine learning pipeline tailored to healthcare data, including data ingestion, preprocessing, feature engineering, and model evaluation.",
      "Integrated multi-omics data with synthetic neonatal clinical records, creating a harmonized dataset for supervised learning and unsupervised discovery such as PCA and K-Means.",
      "Applied and fine-tuned Random Forest, XGBoost, and CNN models using cross-validation and SHAP for interpretability, achieving clinically relevant predictive performance.",
      "Built an interactive Streamlit application to support clinician-friendly deployment and visual exploration of prediction results.",
      "Collaborated with NHS Digital Health Units and the University of Liverpool School of Medicine to align outcomes with real-world clinical pathways.",
      "Utilized biomedical data platforms including PhysioNet to supplement and validate synthetic datasets in accordance with data governance and research ethics.",
      "Emphasized reproducibility and MLOps using GitHub for version control and modular Python and Jupyter codebases.",
    ],
    tools:
      "Python, Scikit-Learn, XGBoost, TensorFlow, Pandas, Streamlit, SHAP, PCA, GitHub, Jupyter, Synthea, NEST360, PhysioNet, Power BI.",
  },
  {
    title: "Data Scientist",
    org: "MGL Licensing",
    date: "February 2024 – June 2024",
    location: "Remote",
    bullets: [
      "Conducted customer segmentation using K-Means clustering on e-commerce transaction data, leading to personalized marketing strategies and a 20% increase in customer retention.",
      "Developed data visualization dashboards using Matplotlib and Seaborn to provide actionable insights to stakeholders and support real-time decision-making.",
      "Performed A/B testing to identify effective customer engagement strategies and improve marketing ROI.",
    ],
  },
  {
    title: "Data Scientist",
    org: "British Airways",
    date: "March 2024 – May 2024",
    location: "Remote",
    bullets: [
      "Worked on predictive analysis to forecast customer bookings based on features such as sales channel, trip type, route, and booking origin.",
      "Performed exploratory data analysis, feature engineering, and trained a Random Forest Classifier model.",
      "Developed a machine learning model to predict booking completion for British Airways customers.",
      "Conducted exploratory data analysis to identify patterns and trends in customer behaviour.",
      "Engineered features from existing data, including new origin and destination airport variables.",
      "Achieved 85% accuracy on the test set using the Random Forest Classifier.",
      "Presented findings and insights to stakeholders, contributing to data-driven decision-making.",
    ],
    tools:
      "Python, Pandas, Scikit-learn, Random Forest, Data Analysis, Data Visualization.",
  },
  {
    title: "Lead Sales & Operations Business Analyst (Consultant)",
    org: "Antal TECH jobs · Contract",
    date: "Aug 2022 – Apr 2023",
    location: "64 Baker Street, London · Hybrid",
    bullets: [
      "In charge of fully operating the niche job board including entire back-end and front-end development.",
      "Maximized website user experience and platform performance.",
      "Reported directly to the CFO of Antal International.",
      "Improved traffic and performance using Cyfe, Zoho CRM, Google Analytics, LinkedIn Analytics, Cognism, SEO, and UX optimization.",
      "Drove business growth, exposure, and momentum of the niche tech platform.",
      "Increased the number of clients by advertising vacancies and attracting candidates.",
      "Participated fortnightly in discipline calls with Antal teams across 35 countries to build collaborations.",
      "Created partnering company projects and nurtured various partnerships.",
      "Worked across marketing and IT to enhance and promote the site.",
      "Designed, created, and published tech news, career advice, cyber security, and fintech themed blogs.",
      "Managed the full sales cycle across India, UAE, Spain, and Romania, from lead gathering and cold calls to demos, subscription renewal, and client relationship management.",
      "Ran marketing campaigns to increase candidate registrations, job applications, client activity, and partner engagement through social content, promo codes, salary surveys, interviews, and job alert campaigns.",
    ],
    tools:
      "Cyfe, Zoho CRM, Google Analytics, LinkedIn Analytics, Cognism, SEO, UX Optimization, Sales Operations, Campaign Management, Digital Marketing.",
  },
  {
    title: "Business Intelligence Consultant",
    org: "SB Sales and Marketing Consultancy, London · Self-employed",
    date: "Apr 2019 – Mar 2022",
    location: "London Area, United Kingdom · Hybrid",
    bullets: [
      "Developed and implemented data-driven strategies to generate new business opportunities, leading to a 15% increase in sales revenue.",
      "Utilized Python for predictive modeling to optimize future business strategies and improve decision-making.",
      "Designed and maintained business intelligence solutions to analyze sales performance and market trends, empowering stakeholders with actionable insights.",
      "Leveraged advanced SQL queries to identify trends for strategic planning and optimize large-scale datasets for sales and marketing teams.",
      "Applied data-driven techniques to enhance customer segmentation, improve sales forecasting, and elevate overall campaign performance.",
      "Introduced sales enablement technology to drive a 30% increase in lead generation and boost lead conversion rates by 5%.",
      "Analyzed sales data to optimize the entire sales cycle, achieving a 50% closing rate and improving resource allocation.",
      "Coordinated data-driven logistics to ensure timely deliveries, contributing to a 45% increase in customer satisfaction.",
      "Presented value-driven insights to stakeholders, enhancing product positioning and driving customer engagement.",
      "Supported sales leadership in identifying new business opportunities through advanced data analytics, ensuring sustainable growth.",
    ],
    tools:
      "Python, SQL, Business Intelligence, Sales Analytics, Forecasting, Customer Segmentation, Marketing Intelligence, Digital Marketing, Stakeholder Reporting.",
  },
  {
    title: "Senior Sales Engineer & Data Analyst",
    org: "ANT KALIP M&G Group · Full-time",
    date: "Feb 2017 – Feb 2019",
    location: "Kocaeli, Türkiye · On-site",
    summary:
      "Combined customer-facing sales engineering with data analysis, technical sales support, operational reporting, and commercial coordination while leading export operations under the Sales Director’s supervision.",
    bullets: [
      "Led export operations and managed key accounts including Bosch Thermotechnik, Bosch Turkey, Vaillant Saunier Duval Iberica, Demirdöküm, Alarko Holding, E.C.A. Boilers, and BDR Thermea (Baymak).",
      "Supported sales and marketing for a newly launched stainless steel manufacturing project in a new production facility.",
      "Used SAP ERP, especially the Sales and Distribution module, together with Excel, SQL, and BI tools to analyze sales trends, track KPIs, improve forecasting, and optimize operational performance.",
      "Developed procurement optimization initiatives that reduced lead times and improved supply chain efficiency.",
      "Analyzed customer purchasing behavior, sales performance, and market trends to support customer acquisition, retention, pricing, distribution decisions, and strategic planning.",
      "Built new client relationships, handled enquiries, complaints, feedback, and purchasing processes, and evaluated new distribution opportunities.",
      "Created MIS reports, Power BI dashboards, and Excel-based performance reports to give stakeholders actionable insight into sales and operations.",
      "Participated in international HVAC exhibitions including ISH Frankfurt and Climate World Moscow, and attended key account meetings in Groningen, the Netherlands.",
      "Worked closely with logistics to improve stock delivery performance and supervised junior sales and marketing representatives.",
      "Reduced procurement processing time by 20%, increased sales efficiency by 15%, improved stock management accuracy by 30%, and increased customer retention by 10%.",
    ],
    tools:
      "SAP ERP (SD), Excel, SQL, Power BI, MIS Reporting, Sales Operations, Forecasting, Procurement Optimization, Customer Analytics, Export Operations.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-24 bg-bg-deep/40">
      <div className="container-narrow">
        <SectionHeader
          kicker="Experience"
          title="Work experience updated from LinkedIn profile content."
          intro="This section reflects the role titles, dates, locations, and responsibilities from the uploaded LinkedIn profile."
        />

        <div className="relative">
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--border-strong) 8%, var(--border-strong) 92%, transparent)",
            }}
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {EXPERIENCE.map((role, idx) => (
              <Reveal key={`${role.title}-${role.org}`} delay={idx * 100}>
                <li className="relative pl-12 md:pl-16">
                  <span
                    className="absolute left-2.5 md:left-4.5 top-7 h-4 w-4 rounded-full border-2 border-background"
                    style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                    aria-hidden="true"
                  />
                  <article className="glass-panel p-6 md:p-7 card-hover">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold leading-snug">{role.title}</h3>
                        <div className="mt-1 text-sm font-semibold text-gradient-brand">{role.org}</div>
                      </div>
                      <div className="shrink-0 text-xs text-muted-foreground md:text-right md:text-sm">
                        <div>{role.date}</div>
                        <div className="opacity-80">{role.location}</div>
                      </div>
                    </div>

                    {role.summary ? (
                      <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-[0.95rem] text-justify-pretty">
                        {role.summary}
                      </p>
                    ) : null}

                    <ul className="mt-4 space-y-2.5">
                      {role.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={`${role.title}-bullet-${bulletIndex}`}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {role.tools ? (
                      <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Key tools: </span>
                        {role.tools}
                      </div>
                    ) : null}
                  </article>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
