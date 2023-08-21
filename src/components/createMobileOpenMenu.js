const createMobileOpenMenu = (numOfPart) => {

    const mobileOpenMenu = document.getElementById('mobileOpenMenu');

    const openMenuIcon = document.createElement('div');
    openMenuIcon.classList.add('menu');
    openMenuIcon.classList.add(`menuPart${numOfPart}`);

    mobileOpenMenu.append(openMenuIcon);
}

export default createMobileOpenMenu;
