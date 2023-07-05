import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Question.css';
import { Avatar } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const YourComponent = () => {
    const [address, setAddress] = useState('');
    const [level, setLevel] = useState('A1');
    const [salary, setSalary] = useState('');
    const handleSave = () => {
        const data = {
            user_id: 1,
            salary: parseFloat(salary),
            // salary: 100000,
            address: 'Ba Dinh',
            level: level,
        };
        console.log(data);

        axios
            .put('http://127.0.0.1:8000/api/question', data)
            .then((response) => {
                // Handle the API response here
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error here
                console.error(error);
            });
    };

    return (
        <Box
            sx={{
                borderRadius: '12px',
                padding: '32px 32px 84px 32px',
                margin: '32px 64px -4px 64px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '552px',
                backgroundColor: '#e7e7e7',
                border: 'none',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'around' }}>
                <Box sx={{ width: '50%', marginRight: '20px', textAlign: 'center' }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ marginBottom: '10px', marginTop: '28px', fontWeight: 'bold', fontSize: '24px' }}
                    >
                        マラソン教育へようこそ
                    </Typography>
                    <Avatar
                        src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/54521985_1061480490726726_9178721887558041600_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=52vSRRF-aysAX_LDpnu&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDVc61d4u6Yg9-ymStOaSlS_fqAUwyJUNNEDoYoQygRPA&oe=64CA84F5"
                        style={{
                            width: '574px',
                            height: '372px',
                            borderRadius: '32px',
                            marginTop: '0px',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: '44%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        border: '1px solid lightgray',
                        borderRadius: '24px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        height: '488px',
                        padding: '12px 60px',
                        backgroundColor: '#514c4c',
                    }}
                >
                    <Typography sx={{ margin: '16px 0px', color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                        現在どの地域にお住まいですか?
                    </Typography>
                    <input
                        type="text"
                        className="inputField"
                        placeholder="場所"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Typography sx={{ margin: '16px 0px', color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                        ベトナム語の現在のレベルはどれくらいですか?
                    </Typography>
                    <div>
                        <select
                            id="level"
                            className="inputField"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                        >
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                        </select>
                    </div>
                    <Typography sx={{ margin: '16px 0px', color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                        希望料金料金はいくらですか？
                    </Typography>
                    <input
                        type="text"
                        className="inputField"
                        placeholder="希望料金を入力"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                    <Button
                        sx={{
                            marginTop: '36px',
                            width: '30%',
                            padding: '8px 12px',
                            margin: '24px auto 0px',
                            backgroundColor: ' white',
                            color: ' black',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            borderRadius: '12px',
                        }}
                        variant="contained"
                        onClick={handleSave}
                    >
                        さあ行こう
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default YourComponent;
