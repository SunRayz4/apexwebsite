'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/conveyance.module.css"; // Importing the CSS module
import Image from "next/image";

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Update active link when the page loads
    setActiveLink("conveyance");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/academics">academics</Link>
          <span>/</span>
          <span className="text-primary">Conveyance</span>
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
                Yearly Planer
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
                href="#Progress And Promotion"
                className={activeLink === "progressAndPromotion" ? styles.active : ""}
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
                className={activeLink === "schoolAndExamDetail" ? styles.active : ""}
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
              <Link href="/location" className={activeLink === "location" ? styles.active : ""} onClick={() => setActiveLink("location")}>
                Location
              </Link>
            </li>
            <div className={styles.applyButtonContainer}>
            
            </div>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <h1>Conveyance</h1>
          </div>
          <p>
            Apex aims to provide quality and comprehensive educational opportunities for all students in a safe and caring environment...
          </p>
          <p>
            Students are encouraged to study and grow according to their capacities...
          </p>
          <p>
            The school has a campus covering about one acre of land. At the entrance, you will see a vast playground, to the right is the office...
          </p>
          <p>
            The school is equipped with a computer lab, science lab, dance hall, music hall, and English lab...
          </p>

          {/* Added Conveyance Criteria Section */}
          <div className={styles.conveyanceInfo}>
            <h2>Criteria for Bus Service</h2>
            <ul>
              <li>Availability of seats.</li>
              <li>First come first booking basis.</li>
              <li>Reporting time of student at the school (NUR & LKG / UKG upwards).</li>
              <li>Distance of residence from school.</li>
              <li>Current bus route.</li>
            </ul>
            
          </div>

          {/* Image Section with Reduced Height */}
          <div className={styles.imageSection}>
          <Image
  src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
  alt="Apex School Event"
  width={800} // Set appropriate width
  height={500} // Set appropriate height
  className={styles.image}
/>
          </div>

          {/* "Back to About Us" Button Below Image */}
          <div className={styles.buttonContainer}>
            <Link href="/about">
              <span className={styles.button}>
                <span className={styles.icon}></span> {/* Left Arrow Icon */}
                Back to About Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
