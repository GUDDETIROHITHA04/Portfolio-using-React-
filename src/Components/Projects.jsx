import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Projects = () => {
  const projects = [
    { title: 'Visual Question Answering', description: 'Developed VQA using NLP and computer vision techniques to answer questions based on image.', image: 'NLP.jpeg' },
    { title: 'JS Responsive Portfolio Website', description: 'Created a responsive portfolio website using React.js, Bootstrap, and Material-UI, demonstrating proficiency in front-end development and modern design principles.', image: "Portfolio.jpg" },
    { title: 'World Happiness Report using Python', description: "Using Python, we explore the World Happiness Report to understand what influences happiness worldwide, like income, social support, and freedom.", image: "whr.jpeg" },
  ];

  return (
    <section id="projects" className="projects bg-dark text-light py-5">
      <Container>
        <h2 className="heading text-center mb-5">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="project-box mb-4">
              <Card className="shadow-sm project-card">
                <Card.Img variant="top" src={project.image} />
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>
      </Container><br /><hr />
    </section>
  );
};

export default Projects;
