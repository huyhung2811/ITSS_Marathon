import React, { useState } from 'react';

const FilterComponent = ({ onSubmit }) => {
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = () => {
    const filterData = {
      time,
      location,
      level
    };
    onSubmit(filterData);
  };

  return (
    <div>
      <ul className = "filter-ul">
        <li>
        <label className='filter-component'>
        時間
        <input type="text" value={time} onChange={e => setTime(e.target.value)} />
      </label>
        </li>
     <li>
     <label className='filter-component'>
        料金
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
        </select>
      </label >
     </li>
      <li>
      <label className='filter-component'>
        場所
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
      </label>
      </li>
      <li>
      <label className='filter-component'>
      性別
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All</option>
          <option value="female">女</option>
          <option value="male">男</option>
        </select>
      </label >
      </li>
      <li>
      <label className='filter-component'>
      年齢
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label >
      </li>
      <li>
      <label className='filter-component'>
      目的
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All</option>
          <option value="goal1">目的1</option>
          <option value="goal2">目的2</option>
          <option value="goal3">目的3</option>
        </select>
      </label >
      </li>
      <li><label className='filter-component'>
        レベル
        <select className='filter-component' value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">All</option>
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="advanced">advanced</option>
        </select>
      </label >
      </li>
    <li>
    <div className='filter-component'>
      <button  onClick={handleSubmit}>Submit</button>
      </div>
    </li>
      </ul>
    </div>
  );
};

export default FilterComponent;
