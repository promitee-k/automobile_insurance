import styled from "styled-components";

export const PackageCards= styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  height: 500px;
  width: 300px;
  padding: 10px;
  margin: 5px;
  background-color: #1c5db2;
  color: white;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  & h3{
    color: beige;
}
`;


export const CardContainer = styled.div`
  padding: 10px;
  display: flex;
  margin: 10px;
`;
