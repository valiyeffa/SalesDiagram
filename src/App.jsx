import React, { useRef } from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './tools/slices/DataSlices';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const datas = useSelector(p => p.data);
  const dispatch = useDispatch();
  const yearRef = useRef();
  const valueRef = useRef();

  const submitedForm = (e) => {
    e.preventDefault();
    dispatch(add({ labels: yearRef.current.value, values: valueRef.current.value }));
    yearRef.current.value = '';
    valueRef.current.value = '';
  }

  const state = {
    labels: datas.map(i => i.labels),
    datasets: [{
      label: "Sales",
      data: datas.map(i => i.values)
    }]
  }

  return (
    <div className='col-7'>
      <Bar data={state} />

      <form onSubmit={submitedForm} action="">
        <p>Year:</p>
        <input ref={yearRef} type="text" />
        <p>Values:</p>
        <input ref={valueRef} type="text" /> <br />
        <button className='btn btn-dark my-2'>Add Datas</button>
      </form>
    </div>
  )
}

export default App