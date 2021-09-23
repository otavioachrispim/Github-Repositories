import styled from "styled-components";

const Container = styled.div`
  background-color: #edf2f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 20px;
  padding: 20px;
  height: 220px;
  position: relative;
  box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.32);
  border-radius: 24px;

  strong {
    margin-bottom: 16px;
    font-size: 20px;
  }

  a {
    position: absolute;
    bottom: 20px;
    text-decoration: none;
    color: red;
  }
`;

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <Container>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </Container>
  );
}
