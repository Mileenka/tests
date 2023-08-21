const createMobileNavMenu = (className, href, content) => {
    const ulNav = document.getElementById('ulNav');

    const navList = document.createElement('li');
    navList.classList.add('navList');
    navList.classList.add(className);

    const navLink = document.createElement('a');
    navLink.href = href;

    const contentLink = document.createElement('span');
    contentLink.classList.add('contentLink');

    contentLink.innerText = content;


    navLink.append(contentLink);
    navList.append(navLink);
    ulNav.append(navList);

}

export default createMobileNavMenu;
