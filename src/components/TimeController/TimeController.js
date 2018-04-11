
//// DEPENDENCIES, MODULES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';



//// IMPORT COMPONENTS, STYLES ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

import './TimeController.css';





//// COMPONENT CLASS /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class TimeController extends Component {

  constructor() {
    super()
    this.state = {
      running: false
    }
  }


//// onClick Start ///////////////////////////////////////////////////////
  handleStart = () => {
    this.props.startClock()
    this.setState(prevState => ({
      running: !prevState.running
    }))
  }

//// onClick Pause ///////////////////////////////////////////////////////
  handlePause = () => {
    this.props.pauseClock()
    this.setState(prevState => ({
      running: !prevState.running
    }))
  }

//// onClick Render //////////////////////////////////////////////////////
  handleReset = () => {
    this.props.resetClock()
  }

//// RENDER //////////////////////////////////////////////////////////////
  render() {

    let startPauseToggle = null

    if (!this.state.running) {
      startPauseToggle = <div   className="ControllerButton"
                    onClick={this.handleStart}>START</div>
    }
    else if (this.state.running) {
      startPauseToggle = <div   className="ControllerButton"
                    onClick={this.handlePause}>PAUSE</div>
    }

//// RETURN //////////////////////////////////////////////////////////////
    return (
      <div className="TimeController">

        {/* <div  className="ControllerButton"
              onClick={this.handleStart}>START</div>

        <div  className="ControllerButton"
              onClick={this.handlePause}>PAUSE</div> */}

        {startPauseToggle}

        <div  className="ControllerButton"
              onClick={this.handleReset}>RESET</div>

      </div>
    );
  }
}






//// EXPORT COMPONENT ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

export default TimeController;





// END ///////////////////////////////////////////////////////////////////
