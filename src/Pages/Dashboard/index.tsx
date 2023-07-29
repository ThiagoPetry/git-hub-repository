import React, { useState, useEffect, FormEvent } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import { FiChevronRight } from "react-icons/fi";

import { Title, Repositories, Form, Container, Error } from "./styles";

interface Repository {
  map(arg0: (repository: any) => JSX.Element): any;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem("@GithubExplorer:repositories");

    if (storageRepository) {
      return JSON.parse(storageRepository);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.removeItem("@GithubExplorer:repositories");
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>,): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite um repositório!");
      return;
    }

    try {
      const response = await api.get<Repository[]>(`users/${newRepo}/repos`);
      const userRepositorys = response.data;

      setRepositories(userRepositorys);
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Repositório não encontrado ou inexistente.");
    }
  };

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form
        hasError={!!inputError}
        onSubmit={handleAddRepository}
      >
        <input
          value={newRepo}
          placeholder={"Usuário"}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository, index) => (
          <Container key={index}>
            <Link key={repository?.full_name} to={`/repository/${repository?.full_name}`}>
              <div className={"box"}>
                <img
                  alt={repository?.owner?.login}
                  src={repository?.owner?.avatar_url}
                />

                <div className={"info"}>
                  <strong>{repository?.full_name}</strong>
                  <p>
                    {repository?.description || "Sem descrição..."}
                  </p>
                </div>
              </div>

              <FiChevronRight id="arrow" size={50} />
            </Link>
          </Container>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
