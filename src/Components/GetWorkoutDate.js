import React from 'react';

class GetWorkoutDate extends React.Component {

  state = {
      calDate:         new Date(),

      //  sometimes as an exact time, sometimes as morn, night, afternoot, etc
      //  Will want this implemented before get to those records! DRY data entry.
      // should this be stored as a Date object, or a simple HHDD 24 hour object?
        startTime:   '',  // TODO
        stopTime:    ''   // TODO
        // note: stop-start can be > exercise duration
  };

  componentDidMount(){

  }

  // ============================
  // EVENT HANDLERS
  // ============================

    // trying to get react-calendar to work
      //  do not understand its API. Also it defaults to using hooks,
      //  which are not compatible with this class-based Component
      //  I THINK, though, that he has some "controlled component" methods
      //  that can be used instead, but the docs are difficult to figure out, if so
    onCalendarChange = (event) => {
      //OK, I do not think I can figure this out.
      // installed the calendar via
      // npm install react-calendar
      // may need to UNINSTALL it
      // It uses hooks, which are not compatible with class components
      // Can either: use a different calendar,
      //  refactor this component to use hooks,
      //  or wrap their hooks
      //  or figure out their API to use class Component.
      // Long term: refactor to Addworkout to functional component/hooks
      //  Short term.. use now, refactor later.
      console.log(event);
      const value = event.target.value;
      // this.setState({calendarValue: new Date()});
      this.setState({calendarValue: new Date(value)});
    }

    // onChange = (event) => {
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    //     console.log(event.target.id);
    //     this.setState({});
    // }

    //FOR START END TIME - Might not stay in this component
    onChangeStartTimeHr = (event) => {
      // rolls over: nieve quick hack to keep input value from 0-11 (AM/PM)
      const hr = event.target.value % 12
      this.setState({startTimeHr: hr});
    }

    onChangeStartTimeMin = (event) => {
      // rolls over: nieve quick hack to keep input value from 0-59
      const min = event.target.value % 60;
      this.setState({startTimeMin: min});
    }
    onChangeAMorPM = (event) => {
      // breaks: change from input box to radio button so cannot have bad input
      // allowed values are 'AM' or 'PM' (or maybe this should be lower case?)
      this.setState({});
    }

  // ============================
  // UTILITY CONVERSION FUNCTIONS
    // ============================

    // FOR ENTERING DATES, TIMES
     toIntegerDigitsOnly = (str) => {
        str = str.replace(/\D/g,'');
        // no leading zeros
        str.replace(/^[0]+/g,"");
        return str;
    }
     toDecimalDigitsOnly = (str) => {
        str = str.replace(/[^\d.]/g, ''); // add - if want negative decimals
        // no leading zeros
        str.replace(/^[0]+/g,"");
        return str;
    }

    // INPUT FIELDS FOR TIMES/ DURATIONS
    onChangeHours = (event) => {
        const newValue = event.target.value;
        this.setState({hours: this.toDecimalDigitsOnly(newValue)});
    }
    onChangeMinutes = (event) => {
        const newValue = event.target.value;
        this.setState({minutes: this.toIntegerDigitsOnly(newValue)});
    }
    onClearHours = (event) => {
        this.setState({hours: '0'});
    }
    onClearMinutes = (event) => {
        this.setState({minutes: '0'});
    }

    // INPUT FIELDS ALPHABETIC Fields Locations / DATES (day of week/month)
    toLettersOnly = (str) => {
        str = str.replace(/[^a-zA-Z]/g, ''); // add - if want negative decimals
        // remove spaces
        // str.replace(/^[0]+/g,"");
        return str;
    }
    toTitleCase = (str) => {
      // This version only works on single words, not sentences or multiple words
        str = str.toLowerCase().split('');
        //requires single word, otherwise split on ' '
        str[0] = str[0].toUpperCase();
        return str.join('');
    }

  // ============================
  // EVENT HANDLERS
  // ============================

    // for react-calendar version

        // trying to get react-calendar to work
      //  do not understand its API. Also it defaults to using hooks,
      //  which are not compatible with this class-based Component
      //  I THINK, though, that he has some "controlled component" methods
      //  that can be used instead, but the docs are difficult to figure out, if so
    onCalendarChange = (event) => {
      //OK, I do not think I can figure this out.
      // installed the calendar via
      // npm install react-calendar
      // may need to UNINSTALL it
      // It uses hooks, which are not compatible with class components
      // Can either: use a different calendar,
      //  refactor this component to use hooks,
      //  or wrap their hooks
      //  or figure out their API to use class Component.
      // Long term: refactor to Addworkout to functional component/hooks
      //  Short term.. use now, refactor later.
      const value = event.target.value;
      console.log(value);
      // this.setState({calendarValue: new Date()});
      this.setState({calendarValue: new Date(value)});
    }

    // onChange = (event) => {
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    //     console.log(event.target.id);
    //     this.setState({});
    // }


