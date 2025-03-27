import React from 'react'
import styles from "@/styles/our-story-section.module.css";
import Link from "next/link";
import Image from "next/image";

function outStory() {
  return (
   <>
   
   <section className={`${styles.about} section-padding`} id="section_2">
        <div>
          <h2>Apex International School</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex align-items-center">
              <div className="text-content">
                <p>
                  To provide quality and comprehensive educational opportunities
                  for all students in a safe and caring environment to enable
                  students to achieve individual excellence, become productive
                  citizens, and be successful in their future endeavors.
                </p>
                <Link
                  href="#contact"
                  className={`${styles.customBtn} custom-border-btn btn custom-link mt-3 me-3`}
                >
                  Apply Now
                </Link>
                <Link
                  href="#section_4"
                  className={`${styles.customBtn} btn custom-link mt-3`}
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center">
              <Image
                src="https://theapexschool.in/Website/assets/img/slide/ApexBuilding.jpg"
                alt="Apex International School"
                width={400}
                height={400}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section> 

   </>
  )
}

export default outStory