import React from 'react';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        {/* Image on the left side */}
        <div className="col-md-5">
          <Image
            src="https://img.freepik.com/premium-photo/group-cheerful-kids-standing-circle_488220-7926.jpg?w=1060"
            alt="About Us"
            width={350} 
            height={250} 
            className="img-fluid rounded"
          />
        </div>

        {/* About Content on the right side */}
        <div className="col-md-6">
          <h1 className="fw-bold" >About Us</h1>
          <p className="lead text-dark" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
  Apex International School is a nurturing and progressive institution dedicated to providing
  a holistic education. Our focus is on fostering creativity, critical thinking, and a love for learning in our students.
  We believe in the importance of academic excellence, balanced with personal growth and emotional intelligence.
</p>
<p className="text-dark" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
  We offer a variety of extracurricular activities to ensure that students develop not only academically but also socially and emotionally. 
  Our dedicated faculty members are committed to supporting every student&apos;s growth and success.
</p>

        </div>
      </div>
    </div>
  );
};

export default Aboutus;
