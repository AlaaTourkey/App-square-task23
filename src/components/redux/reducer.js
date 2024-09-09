export function reducer(state , action) {
  console.log(action);

  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, authToken: action.payload.token };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, authToken: null, user: 'tourkey' };
    case 'SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
}




