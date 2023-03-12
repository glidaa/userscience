import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__sections">
        <section className="home__section">
          <h2>Find the right respondents for your research</h2>
          <p>Our platform connects you with the perfect respondents for your research, ensuring high-quality data and insights.</p>
        </section>
        <section className="home__section">
          <h2>Streamline your research process</h2>
          <p>Our platform simplifies the process of recruiting respondents, scheduling interviews, and conducting research.</p>
        </section>
        <section className="home__section">
          <h2>Save time and money</h2>
          <p>Our platform eliminates the need for expensive recruiting agencies and saves you time by automating the research process.</p>
        </section>
        <section className="home__section">
          <h2>High-quality data guaranteed</h2>
          <p>Our platform ensures high-quality data and insights by screening and verifying all respondents before they are added to our database.</p>
        </section>
        <section className="home__section">
          <h2>Easy to use</h2>
          <p>Our platform is user-friendly and intuitive, making it easy for researchers to get started and conduct research quickly.</p>
        </section>
        <section className="home__section">
          <h2>24/7 support</h2>
          <p>Our support team is available 24/7 to help you with any issues or questions you may have.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
