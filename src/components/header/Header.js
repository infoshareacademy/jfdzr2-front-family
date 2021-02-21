import { Navigation } from "./Navigation";
import { IntroSection } from "./IntroSection";

import "./Header.css";

export const Header = () => {
  return <header className="app__header">
    <Navigation />
    <IntroSection />
  </header>
}