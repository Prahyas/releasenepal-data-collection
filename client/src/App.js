import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import Details from "./pages/Details/Details";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/termsandconditions" component={TermsAndConditions} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/submit" component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
