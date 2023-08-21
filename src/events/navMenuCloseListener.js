import dom from "../dom.js";
import navMenuCloseHandler from "../handlers/navMenuCloseHandler.js";

const navMenuCloseListener = () => {
    dom.mobileCloseMenu.addEventListener('click', navMenuCloseHandler);

    document.querySelector('body').addEventListener('click', (e) => {
        if(!e.target.closest('.mobileOpenMenu')) {
            navMenuCloseHandler();
        }
        
    })
};

export default navMenuCloseListener;
