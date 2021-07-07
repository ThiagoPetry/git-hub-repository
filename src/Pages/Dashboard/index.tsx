import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Form, Repository } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFontElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input type="text" placeholder="Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Logo" />
        <div>
          <strong>thiagopetry/GitHubRepository</strong>
          <p>Projeto para listar repositórios do GitHub</p>
        </div>
      </Repository>
    </>
  );
};

export default Dashboard;
