import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram, FaCode } from 'react-icons/fa';



import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = {
  linkedin: { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/marcelo-novello/" },
  github: { icon: <FaGithub />, url: "https://github.com/marcelonovello" },
  instagram: { icon: <FaInstagram />, url: "https://www.instagram.com/cemarnov/" },
  freecodecamp: { icon: <FaCode />, url: "https://www.freecodecamp.org/mardevfstack" },
  whatsapp: { icon: <FaWhatsapp />, url: "https://wa.me/5521977400858" },
};

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {Object.keys(socialNetworks).map((name) => (
        <a href={socialNetworks[name].url} className="social-btn" id={name} key={name}>
          {socialNetworks[name].icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;

