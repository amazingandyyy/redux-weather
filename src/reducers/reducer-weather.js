import { FETCH_WEATHER } from '../actions/types';

export default function(state = [], action) {
  switch (action.types) {
    case FETCH_WEATHER:
      // return state.concat([ actions.payload.data ]);
      return [ action.payload.data, ...state];
  }
  return state;
}
