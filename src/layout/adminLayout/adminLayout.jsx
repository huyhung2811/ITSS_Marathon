import Footer from '../../components/admin/footer';
import Header from '../../components/admin/header';
import SideBar from '../../components/admin/sidebar';

function adminLayout({ children }) {
    return (
        <div style={{display: 'flex'}}>
            <SideBar />
            <div>
                <Header />
                <div style={{backgroundColor: '#F7F6F9', height: '92vh'}}>{children}</div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default adminLayout;
