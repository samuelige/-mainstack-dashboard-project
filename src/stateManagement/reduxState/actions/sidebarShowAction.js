import sidebarShow from "../constants/sidebarShow";

const sidebarShowAction = (payload) => ({
    type: sidebarShow.SET,
    payload,
});

export default sidebarShowAction;
