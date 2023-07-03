import Footer1 from "../../components/Footer1";
import Header from "../../components/Header1";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header/>
            {children}
            <Footer1/>
        </div>
    );
}

export default DefaultLayout;
