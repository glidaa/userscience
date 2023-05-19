import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
function Insights() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  return (
    <div className="insights">
      <h2>{t("landingPage.insights.sectionTitle")}</h2>
      <h3>{t("landingPage.insights.headline")}</h3>
      <p>{t("landingPage.insights.paragraph")}</p>
      <button className="ctaButton">{t("landingPage.insights.ctaButton")}</button>
    </div>
  );
}

export default Insights;
