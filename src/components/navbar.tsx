"use client";
import styles from "@/styles/navbar-section.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest(`.${styles.dropdown}`)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.schoolHeader}>
        <div className={styles.schoolLogo}>
        <Image
  width={50}
  height={80}
  style={{ width: '50', height: '80' }}
  src="https://apexpreschool.in/assets/img/Logo2.png"
  alt="logo"
/>

         
        </div>

        {/* Menu Toggle Button for Mobile View */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`${styles.navContainer} ${isMenuOpen ? styles.show : ""}`}>
        <div className={`${styles.navMenu} ${isMenuOpen ? styles.show : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
            </li>

            {/* Dropdown Items */}
            {[
              { title: "MPD", key: "mandatoryDisclosure", links: [
                  { href: "/general-information", text: "General Information" },
                  { href: "/infrastructure", text: "School Infrastructure" },
                  { href: "/staff", text: "Staff (Teaching)" },
                  { href: "/document", text: "Documents and Information" },
                  { href: "/result", text: "Results And Academics" }
              ]},
              { title: "About Us", key: "aboutUs", links: [
                  { href: "/about/early-glimpse", text: "Early Glimpse" },
                  { href: "/about/visionmission", text: "Vision And Mission" },
                  { href: "/about/committee", text: "Committee" },
                  { href: "/about/infrastructure", text: "Infrastructure" },
                  { href: "/#section_3", text: "Facilities" },
                  { href: "#apex-team", text: "Apex Team" },
                  { href: "/#contact", text: "Location" }
              ]},
              { title: "Academics", key: "academics", links: [
                  { href: "https://theapexschool.in/Website/assets/pdf/1.%20APEX%20PRIMARY%20PLANNER%2023.pdf", text: "Yearly Planner" },
                  { href: "/curriculum", text: "Curriculum" },
                  { href: "/academics/language", text: "Language" },
                  { href: "/academics/conveyance", text: "Conveyance" },
                  { href: "/academics/school-and-exam-detail", text: "School Honors and Exam Detail" },
                  { href: "/academics/school-and-exam-detail#school-uniform", text: "School Uniform" }
              ]},
              { title: "Apex Gallery", key: "gallery", links: [
                { href: "#event", text: "Event" },
                { href: "#magazines", text: "Magazines" },
                { href: "#student", text: "Student Corner" },
                { href: "#acheivement", text: "Achievement" },
                { href: "#hierarchy", text: "Hierarchy" },
                { href: "#classmates", text: "Classmates" },
                { href: "#school-activities", text: "School Activities" }
              ]},
              { title: "Co-Curricular", key: "coCurricular", links: [
                { href: "#scouts", text: "Scouts" },
                { href: "#physical-education", text: "Physical Education" },
                { href: "#sports-activity", text: "Sports Activity" },
                { href: "#music", text: "Music" },
                { href: "#dance", text: "Dance" }
              ]},
              { title: "Rules & Regulations", key: "rules", links: [
                { href: "/rules-regulations/#", text: "Rules Of The School" },
                { href: "/rules-regulations/fees", text: "Rules for Fees" },
                { href: "/rules-regulations/bus", text: "Rules for Bus" },
                { href: "/rules-regulations/absenteeism", text: "Absenteeism" },
                { href: "/rules-regulations/attendance", text: "Attendance" },
                { href: "/rules-regulations/recess", text: "Rules Of Recess" },
                { href: "/rules-regulations/leaving", text: "Leaving Class And School" },
                { href: "/rules-regulations/general", text: "General" }
              ]}
            ].map(({ title, key, links }) => (
              <li key={key} className={`${styles.navItem} ${styles.dropdown}`}>
                <span className={styles.navLink} onClick={() => toggleDropdown(key)}>
                  {title} <FaAngleDown />
                </span>
                <ul className={`${styles.dropdownMenu} ${activeDropdown === key ? styles.show : ""}`}>
                  {links.map(({ href, text }) => (
                    <li key={href}>
                      <Link href={href} className={styles.dropdownItem} onClick={toggleMenu}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Other Links */}
            <li className={styles.navItem}>
              <Link href="/comprehensive" className={styles.navLink} onClick={toggleMenu}>Comprehensive Information</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/#contact" className={styles.navLink} onClick={toggleMenu}>Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/career" className={styles.navLink} onClick={toggleMenu}>Career</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login" className={styles.navLink} onClick={toggleMenu}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// // "use client";
// // import styles from "@/styles/navbar-section.module.css";
// // import Link from "next/link";
// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

// // export default function Navbar() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

// //   useEffect(() => {
// //     function handleClickOutside(event: MouseEvent) {
// //       if (!(event.target as HTMLElement).closest(`.${styles.dropdown}`)) {
// //         setActiveDropdown(null);
// //       }
// //     }
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   const toggleMenu = () => {
// //     setIsMenuOpen((prev) => !prev);
// //     setActiveDropdown(null);
// //   };

// //   const toggleDropdown = (dropdown: string) => {
// //     setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
// //   };

// //   return (
// //     <nav className={styles.navbar}>
// //       <div className={styles.navHeader}>
// //         {/* Logo */}
// //         <div className={styles.schoolLogo}>
// //           <Image width={50} height={80} src="https://apexpreschool.in/assets/img/Logo2.png" alt="logo" />
// //         </div>

// //         {/* Mobile Menu Toggle */}
// //         <button className={styles.menuToggle} onClick={toggleMenu}>
// //           {isMenuOpen ? <FaTimes /> : <FaBars />}
// //         </button>
// //       </div>

// //       {/* Main Navbar Links (Always Visible) */}
// //       <div className={styles.navContainer}>
// //         <ul className={styles.navList}>
// //           <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
// //           <li className={styles.navItem}><Link href="/about/early-glimpse" className={styles.navLink}>About Us</Link></li>
// //           <li className={styles.navItem}><Link href="/academics/language" className={styles.navLink}>Academics</Link></li>
// //           <li className={styles.navItem}><Link href="#gallery" className={styles.navLink}>Apex Gallery</Link></li>
// //           <li className={styles.navItem}><Link href="#co-curricular" className={styles.navLink}>Co-Curricular</Link></li>
// //           <li className={styles.navItem}><Link href="/rules-regulations" className={styles.navLink}>Rules & Regulations</Link></li>
// //           <li className={styles.navItem}><Link href="/#contact" className={styles.navLink}>Contact</Link></li>
// //           <li className={styles.navItem}><Link href="/career" className={styles.navLink}>Career</Link></li>
// //           <li className={styles.navItem}><Link href="/login" className={styles.navLink}>Login</Link></li>
// //         </ul>
// //       </div>

// //       {/* Full Menu (Mobile Only) */}
// //       <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.show : ""}`}>
// //         <ul className={styles.mobileNavList}>
// //           {/* Dropdown Menus (Hidden by Default in Desktop) */}
// //           {[
// //             { title: "MPD", key: "mandatoryDisclosure", links: [
// //                 { href: "/general-information", text: "General Information" },
// //                 { href: "/infrastructure", text: "School Infrastructure" },
// //                 { href: "/staff", text: "Staff (Teaching)" },
// //                 { href: "/document", text: "Documents and Information" },
// //                 { href: "/result", text: "Results And Academics" }
// //             ]},
// //             { title: "About Us", key: "aboutUs", links: [
// //                 { href: "/about/early-glimpse", text: "Early Glimpse" },
// //                 { href: "/about/visionmission", text: "Vision And Mission" },
// //                 { href: "/about/committee", text: "Committee" },
// //                 { href: "/about/infrastructure", text: "Infrastructure" },
// //                 { href: "/#section_3", text: "Facilities" },
// //                 { href: "#apex-team", text: "Apex Team" },
// //                 { href: "/#contact", text: "Location" }
// //             ]}
// //           ].map(({ title, key, links }) => (
// //             <li key={key} className={styles.mobileDropdown}>
// //               <span className={styles.mobileNavLink} onClick={() => toggleDropdown(key)}>
// //                 {title} <FaAngleDown />
// //               </span>
// //               <ul className={`${styles.mobileDropdownMenu} ${activeDropdown === key ? styles.show : ""}`}>
// //                 {links.map(({ href, text }) => (
// //                   <li key={href}>
// //                     <Link href={href} className={styles.mobileDropdownItem} onClick={toggleMenu}>{text}</Link>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }
// "use client";
// import styles from "@/styles/navbar-section.module.css";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (!(event.target as HTMLElement).closest(`.${styles.dropdown}`)) {
//         setActiveDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//     setActiveDropdown(null);
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.schoolHeader}>
//         <div className={styles.schoolLogo}>
//           <Image width={50} height={80} src="https://apexpreschool.in/assets/img/Logo2.png" alt="logo" />
//         </div>

