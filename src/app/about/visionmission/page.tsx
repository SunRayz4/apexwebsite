import React from 'react';
import { FaBullseye, FaRocket } from 'react-icons/fa'; // Importing icons
import styles from '@/styles/visionmission.module.css'; // Assuming you have this file

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Vision & Mission</h1>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaBullseye size={40} color="#1D4ED8" />
            </div>
            <h2 className={styles.cardTitle}>Mission</h2>
            <p className={styles.cardText}>
              To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavors.
            </p>
            <p className={styles.cardText}>
              Inspire our children to be passionate lifelong learners through a curriculum with pedagogical integrity, which allows them to always inquire, innovate, and contribute in meaningful ways to society.
            </p>
          </div>

          {/* Vision Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FaRocket size={40} color="#1D4ED8" />
            </div>
            <h2 className={styles.cardTitle}>Vision</h2>
            <p className={styles.cardText}>
              Every student is a secure individual, a leader of self-worth, and a significant citizen. Apex International School aims to build a community of confident, global leaders with social conscience and national pride, committed to excellence and continuous learning.
            </p>
            <p className={styles.cardText}>
              Our vision is to be a school that provides a standard education, empowering students to meet their future with clarity, courage, compassion, and creativity.
            </p>
            <p className={styles.cardText}>
              Our highest endeavor is to develop free human beings who are able to impart purpose and direction to their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
