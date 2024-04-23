import { CartItem, Products } from 'types/common/common.type';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

type Cart = {
  items: CartItem[];
  addItem: (product: Products, count: number) => void;
  allClear: () => void;
  deleteItem: (id: number) => void;
  plusCount: (id: number) => void;
  minusCount: (id: number) => void;
  handleCheck: (id: number) => void;
  checkAll: () => void;
  unCheckAll: () => void;
  selectedDelete: () => void;
};

const useCartStore = create<Cart>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        addItem: (product: Products, addCount: number) =>
          set((state) => {
            const newItem = state.items.filter(
              (item) => item.id === product.id
            );
            if (addCount < 1) {
              return { items: state.items };
            }

            // 상품이 존재하는 경우
            if (newItem.length > 0) {
              return {
                items: state.items.map((item) => {
                  if (item.id === product.id) {
                    return {
                      ...product,
                      count: item.count + addCount,
                      isChecked: true,
                    };
                  }
                  return item;
                }),
              };
            }
            // 새로운 상품이 추가되는 경우
            return {
              items: [
                ...state.items,
                { ...product, count: addCount, isChecked: true },
              ],
            };
          }),
        allClear: () => set({ items: [] }),
        deleteItem: (id: number) =>
          set((state) => {
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          }),
        plusCount: (id: number) =>
          set((state) => {
            return {
              items: state.items.map((item) => {
                if (item.id === id) {
                  return { ...item, count: item.count + 1 };
                }
                return item;
              }),
            };
          }),
        minusCount: (id: number) =>
          set((state) => {
            return {
              items: state.items.map((item) => {
                if (item.id === id && item.count > 1) {
                  return { ...item, count: item.count - 1 };
                }
                return item;
              }),
            };
          }),
        handleCheck: (id: number) =>
          set((state) => {
            return {
              items: state.items.map((item) => {
                if (item.id === id) {
                  return { ...item, isChecked: !item.isChecked };
                }
                return item;
              }),
            };
          }),
        checkAll: () =>
          set((state) => ({
            items: state.items.map((item) => ({ ...item, isChecked: true })),
          })),
        unCheckAll: () =>
          set((state) => ({
            items: state.items.map((item) => ({ ...item, isChecked: false })),
          })),
        selectedDelete: () =>
          set((state) => ({
            items: state.items.filter((item) => !item.isChecked),
          })),
      }),
      { name: 'cart-store' }
    )
  )
);

export default useCartStore;