//         {/* Menu Toggle Button - Always Visible */}
//         <button className={styles.menuToggle} onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       <div className={`${styles.navContainer} ${isMenuOpen ? styles.show : ""}`}>
//         <div className={`${styles.navMenu} ${isMenuOpen ? styles.show : ""}`}>
//           <ul className={styles.navList}>
//             <li className={styles.navItem}>
//               <Link href="/" className={styles.navLink} onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>

//             {/* Dropdown Menus */}
//             {[
//               { title: "MPD", key: "mpd", links: [
//                   { href: "/general-information", text: "General Information" },
//                   { href: "/infrastructure", text: "School Infrastructure" },
//                   { href: "/staff", text: "Staff (Teaching)" },
//                   { href: "/document", text: "Documents and Information" },
//                   { href: "/result", text: "Results And Academics" }
//               ]},
//               { title: "About Us", key: "aboutUs", links: [
//                   { href: "/about/early-glimpse", text: "Early Glimpse" },
//                   { href: "/about/visionmission", text: "Vision And Mission" },
//                   { href: "/about/committee", text: "Committee" },
//                   { href: "/about/infrastructure", text: "Infrastructure" },
//                   { href: "/#section_3", text: "Facilities" },
//                   { href: "#apex-team", text: "Apex Team" },
//                   { href: "/#contact", text: "Location" }
//               ]},
//               { title: "Academics", key: "academics", links: [
//                   { href: "/curriculum", text: "Curriculum" },
//                   { href: "/academics/language", text: "Language" },
//                   { href: "/academics/conveyance", text: "Conveyance" },
//                   { href: "/academics/school-and-exam-detail", text: "Exam Details" },
//                   { href: "/academics/school-uniform", text: "School Uniform" }
//               ]},
//               { title: "Gallery", key: "gallery", links: [
//                   { href: "/events", text: "Events" },
//                   { href: "/magazines", text: "Magazines" },
//                   { href: "/students", text: "Student Corner" },
//                   { href: "/achievements", text: "Achievements" }
//               ]},
//               { title: "Rules & Regulations", key: "rules", links: [
//                   { href: "/rules/general", text: "General Rules" },
//                   { href: "/rules/fees", text: "Fee Structure" },
//                   { href: "/rules/bus", text: "Bus Rules" },
//                   { href: "/rules/attendance", text: "Attendance Policy" }
//               ]}
//             ].map(({ title, key, links }) => (
//               <li key={key} className={`${styles.navItem} ${styles.dropdown}`}>
//                 <span className={styles.navLink} onClick={() => toggleDropdown(key)}>
//                   {title} <FaAngleDown />
//                 </span>
//                 <ul className={`${styles.dropdownMenu} ${activeDropdown === key ? styles.show : ""}`}>
//                   {links.map(({ href, text }) => (
//                     <li key={href}>
//                       <Link href={href} className={styles.dropdownItem} onClick={toggleMenu}>{text}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}

//             <li className={styles.navItem}>
//               <Link href="/contact" className={styles.navLink} onClick={toggleMenu}>
//                 Contact
//               </Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link href="/login" className={styles.navLink} onClick={toggleMenu}>
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
