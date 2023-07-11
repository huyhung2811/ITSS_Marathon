import { Input } from 'antd';
import { React, useState } from 'react';

export default function SearchTeacher({ teachers, setSearchData, setIsSearch, paginate }) {
    const [search, setSearch] = useState('');
    const searchTeacher = () => {
        const trimmedSearch = search.trim();

        if (trimmedSearch) {
            const listTeacher = teachers.filter((teacher) => {
                if (teacher.user_info.name.toLowerCase().includes(search.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            });

            if (listTeacher?.length > 0) {
                setSearchData(listTeacher);
                setIsSearch(true);
            } else {
                setSearchData(listTeacher);
                setIsSearch(false);
            }
        } else {
            setSearchData([]);
        }

        paginate(1);
        setSearch('');
    };
    return (
        <Input.Search
            placeholder="Search"
            onSearch={searchTeacher}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ margin: '10px 0' }}
        />
    );
}
