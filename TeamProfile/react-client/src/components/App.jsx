import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import faker from 'faker';

const Background = styled.div`
  overflow: scroll;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #E5E5E5;
`;

const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 75px;
  background: #023167;
  display: flex;
`;

const HouseWrapper = styled.div`
  position: absolute;
  right: 300px;
  margin-top: 10px;
  width: 60px;
  height: 50px;
  margin-right: 10px;
`;

const FriendsWrapper = styled.div`
  position: absolute;
  right: 240px;
  margin-top: 10px;
  width: 60px;
  height: 50px;
  margin-right: 10px;
`;

const TrophyWrapper = styled.div`
  position: absolute;
  right: 180px;
  top: -6px;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const BadgeFont = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`;

const Friends = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0V0ZM24.498 11.412C26.424 11.412 27.972 12.96 27.972 14.886C27.972 16.812 26.424 18.36 24.498 18.36C22.572 18.36 21.024 16.812 21.024 14.886C21.006 12.96 22.572 11.412 24.498 11.412V11.412ZM13.698 8.568C16.038 8.568 17.946 10.476 17.946 12.816C17.946 15.156 16.038 17.064 13.698 17.064C11.358 17.064 9.45 15.156 9.45 12.816C9.45 10.458 11.34 8.568 13.698 8.568ZM13.698 25.002V31.752C9.378 30.402 5.958 27.072 4.446 22.824C6.336 20.808 11.052 19.782 13.698 19.782C14.652 19.782 15.858 19.926 17.118 20.178C14.166 21.744 13.698 23.814 13.698 25.002ZM18 32.4C17.514 32.4 17.046 32.382 16.578 32.328V25.002C16.578 22.446 21.87 21.168 24.498 21.168C26.424 21.168 29.754 21.87 31.41 23.238C29.304 28.584 24.102 32.4 18 32.4V32.4Z" fill="white" />
  </svg>
)

const House = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="35" viewBox="0 0 41 35" fill="none">
    <path d="M16.4 35V22.6471H24.6V35H34.85V18.5294H41L20.5 0L0 18.5294H6.15V35H16.4Z" fill="white" />
  </svg>
)
const Trophy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="53" viewBox="0 0 44 53" fill="none">
    <path d="M18.0169 28.2191C21.1822 29.9352 23.6205 32.0621 25.0293 34.0504C26.5045 36.1324 26.5778 37.6154 26.1053 38.4083C25.6328 39.2012 24.2596 39.9 21.6294 39.7563C19.1176 39.6191 15.9542 38.7091 12.7889 36.993C9.62356 35.2769 7.18528 33.15 5.77642 31.1617C4.30122 29.0797 4.228 27.5967 4.70047 26.8038C5.17295 26.0108 6.54619 25.312 9.17631 25.4558C11.6882 25.593 14.8515 26.503 18.0169 28.2191Z" stroke="white" strokeWidth="3" />
    <path d="M25.8359 28.0728C22.8142 29.7111 20.5046 31.7646 19.1858 33.6952C17.8132 35.7045 17.7508 37.1736 18.2402 37.9949C18.7296 38.8163 20.0848 39.5168 22.597 39.42C25.0108 39.327 28.0421 38.485 31.0639 36.8467C34.0857 35.2085 36.3952 33.155 37.714 31.2244C39.0866 29.2151 39.149 27.746 38.6596 26.9246C38.1702 26.1033 36.815 25.4028 34.3028 25.4996C31.889 25.5926 28.8577 26.4346 25.8359 28.0728Z" stroke="white" strokeWidth="3" />
    <rect x="20.5" y="34.5" width="3" height="16" fill="white" stroke="white" />
    <path d="M12.9862 52C13.4368 51.9244 14.001 51.8537 14.6631 51.7906C16.543 51.6116 19.1514 51.5 22.0403 51.5C24.9291 51.5 27.5376 51.6116 29.4175 51.7906C30.0796 51.8537 30.6437 51.9244 31.0944 52C30.6437 52.0756 30.0796 52.1463 29.4175 52.2094C27.5376 52.3884 24.9291 52.5 22.0403 52.5C19.1514 52.5 16.543 52.3884 14.6631 52.2094C14.001 52.1463 13.4368 52.0756 12.9862 52Z" fill="white" stroke="white" />
    <mask id="path-5-inside-1" fill="white">
      <path d="M33.5397 21C33.5397 26.5695 32.3281 31.911 30.1714 35.8492C28.0147 39.7875 25.0897 42 22.0397 42C18.9897 42 16.0646 39.7875 13.9079 35.8492C11.7513 31.911 10.5397 26.5695 10.5397 21L22.0397 21H33.5397Z" />
    </mask>
    <path d="M33.5397 21C33.5397 26.5695 32.3281 31.911 30.1714 35.8492C28.0147 39.7875 25.0897 42 22.0397 42C18.9897 42 16.0646 39.7875 13.9079 35.8492C11.7513 31.911 10.5397 26.5695 10.5397 21L22.0397 21H33.5397Z" fill="white" stroke="white" strokeWidth="2" mask="url(#path-5-inside-1)" />
  </svg>
);

const BioContainer = styled.div`
  background: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1091px;
  height: 485px;
  left: 173px;
  top: 95px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const TimelineContainer = styled.div`
  position: absolute;
  width: 393px;
  height: 1011px;
  left: 173px;
  top: 591px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const TeamHeader = styled.div`
  padding-top: 20px;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  align-items: center;
  width: 687px;
  height: 90px;
  left: 577px;
  top: 591px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const HighlightContainer = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 687px;
  height: 600px;
  left: 577px;
  top: 691px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const PlayerWrapper = styled.div`
  height: 94px;
  width: 94px;
`;

