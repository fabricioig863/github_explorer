import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/68553208?s=460&u=cb20340ed2839a1106716722bacd8ee040cc7d33&v=4"
            alt="Fabricio Ignacio"
          />
          <div>
            <strong>fabricioig863</strong>
            <p>Oi eu sou o fabricio desenvolvedor fullstack</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/68553208?s=460&u=cb20340ed2839a1106716722bacd8ee040cc7d33&v=4"
            alt="Fabricio Ignacio"
          />
          <div>
            <strong>fabricioig863</strong>
            <p>Oi eu sou o fabricio desenvolvedor fullstack</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/68553208?s=460&u=cb20340ed2839a1106716722bacd8ee040cc7d33&v=4"
            alt="Fabricio Ignacio"
          />
          <div>
            <strong>fabricioig863</strong>
            <p>Oi eu sou o fabricio desenvolvedor fullstack</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
