import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Repositories, Form, Container } from './styles'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>,): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
          <input value={newRepo} onChange={e => setNewRepo(e.target.value)} placeholder="Repositório" />
          <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
          {repositories.map(repository => (
            <Container>
              <a key={repository.full_name}>
                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                </div>
                <FiChevronRight size={50} />
              </a>
            </Container>
          ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
