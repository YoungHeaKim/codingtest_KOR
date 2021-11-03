const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: '0.8rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    title: '2.2rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  background: `#0065ff`,
  link: `rgb(150, 150, 150)`,
  hover: `rgba(238, 238, 240, 0.7)`,
  select: `#f2f2f2`,
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
export const defalutStyle = {
  colors,
  fonts,
  device,
};
