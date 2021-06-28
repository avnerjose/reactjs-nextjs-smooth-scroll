import Image from "next/image";
import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 0 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled(Image)`
  margin-bottom: 10px;
`;

export const ServicesTitle = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesCardTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

export const ServicesCardSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
`;
