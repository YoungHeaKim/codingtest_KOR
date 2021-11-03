import React from 'react';
import Logo from '../../../Static/images/blue.png';
import { Heads } from '../../../styles/style';

const Header = ({ pathname }) => {
  return (
    <Heads.Wrapper>
      <Heads.Wrap>
        <Heads.Logo src={Logo} alt="용해 로고" />
        <Heads.H2>
          {pathname === '/home' ? 'Home' : '맥주 리스트 페이지'}
        </Heads.H2>
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
