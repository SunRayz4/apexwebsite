import React from 'react';
import '@/css/templatemo-leadership-event.css';  
import '@/css/bootstrap.min.css';
import '@/css/bootstrap-icons.css';
import Navbar from '@/components/navbar'; 
import Footer from '@/components/footer';  
import ContactU from '@/components/contactus';  

const Page = () => {
  return (
    <div>
      <Navbar /> 
      <ContactU /> 
      <Footer /> 
    </div>
  );
};

export default Page;
