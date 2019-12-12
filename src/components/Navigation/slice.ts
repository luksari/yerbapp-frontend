/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { memoize, find } from 'lodash';

export type NavSliceState = {
  navItems: NavigationItem[];
}

const initialState: NavSliceState = {
  navItems: [
    {
      to: '/explore',
      selected: undefined,
      title: 'Przeglądaj',
      visible: true,
      icon: 'search',
    },
    {
      to: '/tutorial',
      selected: undefined,
      title: 'Poradnik',
      visible: true,
      icon: 'book',
    },
    {
      to: '/admin',
      selected: undefined,
      title: 'Panel administratora',
      visible: false,
      icon: 'appstore',
    },
    {
      to: '/',
      selected: undefined,
      title: 'Strona główna',
      visible: true,
      icon: 'home',
    },
  ],
};

export const { name, actions, reducer } = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setNavItems(state, action: PayloadAction<NavigationItem[]>) {
      state.navItems = action.payload;
    },
    addNavItem(state, action: PayloadAction<NavigationItem>) {
      state.navItems.push(action.payload);
    },
    removeNavItem(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.filter((item) => item.to === action.payload);
    },
    setItemVisible(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.map((elem) => {
        if (elem.to === action.payload) {
          return { ...elem, visible: true };
        }
        return elem;
      });
    },
    setItemHidden(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.map((elem) => {
        if (elem.to === action.payload) {
          return { ...elem, visible: false };
        }
        return elem;
      });
    },
    setItemSelected(state, action: PayloadAction<string>) {
      state.navItems = state.navItems.map((elem) => {
        if (elem.to === action.payload) {
          return { ...elem, selected: true };
        }
        return { ...elem, selected: false };
      });
    },
  },
});

export const navDomain = (state) => state[name] as NavSliceState;

export const makeSelectNavItems = () => createSelector(
  navDomain,
  (substate) => substate.navItems,
);

export const makeSelectNavItem = () => createSelector(
  makeSelectNavItems(),
  (items) => memoize((itemId: string) => find(items, ['to', itemId])),
);
