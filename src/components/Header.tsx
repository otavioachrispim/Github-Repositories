import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #2d3748;
  padding: 20px;
  align-items: center;
  color: #fff;

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-left: 40px;
    margin-right: 40px;
  }

  a {
    font-size: 24px;
    color: #fff;
    text-decoration: none;
  }

  h1 {
    margin: 0;
  }
`;

interface HeaderProps {
  user: {
    id: string;
    login: string;
    name: string;
    avatar_url: string;
  };
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <img src={props.user.avatar_url} alt="Avatar do usuário" />
      <h1>
        {props.user.name} - {props.user.login}
      </h1>
    </Container>
  );
}
