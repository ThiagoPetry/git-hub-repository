import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        color: #a8a8a3;
        transition: color 0.2s;
        font-size: 2vh;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 0.4vw;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 10vh;

    header {
        display: flex;
        align-items; center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 36px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                font-size: 20px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 40px;

    a {
        background-color: #f4f4f4;
        border-radius: 5px;
        width: 100%;
        padding: 2px;
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        color: #222;

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
            flex: 1;

            strong {
                font-size: 1em;
                color: #3d3d4d;
            }

            p {
                max-width: 500px;
                font-size: 0.6em;
                margin-top: 4px;
                color: #737380;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;