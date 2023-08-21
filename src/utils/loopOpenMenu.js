import createMobileOpenMenu from "../components/createMobileOpenMenu.js";

const loopOpenMenu = () => {
    for (let i = 1; i <= 4; i++) {
        createMobileOpenMenu(i);
    }
};

export default loopOpenMenu;
