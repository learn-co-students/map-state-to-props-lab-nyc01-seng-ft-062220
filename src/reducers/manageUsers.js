export default function manageUsers(state = {
  users: [ {username: 'Spiderman', hometown: 'New York City'} ],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
