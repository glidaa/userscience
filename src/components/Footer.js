import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';

function Footer() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t("landingPage.footer.text")}</p>
      </div>
    </footer>
  );
}

export default Footer;
