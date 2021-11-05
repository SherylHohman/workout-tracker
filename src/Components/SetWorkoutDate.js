import React from 'react';

// Used with Browser Input type="datetime-local" "time" etc
//    which is not currently implemented, so commented out
// import {toIntegerDigitsOnly, toDecimalDigitsOnly} from '../utilities/dateTimeInputs';

class SetWorkoutDate extends React.Component {

  state = {
      calendarValue:  new Date(),
      inputBoxDate:  new Date()
      // Yikes! these two would actually need to be kept in synch
  };

  // ============================
  // EVENT HANDLERS
  // ============================

    // for react-calendar version
    onCalendarChange = (event) => {
      console.log('onCalendarChange:', event);
      // what format does Calendar give me?
      const value = event.target.value;

      this.setState({calendarValue: new Date(value)});
    }

    // for Browser Input type="datetime-local"
    onChangeDateTimeLocal = (event) => {
      console.log('onChangeDateTimeLocal:', event);
      // what format does input box give me?
      const value = event.target.value;
      console.log('SetWorkoutDate:', value);

      this.setState({inputBoxDate: new Date(value)});
    }

    // // FOR Built-In INPUT Types: DATE, DATETIME-LOCAL, TIME
    // //  not currently implemented, so commented out
    // onDateChange = (event) => {
    //   // Who knew the browser has date input fields!
    //   const value = event.target.value;
    //   console.log(value);
    //   // this.setState({calendarValue: new Date()});
    //   this.setState({calendarValue: value});
    // }

    // // For use with Browser Input type="datetime-local"
    // //   not currently implemented, so commented out
    // onDateTimeLocalChange = (event) => {
    //   // Who knew the browser has date input fields!
    //   const value = event.target.value;
    //   console.log(value);
    //   // value is always returned at yyyy-mm-dd, no matter what the browser display is
    //   console.log(value);
    //   // this.setState({calendarValue: new Date()});
    //   this.setState({calendarValue: value});
    // }

    // ON SUBMIT
    onSubmit = (event) => {
        event.preventDefault();
        console.log('I have your data:\n', this.state);
    }


  render(props){

    return (

      <div className="get-workout-date">

                  {/*
                      TODO:
                      Move Calendar component into here?
                  */}

                  {/* TODO:
                      Use Built in Date-Time Input fields
                      Maybe experiment later as a backup, or as an
                      alternate method of entry. Maybe clicking on this will
                      be used as a trigger to open up the react-calendar picker.
                      Or just remove altogether.
                      Also, need to figure out how to properly collect the date

                    <fieldset>
                      <label> temp test input as calendar</label>
                      <input type="datetime-local" name="datetime" id="datetime"
                             value={this.state.calDate}
                             onChange={this.onChangeDateTimeLocal}
                      />
                      <br />
                    </fieldset>
                  */}
      </div>

    );
  }
}

export default SetWorkoutDate;
