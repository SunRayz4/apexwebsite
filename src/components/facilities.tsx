import '../css/templatemo-leadership-event.css';
import Image from 'next/image';

const Facilities = () => {
  return (
    <section className="facilities section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center facility-heading">Our <u className="text-info">Facilities</u></h2>

            <div className="row">
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <Image
                
                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/skill module.jpg`}
                    className="card-img-top facility-image"
                    alt="Info Skills Module"
                    width={350} 
                    height={250} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Skills Modules</h5>
                    <p className="card-text">Our Information Skills Modules enhance students learning by focusing on digital literacy and critical thinking.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <Image
                 src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/learning program.jpg`}
                    className="card-img-top facility-image"
                    alt="Learning Program"
                    width={350}
                    height={250} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Learning Program</h5>
                    <p className="card-text">Our comprehensive learning programs are designed to cater to every student academic needs and promote holistic development.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <Image
            
                  src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/extra.jpg`}
                    className="card-img-top facility-image"
                    alt="Extracurricular Activities"
                    width={350} 
                    height={250} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Extracurricular Activities</h5>
                    <p className="card-text">We provide a wide range of extracurricular activities to help students develop their talents and interests beyond academics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <Image
                 
                  src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/childcare.jpg`}
                    className="card-img-top facility-image"
                    alt="Child Care"
                    width={350} 
                    height={250} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Child Care</h5>
                    <p className="card-text">We ensure that every child receives the attention and care they need, providing a nurturing and supportive environment.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <Image
                 
                   src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/education kit.jpg`}
                    className="card-img-top facility-image"
                    alt="Education Toolkit"
                    width={350} 
                    height={250} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">Education Toolkit</h5>
                    <p className="card-text">Our education toolkit is equipped with the necessary resources and tools to aid effective teaching and learning.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-4">
                <div className="card facility-card">
                  <Image

                  src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/facilities/indoorgame.jpg`}
                    className="card-img-top facility-image"
                    alt="Indoor Games"
                    width={350} // fixed width
                    height={250} // fixed height
                  />
                  <div className="card-body">
                    <h5 className="card-title">Indoor Games</h5>
                    <p className="card-text">We offer a variety of indoor games that promote physical activity and cognitive development in a safe environment.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
