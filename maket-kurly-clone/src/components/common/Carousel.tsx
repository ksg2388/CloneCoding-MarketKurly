import { css } from '@emotion/react';
import banners from 'constants/banner';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Banner } from 'types/common/common.type';

const Carousel = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [newBanners, setNewBanners] = useState<Banner[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const changeContent = useCallback((index: number) => {
    setTimeout(() => {
      setSelectedId(index);
      if (carouselRef.current) {
        carouselRef.current.style.transition = '';
      }
    }, 500);
  }, []);

  const handleClickLeft = useCallback(() => {
    setSelectedId((prev) => prev - 1);
    if (selectedId === 1) {
      changeContent(newBanners.length - 2);
    }
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  }, [changeContent, newBanners, selectedId]);

  const handleClickRight = useCallback(() => {
    setSelectedId((prev) => prev + 1);
    if (selectedId === newBanners.length - 2) {
      changeContent(1);
    }
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  }, [changeContent, newBanners, selectedId]);

  useEffect(() => {
    const temp = [banners[banners.length - 1], ...banners, banners[0]];
    setNewBanners(temp);
  }, []);

  return (
    <div
      css={css`
        display: flex;
        background-color: aqua;
        height: 360px;
        overflow: hidden;
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          background-color: white;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 3;
        `}
        onClick={handleClickLeft}
      >
        Left
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          transform: translateX(${selectedId * -100}%);
        `}
        ref={carouselRef}
      >
        {newBanners.map((banner, index) => (
          <div
            key={`${banner.id} ${index}`}
            css={css`
              display: flex;
              width: 100%;
            `}
          >
            <img
              src={banner.content}
              alt=""
              css={css`
                object-fit: contain;
              `}
            />
          </div>
        ))}
      </div>
      <div
        css={css`
          position: absolute;
          background-color: white;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        `}
        onClick={handleClickRight}
      >
        Right
      </div>
    </div>
  );
};

export default Carousel;
