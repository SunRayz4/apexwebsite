import '../css/bootstrap.min.css';
import '../css/bootstrap-icons.css';
import Home1 from '../components/Home'; 
import Navbar from '../components/navbar'; 
import Faci from '../components/facilities'; 
import Footer from '../components/footer'; // Import the Footer component
import Hero from '../components/hero';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import OurStory from '@/components/ourStory';
import "@/styles/global.css";
import Contactus from '@/components/contactus';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
   <OurStory/>
      <Faci />
      <Home1 />
      <Contactus/>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}
