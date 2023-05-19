import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';

function AboutUserScience() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  return (
    <div className="about-user-science">
      <h2>{t("landingPage.aboutUserScience.sectionTitle")}</h2>
      <h3>{t("landingPage.aboutUserScience.heading")}</h3>
      <p>{t("landingPage.aboutUserScience.paragraph")}</p>
    </div>
  );
}

export default AboutUserScience;
