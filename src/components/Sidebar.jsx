import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/eu.jpeg";



import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcelo Novello" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1av6nM7rDz3PXscVJV3bysrWuXJOqWChn/view" className="btn" download="https://drive.google.com/file/d/1av6nM7rDz3PXscVJV3bysrWuXJOqWChn/view">
        Currículo
      </a><br/>
    </aside>
  );
};

export default Sidebar;
