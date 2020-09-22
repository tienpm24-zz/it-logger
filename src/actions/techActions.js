import {
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
} from './type';

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs');

    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`);
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
