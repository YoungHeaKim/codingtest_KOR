import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '../../../Static/images/blue.png';

const Heads = {
  Wrapper: styled.div`
    max-width: 1440px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: skyblue;
    margin: auto;
  `,
  Wrap: styled.div`
    display: flex;
    align-items: center;
  `,
  Logo: styled.img`
    width: 45px;
    height: auto;
    margin: 0 10px;
  `,
  H2: styled.h2`
    color: white;
    font-size: 1.3rem;
  `,
  Link: styled(Link)`
    display: inline-block;
    margin: 0 5px;
    padding: 0 10px;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
    height: 50px;
    line-height: 50px;

    :hover {
      color: black;
      background-color: #f2f2f2;
    }

    ${props =>
      props.selected &&
      css`
        color: black;
        border-radius: 5px;
        background-color: #f2f2f2;
      `}
  `,
};

const Header = ({ pathname }) => {
  console.log(pathname);
  return (
    <Heads.Wrapper>
      <Heads.Wrap>
        <Heads.Logo src={Logo} alt="용해 로고" />
        <Heads.H2>Home page</Heads.H2>
      </Heads.Wrap>
      <nav>
        <Heads.Link to="/home" selected={pathname === '/home'}>
          Home
        </Heads.Link>
        <Heads.Link to="/bearList" selected={pathname === '/bearList'}>
          맥주 리스트
        </Heads.Link>
      </nav>
    </Heads.Wrapper>
  );
};

export default Header;
