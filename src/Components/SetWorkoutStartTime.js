import React from 'react';
import {toIntegerDigitsOnly, toDecimalDigitsOnly} from '../utilities/dateTimeInputs';

class SetWorkoutStartTime extends React.Component {
  // Choose a time in hh24:mm, not seconds
  // Does not take in a starting value (ATM)
  // Initializes to current time.

  // TODO:
  // Takes in an onChange(hh24:mm) prop, where the format of hh24:mm
  //  that this component sends back is in the form of 10:23 or 23:59
  //  where hh24 is 00-23 and mm in 00-59. Both are zero-padded to 2 places.
  //  this format was chosen because that is the format that
  //  HTML input type="time" uses.

  // TODO:
  // HOWEVER ATM I AM SENDING BACK A FULL Date() object.
  //  That is about to change!

  // TODO: generalize this component so that it can be re-used for
  //  EndTime AND  StartTime. (but not Duration)

  // TODO:  Honestly, I do not like scrollers for setting time/minutes.
  //    It is too much scrolling for my taste !!
  //      Want something quicker, easier, less clicking/scrolling.
  //      Also less finicky (needing exact precision to get right the first time)
  //    I think I would prefer to set the time with buttons:
  //      +/- 15min, +/- 5min,  +/- 1min, maybe +/- 30min
  //      hmm.. not sure on the hour value, maybe
  //      +/- 1 hr, +/- 10hr (constrained to setting 1st digit to 0 or 1)
  //      +/- 6 hr or 5hr or ?
  //    Or Maybe find a graphical solution like android Native OS has,
  //       but that works for all browsers and OS? And is already pre-made?

  state = {
      datetime:         new Date(), // sets Current Time
                    // Fri Nov 05 2021 09:13:37 GMT-0700 (Pacific Daylight Time)

      // TODO:
      // These probably can/should be local vars - they are all dependant
      //  on state.datetime
      // One caution, though, be wary of mixing up datetime HERE
      //  vs Date selected in the rest of the app.
      //  Calendar sets the Date portion of Date/Time, and sets hh:mm:ss.ss
      //    to zero (especially important because of time zones could otherwise
      //    record the date as the previous day, depending on the Time and TimeZone)
      //  At the same time, I will need to COMBINE this TIME
      //    with that DATE (of date only) to form a
      //  compete DATE to store into the database.
      // Be cognizent as to when and where the date includes the time and when it does not.

      // In fact, maybe I do not want to store any datetime here.
      // Maybe use it only to set an initial hour and minute
      // Maybe just store an hh24:mm string.
      // And everything else gets computed locally from that

      // This component would then also return an hh24:mm string?
      // That, then is probably what it should accept as input also?

      // NOTICE LEGEND: see example format returned
      startTimeMS:      new Date().getTime(),                   // 1636096147072
      startTimeLocalUS: new Date().toLocaleTimeString('en-US'), // 12:09:07 AM

      // used with homegrown input fields
      startTime_hh:     new Date().getHours(),                  // 0  (0-23) (I override 0 value to be 12 instead)
      startTime_mm:     new Date().getMinutes(),                // 9  (0-59)
      AMorPM:           new Date().toLocaleTimeString('en-US').split(' ')[1]

      // TODO: "Start" vs "Stop" time should be passed in as a string, when make this generic
      // TODO:
      //stopTime:    ''
      //  sometimes as an exact time, sometimes as morn, night, afternoot, etc
      //    Will want this implemented before get to those records! DRY data entry.
      //    should this be stored as a Date object, or a simple HHDD 24 hour object?
      // note: stop-start can be > exercise duration
      //
  };
  componentDidMount(){
    console.log (this.state);
  }

  // ============================
  // UTILITY CONVERSION FUNCTIONS
  // ============================

  // TODO: should move to ../utilities/textInput.js file
  zeroPadded(hms=0){
    // takes in an integer or integer-string
    //    (should be 1 or 2 digit, or '', or null,
    //     to represent hours, minutes or whole seconds)
    //     Does NOT check for invalid inputs, including 3 digits
    //    )
    // returns a 2-digit integer-string, with leading 0(s),if necessary
    // may need to distinguish name as zeroPadded_dd to distinguish
    //  from other padding options

    // remove 0-padding and convert falsey values
    let int = parseInt(hms || 0);
    let int_like = int.toString();
    if (int_like.length > 2 ) {console.log('zeroPadded method has more than 2 digits:', int_like.length)};
    int_like = (int_like.length < 2) ? '0' + int_like :int_like;
    return int_like;
  }

