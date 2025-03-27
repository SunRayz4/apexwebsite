'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/general.module.css"; // Importing the CSS module

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link on page load
    setActiveLink("generalRules");
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
          <span className="text-primary">General Rules</span>
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
        

          {/* Accessories, Shoes, and Socks Section */}
          <h2>Accessories, Shoes, and Socks</h2>
          <ul className={styles.rulesList}>
            {[
              "No jewellery, coloured contact lenses or cosmetics are allowed.",
              "Girls may wear plain ear studs. Multiple earrings are not permitted.",
              "Only white hair bands, clips, and ribbons are permitted.",
              "Only black shoes are allowed. Socks must cover the ankles.",
            ].map((rule, index) => (
              <li key={index} className="animate-fadeInUp">{rule}</li>
            ))}
          </ul>

          {/* General Guidelines Section */}
          <h2>General Guidelines</h2>
          <ul className={styles.rulesList}>
            {[
              "Tattoos or body art of any sort is not allowed.",
              "Make-up of any type or long nails are not allowed in school.",
              "No nail polish should be applied.",
            ].map((rule, index) => (
              <li key={index} className="animate-fadeInUp">{rule}</li>
            ))}
          </ul>

          {/* Instructions for Usage of Diary Section */}
          <h2>Instructions for Usage of Diary</h2>
          <ul className={styles.rulesList}>
            {[
              "It is mandatory for the parent/guardian to check the child's diary.",
              "The diary should be used extensively to communicate with the teachers through the 'Parent Teacher Communication Record' page. (No phone calls will be entertained.)",
              "Your child should be encouraged to jot down the specific and important notices given in class. (Notices may be given either orally or written on the board or mobile application.)",
            ].map((rule, index) => (
              <li key={index} className="animate-fadeInUp">{rule}</li>
            ))}
          </ul>

          {/* Important Notice */}
         

          {/* Refund Policy Section */}
          <h2>Refund Policy</h2>
          <ul className={styles.rulesList}>
            {[
              "When the child leaves the school, the parent should give a 1-month withdrawal notice to the school.",
              "During this 1-month notice period, the child should attend the school and would have to pay the applicable fees in full.",
            ].map((rule, index) => (
              <li key={index} className="animate-fadeInUp">{rule}</li>
            ))}
          </ul>

          {/* Payment Responsibility Section */}
          <h2>Payment Responsibility</h2>
          <ul className={styles.rulesList}>
            {[
              "Kindly note that payment of school fees is the responsibility of parents/guardians.",
              "A courtesy reminder will be sent, but it should not be used as an excuse for not paying the fees due to non-receipt of the courtesy reminder.",
              "I agree to abide by the rules and regulations laid down by the school.",
            ].map((rule, index) => (
              <li key={index} className="animate-fadeInUp">{rule}</li>
            ))}
          </ul>
          <h2>Important</h2>
          <p className={styles.importantNotice}>
            When the parent enrolls the child in the school, it is expected that he/she has READ,
            UNDERSTOOD, and ACCEPTED all the terms and conditions mentioned in the school diary.
          </p>
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
