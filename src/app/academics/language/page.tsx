"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/conveyance.module.css"; // Importing the CSS module4
import Image from "next/image";

export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Update active link when the page loads
    setActiveLink("language");
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
          <span className="text-primary">Languages</span>
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
                href="#Progress And Promotion"
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
            <div className={styles.applyButtonContainer}>
             
            </div>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <h1>Languages</h1>
          </div>

          {/* Updated Paragraph */}
          <p>
            The Apex International School is an English Medium School. We follow
            three language patterns, which is imposed by the Government
            throughout India.
          </p>
         
          <p>
          The medium of instruction is English. Marathi
            being the state language, is a compulsory 3rd language up to class
            IX. 
          </p>
          <p>
          Additionally, we provide education in the German language to
          offer students a broader linguistic foundation.
          </p>
        

          {/* Image Section */}
          <div className={styles.imageSection}>
         

           <Image
  src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
  alt="Apex School Event"
  width={800} // Set appropriate width
  height={500} // Set appropriate height
  className={styles.image}
          />

            
          </div>

          {/* "Back to About Us" Button */}
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
