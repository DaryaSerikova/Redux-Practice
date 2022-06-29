import { 
  UPDATE_COORDINATES
} from "../actions/actions";


export const clickCoordinates = (state = { x:0, y:0 }, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES: 
      return {
        x: action.x,
        y: action.y
      }; 
    

    default:
      return state;
  }
}