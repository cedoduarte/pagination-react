import logo from './logo.svg';
import './App.css';
import Data from "./data.json";
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordCountPerPage = 10;
  const lastIndex = currentPage * recordCountPerPage;
  const firstIndex = lastIndex - recordCountPerPage;
  const recordList = Data.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(Data.length / recordCountPerPage);
  const numberList = [...Array(pageCount + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== pageCount) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  }

  return (
    <div className="App">
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {recordList.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="pagination-page-buttons">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={previousPage}>Prev</a>
          </li>
          {
            numberList.map((number, index) => (
              <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={index}>
                <a href="#" className="page-link" onClick={() => changeCurrentPage(number)}>{number}</a>
              </li>
            ))
          }
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
