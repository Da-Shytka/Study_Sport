export const menuData = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Загрузка изображений",
    href: "/imageGallery",
  },
  {
    title: "Aдмин",
    href: "/admin",
  },
];

export const buttonsData = [
  {
    title: "Войти",
    href: "#",
    isPrimary: false,
  },
  {
    title: "Регистрация",
    href: "#",
    isPrimary: true,
  },
];

export const logoData = {
  alt: "logo",
  src: "./assets/img/logo.png",
  href: "#",
};

const headerData = {
  logoData,
  menuData,
  buttonsData,
};

export default headerData;
