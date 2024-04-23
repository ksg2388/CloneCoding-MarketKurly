import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  css,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Products } from 'types/common/common.type';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  product: Products;
};

const ShoppingBagDialog = ({ isOpen, handleClose, product }: Props) => {
  const [count, setCount] = useState(0);

  const handleClickMinus = useCallback(() => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  }, [count]);

  const handleClickPlus = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <Dialog open={isOpen}>
      <DialogContent
        css={css`
          min-width: 450px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #efefef;
            font-weight: 600;
            font-size: 16px;
          `}
        >
          <img
            src={product.image}
            alt="상품이미지"
            css={css`
              min-width: 50px;
              height: 50px;
              border-radius: 6px;
            `}
          />
          <p
            css={css`
              margin-left: 12px;
            `}
          >
            {product.name}
          </p>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 12px 0;
            border-bottom: 1px solid #efefef;
            font-weight: 400;
            font-size: 15px;
          `}
        >
          <div>{product.name}</div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 12px;
            `}
          >
            <p
              css={css`
                font-weight: 700;
              `}
            >{`${product.price.toLocaleString()}원`}</p>
            <div
              css={css`
                display: flex;
                border: 1px solid #cfcfcf;
                border-radius: 4px;
                align-items: center;
              `}
            >
              <button
                css={css`
                  padding: 4px 12px;
                  color: ${count === 0 && '#dadada'};
                  cursor: ${count === 0 && 'default'};
                `}
                onClick={handleClickMinus}
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
              >{`${count}`}</span>
              <button
                css={css`
                  padding: 4px 12px;
                `}
                onClick={handleClickPlus}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;
            font-weight: 600;
          `}
        >
          <span>합계</span>
          <span>
            <span
              css={css`
                font-size: 20px;
                margin-right: 4px;
              `}
            >{`${(count * product.price).toLocaleString()}`}</span>
            원
          </span>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          css={css`
            width: 45%;
          `}
          onClick={handleClose}
        >
          취소
        </Button>
        <Button
          css={css`
            width: 45%;
          `}
        >
          장바구니 담기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShoppingBagDialog;
