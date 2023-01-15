import React from "react";
import astronaut from "./astrodev.png";
import styled from "styled-components";

export const ContainerHeader = styled.main`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1px;
  background: black;
`;

export const FontText = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  padding-left: 30px;
  gap: 10px;
  color: white;
`;

export function Header() {
  return (
    <ContainerHeader>
      <div>
        <FontText>
          <img src={astronaut} Width="60px" />
          <h1>Astrodev SpaceTrips</h1>
        </FontText>
      </div>
    </ContainerHeader>
  );
}
