import React, { useReducer } from 'react';

import './App.css';
import reducer, { initialState } from './../reducers';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { applyNumber, changeOperation, clearDisplay, mPlus, mR, mC } from '../actions';



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const handleClick = (number) => {
    dispatch(applyNumber(number));
  }
  const operateClick = (operator) => {
    dispatch(changeOperation(operator))
  }
  const clearAll = (clear) => {
    dispatch(clearDisplay(clear))
  }
  const handleAddMemory = () => {
    dispatch(mPlus())
  }
  const handleMoreMemory = () => {
    dispatch(mR())
  }
  const clearMemory = () => {
    dispatch(mC())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory} />
              <CalcButton value={"MR"} onClick={handleMoreMemory} />
              <CalcButton value={"MC"} onClick={clearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleClick(1)} />
              <CalcButton value={2} onClick={() => handleClick(2)} />
              <CalcButton value={3} onClick={() => handleClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleClick(4)} />
              <CalcButton value={5} onClick={() => handleClick(5)} />
              <CalcButton value={6} onClick={() => handleClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleClick(7)} />
              <CalcButton value={8} onClick={() => handleClick(8)} />
              <CalcButton value={9} onClick={() => handleClick(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operateClick("+")} />
              <CalcButton value={"*"} onClick={() => operateClick("*")} />
              <CalcButton value={"-"} onClick={() => operateClick("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearAll("CE")} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
