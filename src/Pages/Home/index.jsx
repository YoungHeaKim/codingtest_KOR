import React from 'react';
import { Header } from '../components';
import styled from 'styled-components';

const Main = {
  Wrapper: styled.div`
    max-width: 1440px;
    margin: auto;
    padding: 30px;
    justify-content: center;
  `,
  Head: styled.div`
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    font-weight: bolder;
  `,
  Lists: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  `,

  Links: styled.a`
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background-color: rgb(150, 150, 150);
    color: white;
    padding: 0 10px;
    margin-left: 5px;

    &:hover {
      color: black;
      background-color: rgba(238, 238, 240, 0.7);
    }
  `,
};

const Home = ({ location }) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
