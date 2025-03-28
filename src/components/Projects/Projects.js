import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import hrms from "../../Assets/Projects/hrms.png";
import buzzticks from "../../Assets/Projects/buzzticks.png";
import organization from "../../Assets/Projects/organization.png";
import foodcouture from "../../Assets/Projects/foodcouture.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              imgPath={buzzticks}
              isBlog={false}
              title="Buzzticks"
              description="BuzzTicks is an online booking platform that simplifies event planning and ticketing for a wide range of activities. The website provides tools for users to easily manage event registration, sales, and booking systems. Whether for concerts, conferences, or smaller gatherings, BuzzTicks offers customizable features to enhance the booking experience."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              imgPath={hrms}
              isBlog={false}
              title="HRMS"
              description="The HRMS project aims to create a comprehensive Human Resource Management System to enhance the efficiency of HR processes within our organization. This system will serve as a centralized platform for managing employee data or information, payroll, leave, organization assets and more."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              imgPath={organization}
              isBlog={false}
              title="Organization Website"
              description="This website provides details about the organization, including technology, services, and a blog. You can also view open positions and apply through this website. You can get contact information for this organization."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://www.softyoi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodcouture}
              isBlog={false}
              title="Food Couture"
              description="Food Couture offers to view new recipes video to create delicious food. You can purchase full courses video and also get pdf of recipes."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://foodcouture.in/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
