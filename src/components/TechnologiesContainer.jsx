import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, features: ["Estrutura Básica — HTML5", "Tags Semânticas", "Formatação de Texto"] },
  { id: "css", name: "CSS3", icon: <DiCss3 />, features: ["Seletores e Estilos Avançados", "Layouts Responsivos", "Animações e Transições"] },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, features: ["Manipulação de DOM", "Eventos e Assíncrono", "ES6+"] },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, features: ["Backend — JavaScript", "Gerenciamento de Pacotes", "APIs e Servidores"] },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, features: ["Normalização de Dados", "Consultas SQL", "Administração e Segurança"] },
  { id: "react", name: "React", icon: <DiReact />, features: ["Componentização", "Estado e Ciclo de Vida", "Redux e Gerenciamento de Estado"] },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h1>Tecnologias</h1>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <div className="icon-container">{tech.icon}</div>
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <ul className="feature-list">
                {tech.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
