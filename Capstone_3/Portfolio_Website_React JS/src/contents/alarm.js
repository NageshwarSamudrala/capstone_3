import AlarmOption from './components/AlarmOption/AlarmOption';
import AnalogClock from './components/AnalogClock/AnalogClock';
import ContextAlarm from './components/context/ContextAlarm';
import DigitalClock from './components/DigitalClock/DigitalClock';
import React, { Component } from 'react';
import './alarm.css'

class Alarm extends Component{
    render(){
      return(
     <section className="clock container" id="myDiv">
        <div className="clock__container grid">
          <div className="clock__content grid">
            <ContextAlarm>
              <AnalogClock />
              <DigitalClock />
              <AlarmOption />
            </ContextAlarm>
          </div>
        </div>
      </section>
    )
    }
}
export default Alarm;