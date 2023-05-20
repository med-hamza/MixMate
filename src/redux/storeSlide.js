

import { configureStore } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  coverImages: [], // Initialize with an empty array
  currentSlideIndex: 0, // Initialize with the desired default index
};

// Define actions
export const SET_COVER_IMAGES = 'SET_COVER_IMAGES';
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';

// Define action creators
export const setCoverImages = (images) => ({
  type: SET_COVER_IMAGES,
  payload: images,
});

export const nextSlide = () => ({
  type: NEXT_SLIDE,
});

export const prevSlide = () => ({
  type: PREV_SLIDE,
});

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVER_IMAGES:
      return {
        ...state,
        coverImages: action.payload,
      };
    case NEXT_SLIDE:
      return {
        ...state,
        currentSlideIndex: state.currentSlideIndex + 1,
      };
    case PREV_SLIDE:
      return {
        ...state,
        currentSlideIndex: state.currentSlideIndex - 1,
      };
    default:
      return state;
  }
};

const storeSlide = configureStore({
  reducer,
  preloadedState: initialState,
});

export default storeSlide;
