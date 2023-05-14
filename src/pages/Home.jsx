import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from './HeroSection';
import PartnerSection from './PartnerSection';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container>
      
        <PartnerSection />
      </Container>
    </div>
  );
};

export default Home;
