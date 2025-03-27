"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/footer-section.module.css"; // Importing CSS module
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";





export default function Footer()  {
  
const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {return null}; // Prevent UI flicker

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo & About Section */}
        <div className={styles.footerSection}>
          <Image src="https://theapexschool.in/Website/assets/img/Logo2.png" alt="Apex International School" width={100} height={100} className={styles.footerLogo} />
          <h3 className={styles.footerTitle}>Apex International School</h3>
          <p className={styles.footerText}>
            Providing quality and comprehensive education opportunities for all students in a safe and caring environment to achieve individual excellence.
          </p>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p><MapPin className={styles.footerIcon} /> Sr No 501/3, Near Prism City, Behind Tanish Orchid, Charholi BK 412105</p>
          <p><Mail className={styles.footerIcon} /> apexinternationalschool22@gmail.com</p>
          <p><Phone className={styles.footerIcon} /> 8625837474, 9763200020</p>
        </div>

        {/* Useful Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}> Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="#"><span className={styles.footerLink}><Twitter className={styles.footerIcon} /></span></Link></li>
            <li><Link href="#"><span className={styles.footerLink}><Facebook className={styles.footerIcon} /></span></Link></li>
            <li><Link href="#"><span className={styles.footerLink}><Instagram className={styles.footerIcon} /></span></Link></li>
            <li><Link href="#"><span className={styles.footerLink}><Linkedin className={styles.footerIcon} /> </span></Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} <strong>Apex International School</strong>. All Rights Reserved.</p>
        <p>Designed by <span className={styles.textHighlight}>SunRayz Technology</span></p>
      </div>
    </footer>
  );
};


