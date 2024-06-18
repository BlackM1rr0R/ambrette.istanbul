import About from "./pages/about";
import ParfumDetails from "./pages/antoniobanderas";
import BrendLogo from "./pages/brendlogo";
import BrendPerfume from "./pages/brendperfume";
import ContactOur from "./pages/contactour";
import DiorPerfume from "./pages/dior";
import Gender from "./pages/gender";
import GenderSelect from "./pages/genderselect";
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
  parfumdetails:routeItem(4,"parfumdetails","/parfum-details/:id",ParfumDetails),
  magazins:routeItem(5,"magazins","/magazins",MagazinsLocation),
  dior:routeItem(6,"dior","/brend/:brendId",DiorPerfume),
  brendlogo:routeItem(7,"brendlogo","/brends",BrendLogo),
  gender:routeItem(8,"gender","/gender",Gender),
  brendperfume:routeItem(9,"brend-perfume","/brend-perfume/:brendId",BrendPerfume),
  genderselected:routeItem(10,"genderselected","/gender-details/:gender",GenderSelect),
  contactour:routeItem(11,"contact","/contact",ContactOur)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
