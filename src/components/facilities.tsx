"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCalculator, FaSchool, FaEye, FaLock, FaChild } from "react-icons/fa";
import styles from "@/styles/facilities-section.module.css";

const programmeImages = [
  "/images/F1.jpg",
  "/images/F2.jpg",
  "/images/F3.jpg",
  "/images/F4.jpg",
  "/images/F5.jpg",
  "/images/F6.jpg",
  "/images/F7.jpg",
  "/images/F8.jpg",
  "/images/F9.jpg",
];

const Facilities = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 3) % programmeImages.length);
  };

  return (
    <>
      <section className={styles.container} id="section_3">
        <h2 className={styles.heading}>Our Facilities</h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaCalculator />
            </div>
            <h4>Abacus Vedic Maths</h4>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaSchool />
            </div>
            <h4>School App</h4>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaEye />
            </div>
            <h4>Awareness Programme</h4>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaLock />
            </div>
            <h4>CCTV Camera Access</h4>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaChild />
            </div>
            <h4>Child Counsellor</h4>
          </div>
        </div>
      </section>

      <section className={styles.programmesSection} id="section_4">
        <h2 className={styles.heading}>Our Programmes</h2>
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {programmeImages.slice(index, index + 3).map((img, i) => (
              <div key={i} className={styles.programmeCard}>
                <Image
                  unoptimized
                  src={img}
                  alt={`Programme ${index + i + 1}`}
                  width={400} // Adjust width based on your design
                  height={300} // Adjust height based on your design
                  className={styles.programmeImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Three dots below */}
        <div className={styles.dotsWrapper}>
          {Array.from({ length: Math.ceil(programmeImages.length / 3) }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`${styles.dot} ${index / 3 === dotIndex ? styles.active : ""}`}
            ></span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Facilities;
