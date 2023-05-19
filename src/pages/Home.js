  // userscience/src/pages/Home.js
  import { Box } from '@mui/material';
  import Background from '../components/Background';

  import './home.scss';
  import { useTranslation } from 'react-i18next';

  import { useTheme } from '@mui/material/styles';

  import i18next from 'i18next';
  import { useEffect } from 'react';


  import Header from "../components/Header";
  import Hero from "../components/Hero";
  import About from "../components/About";
  import Services from "../components/Services";
  import Insights from "../components/Insights";
  import ClientList from "../components/ClientList";
  import AboutUserScience from "../components/AboutUserScience"
  import Footer from "../components/Footer"

  function Home () {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    
      return (
      <>
        <Header />
        <div className="home" style={{ backgroundColor: theme.palette.background.default }}>
          <Hero />
          <Background />
          <Services />
          <About />
          <ClientList />
          <AboutUserScience />
          <Insights />
          <Footer />
        </div>
      </>
    );
  };

  export default Home;
