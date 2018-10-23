import { createGlobalStyle } from 'styled-components';
import Header from "../header";

const Layout = ({ children }) => (
    <React.Fragment>
      <Header />
      { children }
    </React.Fragment>
);

export default Layout;
