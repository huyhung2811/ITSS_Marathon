import Footer1 from "../../components/Footer1";
import GuestHeader from "../../components/HeaderGuest";

function GuestLayout({ children }) {
    return (
        <div>
            <GuestHeader/>
            {children}
            <Footer1/>
        </div>
    );
}

export default GuestLayout;
