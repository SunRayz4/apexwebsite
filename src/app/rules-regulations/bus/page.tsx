'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/fees-section.module.css"; // Importing the CSS module

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link on page load
    setActiveLink("rulesForBus");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Breadcrumb */}
      <div className={`${styles.breadcrumb} animate-fadeInUp`}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">Rules & Regulations</Link>
          <span>/</span>
          <span className="text-primary">Rules For Bus</span>
        </div>
      </div>

      <div className={`${styles.content} animate-slideIn`}>
        {/* Sidebar */}
        <div className={`${styles.sidebar} animate-slideInLeft`}>
          <h3>Rules</h3>
          <ul>
            {[
              { name: "Rules for School", path: "/rules-regulations/school", key: "rulesForSchool" },
              { name: "Rules for Fees", path: "/rules-regulations/fees", key: "rulesForFees" },
              { name: "Rules for Bus", path: "/rules-regulations/bus", key: "rulesForBus" },
              { name: "Absenteeism", path: "/rules-regulations/absenteeism", key: "absenteeism" },
              { name: "Attendance", path: "/rules-regulations/attendance", key: "attendance" },
              { name: "Rules for Recess", path: "/rules-regulations/recess", key: "rulesForRecess" },
              { name: "Leaving Class and School", path: "/rules-regulations/leaving", key: "leavingClassAndSchool" },
              { name: "General Rules", path: "/rules-regulations/general", key: "generalRules" },
            ].map(({ name, path, key }) => (
              <li key={key}>
                <Link
                  href={path}
                  className={activeLink === key ? styles.active : ""}
                  onClick={() => setActiveLink(key)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="question-container">
  <h4 className="question-title">Have a question?</h4>
  <p className="question-text">Contact our admissions office for more information about our school.</p>
  <button className="contact-button">Contact Us</button>
</div>

        </div>

        {/* Main Content Section */}
        <div className={`${styles.rulesContainer} animate-fadeIn`}>
          <h1>Rules for Bus</h1>
          <ul className={styles.rulesList}>
            {[
              "The school provides bus service to the students of Apex School.",
              "Students transport contractor will board and alight only at fixed bus stops. Parents and children are requested not to ask the driver or attendant to stop the bus at unauthorized stops.",
              "Parents are not permitted to change the bus stop without prior permission.",
              "Children must be courteous and polite to the bus-in-charge. Children found misbehaving in the bus will not be allowed to continue availing the bus facility.",
              "In the event of the child not being at the stop at the school scheduled time, the bus will proceed without the child. It will be the responsibility of the parent/guardian to reach the child to school.",
              "The bus service provided by the school is an add-on facility. To the best of our ability, we will try to provide a good service and adhere to the timing.",
            ].map((rule, index) => (
              <li key={index} className="animate-fadeInUp">{rule}</li>
            ))}
          </ul>

          {/* "Back to Rules & Regulations" Button */}
          <div className={`${styles.buttonContainer} animate-zoomIn`}>
            <Link href="/rules-regulations">
              <span className={styles.button}>
                <span className={styles.icon}></span> {/* Left Arrow Icon */}
                Back to Rules & Regulations
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
