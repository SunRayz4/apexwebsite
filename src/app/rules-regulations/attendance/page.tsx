'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/fees-section.module.css"; // Importing the CSS module

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link on page load
    setActiveLink("attendance");
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
          <span className="text-primary">Attendance</span>
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
          <h1>Attendance at School</h1>
          <ul className={styles.rulesList}>
            {[
              "Students must have 95% attendance for promotion.",
              "Students who report after two next class will return home from the gate and will be marked absent.",
              "For security reasons, no parcels/packages, food boxes, or projects will be handed over to students once gates are closed.",
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
