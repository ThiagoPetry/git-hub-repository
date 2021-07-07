import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 2em;
  background: linear-gradient(to right, #000000, #555555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 1000px;
  margin-top: 20px;
  text-align: center;
`;

export const Form = styled.form`
  font-size: 1em;
  max-width: 1000px;
  margin-top: 25px;

  display: flex;
  justify-content: center;

  input {
    flex: 1;
    max-width: 350px;
    height: 50px;
    padding: 0 24px;
    background-color: #f4f4f4;
    border: 0;
    font-size: 0.6em;
    border-bottom: 3px solid rgb(3, 3, 3);

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  &::after {
    content: '.';
    width: 750px;
    heigth: 2px;
    font-size: 1px;
    background-color: rgb(178, 178, 178);
    display: flex;
    margin-top: 165px;
    position: absolute;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 1000px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    background-color: #f4f4f4;
    border-radius: 5px;
    width: 100%;
    padding: 2px;
    display: block;
    text-decoration: none;
    justify-content: center;

    display: flex;
    align-itens: center;

    transition: all 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 10px;
    }

    img {
      width: 140px;
      heigth: 140px;
      border-radius: 100%;
      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
    }

    div {
      margin: 25px 25px;

      strong {
        font-size: 1em;
      }

      p {
        max-width: 500px;
        font-size: 0.6em;
        margin-top: 4px;
      }
    }
  }
`;
