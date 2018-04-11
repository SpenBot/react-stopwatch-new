//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';



//// IMPORT COMPONENTS, STYLES ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

import TimeDisplay from '../TimeDisplay/TimeDisplay'
import TimeController from '../TimeController/TimeController'

import './Stopwatch.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Stopwatch extends Component {

constructor() {
  super()
  this.state = {
    hundreth: 0,
    tenth: 0,
    sec: 0,
    tensec: 0,
    min: 0,
    tenmin: 0,
    currentCounter: null
  }
}



//// onClick Start ///////////////////////////////////////////////////////
  handleStartTimer = () => {
    this.incrementTimer()
    console.log("start")
  }

//// onClick Pause ///////////////////////////////////////////////////////
  handlePauseTimer = () => {
    clearInterval(this.state.currentCounter)
    console.log("pause")
  }

//// onClick Render //////////////////////////////////////////////////////
  handleResetTimer = () => {
    this.setState({
      hundreth: 0,
      tenth: 0,
      sec: 0,
      tensec: 0,
      min: 0,
      tenmin: 0,
      currentCounter: null
    })
    console.log("reset")
  }


//// Increment Timer //////////////////////////////////////////////////////
  incrementTimer = () => {

/// SUB SECONDS ///////////////////////////////////////////////////////////
    if (this.state.hundreth < 9) {
      this.setState(prevState => ({
        hundreth: prevState.hundreth + 1,
        currentCounter: setTimeout(this.incrementTimer, 10)
      }))
    }
    else if (this.state.hundreth === 9 && this.state.tenth < 9) {
      this.setState(prevState => ({
        hundreth: 0,
        tenth: prevState.tenth + 1,
        currentCounter: setTimeout(this.incrementTimer, 10)
      }))
    }

/// SECONDS ////////////////////////////////////////////////////////////////
    else if (this.state.hundreth === 9 && this.state.tenth === 9 &&
      this.state.sec < 9) {
        this.setState(prevState => ({
          hundreth: 0,
          tenth: 0,
          sec: prevState.sec + 1,
          currentCounter: setTimeout(this.incrementTimer, 10)
        }))
    }
    else if (this.state.hundreth === 9 && this.state.tenth === 9 &&
      this.state.sec === 9 && this.state.tensec < 5) {
        this.setState(prevState => ({
          hundreth: 0,
          tenth: 0,
          sec: 0,
          tensec: prevState.tensec + 1,
          currentCounter: setTimeout(this.incrementTimer, 10)
        }))
    }

/// MINUTES ////////////////////////////////////////////////////////////////
    else if (this.state.hundreth === 9 &&
      this.state.tenth === 9 && this.state.sec === 9 &&
      this.state.tensec === 5 && this.state.min < 9) {
        this.setState(prevState => ({
          hundreth: 0,
          tenth: 0,
          sec: 0,
          tensec: 0,
          min: prevState.min + 1,
          currentCounter: setTimeout(this.incrementTimer, 10)
        }))
    }
    else if (this.state.hundreth === 9 &&
      this.state.tenth === 9 && this.state.sec === 9 &&
      this.state.tensec === 5 && this.state.min === 9) {
        this.setState(prevState => ({
          hundreth: 0,
          tenth: 0,
          sec: 0,
          tensec: 0,
          min: 0,
          tenmin: prevState.tenmin + 1,
          currentCounter: setTimeout(this.incrementTimer, 10)
        }))
    }
  }






//// RENDER //////////////////////////////////////////////////////////////
  render() {

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="StopwatchDiv">
        <TimeDisplay      hundreth={this.state.hundreth}
                          tenth={this.state.tenth}
                          sec={this.state.sec}
                          tensec={this.state.tensec}
                          min={this.state.min}
                          tenmin={this.state.tenmin}/>
        <TimeController   startClock={this.handleStartTimer.bind(this)}
                          pauseClock={this.handlePauseTimer.bind(this)}
                          resetClock={this.handleResetTimer.bind(this)}/>
      </div>
    );
  }
}






//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default Stopwatch;





// END ///////////////////////////////////////////////////////////////////
