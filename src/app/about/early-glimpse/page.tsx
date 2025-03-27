// import Link from "next/link";
// import styles from "@/styles/early-glimpse.module.css"; // Importing the CSS module

// export default function EarlyGlimpsesPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       {/* Header */}
//       <div className={styles.header}>
//         <h1>Early Glimpses</h1>
//         <p className={styles.subtitle}>Discover the journey of learning and growth</p>
//       </div>

//       {/* Breadcrumb */}
//       <div className={styles.breadcrumb}>
//         <div className={styles.container}>
//           <Link href="/">Home</Link>
//           <span>/</span>
//           <Link href="/about">About Us</Link>
//           <span>/</span>
//           <span className="text-primary">Early Glimpses</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className={styles.content}>
        
//         {/* Sidebar */}
//         <div className={styles.sidebar}>
//           <h3>About Us</h3>
//           <ul>
//             <li className="font-medium"><Link href="/about/early-glimpse">Early Glimpses</Link></li>
//             <li><Link href="/about/visionmission">Mission and Vision</Link></li>
//             <li><Link href="#committee">Committee</Link></li>
//             <li><Link href="/infrastruccture">Infrastructure</Link></li>
//             <li><Link href="#facilities">Facilities</Link></li>
//             <li><Link href="#apex-team">Apex Team</Link></li>
//             <li><Link href="/location">Location</Link></li>
//             <div className={styles.applyButtonContainer}>
//         <Link href="/apply">
//           <span className={styles.applyButton}>Apply Now</span> {/* Using span instead of a tag */}
//         </Link>
//       </div>
//           </ul>
//         </div>

//         {/* Main Content Section */}
//         <div className={styles.mainContent}>
//           <p>
//             To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavors. With this purpose, management organized the school opening ceremony on 14 June 2022. Before this, the school was running via an online platform for a month. Within a year, Apex got a huge number of students who made Apex proud in different aspects of education and life.
//           </p>
//           <p>
//             We pride ourselves in offering an all-encompassing learning experience that molds our students into young adults who are achievers of the highest order in almost every field. In addition to unrivaled academic standards, we also encourage a healthy combination of sports and extra-curricular activities – providing a holistic education that prepares our students for life, as well as examinations.
//           </p>
//           <p>
//             The school has grown to effective staff members (Teachers, Ancillary, and Admin) who work hard with constant thought of students' betterment.
//           </p>

//           {/* Image Section */}
//           <div className={styles.imageSection}>
//             <img
//               src="https://theapexschool.in/Website/assets/img/blog-1.jpg" // Replace with the actual image path
//               alt="Apex School Event"
//               className={styles.image}
//             />
//           </div>

//           {/* "About Us" Button Below Image */}
//           <div className={styles.buttonContainer}>
//             <Link href="/about">
//               <span className={styles.button}>Back to About Us</span> {/* Using span instead of a tag */}
//             </Link>
//           </div>
//         </div>

//       </div>

//       {/* Apply Now Button after Sidebar */}
     
      
//     </div>
//   );
// }
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/early-glimpse.module.css"; // Importing the CSS module

export default function EarlyGlimpsesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className={styles.header}>
        <h1>Early Glimpses</h1>
        <p className={styles.subtitle}>Discover the journey of learning and growth</p>
      </div>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/about">About Us</Link>
          <span>/</span>
          <span className="text-primary">Early Glimpses</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <h3>About Us</h3>
          <ul>
            <li className="font-medium"><Link href="/about/early-glimpse">Early Glimpses</Link></li>
            <li><Link href="/about/visionmission">Mission and Vision</Link></li>
            <li><Link href="#committee">Committee</Link></li>
            <li><Link href="/about/infrastructure">Infrastructure</Link></li> {/* Fixed Link */}
            <li><Link href="#facilities">Facilities</Link></li>
            <li><Link href="#apex-team">Apex Team</Link></li>
            <li><Link href="/location">Location</Link></li>
            <div className={styles.applyButtonContainer}>
              <Link href="/apply">
                <span className={styles.applyButton}>Apply Now</span> {/* Using span instead of a tag */}
              </Link>
            </div>
          </ul>
        </div>

        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <p>
            To provide quality and comprehensive educational opportunities for all students in a safe and caring environment to enable students to achieve individual excellence, become productive citizens, and be successful in their future endeavors. With this purpose, management organized the school opening ceremony on 14 June 2022. Before this, the school was running via an online platform for a month. Within a year, Apex got a huge number of students who made Apex proud in different aspects of education and life.
          </p>
          <p>
            We pride ourselves in offering an all-encompassing learning experience that molds our students into young adults who are achievers of the highest order in almost every field. In addition to unrivaled academic standards, we also encourage a healthy combination of sports and extra-curricular activities – providing a holistic education that prepares our students for life, as well as examinations.
          </p>
          <p>
            The school has grown to effective staff members (Teachers, Ancillary, and Admin) who work hard with constant thought of students&apos; betterment. {/* Fixed Apostrophe */}
          </p>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <Image
              unoptimized
              width={600}
              height={400}
              src="https://theapexschool.in/Website/assets/img/blog-1.jpg"
              alt="Apex School Event"
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

      {/* Apply Now Button after Sidebar */}
    </div>
  );
}
