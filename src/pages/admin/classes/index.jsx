import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import image from '../../../assets/img/admin.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Classes() {
    const [classes, setClasses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [load, setLoad] = useState(false);
    const [isChecked, setIsChecked] = useState({});

    const handleCheckboxClick = (classId) => {
        setIsChecked((prevState) => ({
            ...prevState,
            [classId]: !prevState[classId],
          }));
    };
    // const [classesInPage, setClassesInPage] = useState([]);
    const pageSize = 4;
    useEffect(() => {
        async function fetchClasses() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get-all-class');
                setClasses(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchClasses();
        setLoad(false);

    }, [load]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleDeleteClass = (id) => {
        setLoad(true);
        axios
        .delete(`http://127.0.0.1:8000/api/delete-class/${id}`,)
        .then((response) => {
            console.log('thanh cong');
        })
        .catch((error) => {
            console.log('loi');
        });
    }

    const currentClasses = classes.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalItems = classes.length;

    return (
        <Box sx={{ width: '87vw', display: 'flex', minHeight: '92vh', alignItems: 'center', flexDirection: 'column' }}>
            <Box width={'90%'} marginTop={'40px'}>
                <Link to={'/admin/create-class'}><AddCircleIcon sx={{ width: '46px', height: '46px', color: '#3CBE59' }} /></Link>
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
            {currentClasses?.map((item, index) => (
                <Box
                    key={index}
                    marginTop={'28px'}
                    width={'90%'}
                    display={'flex'}
                    textAlign={'center'}
                    sx={{ backgroundColor: 'white' }}
                    padding={'18px 10px'}
                    borderRadius={'8px'}
                >
                    <Box width={'22%'}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Avatar sx={{ marginLeft: '20px' }} variant="rounded" src={image} />
                            <span style={{ marginRight: '10px' }}>{item?.teacher_name}</span>
                        </Box>
                    </Box>
                    <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        {item?.level}
                    </Box>
                    <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        {item?.start_date}
                    </Box>
                    <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        {item?.end_date}
                    </Box>
                    <Box width={'14%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        {item?.current_student}/{item?.max_student}
                    </Box>
                    <Box
                        width={'14%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        onClick={() => handleCheckboxClick(item.id)}
                        >
                        {!isChecked[item.id] ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        </Box>
                    <Box width={'8%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <DeleteOutlineIcon sx={{ color: '#FEAF00' }}  onClick={()=>handleDeleteClass(item.id)}/>
                    </Box>
                </Box>
            ))}
            
            <Box sx={{ marginTop: 'auto', paddingBottom: '20px' }}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalItems}
                    onChange={handlePageChange}
                />
            </Box>
        </Box>
    );
}

export default Classes;
