import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';

function About() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  return (
    <div>
      <div className="about">
        <h2>{t("landingPage.about.sectionTitle")}</h2>
        <h3>{t("landingPage.about.heading")}</h3>
        <p>{t("landingPage.about.paragraph")}</p>
      </div>
      <div className="home__sections">
        <section className="home__section">
          <h2>{t('findRespondents')}</h2>
          <p>{t('findRespondentsDescription')}</p>
        </section>
        <section className="home__section">
          <h2>{t('streamlineProcess')}</h2>
          <p>{t('streamlineProcessDescription')}</p>
        </section>
        <section className="home__section">
          <h2>{t('saveTimeAndMoney')}</h2>
          <p>{t('saveTimeAndMoneyDescription')}</p>
        </section>
        <section className="home__section">
          <h2>{t('highQualityData')}</h2>
          <p>{t('highQualityDataDescription')}</p>
        </section>
        <section className="home__section">
          <h2>{t('easyToUse')}</h2>
          <p>{t('easyToUseDescription')}</p>
        </section>
        <section className="home__section">
          <h2>{t('support')}</h2>
          <p>{t('supportDescription')}</p>
        </section>
      </div>
    </div>
  );
}

export default About;
