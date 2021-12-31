const iconElement = document.querySelector('.fa-bars');
const menuList = document.querySelector(' .header .header_bottom .menu .list_menu');
const subMenuList = document.querySelector('.header_bottom .list_menu .list_item .sub_menu');
const iconDownElement = document.querySelector('.toggle-subMenu');

if (iconElement) {
  iconElement.addEventListener('click', handleToggleMenu);
}

function handleToggleMenu() {
  if (menuList) menuList.classList.toggle('active');
  if (!menuList.className.includes('active')) {
    subMenuList.classList.remove('show');
  }
}

if (iconDownElement) {
  iconDownElement.addEventListener('click', handleToggleSubMenu);
}

function handleToggleSubMenu() {
  if (subMenuList) {
    iconDownElement.classList.toggle('active');
    subMenuList.classList.toggle('show');
  }
}
