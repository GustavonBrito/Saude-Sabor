import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;

  & ul {
    display: flex;
    gap: 10px;
    width: 80vw;
    list-style-type: none;
    align-items: center;
    justify-content: end;
    margin-right: 20vw;
  }

  & ul a {
    color: inherit;
    text-decoration-line: none;
    cursor: pointer;
    transition: 1s;
  }

  & ul a:hover {
    color: red;
  }
`;
