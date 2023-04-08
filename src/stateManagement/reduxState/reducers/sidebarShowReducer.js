import sidebarShow from "../constants/sidebarShow";

const initialState = {
  sidebarShow: "responsive",
};

const sidebarShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case sidebarShow.SET:
      return {
        ...state,
        sidebarShow: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarShowReducer;
