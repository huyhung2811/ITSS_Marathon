import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import image from '../../../assets/img/admin.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Pagination from '@mui/material/Pagination';
import { Button } from 'antd';

function Classes() {
    return (
        <Box sx={{ width: '87vw', display: 'flex', minHeight: '92vh', alignItems: 'center', flexDirection: 'column' }}>
            <Box width={'90%'} marginTop={'40px'}>
                <AddCircleIcon sx={{ width: '46px', height: '46px', color: '#3CBE59' }} />
            </Box>
            <Box width={'90%'} display={'flex'} textAlign={'center'}>
                <Box width={'22%'}>教師</Box>
                <Box width={'14%'}>クラス名</Box>
                <Box width={'14%'}>開始日</Box>
                <Box width={'14%'}>終了日</Box>
                <Box width={'14%'}>生徒の最大数</Box>
                <Box width={'14%'}>スターテス </Box>
                <Box width={'8%'}>
                    <input hidden />
                </Box>
            </Box>

            <Box
                marginTop={'28px'}
                width={'90%'}
                display={'flex'}
                textAlign={'center'}
                sx={{ backgroundColor: 'white', cursor: 'pointer' }}
                padding={'18px 10px'}
                borderRadius={'8px'}
            >
                <Box width={'22%'}>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Link href="/admin/class-detail">
                            <Avatar variant="rounded" src={image} />
                        </Link>
                        minami aizawa
                    </Box>
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    A1
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    2023/04/03{' '}
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    2023/06/30
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    20/30
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <CheckBoxIcon />
                </Box>
                <Box width={'8%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                </Box>
            </Box>
            <Box
                marginTop={'28px'}
                width={'90%'}
                display={'flex'}
                textAlign={'center'}
                sx={{ backgroundColor: 'white', cursor: 'pointer' }}
                padding={'18px 10px'}
                borderRadius={'8px'}
            >
                <Box width={'22%'}>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Link href="/admin/class-detail">
                            <Avatar variant="rounded" src={image} />
                        </Link>
                        minami aizawa
                    </Box>
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    A1
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    2023/04/03{' '}
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    2023/06/30
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    20/30
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <CheckBoxIcon />
                </Box>
                <Box width={'8%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                </Box>
            </Box>
            <Box
                marginTop={'28px'}
                width={'90%'}
                display={'flex'}
                textAlign={'center'}
                sx={{ backgroundColor: 'white', cursor: 'pointer' }}
                padding={'18px 10px'}
                borderRadius={'8px'}
            >
                <Box width={'22%'}>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Link href="/admin/class-detail">
                            <Avatar variant="rounded" src={image} />
                        </Link>
                        minami aizawa
                    </Box>
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    A1
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    2023/04/03{' '}
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    2023/06/30
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    20/30
                </Box>
                <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <CheckBoxIcon />
                </Box>
                <Box width={'8%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                </Box>
            </Box>
            <Box sx={{ marginTop: 'auto', paddingBottom: '20px' }}>
                <Pagination count={3} variant="outlined" shape="rounded" />
            </Box>
        </Box>
    );
}

export default Classes;
