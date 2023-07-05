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

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName1(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange1 = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <ArrowCircleLeftIcon
                sx={{ marginTop: '16px', marginLeft: '30px', height: '48px', width: '48px', color: '#40C03D' }}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    margin: '10px 30px 30px 30px',
                    paddingBottom: '30px',
                    borderRadius: '8px',
                    color: '#0F5204'
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
                                        value={age}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>クラス名 :</span>
                            <TextField id="outlined-basic" size="small" variant="outlined" />
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>生徒の最大数 : </span>
                            <TextField id="outlined-basic" size="small" variant="outlined" />
                        </Box>
                    </Box>
                    <Box display={'flex'} marginTop={'26px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>開始日 : </span>
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ width: '80%' }} />
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
                                        value={age}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
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
                                    <DatePicker sx={{ width: '80%' }} />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box width={'50%'} display={'flex'} alignItems={'center'}>
                            <span style={{ width: '30%' }}>学費 : </span>
                            <Box sx={{ width: '200px' }}>
                                <FormControl fullWidth>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
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
                                        value={age}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
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
                                        value={age}
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
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
                                    value={personName}
                                    onChange={handleChange1}
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
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                            {name}
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
                                    value={personName1}
                                    onChange={handleChange2}
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
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default CreatClass;