const PlayerImage = styled.img`
  padding: 20px;
  height: 80%;
  width: 80%;
  margin: auto;
  border-radius: 100%;
`;

const PlayerName = styled.div`
  text-align: center;
  font-family: "roboto";
  margin: auto;
`;

const Post1Container = styled.div`
  position: absolute;
  width: 687px;
  height: 200px;
  left: 577px;
  top: 981px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Post2Container = styled.div`
  position: absolute;
  width: 687px;
  height: 200px;
  left: 577px;
  top: 1301px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Post3Container = styled.div`
  position: absolute;
  width: 687px;
  height: 200px;
  left: 577px;
  top: 1511px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 5px;
`;

const TimelinePost1 = styled.div`
  position: absolute;
  z-index: 2;
  width: 163px;
  height: 65px;
  left: 385px;
  top: 661px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const TimelinePost2 = styled.div`
  position: absolute;
  z-index: 2;
  width: 161px;
  height: 32px;
  left: 186px;
  top: 751px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const TimelinePost3 = styled.div`
position: absolute;
width: 163px;
height: 37px;
left: 385px;
top: 841px;
z-index: 2;
font-family: "Roboto";
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #000000;
`;

const TimelineBar = styled.div`
  z-index: 2;
  position: absolute;
  width: 940.03px;
  height: 0px;
  left: -100px;
  top: 1100px;
  border: 2px solid #023167;
  transform: rotate(-90deg);
`;

