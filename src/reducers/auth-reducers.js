import produce from "immer";
import { actionTypes } from "../actions";

export const initState = {
  profile: {
    userName: 'testuser123',
    email: 'demo@darius.com',
  },
};

const authReducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.UPDATE_USER_PROFILE:
        draft.profile = action.profile;
        break;

      case actionTypes.USER_LOGOUT_SUCCESS:
        draft.profile = {};
        break;
      default:
        break
    }
  });

export default authReducer;