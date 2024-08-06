const initialState = {
  score: 0,
  riskProfile: '',
};

export const riskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {...state, score: state.score + action.payload};
    case 'SET_RISK_PROFILE':
      return {...state, riskProfile: action.payload};
    case 'RESET_SCORE':
      return {
        ...state,
        score: 0,
        riskProfile: '',
      };
    default:
      return state;
  }
};
