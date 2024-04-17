import { actionType } from "./initialValue";

export const userReducer = (userInfo, action) => {
  switch (action.type) {
    case actionType.updateInfo:
      return { ...userInfo, [action.name]: action.payload.value };
    default:
      return userInfo;
  }
};
