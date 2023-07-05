import logo from '../../../assets/img/image 1.png'
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';

function SideBar() {
    return <div style={{ width: '13vw', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <img src={logo} alt="" />
        <Button sx={{marginTop: '20px'}} variant="text" startIcon={<DashboardIcon/>}>教師を管理</Button>
        <Button sx={{marginTop: '20px'}} href='/admin/class' variant="contained" startIcon={<SchoolIcon/>}>クラスを管理</Button>
    </div>;
}

export default SideBar;
