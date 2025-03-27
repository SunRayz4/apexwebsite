"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/infrastructure.module.css"; // Importing the CSS module

export default function Infrastructure() {
  const pathname = usePathname(); // Get current path
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link based on pathname
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/about">About Us</Link>
          <span>/</span>
          <span className="text-primary">Infrastructure</span>
        </div>
      </div>

      <div className={styles.content}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3>About Us</h3>
          <ul>
            <li className={activeLink === "/about/early-glimpse" ? styles.active : ""}>
              <Link href="/about/early-glimpse">Early Glimpses</Link>
            </li>
            <li className={activeLink === "/about/visionmission" ? styles.active : ""}>
              <Link href="/about/visionmission">Mission and Vision</Link>
            </li>
            <li className={activeLink === "#committee" ? styles.active : ""}>
              <Link href="#committee">Committee</Link>
            </li>
            <li className={activeLink === "/about/infrastructure" ? styles.active : ""}>
              <Link href="/about/infrastructure">Infrastructure</Link> {/* Fixed Active Link */}
            </li>
            <li className={activeLink === "#facilities" ? styles.active : ""}>
              <Link href="#facilities">Facilities</Link>
            </li>
            <li className={activeLink === "#apex-team" ? styles.active : ""}>
              <Link href="#apex-team">Apex Team</Link>
            </li>
            <li className={activeLink === "/location" ? styles.active : ""}>
              <Link href="/location">Location</Link>
            </li>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <h1>Infrastructure</h1>
          <p>
            Apex aims to provide quality and comprehensive educational opportunities for all students in a safe and caring environment. This enables students to achieve individual excellence, become productive citizens, and be successful in their future endeavors.
          </p>
          <p>
            To help students grow at their own pace, Apex consistently pushes them toward a brighter future. Our school’s infrastructure is designed to create a comfortable and inspiring learning environment. We have made sure to provide every facility needed for a fulfilling educational journey. Our state-of-the-art infrastructure and facilities make Apex International School a highlight in the region.
          </p>
          <p>
            The school campus covers approximately one acre of land. At the entrance, a vast playground welcomes visitors. To the right is the administrative office for student-related official work, while the left side features a parking area. Our school boasts a massive playground for various sports, followed by a grand school building. The ground floor houses an energetic pre-primary section, while each floor contains seven well-ventilated digital classrooms, activity rooms, and laboratories.
          </p>
          <p>
            The school also features a modern computer lab, science lab, dance hall, music hall, and a dedicated English lab, ensuring a holistic educational experience for all students.
          </p>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <Image
              unoptimized
              width={600}
              height={400}
              src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
              alt="Apex School Campus"
              className={styles.image}
            />
          </div>

          {/* "Back to About Us" Button */}
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
