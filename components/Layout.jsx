import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Nav />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;