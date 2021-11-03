import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = {
  Container: styled.div`
    max-width: 1440px;
    margin: auto;
  `,
  Wrapper: styled.div`
    ${({ theme }) => {
      return css`
        height: 100%;
        ${theme.device.desktop} {
          padding: 30px;
        }

        ${theme.device.tablet} {
          padding: 20px;
        }

        ${theme.device.mobile} {
          padding: 10px;
        }
      `;
    }}
  `,
  Head: styled.div`
    ${({ theme }) => css`
      display: flex;
      font-family: ${theme.fonts.family.title};
      justify-content: center;

      ${theme.device.desktop} {
        font-size: ${theme.fonts.size.lg};
        font-weight: ${theme.fonts.weight.bold};
      }

      ${theme.device.tablet} {
        font-size: ${theme.fonts.size.base};
        font-weight: ${theme.fonts.weight.bold};
      }

      ${theme.device.mobile} {
        font-size: ${theme.fonts.size.sm};
        font-weight: ${theme.fonts.weight.bold};
      }
    `}
  `,
  Lists: styled.div`
    ${({ theme }) => css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      ${theme.device.desktop} {
        margin: 20px 0;
        font-size: ${theme.fonts.size.lg};
      }

      ${theme.device.tablet} {
        margin: 15px 0;
        font-size: ${theme.fonts.size.base};
      }

      ${theme.device.mobile} {
        margin: 10px 0;
        font-size: ${theme.fonts.size.sm};
      }
    `}
  `,

  Links: styled.a`
    ${({ theme }) => css`
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      background-color: ${theme.colors.link};
      color: white;
      padding: 0 10px;
      margin-left: 5px;

      &:hover {
        color: black;
        background-color: ${theme.colors.hover};
      }
    `}
  `,
};

export const List = {
  Wrapper: styled.div`
    margin: auto;
    justify-content: center;
    position: relative;
  `,
  Inner: styled.div`
    position: absolute;
    right: 0;
    top: 70px;
    z-index: 1;
    display: flex;
    align-items: center;
  `,
  Title: styled.span`
    ${({ theme }) => css`
      font-size: ${theme.fonts.size.base};
      margin: 0 10px;
    `}
  `,
  Description: styled.span`
    display: block;
    font-size: 0.8rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
  Input: styled.input`
    width: 45px;
    text-align: center;
    margin: 0 5px;
    border-radius: 5px;
    border: 1px solid;
  `,
  Button: styled.button`
    width: 40px;
    border: 0;
    outline: 0;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(238, 238, 240);
  `,
};

export const Heads = {
  Wrapper: styled.div`
    ${({ theme }) => {
      return css`
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: ${theme.colors.background};
      `;
    }}
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
    ${({ theme }) => css`
      color: white;
      ${theme.device.desktop} {
        font-size: ${theme.fonts.size.lg};
      }

      ${theme.device.tablet} {
        font-size: ${theme.fonts.size.lg};
      }

      ${theme.device.mobile} {
        font-size: ${theme.fonts.size.sm};
      }
    `}
  `,
  Link: styled(Link)`
    ${({ theme }) =>
      css`
        display: inline-block;
        margin: 0 5px;
        padding: 0 10px;
        color: white;
        text-decoration: none;
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;

        :hover {
          color: black;
          background-color: ${theme.colors.hover};
        }

        ${props =>
          props.selected &&
          css`
            color: black;
            background-color: ${theme.colors.select};
            font-weight: ${theme.fonts.weight.bold};
          `}

        ${theme.device.desktop} {
          font-size: ${theme.fonts.size.base};
        }

        ${theme.device.tablet} {
          font-size: ${theme.fonts.size.base};
        }

        ${theme.device.mobile} {
          font-size: ${theme.fonts.size.sm};
        }
      `}
  `,
};

export const Dialog = {
  Table: styled.table`
    width: 100%;
    border: 1px solid;
    text-align: center;
    border-collapse: collapse;
  `,
  Thead: styled.thead`
    ${({ theme }) =>
      css`
        font-size: ${theme.fonts.size.lg};
        font-weight: ${theme.fonts.weight.bold};
        height: 3rem;
        line-height: 3rem;
      `}
  `,
  Th: styled.th`
    width: 20%;
    border: 1px solid;
    font-size: 1rem;
    font-weight: 700;
  `,
  Td: styled.td`
    width: 30%;
    border: 1px solid;
    font-size: 1rem;
    vertical-align: middle;
  `,
  Img: styled.img`
    width: 20%;
  `,
};
