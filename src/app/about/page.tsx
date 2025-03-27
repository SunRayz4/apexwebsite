import React from 'react';
import '@/css/templatemo-leadership-event.css';  
import '@/css/bootstrap.min.css';
import '@/css/bootstrap-icons.css';
import Navbar from '@/components/navbar'; 
import Footer from '@/components/footer';  
import Aboutus from '@/components/about';  

const Page = () => {
  return (
    <div>
      <Navbar /> 
      <Aboutus /> 
      <Footer /> 
    </div>
  );
};

export default Page;
