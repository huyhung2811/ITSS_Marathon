import Avatar from '@mui/material/Avatar';
import avatar from '../../../assets/img/Ellipse 40.png'

function Header() {
    return ( <div style={{width: '87vw', backgroundColor: 'white', height: '8vh', display: 'flex', alignItems: 'center'}}>
        <div style={{width: '100%'}}><Avatar sx={{float: 'right', marginRight: '16px'}} src={avatar} /></div>
    </div> );
}

export default Header;