import { css } from '@emotion/react';
import React from 'react';
import { Products } from 'types/common/common.type';

type Props = {
  product: Products;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 30%;
      `}
    >
      <img src={product.image} alt="상품이미지" />
      <button
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          font-size: 16px;
          line-height: 19px;
          color: rgb(51, 51, 51);
          border: 1px solid rgb(217, 217, 217);
          border-radius: 4px;
          margin-top: 8px;
          padding: 12px 12px;
          cursor: pointer;
        `}
      >
        <span
          className="material-symbols-outlined"
          css={css`
            font-size: 24px;
            color: rgb(51, 51, 51);
            margin-right: 4px;
          `}
        >
          shopping_cart
        </span>
        <p>담기</p>
      </button>
      <div
        css={css`
          font-size: 18px;
          font-weight: 600;
          margin-top: 8px;
        `}
      >
        {product.name}
      </div>
      <div
        css={css`
          font-size: 14px;
          font-weight: 400;
          color: #8e8e8e;
        `}
      >
        {product.description}
      </div>
      <div
        css={css`
          font-size: 18px;
          font-weight: 700;
          margin-top: 4px;
        `}
      >
        {`${product.price.toLocaleString()}원`}
      </div>
    </div>
  );
};

export default ProductCard;
