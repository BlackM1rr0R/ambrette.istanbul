import About from "./pages/about";
import AntonioBanderas from "./pages/antoniobanderas";
import Home from "./pages/home";
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
  antoniobanderas:routeItem(4,"antoniobanderas","/antonio",AntonioBanderas)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
