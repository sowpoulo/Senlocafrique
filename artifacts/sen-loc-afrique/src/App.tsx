import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import AchatVente from "./pages/AchatVente";
import AdminLogin from "./pages/AdminLogin";
import AdminVehicles from "./pages/AdminVehicles";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/flotte" component={Fleet} />
      <Route path="/a-propos" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/achat-vente" component={AchatVente} />     {/* ← DÉPLACÉ ICI */}
      <Route path="/contact" component={Contact} />
      <Route path="/temoignages" component={Testimonials} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/vehicles" component={AdminVehicles} />
      <Route component={NotFound} />                           {/* ← TOUJOURS EN DERNIER */}
    </Switch>
  );
}

export default App;
