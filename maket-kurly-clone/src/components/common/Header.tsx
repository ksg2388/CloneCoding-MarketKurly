import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Menubar from './Menubar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      css={css`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 40px;
        min-width: 1050px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          width: 1050px;
        `}
      >
        <Logo />
        <p
          css={css`
            color: rgb(95, 0, 128);
            font-size: 20px;
            font-weight: 600;
            margin-left: 18px;
          `}
          onClick={() => navigate('/')}
        >
          마켓컬리
        </p>
        <span
          className="material-symbols-outlined"
          css={css`
            margin-left: auto;
            font-size: 28px;
            cursor: pointer;
          `}
          onClick={() => {
            navigate('/cart');
          }}
        >
          shopping_cart
        </span>
      </div>
      <Menubar />
    </header>
  );
};

export default Header;
