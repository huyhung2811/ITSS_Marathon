import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import Button from '@mui/material/Button';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const days = [
    { name: '日曜日', value: 'Sunday' },
    { name: '月曜日', value: 'Monday' },
    { name: '火曜日', value: 'Tuesday' },
    { name: '水曜日', value: 'Wednesday' },
    { name: '木曜日', value: 'Thursday' },
    { name: '金曜日', value: 'Friday' },
    { name: '土曜日', value: 'Saturday' },
];

const time_lots = [
    { name: 'シフト1', value: '1' },
    { name: 'シフト2', value: '2' },
    { name: 'シフト3', value: '3' },
    { name: 'シフト4', value: '4' },
    { name: 'シフト5', value: '5' },
    { name: 'シフト6', value: '6' },
    { name: 'シフト7', value: '7' },
    { name: 'シフト8', value: '8' },
    { name: 'シフト9', value: '9' },
    { name: 'シフト10', value: '10' },
    { name: 'シフト11', value: '11' },
    { name: 'シフト12', value: '12' },
    { name: 'シフト13', value: '13' },
    { name: 'シフト14', value: '14' },
];

function convertStringToArray(str, dateArray) {
    // Chuyển chuỗi thành mảng bằng cách tách các phần tử dựa trên dấu phẩy và xóa khoảng trắng thừa
    const dayList = str.split(',').map((day) => day.trim());

    // Lọc và lấy giá trị từ mảng dateArray dựa trên tên ngày trong dayList
    const resultArray = dayList.map((day) => {
        const foundDay = dateArray.find((item) => item.name === day);
        return foundDay ? foundDay.value : null;
    });

    // Lọc bỏ các giá trị null khỏi mảng kết quả
    const finalArray = resultArray.filter((value) => value !== null);

    return finalArray;
}

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