  // TODO: Write & move render functions to below & delete unneeded ones
  // zeroStripped(str){}

  // hh12_to_hh24(hh12=0, strAMorPM='AM'){
  //   // if ()
  // }
  // hh24_to_hh12(hh24){

  //   // return [hh12, strAMorPM];
  // }
  // hhmmAMPM_toClock24(){

  // }
  // clock24_toUSstring(){}
  // clock24_to_hhmmAMPM(clock24){
  //   // takes in time format of hh24:mm string (eg '23:59' or '01:01' 24clock)
  //   // returns integer hh, mm, and string either 'AM' or 'PM'

  //   return [];
  // }


  // ============================
  // EVENT HANDLERS
  // ============================

    // FOR Built-In INPUT Types: DATE, DATETIME-LOCAL, TIME

    onChangeTimeInput = (event) => {
      // Who knew the browser has time input fields!
      // BEWARE: each Browser and OS handles input type='time' differently!

      const hhmm = event.target.value;
      let [hh24, mm] = hhmm.split(':');

      // do NOT want date portion of datetime to roll over to next date if
      //  hours is > 24, nor hours to roll if minutes is >60
      //  some browsers allow bad time values, others do not.
      hh24 = parseInt(hh24) % 24;
      mm   = parseInt(mm)   % 60;

      const new_datetime_ms = this.state.datetime.setHours(hh24, mm);
      const new_datetime = new Date(new_datetime_ms);

      console.log('newTime:', hhmm, hh24, mm, '\nold:', this.state.datetime, '\nnew:', new_datetime);
      // this.setState({calendarValue: new Date()});
      this.setState({
        datetime: new_datetime,
        startTimeLocalUS: new_datetime.toLocaleTimeString('en-US'), // 12:09:07 AM
        startTime_hh:     new_datetime.getHours(),                  // 0
        startTime_mm:     new_datetime.getMinutes()                 // 9
      });
      // this.setState({startTimeMS: new Date(value)});
      // setState will not have updated state values yet, but look anyway
      console.log('state at onChangeTimeInput', this.state);
    }

    // This built in does Date AND Time in 1 input box!
    //  Not sure if all browsers support this one
    // onDateTimeLocalChange = (event) => {
    //   // Who knew the browser has date input fields!
    //   const value = event.target.value;
    //   console.log(value);
    //   // value is always returned at yyyy-mm-dd, no matter what the browser display is
    //   console.log(value);
    //   // this.setState({calendarValue: new Date()});
    //   this.setState({calendarValue: value});
    // }


    //FOR START END TIME home grown separated time-like input fields

// new Date()        //Fri Nov 05 2021 09:13:37 GMT-0700 (Pacific Daylight Time)
//  vs Date.now()    // 1636129170781
// startTimeMS:      new Date().getTime(),                   // 1636096147072
// startTimeLocalUS: new Date().toLocaleTimeString('en-US'), // 12:09:07 AM
// startTime_hh:     new Date().getHours(),                  // 0
// startTime_mm:     new Date().getMinutes()                 // 9

// this.zeroPadded, toIntegerDigitsOnly, toDecimalDigitsOnly

    onChangeHrInput_hh12 = (event) => {
      // rolls over: nieve quick hack to keep input value from 0-11 (AM/PM)
      const hr = toDecimalDigitsOnly(event.target.value);
      let hh12 = hr % 12;
      if (hh12 < 1) {hh12 = 12;}   // this input field should show 12AM/PM not 00AM/PM
      this.setState({startTime_hh: hh12});
    }

    onChangeMinInput_mm = (event) => {
      // rolls over: nieve quick hack to keep input value from 0-59
      const min = event.target.value % 60;
      this.setState({startTime_mm: min});
    }
    onChangeAMorPMInput = (event) => {
      // breaks: change from input box to radio button so cannot have bad input
      // allowed values are 'AM' or 'PM' (or maybe this should be lower case?)
      this.setState({});
    }