const Link = styled.a`
  color:black;
  text-decoration: none;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  getItems() {
    axios.get('/items')
      .then((results) => { this.setState({ items: results.data }) })
      .catch((error) => { console.log(error) });
  }

  componentDidMount() {

  }

  render() {
    return (
      <Background>
        <TimelineBar>

        </TimelineBar>
        <TimelinePost1>
          <p>
    <a href="http://localhost:3000/team/mavericks/"> West Contra Costa Youth Soccer League </a>
    U17 Fall 2020 Champions
  </p>
        </TimelinePost1>
        <TimelinePost2>
          <p>
    <a href="http://localhost:3000/team/mavericks/"> West Contra Costa Youth Soccer League </a>
    U17 Spring 2020 Champions
  </p>
        </TimelinePost2>
        <TimelinePost3>
          <p>
    <a href="http://localhost:3000/team/mavericks/"> West Contra Costa Youth Soccer League </a>
    U16 Fall 2019 Champions
  </p>
        </TimelinePost3>
        <Header>
          <HouseWrapper>
            <House />
            <BadgeFont>Home</BadgeFont>
          </HouseWrapper>
          <FriendsWrapper>
            <Friends />
            <BadgeFont>Friends</BadgeFont>
          </FriendsWrapper>
          <TrophyWrapper>
            <Trophy />
            <BadgeFont>Team</BadgeFont>
          </TrophyWrapper>
        </Header>
        <BioContainer>
          <img src="https://patch.com/img/cdn/users/2282076/2014/12/raw/20141254949913cc9cc.jpg" height="90%" />
        </BioContainer>
        <TimelineContainer>

        </TimelineContainer>
        <TeamHeader> Team </TeamHeader>
        <HighlightContainer>
          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKPPFE-355cf8c3eeee-512"/>
            <PlayerName>Adam</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EALEP5DM-63c65a47f71a-512"/>
            <PlayerName>Alex</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EALELHD5-fb4e748aa8b1-512"/>
            <PlayerName>Ben</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKSQDS-58b97cf6a88c-512"/>
            <PlayerName>Brandon</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <Link href="http://localhost:3000/player/daniel/">
            <PlayerImage src="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/893275_355162764590213_1179738913_o.jpg?_nc_cat=105&ccb=3&_nc_sid=2c4854&_nc_ohc=j_eA2kJmMfUAX-FNVIt&_nc_ht=scontent-sjc3-1.xx&oh=a3979eff53a07a8fbb4a2bb6439fe4a7&oe=604FD50F"/>
            <PlayerName> Daniel</PlayerName>
            </Link>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKQLJY-c4ddb4a3d2f6-512"/>
            <PlayerName>Doug</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKPCP6-46ddd4890e07-512"/>
            <PlayerName>Eric</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EALENS79-c1f6b7644453-512"/>
            <PlayerName>Errol</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKN2TE-3380766cf544-512"/>
            <PlayerName>Farnoosh</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKSDS8-844efaf3fba7-512"/>
            <PlayerName>Jacky</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKR99A-76ffd074845c-512"/>
            <PlayerName>Jake</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKQATE-5466e1d27278-512"/>
            <PlayerName>Jason</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKP2AY-6292912f6d65-512"/>
            <PlayerName>Jay</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKMSTW-a7fc738140c7-512"/>
            <PlayerName>Michelle</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EALEM5BR-6fd01c7604c9-512"/>
            <PlayerName>Nick</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKQW12-986b83585cd6-512"/>
            <PlayerName>Remy</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKPZQU-cb2b23e56019-512"/>
            <PlayerName>Sam</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKNS04-d0035161415f-512"/>
            <PlayerName>Scout</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EALEN3C7-2e224ab8d86e-512"/>
            <PlayerName>Steve</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EXHKMH36-41ca27c114fc-512"/>
            <PlayerName>Thomas</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EALELU5V-5da9cfc0c429-512"/>
            <PlayerName>Zach</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01F0FEV9PT-075ac308cb15-512"/>
            <PlayerName>Joel</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01E74PK68P-84d9b9324598-512"/>
            <PlayerName>Yasamin</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EJPW3KAR-2c9c5ffc2587-512"/>
            <PlayerName>Eric</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EN44KDDZ-59727198f354-512"/>
            <PlayerName>Chris</PlayerName>
          </PlayerWrapper>

          <PlayerWrapper>
            <PlayerImage src="https://ca.slack-edge.com/T01EU1PD9RA-U01EU2UM24U-82ceb2a70f4b-512"/>
            <PlayerName>Karl</PlayerName>
          </PlayerWrapper>

        </HighlightContainer>
        <Post2Container>

        </Post2Container>
        <Post3Container>

        </Post3Container>
      </Background>)
  }
}

export default App;