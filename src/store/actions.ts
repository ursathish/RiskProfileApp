export const addScore = score => ({
  type: 'ADD_SCORE',
  payload: score,
});

export const setRiskProfile = profile => ({
  type: 'SET_RISK_PROFILE',
  payload: profile,
});

export const resetScore = () => ({
  type: 'RESET_SCORE',
});
