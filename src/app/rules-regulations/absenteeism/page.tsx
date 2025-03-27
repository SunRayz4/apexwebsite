'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/fees-section.module.css"; // Importing the CSS module

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link on page load
    setActiveLink("absenteeism");
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
          <span className="text-primary">Absenteeism</span>
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
        </div>

        {/* Main Content Section */}
        <div className={`${styles.rulesContainer} animate-fadeIn`}>
          <h1>Absenteeism</h1>
          <ul className={styles.rulesList}>
            {[
              "Application for leave should be briefly entered on the record page of the calendar. Such application should be sent only for serious reasons.",
              "In case of illness or other unforeseen circumstances, a child returning to school even after one day of absence must have the reason certified on the 'Absence Record' page of the calendar by the parents.",
              "Any child who has been absent or who comes late to class will not be admitted to class without the Principal's signature.",
              "If a child is absent because of illness for more than a week, the Principal must be informed about it.",
              "Any child suffering from a contagious disease will not be allowed to attend school. A medical certificate must be produced on returning to school. Students suffering from an infectious disease must bring a fitness certificate from a registered doctor.",
              "Unnecessary long leaves for reasons such as marriages and extended vacations out of station will not be granted. No child is allowed to leave the school early except in very exceptional circumstances. The child will only be sent with the father or mother after getting permission from the Principal.",
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
