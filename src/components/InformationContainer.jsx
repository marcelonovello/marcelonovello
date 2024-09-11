import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
<<<<<<< HEAD
      
=======
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(21) 97740-0858</p>
        </div>
      </div>
>>>>>>> 915ad84f5fea1f46e082871782daf593d8f7c828
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>mardevfstack@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
<<<<<<< HEAD
          <p>Rio de Janeiro</p>
=======
          <p>Rio de Janeiro — RJ</p>
>>>>>>> 915ad84f5fea1f46e082871782daf593d8f7c828
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
