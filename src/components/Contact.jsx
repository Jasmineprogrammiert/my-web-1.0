import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
  <>
  <div id="contact">
    <a href="mailto:jasminezeng08@gmail.com" id="email-me">
      <EmailIcon className="icons" />
    </a> 
    <a href="https://www.linkedin.com/in/jasminzeng/" target="_blank">
      <LinkedInIcon className="icons" />
    </a>
    <a href="https://github.com/Jasmineprogrammiert" target="_blank">
      <GitHubIcon className="icons" />
    </a>
    <footer>
      <small>
        {t("contact")}
      </small>
      <a href="#top">
        <KeyboardDoubleArrowUpIcon />
        Back to Top
      </a>
    </footer>
  </div>
  </>
  )
}

export default Contact;