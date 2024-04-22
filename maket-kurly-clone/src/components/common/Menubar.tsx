import { css } from '@emotion/react';
import { List, ListItem, ListItemText } from '@mui/material';
import category from 'constants/category';
import useHover from 'hooks/useHover';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
  const navigate = useNavigate();
  const [categoryRef, isHover] = useHover();

  const handleCategoryClick = useCallback(
    (id: number) => {
      navigate(`/category/${id}`);
    },
    [navigate]
  );

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 1050px;
        height: 70px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: fit-content;
          cursor: pointer;
        `}
        ref={categoryRef}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            margin: 32px 0;
          `}
        >
          <span
            className="material-symbols-outlined"
            css={css`
              font-size: 28px;
            `}
          >
            menu
          </span>
          <div
            css={css`
              font-size: 16px;
              font-weight: 500;
              margin-left: 8px;
            `}
          >
            카테고리
          </div>
        </div>

        <div>
          {isHover && (
            <div>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 240,
                  bgcolor: 'background.paper',
                  position: 'absolute',
                  overflow: 'auto',
                  maxHeight: 300,
                  '& ul': { padding: 0 },
                  border: '1px solid #d4d4d4',
                  top: '152px',
                  zIndex: '10',
                }}
                subheader={<li />}
              >
                {category.map((item) => (
                  <ListItem
                    key={`item-${item.id}`}
                    onClick={() => handleCategoryClick(item.id)}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      css={css`
                        min-width: 20px;
                        height: 20px;
                        margin-right: 8px;
                      `}
                    />
                    <ListItemText primary={`${item.name}`} />
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
