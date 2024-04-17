export const userReducer = (userInfo, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return { ...userInfo, [action.name]: action.payload.value };
    default:
      return userInfo;
  }
};
