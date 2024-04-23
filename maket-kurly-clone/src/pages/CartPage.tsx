import { css } from '@emotion/react';
import { Checkbox, Divider } from '@mui/material';
import CardItemCard from 'components/products/CartItemCard';
import React from 'react';
import useCartStore from 'stores/useStore';

const CartPage = () => {
  const { items, checkAll, unCheckAll, selectedDelete } = useCartStore();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          text-align: center;
          font-size: 28px;
          font-weight: 500;
          margin-top: 50px;
        `}
      >
        장바구니
      </div>
      <div
        css={css`
          max-width: 1050px;
          display: flex;
          margin-top: 60px;
        `}
      >
        <div
          css={css`
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              font-size: 15px;
              font-weight: 500;
            `}
          >
            <Checkbox
              disabled={items.length === 0}
              checked={!items.find((item) => !item.isChecked)}
              onClick={() => {
                if (items.find((item) => !item.isChecked)) checkAll();
                else unCheckAll();
              }}
            />
            <span>{`전체선택 (${
              items.filter((item) => item.isChecked).length
            }/${items.length})`}</span>
            <Divider
              css={css`
                margin: 12px;
              `}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <div
              css={css`
                cursor: pointer;
              `}
              onClick={selectedDelete}
            >
              선택삭제
            </div>
          </div>
          <Divider
            css={css`
              margin: 0 12px;
              background-color: black;
              margin-bottom: 12px;
            `}
            flexItem
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 20px;
            `}
          >
            {items.map((item) => (
              <>
                <CardItemCard product={item} />
                <Divider
                  css={css`
                    margin: 0 12px;
                  `}
                  flexItem
                />
              </>
            ))}
          </div>

          <div
            css={css`
              display: flex;
              align-items: center;
              font-size: 15px;
              font-weight: 500;
            `}
          >
            <Checkbox
              disabled={items.length === 0}
              checked={!items.find((item) => !item.isChecked)}
              onClick={() => {
                if (items.find((item) => !item.isChecked)) checkAll();
                else unCheckAll();
              }}
            />
            <span>{`전체선택 (${
              items.filter((item) => item.isChecked).length
            }/${items.length})`}</span>
            <Divider
              css={css`
                margin: 12px;
              `}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <div
              css={css`
                cursor: pointer;
              `}
            >
              선택삭제
            </div>
          </div>
        </div>
        <div
          css={css`
            padding: 19px 18px 18px 20px;
            border: 1px solid #f2f2f2;
            background-color: #fafafa;
            display: flex;
            flex-direction: column;
            min-width: 300px;
            margin-left: 20px;
          `}
        >
          <div
            css={css`
              font-size: 18px;
              font-weight: 400;
              display: flex;
              margin-top: auto;
            `}
          >
            결제예정금액
            <span
              css={css`
                font-weight: 700;
                margin-left: auto;
              `}
            >
              {`${items
                .reduce((acc, cur) => acc + cur.price * cur.count, 0)
                .toLocaleString()}원`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
