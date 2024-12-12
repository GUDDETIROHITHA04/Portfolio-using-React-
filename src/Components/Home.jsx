import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../Images/Rohitha.png'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="home text-center bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="home-content"><br/><br/><br/><br/>
              <h2>Hi, I'm <span className="main-color">Guddeti Rohitha</span></h2>
              <h2>Frontend Developer & Software Enthusiast</h2>
              <p className="lead">Passionate in Software Development, Web Development, and more.</p>
              <Button variant="outline-primary" href="#contact" className="btn">Contact Me</Button><br/><br/>
              <div className="social-links text-right" style={{ display: 'flex', justifyContent:'center', gap: '20px', fontSize: '24px'}}>
                <a href="https://wa.me/9100534548" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                    <FaWhatsapp />
                </a>
                <a href="https://linkedin.com/in/rohitha-guddeti-71a163239/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/GUDDETIROHITHA04" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                    <FaGithub />
                </a>
                <a href="mailto:rohitha.guddeti.@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>
                    <FaEnvelope />
                </a>
            </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="home-img">
              <img src={img1} alt="Profile" className="img-fluid rounded-circle" />
            </div>
          </Col>
        </Row>
      </Container><br/><br/><br/><hr/>
    </section>
  );
};

export default Home;
