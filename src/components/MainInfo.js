import styled from "styled-components";
import moment from "moment";

const MainInfo = ({ userName, data, theme, setTheme }) => {
  return (
    <>
      <Main>
        <Top>
          <TopLeft>
            <Img src={data.avatar_url} alt={data.avatar_url} />
          </TopLeft>
          <TopRight>
            <div>
              <h2 style={{ marginBottom: "0" }}>{data.name}</h2>
              <p style={{ color: "#0652dd" }}>@{data.login}</p>
            </div>
            <div>
              <p>Joined {moment(data.created_at).format("DD MMM YYYY")}</p>
            </div>
          </TopRight>
        </Top>
        <Container>
          <Para>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            nisi distinctio quis nobis recusandae, dolor nulla voluptate qui hic
            fuga.
          </Para>
          <Data>
            <span>
              <p>Repo</p>
              <p>{data.public_repos}</p>
            </span>
            <span>
              <p>Followers</p>
              <p>{data.followers}</p>
            </span>
            <span>
              <p>Following</p>
              <p>{data.following}</p>
            </span>
          </Data>
          <Link>
            <div>
              <p>
                <I className="fas fa-map-marker-alt"></I>
                {data.location === null ? "Not available" : data.location}
              </p>
              <p>
                <I className="fas fa-link"></I>
                {data.blog === "" || null ? "Not available" : data.blog}
              </p>
            </div>
            <div>
              <p>
                <I className="fab fa-twitter"></I>
                {data.twitter_username === null
                  ? "Not available"
                  : data.twitter_username}
              </p>
              <p>
                <I className="fas fa-building"></I>
                {data.company === null ? "Not available" : data.company}
              </p>
            </div>
          </Link>
        </Container>
      </Main>
    </>
  );
};

export default MainInfo;

const Main = styled.main`
  background: ${(bg) => bg.theme.mainColor};
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 40px 30px;
  margin: 0 auto;
  color: ${(bg) => bg.theme.fontColor};
  transition: all 0.5s ease;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 15px;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopLeft = styled.div`
  flex: 1;
`;
const TopRight = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
const Para = styled.div`
  padding: 15px 0;
  margin-bottom: 20px;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;
const Data = styled.div`
  background: ${(bg) => bg.theme.pageBackground};
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const I = styled.i`
  font-size: 1.2rem;
  margin-right: 10px;
`;
const Container = styled.div`
  padding-left: 190px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
  }
`;
const Link = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