    // ON SUBMIT
    onSubmit = (event) => {
        event.preventDefault();
        console.log('I have your Start Time:\n', this.state);
    }


  render(props){

    // This DEPNDS ON  local time set to  'US-en', format: '1:05:44 PM'
    let startTime_hh12     = parseInt(this.state.startTimeLocalUS.split(':')[0]);
    const startTime_mm     = parseInt(this.state.startTimeLocalUS.split(':')[1]);
    let   strAMorPM        = this.state.startTimeLocalUS.split(' ')[1];

    // IMPORTANT, else 12:mm AM and 12:mm PM Are Broken. Must change 12AM to 00AM
    //  This then also ensures 12 PM NOON, instead of 24PM, an out of bounds Time.
    startTime_hh12 = startTime_hh12 % 12;

    let   startTime_hh24  = startTime_hh12;
    if (strAMorPM=='PM') {
      startTime_hh24 = (startTime_hh12 + 12);
    }

    // startTime_hh24 is the proper format for input type="time"
    // startTime_hh12 is for my homegrown input box.
    //  for this, I want to display a digit 1-12, not 0-11
    //  so HERE I change the VALUE of this number FOR THE INPUT BOX.
    //  Hacky! But this.state.startTime_hh is stored currently as 0-12
    //    This had previously worked without the hack, but then I changed...
    //    ..something?
    if (startTime_hh12 < 1) {startTime_hh12 = 12;}

    // TODO:
    //  For clarity, perhaps hh24 should be hh23,
    //    hh12 should be hh11; and then THIS hh12 really SHOULD be hh12
    //    likewise a 1-24 based hh24 should be the real hh24!
    //    Better Renames would make it clearer what the True range of values are/should be!

    // html input field for 24time type requires hh24:mm to be 0 padded
    // clock output requires mm to be zero padded (but not hh)
    const startTime_hh24_padded = this.zeroPadded(startTime_hh24);
    const startTime_mm_padded   = this.zeroPadded(startTime_mm);

    // I do not want home grown input fields to be padded though.

    const renderedHomeGrownStartTimeFields = () => {
      return (
          <fieldset style={{border: "1px solid blue"}}>
            <p>Start Time</p>
            <h3>{startTime_hh12}:{startTime_mm_padded} {strAMorPM}</h3>
            <label>Hr</label>
            <input  type="text" name="month" id="month"
                    placeholder="5"
                    value={startTime_hh12}
                    onChange={this.onChangeHrInput_hh12}
            />
            <label>Min</label>
            <input  type="text" name="year" id="year"
                    placeholder="00"
                    value={startTime_mm}
                    onChange={this.onChangeMinInput_mm}
            />
            <label>AM or PM</label>
            <input  type="text" name="year" id="year"
                    placeholder="2021"
                    value={strAMorPM}
                    onChange={this.onChangeAMorPMInput}
            />
          </fieldset>
      );
    }

    return (

      <div className="get-workout-time">


                  {renderedHomeGrownStartTimeFields()}


                  {/* Note:
                      Each browser displays time type a bit differently.
                      FF does not have step and thus always displays seconds, makes validation difficult
                       will accept invalid times such as 26:99
                      mobile Android dislpays nice clock-like interface

                      Required input: HH:MM or HH:MM:ss or HH:MM:SS.ss, where
                        HH is 0-23
                        HH,MM are zero padded!
                      TODO: change display so it does NOT show Seconds!
                  */}

                    <fieldset style={{border: "2px solid red"}}>
                      <h3>{this.state.startTimeLocalUS}</h3>
                      <label htmlFor="time"> Start Time </label>
                      <p>(TIME input type) Breaks unless use Clock Icon to set the time</p>
                      <input type="time" name="time" id="time" step="60"
                             value={`${startTime_hh24_padded}:${startTime_mm_padded}`}
                             onChange={this.onChangeTimeInput}
                      />
                      <br />
{/*
                      <label> temp test DATETIME-LOCAL input type (does NOT attatch a time zone!)</label>
                      <input type="datetime-local" name="datetime" id="datetime"
                             value={this.state.datetime}
                             onChange={this.onCalendarChange}
                      />
                  */}
                    </fieldset>

      </div>

    );
  }
}

export default SetWorkoutStartTime;
