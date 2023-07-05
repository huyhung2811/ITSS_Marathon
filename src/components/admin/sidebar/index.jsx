import logo from '../../../assets/img/image 1.png'
import Button from '@mui/material/Button';

function SideBar() {
    return <div style={{ width: '13vw', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <img src={logo} alt="" />
        <Button variant="text">教師を管理</Button>
        <Button variant="text">クラスを管理</Button>
    </div>;
}

export default SideBar;
