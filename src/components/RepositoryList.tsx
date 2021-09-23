import styled from "styled-components";
import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { Header } from "./Header";

const Container = styled.div`
  background-color: #cbd5e0;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      & + li {
        margin-top: 20px;
      }

      p {
        font-size: 16px;
        color: #444;
        margin-top: 8px;
      }

      a {
        display: inline-block;
        margin-top: 16px;
        text-decoration: none;
        color: #8257e6;
      }
    }
  }
`;

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
  login: string;
  avatar_url: string;
}

interface User {
  id: string;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    fetch("https://api.github.com/users/otavioachrispim/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/otavioachrispim")
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log(user);
  }, []);

  return (
    <Container>
      <div>
        <Header user={user} />;
      </div>
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </Container>
  );
}
