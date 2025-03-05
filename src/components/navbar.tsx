'use client';
import '../css/templatemo-leadership-event.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <Link href="/" className="navbar-brand custom-navbar-brand">
          <Image
            unoptimized
            width={50}
            height={50}
            
            src="https://apexpreschool.in/assets/img/Logo2.png"
            className="w-auto h-full rounded-circle"
            alt="logo"
          />
            <span className="brand-text custom-brand-text">Apex International School</span>
          </Link>

          <button 
            className="navbar-toggler custom-navbar-toggler" 
            type="button" 
            onClick={toggleMenu} 
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen ? "true" : "false"} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#section_1" className="nav-link custom-nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="#section_2" className="nav-link custom-nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="#section_3" className="nav-link custom-nav-link">Academics</Link>
              </li>
              <li className="nav-item">
                <Link href="#section_4" className="nav-link custom-nav-link">Admission</Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link custom-nav-link">Apex Gallery</Link>
              </li>
              <li className="nav-item">
                <Link href="" className="nav-link custom-nav-link">Career</Link>
              </li>
              <li className="nav-item">
                <Link href="#section_7" className="nav-link custom-nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 m-auto">
              <div className="hero-text">
                <h1 className="text-white mb-4"><u className="text-info">Welcome to <br /></u>Apex International School</h1>
                <a href="#section_2" className="custom-link bi-arrow-down arrow-icon"></a>
              </div>
            </div>
          </div>
        </div>

        <div className="image-wrap">
        <Image
            unoptimized
            width={1350}
            height={500}
            
            src="https://apexpreschool.in/assets/img/ApexBuilding.jpg"
            className="w-full "
            alt="logo"
          />
        </div>
      </section>
    </div>
  );
}

export default Navbar;
