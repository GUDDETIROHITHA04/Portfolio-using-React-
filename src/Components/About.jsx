import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import FlareIcon from '@mui/icons-material/Flare';
const About = () => {
  return (
    <section id="about" className="about bg-dark text-light py-5">
      <Container>
        <h2 className="heading text-center mb-5">About Me</h2>
        <Row>
          <Col md={6}>
            <div className="about-img">
              <img src="https://www.webdesigntoronto.com/img/webtechnologies.jpg" alt="About" className="img-fluid rounded" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-content">
              <h3><FlareIcon style={{ color: '#61DAFB' }} /> <sup>____________</sup> WHO I AM<sup> ____________</sup> <FlareIcon  style={{ color: '#61DAFB' }} /></h3>
              <p>
              I am a recent graduate with a Bachelor of Technology in Computer Science & Technology from Madanapalle Institute of Technology & Science. I am passionate about software development and machine learning technologies.<br/>
              I am a MERN developer with experience building single-page web applications, proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB and Bootstrap,<br/>
              I am also passionate about machine learning, deploying various models and processing data to solve real-world problems.
              </p>
              <section style={{ textAlign: 'center', marginTop: '20px' }}>
          <a href="https://drive.google.com/file/d/1cKJYrAeLx1uwVBFaSA9v157rvWUwUHt_/view?usp=drivesdk" download>
          <Button variant="outline-primary" className="btn"><FaDownload /> Download Resume</Button></a>
      </section>
            </div>
          </Col>
        </Row>
      </Container><br/><hr/>
    </section>
  );
};

export default About;
