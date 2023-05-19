import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';
function Services() {
  const { t } = useTranslation();

  return (
    <div className="services">
      <h2>{t("landingPage.services.sectionTitle")}</h2>

      <div className="service">
        <h3>{t("landingPage.services.insights.heading")}</h3>
        <h4>{t("landingPage.services.insights.subheading")}</h4>
        <p>{t("landingPage.services.insights.paragraph")}</p>
      </div>

      <div className="service">
        <h3>{t("landingPage.services.recruitment.heading")}</h3>
        <h4>{t("landingPage.services.recruitment.subheading")}</h4>
        <p>{t("landingPage.services.recruitment.paragraph")}</p>
      </div>

      <div className="service">
        <h3>{t("landingPage.services.training.heading")}</h3>
        <h4>{t("landingPage.services.training.subheading")}</h4>
        <p>{t("landingPage.services.training.paragraph")}</p>
      </div>

      <div className="service">
        <h3>{t("landingPage.services.experienceBuilding.heading")}</h3>
        <h4>{t("landingPage.services.experienceBuilding.subheading")}</h4>
        <p>{t("landingPage.services.experienceBuilding.paragraph")}</p>
      </div>

      <div className="service">
        <h3>{t("landingPage.services.dataConsulting.heading")}</h3>
        <h4>{t("landingPage.services.dataConsulting.subheading")}</h4>
        <p>{t("landingPage.services.dataConsulting.paragraph")}</p>
      </div>

      <div className="service">
        <h3>{t("landingPage.services.events.heading")}</h3>
        <h4>{t("landingPage.services.events.subheading")}</h4>
        <p>{t("landingPage.services.events.paragraph")}</p>
      </div>
    </div>
  );
}

export default Services;
