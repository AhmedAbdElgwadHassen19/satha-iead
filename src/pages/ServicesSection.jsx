import { Container, Row, Col } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ServicesSection = () => {
  const position = [21.7700709, 39.1796996]; // إحداثيات الموقع (الرياض كمثال)
  const mapLink = "https://www.google.com/maps?q=21.7700709,39.1796996";

  // ستايل للروابط
  const linkStyle = {
    color: "#007bff", // لون الرابط
    textDecoration: "none", // إزالة الخط الافتراضي
    transition: "color 0.3s ease", // تأثير تغيير اللون
    cursor: "pointer", // تغيير شكل المؤشر عند التحويم
  };

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* قسم النص */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            خدماتنا على مدار اليوم
          </h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
            مع سطحة الحمدانية نقل السيارات المصطدمة والمعطلة، نحن دائمًا في خدمتك لنقل سيارتك بكل احترافية وسرعة.
          </p>
          <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
            تتميز خدمتنا بالدقة والأمان لضمان تجربة نقل سلسة وآمنة.
          </p>
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              <strong>التواصل والاستفسار:</strong>
            </p>
            <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              <a href="mailto:info@example.com" style={linkStyle}>
                info@example.com
              </a>
            </p>
            <p style={{ fontSize: "1.25rem" }}>
              <a href="tel:+0540049679" style={linkStyle}>
                0540049679
              </a>
            </p>
          </div>
        </Col>

        {/* قسم الخريطة */}
        <Col md={6}>
          <div
            className="map-frame"
            style={{
              border: "10px solid #fff",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
              cursor: "pointer", // تغيير المؤشر للإشارة إلى أنه يمكن النقر
            }}
            onClick={() => window.open(mapLink, "_blank")} // فتح الرابط عند النقر
          >
            <MapContainer center={position} zoom={10} style={{ height: "300px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>موقع شركتنا</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesSection;
