'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/school-exam-details.module.css";

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink("schoolTiming");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">Academics</Link>
          <span>/</span>
          <span className="text-primary">School Details</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3>Academics</h3>
          <ul>
            <li className="font-medium">
              <Link
                href="https://theapexschool.in/Website/assets/pdf/1.%20APEX%20PRIMARY%20PLANNER%2023.pdf"
                className={activeLink === "yearlyPlaner" ? styles.active : ""}
                onClick={() => setActiveLink("yearlyPlaner")}
              >
                Yearly Planner
              </Link>
            </li>
            <li>
              <Link
                href="#curriculum"
                className={activeLink === "curriculum" ? styles.active : ""}
                onClick={() => setActiveLink("curriculum")}
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                href="#progressAndPromotion"
                className={
                  activeLink === "progressAndPromotion" ? styles.active : ""
                }
                onClick={() => setActiveLink("progressAndPromotion")}
              >
                Progress And Promotion
              </Link>
            </li>
            <li>
              <Link
                href="/academics/conveyance"
                className={activeLink === "conveyance" ? styles.active : ""}
                onClick={() => setActiveLink("conveyance")}
              >
                Conveyance
              </Link>
            </li>
            <li>
              <Link
                href="/academics/language"
                className={activeLink === "language" ? styles.active : ""}
                onClick={() => setActiveLink("language")}
              >
                Languages
              </Link>
            </li>
            <li>
              <Link
                href="/academics/school-and-exam-detail"
                className={
                  activeLink === "schoolAndExamDetail" ? styles.active : ""
                }
                onClick={() => setActiveLink("schoolAndExamDetail")}
              >
                School Hours and Exam Detail
              </Link>
            </li>
            <li>
              <Link
                href="#school-uniform"
                className={activeLink === "schoolUniform" ? styles.active : ""}
                onClick={() => setActiveLink("schoolUniform")}
              >
                School Uniform
              </Link>
            </li>
            <li>
              <Link
                href="/location"
                className={activeLink === "location" ? styles.active : ""}
                onClick={() => setActiveLink("location")}
              >
                Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <h2>School Timing</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>School Hour</th>
                <th>Timings</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nursery</td><td>9:00 AM to 1:00 PM</td></tr>
              <tr><td>Jr Kg</td><td>9:00 AM to 1:00 PM</td></tr>
              <tr><td>Sr Kg</td><td>9:00 AM to 1:00 PM</td></tr>
              <tr><td>Class-I</td><td>08:00 AM to 02:15 PM</td></tr>
              <tr><td>Class-II to V</td><td>08:00 AM to 02:15 PM</td></tr>
              <tr><td>Class-VI to VIII</td><td>08:00 AM to 02:15 PM</td></tr>
            </tbody>
          </table>

          <h2>Pre-primary Section - Exam Details</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Academic Terms</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1st Term</td><td>03-10-2023</td><td>12-10-2023</td></tr>
              <tr><td>Final Exam</td><td>04-03-2024</td><td>16-03-2024</td></tr>
            </tbody>
          </table>

          <h2>Primary Section - Exam Details</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Academic Terms</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1st Periodic Test</td><td>10-07-2023</td><td>15-07-2023</td></tr>
              <tr><td>1st Term</td><td>29-09-2023</td><td>12-10-2023</td></tr>
              <tr><td>2nd Periodic Test</td><td>01-12-2023</td><td>06-12-2023</td></tr>
              <tr><td>Final Exam</td><td>01-03-2024</td><td>16-03-2024</td></tr>
            </tbody>
          </table>

          {/* School Uniform Section */}
          <h2 id="school-uniform">School Uniform</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Classes</th>
                <th>Girls</th>
                <th>Boys</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nursery</td>
                <td>School Uniform, White hair band, and two ponytails for shoulder length hair</td>
                <td>School Uniform, Soldiers haircut</td>
              </tr>
              <tr>
                <td>Sr Kg and Jr. kg</td>
                <td>School Uniform, White hair band, and two ponytails for shoulder length hair</td>
                <td>School Uniform, Soldiers haircut</td>
              </tr>
              <tr>
                <td>Class I - VIII</td>
                <td>School Uniform, White hair band, and two ponytails for shoulder length hair</td>
                <td>School Uniform, Soldiers haircut</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttonContainer}>
            <Link href="/about">
              <span className={styles.button}>Back to About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
