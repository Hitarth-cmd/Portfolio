import React from "react";
import styled from "styled-components";
import { achievements } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: rlative;
  z-index: 1;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 12px;
  padding: 18px 20px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
`;

const Achievements = () => {
  return (
    <Container id="Achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc
          style={{
            marginBottom: "24px",
          }}
        >
          Highlights from my hackathon participation and academic journey.
        </Desc>
        <Grid>
          {achievements.map((item, index) => (
            <Card key={`achievement-${index}`}>{item}</Card>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
