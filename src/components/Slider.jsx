import imag1 from "../../public/pexels-eduardo199o9-178988127-17824889.jpg"
import { FaWhatsapp , FaPhone } from "react-icons/fa"
function Slider (){
    return(
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imag1}  className="d-block w-100" alt="..."/>
                  <div className="overlay">
                    <div className="title-overlay text-light ">
                      <h3>مرحبا بكم </h3>
                      <h1 className="mt-4 mb-4">سطحة الحمدانية لنقل السيارات</h1>
                      <h1><a href="tel:+0540049679" className="text-decoration-none text-warning"> 0540049679</a></h1>
                      <h4>رفيقك في نقل السيارات! نقدم خدمات فائقة الجودة لنقل السيارات المصدومة</h4>
                      <h4>والمعطلة بأحدث التقنيات. تمتع بتجربة فريدة مع فريقنا المحترف والمدرب الذي</h4>
                      <h4>يجمع بين الاحترافية والتكنولوجيا الحديثة.</h4>
                      <div className="mt-5 mb-3 "><button> <a href="https://wa.me/966540049679" className="text-decoration-none text-light"> تواصل معنا</a> <FaWhatsapp/></button></div>
                      <div><button><a href="tel:+966540049679" className="text-decoration-none text-light"> تواصل معنا</a> <FaPhone/></button></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </>
    )
}
export default Slider