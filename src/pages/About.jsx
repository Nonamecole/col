import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiLaurelCrown, GiTargetArrows, GiCrystalGrowth } from 'react-icons/gi';
import { FaRegCommentAlt } from 'react-icons/fa';
import AboutUsSection from './AboutUsSection';
import CardComponent from './Card';
import './css/About.css';
const About = () => {
  return (
    <div>
      <AboutUsSection />
      <Container>
        <Row>
          <Col md={6}>
            <CardComponent
              icon={<GiLaurelCrown className="about-us-icon" />}
              title="Vision"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis maximus tortor vitae eleifend."
            />
          </Col>
          <Col md={6}>
            <CardComponent
              icon={<GiTargetArrows className="about-us-icon" />}
              title="Mission"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis maximus tortor vitae eleifend."
            />
          </Col>
          <Col md={6}>
            <CardComponent
              icon={<GiCrystalGrowth className="about-us-icon" />}
              title="Values"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis maximus tortor vitae eleifend."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
