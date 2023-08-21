
import dom from "../dom.js";
import openMenuHandler from "./openMenuHandler.js";

const navMenuCloseHandler = () => {
    dom.mobileCloseMenu.classList.add('displayNone');
    dom.mobileOpenMenu.classList.remove('displayNone');
    dom.ulNav.innerText = '';
    openMenuHandler();
    
};

export default navMenuCloseHandler;