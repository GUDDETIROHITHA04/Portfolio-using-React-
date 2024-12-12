import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <section id="contact" className="contact bg-dark text-light py-5">
      <Container>
        <h2 className="heading text-center mb-5 px-5">Contact Me</h2>
        <Form className="text-center">
          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="btn mt-3">Send Message</Button><br/><br/>
        </Form> 
        <div className='.copyRight text-left'>
                <h6>&copy;Guddeti Rohitha, 2024 , All projects, designs, and content are the original work of Guddeti Rohitha and are protected by copyright. All rights reserved.</h6>
            </div>
      </Container>
    </section>
  );
};

export default Contact;
