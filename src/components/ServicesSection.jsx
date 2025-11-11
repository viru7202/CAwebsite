// import React from "react";
// import { FaFileInvoice, FaBuilding, FaTags, FaFileAlt, FaUniversity, FaUsers, FaBalanceScale } from "react-icons/fa";
// import { MdAccountBalance } from "react-icons/md";
// import "./ServicesSection.css";

// const services = [
//   {
//     icon: <FaFileInvoice />,
//     title: "ITR Filing",
//     description:
//       "ITR is a form in which an Assessee files information about income and tax payable to the Income Tax Department.",
//   },
//   {
//     icon: <FaBuilding />,
//     title: "ROC Filing",
//     description:
//       "Annual General Meeting of the company is conducted once a year and due date for the first Annual General Meeting.",
//   },
//   {
//     icon: <FaTags />,
//     title: "GST Return",
//     description:
//       "All businesses registered under GST must file their returns in the relevant GST form on time.",
//   },
//   {
//     icon: <FaFileAlt />,
//     title: "TDS Return",
//     description:
//       "TDS return is a quarterly statement to be given to the IT department. It’s compulsory to file it on time.",
//   },
//   {
//     icon: <MdAccountBalance />,
//     title: "GST Audit",
//     description:
//       "GST Audit involves examination of returns and other records which a taxable individual maintains.",
//   },
//   {
//     icon: <FaUniversity />,
//     title: "Bank Audit",
//     description:
//       "They handle a huge amount of deposits and savings, requiring close monitoring and review.",
//   },
//   {
//     icon: <FaUsers />,
//     title: "NGO Audit",
//     description:
//       "Non-profit organizations raise funds from members or contributors which require auditing.",
//   },
//   {
//     icon: <FaBalanceScale />,
//     title: "Tax Audit",
//     description:
//       "Covers various types of audits under different laws like statutory, stock, and cost audit.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="services-section">
//       <h2 className="section-title">Audit and Tax Management</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <div className="service-icon">{service.icon}</div>
//             <h3 className="service-title">{service.title}</h3>
//             <p className="service-desc">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React from "react";
import { FaFileInvoice, FaBuilding, FaTags, FaFileAlt, FaUniversity, FaUsers, FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
// import "./ServicesSection.css";

const services = [
  {
    icon: <FaFileInvoice />,
    title: "ITR Filing",
    description:
      "ITR is a form in which an Assessee files information about income and tax payable to the Income Tax Department.",
  },
  {
    icon: <FaBuilding />,
    title: "ROC Filing",
    description:
      "Annual General Meeting of the company is conducted once a year and due date for the first Annual General Meeting.",
  },
  {
    icon: <FaTags />,
    title: "GST Return",
    description:
      "All businesses registered under GST must file their returns in the relevant GST form on time.",
  },
  {
    icon: <FaFileAlt />,
    title: "TDS Return",
    description:
      "TDS return is a quarterly statement to be given to the IT department. It’s compulsory to file it on time.",
  },
  {
    icon: <MdAccountBalance />,
    title: "GST Audit",
    description:
      "GST Audit involves examination of returns and other records which a taxable individual maintains.",
  },
  {
    icon: <FaUniversity />,
    title: "Bank Audit",
    description:
      "They handle a huge amount of deposits and savings, requiring close monitoring and review.",
  },
  {
    icon: <FaUsers />,
    title: "NGO Audit",
    description:
      "Non-profit organizations raise funds from members or contributors which require auditing.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Tax Audit",
    description:
      "Covers various types of audits under different laws like statutory, stock, and cost audit.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="section-title">Audit and Tax Management</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