function CreatClass() {
    const theme = useTheme();
    const [age, setAge] = React.useState('');
    const [personName, setPersonName] = React.useState([]);
    const [personName1, setPersonName1] = React.useState([]);
    const [listTeacher, setListTeacher] = React.useState([]);
    const [teacher, setTeacher] = React.useState({});
    const [type, setType] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [purpose, setPurpose] = React.useState('');
    const [className, setClassName] = React.useState('');
    const [date, setDate] = React.useState([]);
    const [time, setTime] = React.useState([]);
    const [count, setCount] = React.useState('');
    const [start, setStart] = React.useState(null);
    const [end, setEnd] = React.useState(null);
    const [price, setPrice] = React.useState(null);

    const handleCreate = () => {
        console.log('teacher ');
        console.log(teacher);
        console.log('type ' + type);
        console.log('level ' + level);
        console.log('purpose ' + purpose);
        console.log('className ' + className);
        console.log('date ' + date);
        console.log(date);
        const dayRes = date.map((name) => {
            const foundItem = days.find((item) => item.name === name);
            return foundItem ? foundItem.value : null;
        });
        const timeRes = time.map((name) => {
            const foundItem = time_lots.find((item) => item.name === name);
            return foundItem ? foundItem.value : null;
        });
        console.log(timeRes);
        // console.log('date ' + convertStringToArray(date, days));
        console.log('time ' + time);
        console.log('count ' + count);
        console.log('start ' + start);
        // console.log(format(start, 'dd/MM/yyyy'))
        console.log(format(start.toDate(), 'yyyy-MM-dd'));
        console.log('end ' + end);
        console.log('price ' + price);

        const formData = {
            teacher_id: teacher.id,
            name: className,
            goal: purpose,
            start_date: format(start.toDate(), 'yyyy-MM-dd'),
            end_date: format(end.toDate(), 'yyyy-MM-dd'),
            max_student: count,
            type: type,
            fee: price,
            level: level,
            day: dayRes,
            time_slot: timeRes,
        };

        axios.post('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/create-class', formData).then(() => {
            setTeacher({})
            setType('')
            setLevel('')
            setPurpose('')
            setClassName('')
            setDate([])
            setTime([])
            setCount('')
            setStart(null);
            setEnd(null)
            setPrice('')
        });
    };

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName1(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeDate = (event) => {
        const {
            target: { value },
        } = event;
        setDate(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeTime = (event) => {
        const {
            target: { value },
        } = event;
        setTime(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeTeacher = (event) => {
        setTeacher(event.target.value);
    };

    React.useEffect(() => {
        axios.get('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/teacher').then((res) => {
            setListTeacher(res.data.data);
        });
    }, []);

    const handleChangeType = (e) => {
        setType(e.target.value);
    };

    const handleChangeLevel = (e) => {
        setLevel(e.target.value);
    };

    const handleChangePurpose = (e) => {
        setPurpose(e.target.value);
    };

    return (
        <div>
            <Link to={'/admin/class'}>
                <ArrowCircleLeftIcon
                    sx={{ marginTop: '16px', marginLeft: '30px', height: '48px', width: '48px', color: '#40C03D' }}
                />
            </Link>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    margin: '10px 30px 30px 30px',
                    paddingBottom: '30px',
                    borderRadius: '8px',
                    color: '#0F5204',
                }}
            >
                <Box width={'70%'}>
                    <h2
                        style={{
                            textAlign: 'center',
                            color: '#0F5204',
                            fontWeight: '600',
                            margin: '30px 0',
                            minHeight: '',
                        }}
                    >
                        新しいクラスを追加する
                    </h2>
                    <Box display={'flex'} marginTop={'26px'} alignItems={'center'}>
                        <Box width={'50%'} display={'flex'}>
                            <span style={{ width: '30%', textAlign: 'left' }}>教師 : </span>
                            <Box sx={{ width: '200px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={teacher}
                                        onChange={handleChangeTeacher}
                                        size="small"
                                    >
                                        {listTeacher?.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item}>
                                                    {item?.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>クラス名 :</span>
                            <TextField
                                value={className}
                                onChange={(e) => {
                                    setClassName(e.target.value);
                                }}
                                id="outlined-basic"
                                size="small"
                                variant="outlined"
                            />
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>生徒の最大数 : </span>
                            <TextField
                                value={count}
                                onChange={(e) => {
                                    setCount(e.target.value);
                                }}
                                id="outlined-basic"
                                size="small"
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>開始日 : </span>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        sx={{ width: '80%' }}
                                        value={start}
                                        onChange={(e) => {
                                            setStart(e);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>式 : </span>
                            <Box sx={{ width: '200px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        onChange={handleChangeType}
                                        size="small"
                                    >
                                        <MenuItem value={'online'}>オンライン</MenuItem>
                                        <MenuItem value={'offline'}>オフライン</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>終了日 : </span>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        sx={{ width: '80%' }}
                                        value={end}
                                        onChange={(e) => {
                                            setEnd(e);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>学費 : </span>
                            {/* <Box sx={{ width: '200px' }}> */}
                            <TextField
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                id="outlined-basic"
                                size="small"
                                variant="outlined"
                            />
                            {/* </Box> */}
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>レベル : </span>
                            <Box sx={{ width: '200px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={level}
                                        onChange={handleChangeLevel}
                                        size="small"
                                    >
                                        <MenuItem value={'A1'}>A1</MenuItem>
                                        <MenuItem value={'A2'}>A2</MenuItem>
                                        <MenuItem value={'B1'}>B1</MenuItem>
                                        <MenuItem value={'B2'}>B2</MenuItem>
                                        <MenuItem value={'C1'}>C1</MenuItem>
                                        <MenuItem value={'C2'}>C2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>目的 : </span>
                            <Box sx={{ width: '200px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={purpose}
                                        onChange={handleChangePurpose}
                                        size="small"
                                    >
                                        <MenuItem value={'仕事に行く'}>仕事に行く</MenuItem>
                                        <MenuItem value={'勉強'}>勉強</MenuItem>
                                        <MenuItem value={'試験に受ける'}>試験に受ける</MenuItem>
                                        <MenuItem value={'基本的なコミュニケーション'}>
                                            基本的なコミュニケーション
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>曜日 :</span>
                            <FormControl sx={{ width: 200 }}>
                                <Select
                                    // labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={date}
                                    onChange={handleChangeDate}
                                    input={<OutlinedInput id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {days.map((item) => (
                                        <MenuItem
                                            key={item?.name}
                                            value={item?.name}
                                            style={getStyles(item?.name, date, theme)}
                                        >
                                            {item?.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>時間 : </span>
                            <FormControl sx={{ width: 200 }}>
                                <Select
                                    // labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={time}
                                    onChange={handleChangeTime}
                                    input={<OutlinedInput id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {time_lots.map((item) => (
                                        <MenuItem
                                            key={item?.name}
                                            value={item?.name}
                                            style={getStyles(item?.name, time, theme)}
                                        >
                                            {item?.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
                <Button variant="contained" onClick={handleCreate}>
                    サブミット
                </Button>
            </Box>
        </div>
    );
}

export default CreatClass;
