import { css } from '@emotion/react';
import ProductCard from 'components/products/ProductCard';
import { fruitNutsRice, seafoodDriedFish, vegetable } from 'constants/products';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Products } from 'types/common/common.type';

type Props = {
  title: string;
};

const CategoryPage = ({ title }: Props) => {
  const location = useLocation();
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const category = location.pathname.split('/')[2];

    if (category === '1') {
      setProducts(vegetable);
    } else if (category === '2') {
      setProducts(fruitNutsRice);
    } else if (category === '3') {
      setProducts(seafoodDriedFish);
    }
  }, [location]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h2
        css={css`
          font-size: 28px;
          font-weight: 600;
          margin-top: 50px;
        `}
      >
        {title}
      </h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          max-width: 1050px;
          margin-top: 40px;
        `}
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
