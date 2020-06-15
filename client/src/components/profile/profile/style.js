import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  background: #819ff7;
  width: 800px;
  border-radius: 15px;
  color: #819ff7;
  a {
    margin-top: 10px;
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    width: 360px;
  }
`;

export const ProfileView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding: 10px;
  }
`;

export const ProfileViewBody = styled.div`
  position: relative;
  width: 100%;
`;

export const ProfileExperienceView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  height: 200px;
  width: 45%;
  float: left;
  background: white;
  border-radius: 15px;
  h2 {
    margin: 7px;
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;
export const ProfileEucationView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  height: 200px;
  width: 45%;
  float: left;
  background: white;
  border-radius: 15px;
  h2 {
    margin: 7px;
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;
