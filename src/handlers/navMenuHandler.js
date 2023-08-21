import dom from "../dom.js";
import data from "../data.js";
import createMobileNavMenu from "../components/createMobileNavMenu.js";

const navMenuHandler = () => {
    dom.mobileCloseMenu.classList.remove('displayNone');
    dom.mobileOpenMenu.classList.add('displayNone');
    for (const key in data.navListData) {
        const navListKey = data.navListData[key];
        createMobileNavMenu(navListKey.class, navListKey.href, navListKey.content);
    }
};

export default navMenuHandler;