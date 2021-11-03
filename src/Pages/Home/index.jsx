import React, { useEffect } from 'react';
import { Header } from '../components';
import { Main } from '../../styles/style';
import { connect } from 'react-redux';
import { actions as accessActions } from '../..//Modules/access';

const Home = ({ location, access, setAccess }) => {
  useEffect(() => {
    setAccess(true);
  });
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

const mapStateToProps = state => ({ access: state.access.access });

export default connect(mapStateToProps, accessActions)(Home);
