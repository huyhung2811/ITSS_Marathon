import React from "react";

function Pagination ({ teacherPerPage, totalTeachers, paginate, setTeacherPerPage}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalTeachers/teacherPerPage); i++ ){
        pageNumbers.push(i)
    }

    const handleChange = (event) => {
        const perPage = parseInt(event.target.value);
        setTeacherPerPage(perPage);
        paginate(1);
      };

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number=>(
                        <li key={number} className="pagination-item">
                            <a onClick ={()=>paginate(number)} href = "#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))
                }
                <select value = {teacherPerPage} onChange={handleChange}>
                    <option value="8">8</option>
                    <option value="16">16</option>
                </select>
            </ul>
        </nav>
    )
}

export default Pagination;