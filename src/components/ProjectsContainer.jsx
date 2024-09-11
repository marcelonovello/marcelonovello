import "../styles/components/ProjectsContainer.sass";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsContainer = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/marcelonovello/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="projects-container">
      <h1>Projetos</h1>
      <div className="repo-list">
        {repos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <p>{repo.description || 'Sem descrição'}</p>
          </div>
        ))}
      </div>
      <a href="https://github.com/marcelonovello" className="btn">
        Ver mais no GitHub
      </a>
    </section>
  );
};

export default ProjectsContainer;

