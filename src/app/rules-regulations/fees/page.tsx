'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/conveyance.module.css"; // Using the conveyance CSS module

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Update active link when the page loads
    setActiveLink("rulesForFees");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/rules-regulations">Rules & Regulations</Link>
          <span>/</span>
          <span className="text-primary">Rules for Fees</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3>Rules</h3>
          <ul>
            <li className={activeLink === "rulesForSchool" ? styles.active : ""}>
              <Link href="/rules-regulations/school" onClick={() => setActiveLink("rulesForSchool")}>
                Rules for School
              </Link>
            </li>
            <li className={activeLink === "rulesForFees" ? styles.active : ""}>
              <Link href="/rules-regulations/fees" onClick={() => setActiveLink("rulesForFees")}>
                Rules for Fees
              </Link>
            </li>
            <li className={activeLink === "rulesForBus" ? styles.active : ""}>
              <Link href="/rules-regulations/bus" onClick={() => setActiveLink("rulesForBus")}>
                Rules for Bus
              </Link>
            </li>
            <li className={activeLink === "absenteeism" ? styles.active : ""}>
              <Link href="/rules-regulations/absenteeism" onClick={() => setActiveLink("absenteeism")}>
                Absenteeism
              </Link>
            </li>
            <li className={activeLink === "attendance" ? styles.active : ""}>
              <Link href="/rules-regulations/attendance" onClick={() => setActiveLink("attendance")}>
                Attendance
              </Link>
            </li>
            <li className={activeLink === "leaving" ? styles.active : ""}>
              <Link href="/rules-regulations/leaving" onClick={() => setActiveLink("leaving")}>
                Leaving Class And School
              </Link>
            </li>
            <li className={activeLink === "recess" ? styles.active : ""}>
              <Link href="/rules-regulations/recess" onClick={() => setActiveLink("recess")}>
                Rules For Recess
              </Link>
            </li>
            <li className={activeLink === "general" ? styles.active : ""}>
              <Link href="/rules-regulations/general" onClick={() => setActiveLink("general")}>
                General
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <h1>Rules for Fees</h1>
          </div>
          <p>
            The school has set structured guidelines regarding fee payment to ensure smooth operations and fairness for all students.
          </p>
          
          {/* Fees Rules Section */}
          <div className={styles.conveyanceInfo}>
            <h2>Fee Payment Rules</h2>
            <ul>
              <li>School fees is charged for the complete academic year.</li>
              <li>Fees should be paid till the 10th of every month.</li>
              <li>Late charges of Rs. 50/- for the first day after the due date, then Rs. 5 per day.</li>
              <li>No leaving certificate will be issued until all dues are cleared.</li>
              <li>Notice of withdrawal must be given before March 30th.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <Image
              unoptimized
              width={600}
              height={400}
              src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
              alt="School Fees"
              className={styles.image}
            />
          </div>

          {/* Back Button */}
          <div className={styles.buttonContainer}>
            <Link href="/rules-regulations">
              <span className={styles.button}>Back to Rules & Regulations</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
