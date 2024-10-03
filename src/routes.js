import About from "./pages/about";
import ParfumDetails from "./pages/antoniobanderas";
import BrendLogo from "./pages/brendlogo";
import BrendPerfume from "./pages/brendperfume";
import ContactOur from "./pages/contactour";
import DiorPerfume from "./pages/dior";
import Gender from "./pages/gender";
import GenderSelected from "./pages/genderselected";
import Home from "./pages/home";
import MagazinsLocation from "./pages/magazins";
import NotFound from "./pages/notFound";
import AllPerfume from "./pages/allperfume";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home, { title: "Home - Perfume Shop", description: "Welcome to the best perfume shop." }),
  about: routeItem(2, 'about', "/about", About, { title: "About Us - Perfume Shop", description: "Learn more about our perfume shop." }),
  notFound: routeItem(3, 'notFound', "*", NotFound, { title: "404 - Page Not Found", description: "Page not found." }),
  parfumdetails: routeItem(4, 'parfumdetails', "/parfum-details/:id", ParfumDetails, { title: "Perfume Details", description: "Discover the perfume details here." }),
  magazins: routeItem(5, 'magazins', "/magazins", MagazinsLocation, { title: "Magazins Location", description: "Find the nearest perfume store location." }),
  dior: routeItem(6, 'dior', "/brend/:brendId", DiorPerfume, { title: "Dior Perfume Collection", description: "Explore the Dior perfume collection." }),
  brendlogo: routeItem(7, 'brendlogo', "/brends", BrendLogo, { title: "Perfume Brands", description: "Browse through different perfume brands." }),
  gender: routeItem(8, 'gender', "/gender/:genderType", Gender, { title: "Perfumes by Gender", description: "Explore perfumes by gender." }),
  brendperfume: routeItem(9, 'brendperfume', "/brend-perfume/:brendId", BrendPerfume, { title: "Perfumes by Brand", description: "Check out the perfumes of selected brand." }),
  genderselected: routeItem(10, 'genderselected', "/genderselected", GenderSelected, { title: "Selected Gender Perfumes", description: "Perfumes selected by gender." }),
  contactour: routeItem(11, 'contact', "/contact", ContactOur, { title: "Contact Us", description: "Get in touch with us." }),
  allperfumes: routeItem(12, 'allperfumes', "/allperfumes", AllPerfume, { title: "All Perfumes", description: "Browse all perfumes." })
};


const routeArr = Object.values(routes);

export { routes, routeArr };
