import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/type';

const inititalState = {
  techs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
