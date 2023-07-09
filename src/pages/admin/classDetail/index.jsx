import { Box, Typography } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Pagination from '@mui/material/Pagination';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CreateIcon from '@mui/icons-material/Create';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const style3 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
    const { id } = useParams();
    const [openDelete1, setOpenDelete1] = React.useState(false);
    const [openDelete2, setOpenDelete2] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpen1 = () => setOpenDelete1(true);
    const handleClose1 = () => setOpenDelete1(false);

    const handleOpen2 = () => setOpenDelete2(true);
    const handleClose2 = () => setOpenDelete2(false);

    const handleOpen3 = () => setOpenAdd(true);
    const handleClose3 = () => setOpenAdd(false);

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);

    const [classes, setClasses] = useState([]);
    const [items1, setItems1] = useState([]);
    const [items2, setItems2] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        async function fetchClasses() {
            try {
                const response = await axios.get(
                    'https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/get-all-class',
                );
                setClasses(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchClasses();
    }, []);

    const classe = classes.find((classe) => classe.id === parseInt(id));

    useEffect(() => {
        async function getAllMember() {
            try {
                const response = await axios.post(
                    'https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/get-member-class',
                    {
                        status: 1,
                        class_id: id,
                    },
                );
                setItems1(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMember();
        setLoad(false);
    }, [load]);

    useEffect(() => {
        async function getAllMember() {
            try {
                const response = await axios.post(
                    'https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/get-member-class',
                    {
                        status: 0,
                        class_id: id,
                    },
                );
                setItems2(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMember();
        setLoad(false);
    }, [load]);

    const handlePutMemmber = (id) => {
        setLoad(true);
        axios
            .put('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/check-request', {
                id: id,
            })
            .then((response) => {
                console.log('thanh cong');
            })
            .catch((error) => {
                console.log('loi');
            });
    };

    const handleDeleteMemmber = (id) => {
        setLoad(true);
        axios
            .delete(`https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/delete-request/${id}`)
            .then((response) => {
                console.log('thanh cong');
            })
            .catch((error) => {
                console.log('loi');
            });
    };

    return (
        <Box
            sx={{
                width: '87vw',
                display: 'flex',
                minHeight: '120vh',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgb(247, 246, 249)',
            }}
        >
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
                        textAlign: 'center',
                    }}
                >
                    クラス詳細
                    <Typography
                        sx={{
                            color: '#0F5204',
                            fontSize: '20px',
                            fontWeight: '700',
                            alignItems: 'left',
                            display: 'flex',
                            marginLeft: '50px',
                            textAlign: 'center',
                            marginTop: '8px',
                        }}
                    >
                        教師 : {classe && classe.teacher_name}
                    </Typography>
                </Typography>

                {classe && (
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
                                        クラス名 : {classe.level}
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        開始日 : {classe.start_date}
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        終了日 : {classe.end_date}
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        生徒の最大数 : {classe.max_student} 名
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        式 : {classe.type}
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        レベル : {classe.level}
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid xs={4} sx={{ paddingRight: '150px' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '60px',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography sx={{ color: '#0F5204', fontSize: '15px', fontWeight: '700' }}>
                                        目的 : {classe.goal}
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
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
                                        学費 : {classe.fee} VND/人
                                    </Typography>
                                    <CreateIcon
                                        sx={{
                                            width: '14.25px',
                                            height: '13.458px',
                                            color: '#9C9292',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                )}
            </Box>
            <Box sx={{ marginTop: '20px' }}>
                <Button1
                    sx={{ marginRight: '250px', alignItems: 'left' }}
                    onClick={() => (setOpen1(true), setOpen2(false))}
                >
                    見直した
                </Button1>
                <Button2 onClick={() => (setOpen2(true), setOpen1(false))}>承認待ち</Button2>
            </Box>
            {open1 && (
                <Box sx={{ alignItems: 'left', marginTop: '40px', marginBottom: '20px' }}>
                    <Typography sx={{ color: '#0F5204', fontSize: '30px', fontWeight: '700', marginRight: '1000px' }}>
                        {classe && classe.level} クラスの学生一覧
                    </Typography>
                </Box>
            )}
            {open2 && (
                <Box sx={{ alignItems: 'left', marginTop: '40px', marginBottom: '20px' }}>
                    <Typography sx={{ color: '#0F5204', fontSize: '30px', fontWeight: '700', marginRight: '1000px' }}>
                        {classe && classe.level} 承認待ち
                    </Typography>
                </Box>
            )}
            <Box width={'90%'} display={'flex'} textAlign={'center'}>
                <Box width={'20%'}>アバター </Box>
                <Box width={'20%'}>名前</Box>
                <Box width={'40%'}>メール</Box>
                <Box width={'20%'}>
                    <input hidden />
                </Box>
            </Box>

            {items1 &&
                open1 &&
                items1.map((item, index) => (
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
                                <Avatar variant="rounded" src={item.avatar} />
                                {item.name}
                            </Box>
                        </Box>
                        <Box width={'40%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            {item.email}
                        </Box>

                        <div>
                            <Button
                                width={'10%'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                sx={{ cursor: 'pointer' }}
                                onClick={handleOpen1}
                            >
                                <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                            </Button>

                            <Modal
                                open={openDelete1}
                                onClose={handleClose1}
                                aria-labelledby="modal-modal-title1"
                                aria-describedby="modal-modal-description1"
                            >
                                <Box sx={style1}>
                                    <Typography
                                        id="modal-modal-title1"
                                        variant="h6"
                                        component="h2"
                                        sx={{ textAlign: 'center' }}
                                    >
                                        生徒をクラスから削除することを確認する ?
                                    </Typography>
                                    <Typography
                                        id="modal-modal-description1"
                                        sx={{
                                            mt: 2,
                                            justifyContent: 'space-between',
                                            display: 'flex',
                                            padding: ' 0 40px',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={() => (handleDeleteMemmber(item.id), setOpenDelete1(false))}
                                        >
                                            DELETE
                                        </Button>
                                        <Button variant="outlined" color="error" onClick={handleClose1}>
                                            CANCEL
                                        </Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </Box>
                ))}

            {items2 &&
                open2 &&
                items2.map((item) => (
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
                                <Avatar variant="rounded" src={item.avatar} />
                                {item.name}
                            </Box>
                        </Box>
                        <Box width={'40%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            {item.email}
                        </Box>

                        <div>
                            <Button
                                width={'10%'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                sx={{ cursor: 'pointer' }}
                                onClick={handleOpen3}
                            >
                                <AddCircleIcon sx={{ color: '#0276FD' }} />
                            </Button>

                            <Modal
                                open={openAdd}
                                onClose={handleClose3}
                                aria-labelledby="modal-modal-title2"
                                aria-describedby="modal-modal-description2"
                            >
                                <Box sx={style3}>
                                    <Typography
                                        id="modal-modal-title2"
                                        variant="h6"
                                        component="h2"
                                        sx={{ textAlign: 'center' }}
                                    >
                                        クラスへの生徒の追加を確認しますか ?
                                    </Typography>
                                    <Typography
                                        id="modal-modal-description2"
                                        sx={{
                                            mt: 2,
                                            justifyContent: 'space-between',
                                            display: 'flex',
                                            padding: ' 0 40px',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={() => (handlePutMemmber(item.id), setOpenAdd(false))}
                                        >
                                            ADD
                                        </Button>
                                        <Button variant="outlined" color="error" onClick={handleClose3}>
                                            CANCEL
                                        </Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>

                        <div>
                            <Button
                                width={'10%'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                sx={{ cursor: 'pointer' }}
                                onClick={handleOpen2}
                            >
                                <DeleteOutlineIcon sx={{ color: '#FEAF00' }} />
                            </Button>

                            <Modal
                                open={openDelete2}
                                onClose={handleClose2}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style2}>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                        sx={{ textAlign: 'center' }}
                                    >
                                        生徒をクラスから削除することを確認する ?
                                    </Typography>
                                    <Typography
                                        id="modal-modal-description"
                                        sx={{
                                            mt: 2,
                                            justifyContent: 'space-between',
                                            display: 'flex',
                                            padding: ' 0 40px',
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={() => (handleDeleteMemmber(item.id), setOpenDelete2(false))}
                                        >
                                            DELETE{' '}
                                        </Button>
                                        <Button variant="outlined" color="error" onClick={handleClose2}>
                                            CANCEL
                                        </Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </Box>
                ))}
            {/* <Box sx={{ marginTop: 'auto', paddingBottom: '20px' }}>
                <Pagination count={3} variant="outlined" shape="rounded" />
            </Box> */}
        </Box>
    );
}

export default ClassDetail;
