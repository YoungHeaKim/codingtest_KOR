import React from 'react';
import { Header } from '../components';
import { Main } from '../../styles/style';

const Home = ({ location }) => {
  return (
    <Main.Container>
      <Header pathname={location.pathname} />
      <Main.Wrapper>
        <Main.Head>
          <h2>프론트엔드 개발 지원자 김용해입니다.</h2>
        </Main.Head>
        <Main.Lists>
          이력서 :
          <Main.Links href="https://youngheakim.github.io/resume/index.html">
            https://youngheakim.github.io/resume/index.html
          </Main.Links>
        </Main.Lists>
        <Main.Lists>
          Github 주소 :
          <Main.Links href="https://github.com/YoungHeaKim">
            https://github.com/YoungHeaKim
          </Main.Links>
        </Main.Lists>
      </Main.Wrapper>
    </Main.Container>
  );
};

export default Home;
