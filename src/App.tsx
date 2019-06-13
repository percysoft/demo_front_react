import React, { useEffect, useState} from 'react';
import './App.css';
import { studentServices } from './student/services';

const App: React.FC = () => {

  const [data, setData] = useState()
  const [valueInput, setvalueInput] = useState('')
  const [search, setsearch] = useState('')

  useEffect(()=> {
    studentServices('http://localhost:8000/student').then((item:any) => {
      setData(item.data)
    });
  },[])

  const searchStudent = () => {
    studentServices(`http://localhost:8000/student/${valueInput}/`).then((item:any) => {
      setsearch('Se encontro el alumno')
    }).catch(()=> 
    setsearch('No se encuentra el alumno')
    );
  }
  const onChange = (value:any) => {
    setvalueInput(value.target.value)
  }
  return (
    <div className="App">
      <div className="App-header">
        {
          data && data.map((item:any) => {
            return(
              <React.Fragment>
                  <div>
                    <span>Codigo: {item.code}</span><br/>
                    <span> Email: {item.email || 'no tiene email'}</span><br/>
                    <span>Name: {item.name}</span><br/>
                  </div>
                  <hr/>
              </React.Fragment>              
            );
          })
        }
        <div>
          <input type="text" onChange={onChange} />
          <button onClick={searchStudent}>Buscar</button>
          <div>
            {search}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
