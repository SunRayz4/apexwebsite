// import Link from "next/link";
// import styles from "../styles/hero-section.module.css";

// const HeroSection = () => {
//   return (
//     <div className={styles.heroContainer}>
//       {/* Video Background */}
//       <div className={styles.videoWrap}>
//         <video autoPlay muted loop className={styles.videoBackground}>
//           <source src="/videos/bgvideo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Dark Overlay */}
//       <div className={styles.overlay}></div>

//       {/* Hero Content (ON TOP OF VIDEO) */}
    

//       <div className={styles.heroContent}>
//       <div className={styles.announcement}>
//   <span>Welcome to Apex International School</span>
// </div>
       
//         <p className={styles.description}>
//           Nurturing Excellence, Building Character, Inspiring Future Leaders
//         </p>

//         <div className={styles.infoWrapper}>
//           <span className={styles.dateText}>Established in 1995</span>
//           <span className={styles.locationText}>
//             Orchid Phase II Charholi BK 412105
//           </span>
//         </div>

//         <div className={styles.buttonWrapper}>
//           <Link href="/admissions" passHref>
//             <button className={styles.primaryButton}>Apply Now</button>
//           </Link>
//           <Link href="/programs" passHref>
//             <button className={styles.secondaryButton}>Explore Programs</button>
//           </Link>
//         </div>

//         <Link href="#section_2" passHref>
//           <div className={styles.arrowIcon}>↓</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/hero-section.module.css";

const messages = [
  "Welcome to Apex International School",
  "Admissions Open for 2025",
  "Enroll Now for a Bright Future",
  "World-Class Education for Your Child"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 5 seconds (slow effect)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      {/* Video Background */}
      <div className={styles.videoWrap}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Hero Content (ON TOP OF VIDEO) */}
      <div className={styles.heroContent}>
        {/* 🔥 Rotating Announcement */}
        <div className={styles.announcement}>
          <span key={index}>{messages[index]}</span>
        </div>
       
        <p className={styles.description}>
          Nurturing Excellence, Building Character, Inspiring Future Leaders
        </p>

        <div className={styles.infoWrapper}>
          <span className={styles.dateText}>Established in 1995</span>
          <span className={styles.locationText}>
            Orchid Phase II Charholi BK 412105
          </span>
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/admissions" passHref>
            <button className={styles.primaryButton}>Apply Now</button>
          </Link>
          <Link href="/programs" passHref>
            <button className={styles.secondaryButton}>Explore Programs</button>
          </Link>
        </div>

        {/* <Link href="#section_2" passHref>
          <div className={styles.arrowIcon}>↓</div>
        </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;
