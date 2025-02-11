import imagCard1 from "../../public/pexels-shuaizhi-tian-485596-28654244.jpg"
import imagCard2 from "../../public/WhatsApp Image 2025-02-04 at 5.08.53 PM.jpeg"
import imagCard3 from "../../public/WhatsApp Image 2025-02-04 at 5.08.54 PM (1).jpeg"
import imagCard4 from "../../public/WhatsApp Image 2025-02-04 at 5.08.54 PM.jpeg"
import imagCard5 from "../../public/WhatsApp Image 2025-02-04 at 5.08.55 PM (1).jpeg"
import imagCard6 from "../../public/WhatsApp Image 2025-02-04 at 5.08.56 PM (1).jpeg"
import {useEffect  } from "react"     
import AOS from "aos"
import 'aos/dist/aos.css'
const CarServices = () => {
  // Animation  AOS
      useEffect(()=>{
          AOS.init({
              duration: 2000,
              offset : 200,
              easing : "ease-in-out",
              mirror : true,
              once: false
          })
      },[])
  return (
    <>
    <div className="container mt-5">
          <div className="row">
            <div data-aos = "fade-up-right" className="services col-lg-4 ">
                <img className="img-fluid" src={imagCard1} alt="" />
                <div className="card-body bg-dark pt-3">
                  <h5 className="card-title text-center text-light pb-3">سحب السيارات من الجمارك</h5>
                  <p className="card-text text-center text-light">خدمات النقل السريعة والفعّالة للسيارات القادمة من الجمارك إلى</p>
                  <p className="card-text text-center text-light">الأماكن المطلوبة، مع الالتزام بالقوانين والتشريعات.</p>
                  <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966540049679" className="text-decoration-none text-dark"> اتصل بنا </a></button>
                </div>
            </div>

            <div data-aos = "fade-up" className="services col-lg-4 ">
                <img className="img-fluid" src={imagCard2} alt="" />
                <div className="card-body bg-dark pt-3">
                  <h5 className="card-title text-center text-light pb-3">نقل بين المدن والأحياء</h5>
                  <p className="card-text text-center text-light">نحن هنا لتوفير حلاً موثوقًا لنقل سيارتك بأمان من مكان لآخر،</p>
                  <p className="card-text text-center text-light mb-3">سواء كان ذلك بين المدن أو داخل الأحياء.</p>
                  <button className="btn btn-warning me-3 mb-3"><a href="https://wa.me/966540049679" className="text-decoration-none text-dark"> اتصل بنا </a></button>
                </div>
            </div>

            <div data-aos = "fade-up-left" className="services col-lg-4 ">
                <img className="img-fluid" src={imagCard3} alt="" />
                <div className="card-body bg-dark pt-3">
                  <h5 className="card-title text-center text-light pb-3">نقل سيارات مصدومة ومعطلة</h5>
                  <p className="card-text text-center text-light mb-4">  تقديم خدمات النقل المحترفة للسيارات التي تعاني من أعطال أو تضررات.</p>
                  <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966540049679" className="text-decoration-none text-dark"> اتصل بنا </a></button>
                </div>
            </div>
          </div>
      </div>

        <div className="container mt-5">
        <div className="row">
          <div data-aos = "fade-up-right" className="services col-lg-4 ">
              <img className="img-fluid" src={imagCard4} alt="" />
              <div className="card-body bg-dark pt-3">
                <h5 className="card-title text-center text-light pb-3">سحب السيارات من الجمارك</h5>
                <p className="card-text text-center text-light">خدمات النقل السريعة والفعّالة للسيارات القادمة من الجمارك إلى</p>
                <p className="card-text text-center text-light">الأماكن المطلوبة، مع الالتزام بالقوانين والتشريعات.</p>
                <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966540049679" className="text-decoration-none text-dark"> اتصل بنا </a> </button>
              </div>
          </div>

          <div data-aos = "fade-up" className="services col-lg-4 ">
              <img className="img-fluid" src={imagCard5} alt="" />
              <div className="card-body bg-dark pt-3">
                <h5 className="card-title text-center text-light pb-3">نقل بين المدن والأحياء</h5>
                <p className="card-text text-center text-light">نحن هنا لتوفير حلاً موثوقًا لنقل سيارتك بأمان من مكان لآخر،</p>
                <p className="card-text text-center text-light mb-3">سواء كان ذلك بين المدن أو داخل الأحياء.</p>
                <button className="btn btn-warning me-3 mb-3"> <a href="https://wa.me/966540049679" className="text-decoration-none text-dark"> اتصل بنا </a></button>
              </div>
          </div>

          <div data-aos = "fade-up-left" className="services col-lg-4 ">
              <img className="img-fluid" src={imagCard6} alt="" />
              <div className="card-body bg-dark pt-3">
                <h5 className="card-title text-center text-light pb-3">نقل سيارات مصدومة ومعطلة</h5>
                <p className="card-text text-center text-light mb-4">  تقديم خدمات النقل المحترفة للسيارات التي تعاني من أعطال أو تضررات.</p>
                <button className="btn btn-warning me-3 mb-3"><a href="https://wa.me/966540049679" className="text-decoration-none text-dark"> اتصل بنا </a></button>
              </div>
          </div>
        </div>
        </div>
</>
  );
  }
  export default CarServices