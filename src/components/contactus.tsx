// "use client"

// import type React from "react"

// import { useState, useRef, useEffect } from "react"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import styles from "@/styles/contact-us-section.module.css"

// export default function ContactSection() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitMessage, setSubmitMessage] = useState("")
//   const sectionRef = useRef<HTMLElement>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setSubmitMessage("Thank you for your message! We will get back to you soon.")
//       setFormState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       })

//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setSubmitMessage("")
//       }, 5000)
//     }, 1500)
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.visible)
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     const section = sectionRef.current
//     if (section) {
//       observer.observe(section)
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section)
//       }
//     }
//   }, [])

//   return (
//     <section id="contact" className={styles.contactSection} ref={sectionRef}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Get In Touch</h2>
//         <p className={styles.subtitle}>Have questions or want to learn more about our programs? Reach out to us!</p>

//         <div className={styles.contactContent}>
//           <div className={styles.contactInfo}>
//             <div className={styles.infoItem}>
//               <Mail className={styles.infoIcon} />
//               <div>
//                 <h3 className={styles.infoTitle}>Email Us</h3>
              
//                 <p className={styles.infoText}>apexschoolcharholi@gmail.com</p>
//                 <p className={styles.infoText}>apexinternationalschool22@gmail.com</p>
//               </div>
//             </div>

          


//             <div className={styles.infoItem}>
//               <MapPin className={styles.infoIcon} />
//               <div>
//                 <h3 className={styles.infoTitle}>Location</h3>
//                 <p className={styles.infoText}>Sr No 501/3, Near Prism City,Behind Tanish Orchid Phase II Charholi BK</p>
//                 <p className={styles.infoText}>Pune - 412105</p>
//               </div>
             
//             </div>
            

//             <div className={styles.infoItem}>
//               <Phone className={styles.infoIcon} />
//               <div>
//                 <h3 className={styles.infoTitle}>Call Us</h3>
//                 <p className={styles.infoText}>+91 89567 88450 </p>
//                 <p className={styles.infoText}>+91 70660 64189</p>
//               </div>
//             </div>
//             <div className={styles.mapContainer}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.9514546830246!2d73.89686257496663!3d18.66481248245693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76405e6f861%3A0x494dec67d252d9b7!2sAPEX%20INTERNATIONAL%20SCHOOL!5e1!3m2!1sen!2sin!4v1742709987529!5m2!1sen!2sin"
//                 width="100%" 
//                 height="200" 
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>

//           <form className={styles.contactForm} onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <label htmlFor="name" className={styles.label}>
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formState.name}
//                 onChange={handleChange}
//                 required
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="sunrayztechnology4@gmail.com" className={styles.label}>
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formState.email}
//                 onChange={handleChange}
//                 required
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="subject" className={styles.label}>
//                 Subject
//               </label>
//               <select
//                 id="subject"
//                 name="subject"
//                 value={formState.subject}
//                 onChange={handleChange}
//                 required
//                 className={styles.select}
//               >
//                 <option value="">Select a subject</option>
//                 <option value="admission">Admission Inquiry</option>
//                 <option value="program">Program Information</option>
//                 <option value="visit">Schedule a Visit</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className={styles.formGroup}>
//               <label htmlFor="message" className={styles.label}>
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formState.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className={styles.textarea}
//               ></textarea>
//             </div>

//             <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//               <Send size={16} className={styles.submitIcon} />
//             </button>

//             {submitMessage && <div className={styles.formMessage}>{submitMessage}</div>}
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "@/styles/contact-us-section.module.css";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isClient, setIsClient] = useState(false); // For client-only rendering
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true); // Ensures Google Maps loads only on the client
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            }
          });
        },
        { threshold: 0.1 }
      );

      const section = sectionRef.current;
      if (section) observer.observe(section);

      return () => {
        if (section) observer.unobserve(section);
      };
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! We will get back to you soon.");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contactSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>Have questions or want to learn more about our programs? Reach out to us!</p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <Mail className={styles.infoIcon} />
              <div>
                <h3 className={styles.infoTitle}>Email Us</h3>
                <p className={styles.infoText}>apexschoolcharholi@gmail.com</p>
                <p className={styles.infoText}>apexinternationalschool22@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MapPin className={styles.infoIcon} />
              <div>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>Sr No 501/3, Near Prism City, Behind Tanish Orchid Phase II, Charholi BK</p>
                <p className={styles.infoText}>Pune - 412105</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Phone className={styles.infoIcon} />
              <div>
                <h3 className={styles.infoTitle}>Call Us</h3>
                <p className={styles.infoText}>+91 89567 88450</p>
                <p className={styles.infoText}>+91 70660 64189</p>
              </div>
            </div>

            {/* Conditionally render Google Maps to avoid SSR hydration issues */}
            {isClient && (
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.9514546830246!2d73.89686257496663!3d18.66481248245693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76405e6f861%3A0x494dec67d252d9b7!2sAPEX%20INTERNATIONAL%20SCHOOL!5e1!3m2!1sen!2sin!4v1742709987529!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name || ""}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email || ""}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formState.subject || ""}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select a subject</option>
                <option value="admission">Admission Inquiry</option>
                <option value="program">Program Information</option>
                <option value="visit">Schedule a Visit</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message || ""}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} className={styles.submitIcon} />
            </button>

            {submitMessage && <div className={styles.formMessage}>{submitMessage}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
