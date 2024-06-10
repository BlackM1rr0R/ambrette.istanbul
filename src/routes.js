import About from "./pages/about";
import AntonioBanderas from "./pages/antoniobanderas";
import DiorPerfume from "./pages/dior";
import Home from "./pages/home";
import MagazinsLocation from "./pages/magazins";
import NotFound from "./pages/notFound";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  antoniobanderas:routeItem(4,"antoniobanderas","/antonio",AntonioBanderas),
  magazins:routeItem(5,"magazins","/magazins",MagazinsLocation),
  dior:routeItem(6,"dior","/dior",DiorPerfume)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
