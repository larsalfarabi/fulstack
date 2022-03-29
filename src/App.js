import React from 'react';
import './App.css';
import {Tes, Tes2} from './Tes';
import {Apa, Oke} from './Module/Button'
import dayjs from 'dayjs';


function App() {
  const date = new Date();
  let [count, setCount] = React.useState(0);
  return (
    <React.Fragment>
      <div className='header'>
        <h1 style={{
          textAlign: 'center',
          color: 'blue',
          fontSize: '50px',
          fontFamily: 'sans-serif',
        }}>Hello world</h1>
        <div className='contoh'>
          <h4>{count}</h4>
          <button onClick={()=>{
            setCount(count + 1)
          }}>Tambah</button>
          <button onClick={()=>{
            setCount(count-1)
          }
          }>Kurang</button>
        </div>
        <Apa />
        <Oke />
        <p>Only One Parent</p>
        <Tes nama='lars' sekolah='SMK MQ'/>
        <Tes nama='nabil' sekolah='SMP Amalia'/>
        <Tes nama='hilmi' sekolah='SMP MQ'/>
        <Tes2 mapel= 'Fisika' nilai={90} color='green' lulus={true}/>
        <Tes2 mapel= 'Matematika' nilai={80} lulus={false}/>
        <Tes2 mapel= 'Kimia' nilai={100} lulus/>
        <div>ok</div>
        <p>Hari ini tanggal {dayjs(date).format('DD-MM-YY hh:ss')}</p>
      </div>
    </React.Fragment>
  );
}

export default App;


