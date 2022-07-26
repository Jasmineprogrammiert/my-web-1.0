import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// local files
import jasmine from '../assets/img/jasmine.png';
import résumé from '../assets/files/Jasmine_Zeng_CV.pdf'
import Contact from '../components/Contact';

const About = () => {
  const { t } = useTranslation(["about"]);

  const originalArrow = <ArrowBackIosNewIcon />;
  const updatedArrow = `${t("arrow")}`;
  const [arrow, setArrow] = useState(originalArrow);

  const originalLink = `${t("links.link-1")}`;
  const updatedLink = `${t("links.link-1-copy")}`;
  const [link, setLink] = useState(originalLink);

  return (
    <>
    <main id="about-me" name="about-me">
      {/* ---------- Headings ---------- */}
      <Link to="/" className="arrow-back slideUp">
        <span
          to="/" 
          onMouseOver={() => setArrow(updatedArrow)}
          onMouseLeave={() => setArrow(originalArrow)}
        > 
          {arrow}
        </span>
      </Link>
      <h1 className="slideUp titles menu-4">
        <span>
          <Trans i18nKey="titles.title-1">
            I'm a <code></code>
          </Trans>
        </span>
      </h1> 
      <h1 className="slideUp titles menu-5">
        <span>
          <Trans i18nKey="titles.title-2">
            I'm a <code></code>
          </Trans>
        </span>
      </h1>
      {/* ---------- Self-intro ---------- */}
      <img src={jasmine} alt="Jasmine" className="about-me-img" />
      <div className="about-me">
        <h2>{t("about.about-me")}</h2>
        <p>
          <Trans i18nKey="about.about-1">
            <code></code>
          </Trans>
        </p>
        <p>{t("about.about-2")}</p>
        <p>{t("about.about-3")}</p>
        <p>{t("about.about-4")}</p>
        <p>{t("about.about-5")}</p>
        <Nav.Link 
          href={résumé} 
          target="_blank" 
          rel="noreferrer"
          className="links link-1">
          <span
            onMouseOver={() => setLink(updatedLink)}
            onMouseLeave={() => setLink(originalLink)}
          >
            {link}
          </span>
        </Nav.Link>
        <Nav.Link 
          href="https://deinelieblingsjasmin.com"  
          target="_blank" 
          rel="noreferrer"
          className="links link-2">
          <span> 
            {t("links.link-2")}
          </span>
        </Nav.Link>
      </div>
    </main>
    <Contact />
    </>
  )
}

export default About;