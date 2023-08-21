import openMenuHandler from "../handlers/openMenuHandler.js";

const openMenuListener = () => {
  window.addEventListener('load', () => {
    openMenuHandler();
  });
}

export default openMenuListener;