    // FOR INPUT DATE, DATETIME-LOCAL, TIME VERSIONS
    onDateChange = (event) => {
      // Who knew the browser has date input fields!
      const value = event.target.value;
      console.log(value);
      // this.setState({calendarValue: new Date()});
      this.setState({calendarValue: value});
    }
    onDateTimeLocalChange = (event) => {
      // Who knew the browser has date input fields!
      const value = event.target.value;
      console.log(value);
      // value is always returned at yyyy-mm-dd, no matter what the browser display is
      console.log(value);
      // this.setState({calendarValue: new Date()});
      this.setState({calendarValue: value});
    }
    onTimeChange = (event) => {
      // Who knew the browser has time input fields!
      console.log(event.target.value);
      const value = event.target.value;
      // this.setState({calendarValue: new Date()});
      this.setState({startTime: value});
      // this.setState({startTime: new Date(value)});
    }


    //  TO BE DELETED!
    // FOR INITIAL, NIEVE  HOME GROWN SEPARATE INPUT FIELDS VERSIONS
    onChangeDayOfWeek = (event) => {
      let newValue = this.toLettersOnly(event.target.value);
      if (newValue.length > 0){
        // only 3 chars
        if (newValue.length>3){newValue = newValue.slice(0,3);}
      newValue = this.toTitleCase(newValue);
      }
      console.log(newValue);
      this.setState({dayOfWeek: newValue});
      //TODO turn into searchable select box, or a Calendar
      // Expects 3 letter day of week abreviation (mon, tue, etc)
    }
    onChangeDayOfMonth = (event) => {
      let newValue = parseInt(this.toIntegerDigitsOnly(event.target.value));
      newValue = (newValue % 31).toString();
      // TERRIBLE HACK ! better to error check
      // TODO use calendar Component or Moment.js to properly check for valid dates!
      this.setState({dayOfMonth: newValue});
    }

    // LETTERS for MONTH (max 4 chars)
    onChangeMonth = (event) => {
      let newValue = this.toLettersOnly(event.target.value);
      if (newValue.length > 0){
        // max 4 chars (should also be min 3)
        if (newValue.length>3){newValue = newValue.slice(0,4);}
      newValue = this.toTitleCase(newValue);
      }
      this.setState({month: newValue.trim()});
      //TODO turn into searchable select box, or a Calendar
      // TODO prefer named days, or optional name/1-12
      // I guess first pass, 1-12 digit is easiest
      }

    onChangeYear = (event) => {
      let newValue = this.toIntegerDigitsOnly(event.target.value);
      // TODO: handle 2 digit year, and limit to >= 1969
      this.setState({year: newValue});
    }


    // ON SUBMIT
    onSubmit = (event) => {
        event.preventDefault();
        console.log('I have your data:\n', this.state);
    }


  render(props){




    // Not sure if start/end TIME of workout should be part of THIS
      // DATE - get workout Date component, as it is part of a Date()
      // or should be a separate component.
      // the 3rd party Calendar component I eventually use may only do the DATE
      // but not the TIME.
      // so for now I have code fragments both here and in the parent AddWorkout.js
      // Assumes startTime is stored as a full date object.
      // may prefer to store as a 24hour hhmm object instead.
      // use state calDate or startTime
    const startTimeMin = this.state.calDate.getMinutes();
    let startTimeHr    = this.state.calDate.getHours();
    let strAMorPM      = 'AM';
    // (assumes any value input has been normalized 0-23,
    //  make sure onChange Input handles bad input, or perform Hr % 24)
    if (startTimeHr >= 12) {
      strAMorPM = 'PM';
      startTimeHr = startTimeHr - 12;
    }

    // Do not implement yet ? Not sure if Calendars even support this
    // const startTime_hh   =    calDate.getHours(),
    // const startTime_mm   =    calDate.getMinutes(),
    // TBS, could just use input boxes. Pre-populate with current time
    //    allow user to change it manually.
    // This may need to be its own component
  // }


    return (

      <div className="get-workout-date">

                    <fieldset>
                      <p>Start Time</p>
                      <h3>{startTimeHr}:{startTimeMin} {strAMorPM}</h3>
                      <label>Hr</label>
                      <input  type="text" name="month" id="month"
                              placeholder="5"
                              value={startTimeHr}
                              onChange={this.onChangeStartTimeHr}
                      />
                      <label>Min</label>
                      <input  type="text" name="year" id="year"
                              placeholder="00"
                              value={startTimeMin}
                              onChange={this.onChangeStartTimeMin}
                      />
                      <label>AM or PM</label>
                      <input  type="text" name="year" id="year"
                              placeholder="2021"
                              value={strAMorPM}
                              onChange={this.onChangeYear}
                      />
                    </fieldset>

                  {/* TODO:
                      Maybe experiment later as a backup, or as an
                      alternate method of entry. Maybe clicking on this will
                      be used as a trigger to open up the react-calendar picker.
                      Or just remove altogether.
                      Also, need to figure out how to properly collect the date

                    <fieldset>
                      <label> temp test input as calendar</label>
                      <input type="datetime-local" name="datetime" id="datetime"
                             value={this.state.calDate}
                             onChange={this.onCalendarChange}
                      />
                      <br />
                      <label> temp test input as calendar</label>
                      <input type="time" name="time" id="time"
                             value={this.state.startTime}
                             onChange={this.onTimeChange}
                      />
                    </fieldset>
                  */}

      </div>

    );
  }
}

export default GetWorkoutDate;
