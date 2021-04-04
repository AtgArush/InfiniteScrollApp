import types from '../types';

const intialState = {
  cardList: [],
};

export default function (state = intialState, action) {
  let {cardList} = state;
  switch (action.type) {
    case types.GET_DATA_FROM_API:
      cardList = [...action.payload];
      return {
        ...state,
        cardList: cardList,
      };
    case types.LOAD_MORE_DATA:
      return {
        ...state,
      };
    case types.LOGOUT:
      return {
        ...state,
        cardList: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
