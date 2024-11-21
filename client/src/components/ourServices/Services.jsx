import "./services.scss";
import { motion } from "framer-motion";
import { div, p } from "framer-motion/client";
import { useState } from "react";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { TiArrowSortedUp } from "react-icons/ti";
import { fadeIn } from "../scrollReveal";

const Services = () => {
  const servicesData = [
    {
      title: "Digital Projects (AI Chatbot)",
      description:
        "We execute digital projects based on modern technologies such as artificial intelligence, UI/UX design, travel planning applications, and chatbots.",
      details: [
        {
          title: "For business",
          topics: [
            {
              title: "AI Chatbot",
            },
            {
              title: "Remote working tools",
            },
            {
              title: "Data analytics solutions",
            },
            {
              title: "CRM tools",
            },
          ],
        },
        {
          title: "For Government",
          topics: [
            {
              title: "E-Government Services",
            },
            {
              title: "Digital Identity Solutions",
            },
            {
              title: "Remote Learning Platforms",
            },
          ],
        },
      ],
    },
    {
      title: "Data Analytics & Visualizations ",
      description:
        "By collecting, analyzing, and visualizing your data, we provide valuable insights aimed at the development of your business.",
      details: [
        {
          title: "Tableau",
        },
        {
          title: "Power BI",
        },
        {
          title: "Excel",
        },
        {
          title: "R studio",
        },
        {
          title: "Python",
        },
        {
          title: "Qlik View",
        },
        {
          title: "Google data studio",
        },
      ],
    },
    {
      title: "Data Warehouse Construction ",
      description:
        "We build modern databases to store and manage data effectively.",
      details: [
        {
          title: "Data warehouse construction",
        },
        {
          title: "API integration",
        },
        {
          title: "Support services",
        },
      ],
    },
    {
      title: "Market Research Projects and Surveys",
      description:
        "We investigate market trends and customer behaviors for you through market research and surveys.",
      details: [
        {
          title: "Customer Satisfaction Surveys",
        },
        {
          title: "Product Feedback Surveys",
        },
        {
          title: "Market Segmentation Studies",
        },
        {
          title: "Brand Awareness Surveys",
        },
        {
          title: "Competitor Analysis",
        },
        {
          title: "Price Sensitivity Surveys",
        },
        {
          title: "New Product Development Studies",
        },
        {
          title: "Employee Satisfaction Surveys",
        },
        {
          title: "Trend Analysis Surveys",
        },
        {
          title: "Customer Journey Mapping",
        },
        {
          title: "Technology Adoption Surveys",
        },
      ],
    },
    {
      title: "Building Websites",
      description: "We create modern and functional websites for our clients.",
      details: [
        {
          title: "Websites",
        },
        {
          title: "CMS",
        },
        {
          title: "E-commerce platforms",
        },
        {
          title: "Web Design",
        },
      ],
    },
    {
      title: "Financial Valuations, Modelling ",
      description:
        "We help you better understand your business’s financial situation with financial assessments and models.",
      details: [
        {
          title: "Financial Modeling Software",
        },
        {
          title: "Valuation Services",
        },
        {
          title: "Financial Planning and Analysis (FP&A) Software",
        },
        {
          title: "Forecasting Tools",
        },
        {
          title: "Financial Modeling Platforms",
        },
        {
          title: "Risk management and analytics",
        },
        {
          title: "Financial Reporting software",
        },
        {
          title: "Financial data services",
        },
      ],
    },
    {
      title: "Trainings",
      description:
        "We help enhance the knowledge and skills of your employees with specialized training programs.",
      details: [
        {
          title: "Python",
        },
        {
          title: "Power BI (includes DAX and projects)",
        },
        {
          title: "Tableau (30 hours)",
        },
        {
          title: "Design thinking ",
        },
        {
          title: "Practical Scrum Workshop",
        },
        {
          title: "Agile for business Leaders",
        },
        {
          title: "Microsoft Excel, Word, Power Point",
        },
        {
          title: "Academic and general English language programs",
        },
      ],
    },
    {
      title: "Data Crawl",
      details: [
        {
          title: "Scrapy",
        },
        {
          title: "Selenium",
        },
        {
          title: "Beautiful Soup",
        },
        {
          title: "Octoparse",
        },
        {
          title: "Import.io",
        },
        {
          title: "Webharvy",
        },
        {
          title: "Apify",
        },
        {
          title: "ParseHub",
        },
        {
          title: "Diffbot",
        },
      ],
    },
  ];

  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="header"
      >
        <h1>
          Our <span>Services</span>
        </h1>
      </motion.div>
      <div className="basic-services">
        <div className="card-grid">
          {servicesData.map((service, index) => (
            <>
              <motion.div
                key={index}
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                onClick={() => handleCardClick(index)}
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "0px 30px 10px rgba(0,0,0, 0.5)",
                }}
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <motion.div layout="position">
                  <div className="title-arrow">
                    <div className="main-title">
                      <h2>{service.title}</h2>
                    </div>
                    <TiArrowSortedUp
                      className="service-arrow"
                      onClick={() => handleCardClick(index)}
                      style={{
                        transform:
                          openCardIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </div>
                  <div className="service-desc">
                    <p>{service.description}</p>
                  </div>
                </motion.div>
                {openCardIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="content"
                  >
                    {service.details.map((detail, idx) => (
                      <div key={idx}>
                        <ul className="list">
                          <li>{detail.title}</li>
                        </ul>
                        {detail.topics && (
                          <div className="topics">
                            <ul>
                              {detail.topics.map((topic, tIndex) => (
                                <li className="list" key={tIndex}>
                                  {topic.title}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
