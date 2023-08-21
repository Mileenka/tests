import dom from "../dom.js";
import loopOpenMenu from "../utils/loopOpenMenu.js"

const openMenuHandler = () => {
    document.getElementById('mobileOpenMenu').innerText = '';
    dom.sound;
    loopOpenMenu();

}

export default openMenuHandler;