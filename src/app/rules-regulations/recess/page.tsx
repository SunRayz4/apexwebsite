'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/fees-section.module.css"; // Importing the CSS module

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link on page load
    setActiveLink("rulesForRecess");
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
          <span className="text-primary">Rules for Recess</span>
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
          <h1>Rules for Recess</h1>
          <ul className={styles.rulesList}>
            {[
              "Food and drinks should only be consumed during recess.",
              "While eating the food, students should display good table manners and not throw leftover food on the table or floor.",
              "Empty bottles and other litter must be cleared from the table and put into the rubbish bins. Five minutes prior to the end of recess, students should start moving to their classroom.",
              "Kindly ensure that you have sent a tiffin with your child only in the morning, and after that, no tiffin will be allowed to be delivered to the child later for health security reasons.",
              "Important Note: Please send a napkin daily with the tiffin.",
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
