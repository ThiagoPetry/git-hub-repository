import styled, { css } from "styled-components";

import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 2em;
  background: linear-gradient(to right, #000000, #555555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 1000px;
  margin-top: 20px;
  text-align: center;
`;

export const Form = styled.form<FormProps>`
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
    font-size: 18px;
    border: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);

    ${props => props.hasError && css`
      border-bottom: 3px solid red;
    `}
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
      background: ${shade(0.2, "#14b43c")};
      box-shadow: 0px 0px 10px rgb(20, 180, 60, 1);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;

  &::after {
    content: ".";
    width: 750px;
    height: 2px;
    font-size: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    margin-top: 165px;
    position: absolute;
  }

  #arrow {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    background-color: #f4f4f4;
    border-radius: 5px;
    width: 100%;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    align-items: center;
    color: #222;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 10px;
    }

    img {
      width: 140px;
      height: 140px;
      border-radius: 100%;
      box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
    }

    .box {
      display: flex;
      align-items: center;
    }

    .info {
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

export const Error = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: -50px;
  font-weight: bold;
  font-size: 0.5em;
  color: red;
  text-transform: uppercase;
`;
