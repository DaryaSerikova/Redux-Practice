import {
  ANIMATION_STATE_IS_START,
  ANIMATION_STATE_IS_END,
  ANIMATION_STATE_IS_EMPTY,
} from "../../actions/actions";


export const animationState = (state = 'start', action) => {
  switch (action.type) {
    case ANIMATION_STATE_IS_START: 
      return 'start'; 
    case ANIMATION_STATE_IS_END: 
      return 'end';
    case ANIMATION_STATE_IS_EMPTY: 
      return '';  

    default:
      return state;
  }
}