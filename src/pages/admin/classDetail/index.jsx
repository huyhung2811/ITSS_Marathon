import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import image from '../../../assets/img/admin.png';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Pagination from '@mui/material/Pagination';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Button1 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    borderRadius: '4px',
    width: '210px',
    height: '60px',
    fontWeight: '700',
    lineHeight: 1.5,
    backgroundColor: '#FEAF00',
    color: '#FFF',
    ':hover': {
        backgroundColor: '#ebaf2c',
        color: '#000',
    },
});
const Button2 = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    fontWeight: '700',
    borderRadius: '4px',
    width: '210px',
    height: '60px',
    lineHeight: 1.5,
    backgroundColor: 'rgba(254, 175, 0, 0.47)',
    color: 'rgba(0, 0, 0, 0.60)',
    ':hover': {
        backgroundColor: '#ebaf2c',
        color: '#000',
    },
});

function ClassDetail() {
    return (
        <Box sx={{ width: '87vw', display: 'flex', minHeight: '92vh', alignItems: 'center', flexDirection: 'column' }}>
            <Button
                href="/admin/class"
                width={'90%'}
                marginTop={'20px'}
                sx={{ alignItems: 'left', marginRight: '75vw' }}
            >
                <ArrowCircleLeftIcon sx={{ width: '46px', height: '46px', color: '#3CBE59' }} />
            </Button>

            <Box
                sx={{
                    width: '78vw',
                    minHeight: '250px',
                    flexShrink: '0',
                    borderRadius: '20px',
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: '#000',
                    backgroundColor: '#FFF',
                    padding: '20px',
                    marginTop: '10px',
                }}
            >
                <Typography
                    sx={{
                        color: '#0F5204',
                        fontSize: '30px',
                        alignItems: 'left',
                        fontWeight: '700',
                        display: 'flex',
                    }}
                >
                    クラス詳細
                </Typography>
                <Box sx={{ flexGrow: 1, paddingLeft: '40px' }}>
                    <Grid container spacing={2}>
                        <Grid xs={4} sx={{ paddingRight: '200px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    クラス名 : A1
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    開始日 : 2023/04/03
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    終了日 : 2023/06/01
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    曜日 : 月曜日
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                        </Grid>
                        <Grid xs={4} sx={{ paddingRight: '200px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    生徒の最大数 : 20 名
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    式 : オンライン
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    レベル : A2
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    時間 : シフト2
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                        </Grid>
                        <Grid xs={4} sx={{ paddingRight: '200px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '60px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    目的 : 仕事に行く
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                    学費 : 5.000.000 VND/人
                                </Typography>
                                <CreateIcon
                                    sx={{ width: '14.25px', height: '13.458px', color: '#9C9292', cursor: 'pointer' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{ marginTop: '20px' }}>
                <Button1 sx={{ marginRight: '250px', alignItems: 'left' }}>見直した</Button1>
                <Button2>承認待ち</Button2>
            </Box>
            <Box sx={{ alignItems: 'left', marginTop: '40px', marginBottom: '20px' }}>
                <Typography sx={{ color: '#0F5204', fontSize: '30px', fontWeight: '700', marginRight: '1000px' }}>
                    A1クラスの学生一覧
                </Typography>
            </Box>
            <Box width={'90%'} display={'flex'} textAlign={'center'}>
                <Box width={'20%'}>アバター </Box>
                <Box width={'20%'}>名前</Box>
                <Box width={'40%'}>メール</Box>
                <Box width={'20%'}>
                    <input hidden />
                </Box>
            </Box>
            <Box
                marginTop={'15px'}
                width={'90%'}
                display={'flex'}
                textAlign={'center'}
                sx={{ backgroundColor: 'white' }}
                padding={'18px 10px'}
                borderRadius={'8px'}
            >
                <Box width={'40%'}>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Avatar variant="rounded" src={image} />
                        Karthi
                    </Box>
                </Box>
                <Box width={'40%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    Karthi@mail.comcom
                </Box>

                <Box width={'10%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                </Box>
            </Box>
            <Box
                marginTop={'15px'}
                width={'90%'}
                display={'flex'}
                textAlign={'center'}
                sx={{ backgroundColor: 'white' }}
                padding={'18px 10px'}
                borderRadius={'8px'}
            >
                <Box width={'40%'}>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Avatar variant="rounded" src={image} />
                        Madam
                    </Box>
                </Box>
                <Box width={'40%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    madam@mail.comcom
                </Box>

                <Box width={'10%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                </Box>
            </Box>
            <Box
                marginTop={'15px'}
                width={'90%'}
                display={'flex'}
                textAlign={'center'}
                sx={{ backgroundColor: 'white' }}
                padding={'18px 10px'}
                borderRadius={'8px'}
                marginBottom={'30px'}
            >
                <Box width={'40%'}>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Avatar variant="rounded" src={image} />
                        Madam
                    </Box>
                </Box>
                <Box width={'40%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    madam@mail.comcom
                </Box>

                <Box width={'10%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                </Box>
            </Box>
            <Box sx={{ marginTop: 'auto', paddingBottom: '20px' }}>
                <Pagination count={3} variant="outlined" shape="rounded" />
            </Box>
        </Box>
    );
}

export default ClassDetail;
