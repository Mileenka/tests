import dom from "../dom.js";
import navMenuHandler from "../handlers/navMenuHandler.js";

const navMenuListener = () => {
    dom.mobileOpenMenu.addEventListener('click', navMenuHandler);
};

export default navMenuListener;