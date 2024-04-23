import { css } from '@emotion/react';
import { Checkbox } from '@mui/material';
import React from 'react';
import useCartStore from 'stores/useStore';
import { CartItem } from 'types/common/common.type';

type Props = {
  product: CartItem;
};

const CartItemCard = ({ product }: Props) => {
  const { deleteItem, plusCount, minusCount, handleCheck } = useCartStore();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Checkbox
        checked={product.isChecked}
        onChange={() => handleCheck(product.id)}
      />
      <img
        src={product.image}
        alt="상품 이미지"
        css={css`
          min-width: 60px;
          height: 80px;
          margin-left: 4px;
          margin-right: 20px;
        `}
      />
      <div
        css={css`
          font-size: 16px;
          font-weight: 500;
          min-width: 360px;
        `}
      >
        {product.name}
      </div>
      <div
        css={css`
          display: flex;
          border: 1px solid #cfcfcf;
          border-radius: 4px;
          align-items: center;
          margin-right: 40px;
        `}
      >
        <button
          css={css`
            padding: 4px 12px;
            color: ${product.count === 1 && '#dadada'};
            cursor: ${product.count === 1 && 'default'};
          `}
          onClick={() => minusCount(product.id)}
        >
          -
        </button>
        <span
          css={css`
            font-size: 16px;
            font-weight: 600;
            width: 20px;
            text-align: center;
          `}
        >{`${product.count}`}</span>
        <button
          css={css`
            padding: 4px 12px;
          `}
          onClick={() => plusCount(product.id)}
        >
          +
        </button>
      </div>
      <div
        css={css`
          font-size: 16px;
          font-weight: 700;
          margin-left: 40px;
        `}
      >{`${(product.price * product.count).toLocaleString()}원`}</div>
      <span
        className="material-symbols-outlined"
        css={css`
          display: flex;
          font-size: 20px;
          color: #c9c9c9;
          margin-left: 12px;
          cursor: pointer;
        `}
        onClick={() => deleteItem(product.id)}
      >
        close
      </span>
    </div>
  );
};

export default CartItemCard;
