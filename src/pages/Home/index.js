import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Button from "../../components/Button";

function Home() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get("users/inaldoss/repos");

      setRepositories(response.data);
    }

    loadRepositories();
  }, []);

  function handleAddStaticRepository() {
    const repository = {
      id: Math.random(),
      name: "New Reposoritory",
      language: "language X",
    };

    setRepositories([...repositories, repository]);
  }

  function handleRemoveRepository(id) {
    const filteredData = repositories.filter(
      (repository) => repository.id !== id
    );

    setRepositories(filteredData);
  }

  return (
    <div>
      {repositories.map((item, index) => (
        <div key={item.id}>
          <div>
            <p>{item.name}</p>
            <span>{item.language}</span>
          </div>
          <Button
            background="#f44336"
            onClick={() => handleRemoveRepository(item.id)}
          >
            Remover
          </Button>
        </div>
      ))}

      <Button background="#4caf50" onClick={handleAddStaticRepository}>
        Adicionar
      </Button>
    </div>
  );
}

export default Home;
