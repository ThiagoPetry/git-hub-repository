import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 2em;
  background: linear-gradient(to right, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 400px;
  margin-top: 20px;
`;

export const Form = styled.form`
  font-size: 1em;
  max-width: 500px;
  margin-top: 20px;

  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    font-size: 0.6em;
    border-bottom: 3px solid black;
  }

  button {
    border: 0;
    padding: 10px;
    color: white;
    font-weight: bold;
    background-color: #14b43c;
    border-radius: 5px;
    margin-left: 10px;
    box-shadow: 0px 0px 10px rgb(20, 180, 60, 0.5);

    transition: all 0.2s;

    &:hover {
      background: ${shade(0.2, '#14b43c')};
      box-shadow: 0px 0px 10px rgb(20, 180, 60, 1);
    }
  }
`;

export const Repository = styled.div`
  margin-top: 80px;
  max-width: 700px;

  display: flex;
  justify-content: center;

  img {
    width: 150px;
    heigth: 150px;
    filter: drop-shadow(0px 0px 5px rgb(0, 0, 0, 0.2));
  }

  div {
    margin: 15px 25px;

    strong {
      font-size: 1.2em;
    }

    p {
      font-size: 0.8em;
      margin-top: 4px;
    }

  }

`;
