import React from 'react';

class SetWorkoutDuration extends React.Component{

  state = {
      // exerciseTotalMinutes: 0,
      //durationInMinutes: '0',
      // should I store in DB as "minutes", or as milliseconds since Epoch"
      //   eg new Date(0, 0, 0, 0, exerciseTotalMinutes).getDate();, where year=month=date=hour=0)
      hours:          0,
      minutes:        0
  };

  // ============================
  // UTILITY CONVERSION FUNCTIONS
  // ============================

  // FOR ENTERING DATES, TIMES
  // -- These should be exported to a Utility File
  //  so it can be accessed by multiplel components

  toHHMM(totalMinutes){
    // input is an INTEGER
    // returns 2 INTEGERS
    // normalized for max hr, and  mm < 60

    // totalMinutes = this.toTotalMinutes(0, totalMinutes);
    const hh = Math.trunc(totalMinutes/60);
    const mm = totalMinutes % 60;
    return [hh, mm];
  }

  toTotalMinutes(hours, minutes){
    // returns INTEGER sum of hh + mm as total minutes
    // hh can be FLOAT or INTEGER as a decimal value eg 1.25hr, or an integer
    // mm should be an INTEGER (maybe round JIC get some decimal value??)
    // BY SETTING INPUT BOX TO type="number" I ELIMINATE STRING as an input type
    const totalMinutes = (hours * 60) + minutes;
      // JS float plus irrational numbers require rounding to closest integer
    return Math.round(totalMinutes);
  }
  normalizeHHMM(hours, minutes){
    //  input
    //    hh is float or integer
    //    minutes is integer
    //  returns normalized integer values of hh and mm
    //    eg 1.25hr + 15 minutes is returned as 1hr 30min
    //    ie an [hh, mm] array of: [1, 30]
    const totalMinutes = this.toTotalMinutes(hours, minutes);
    const [hh, mm] = this.toHHMM(totalMinutes);
    return [hh, mm];
  }

  stripLeadingZeros(num){
      // input String, Integer, or Float
      // returns STRING
        // no leading zeros
        let str=num.toString();
        // if (str.length>1) {
          str = str.replace(/^[0]+/g,"");
          // replace(/^0+/, ''
          console.log('strip num', num, 'to', str);
          return str;
          // return str.replace(/^[0]+/g,"");
          // Watch out, could return empty string
        // }

  }

  // INPUT HANDLER FUNCTIONS
    // INPUT FIELDS FOR TIMES/ DURATIONS
    // Inputs are set as type="number" and min="0", so only 0-9 and . are allowed.
    // BUT it is always returned as a String, and leading zeros are included.
    // Turn these back into Integers and Floats

    onChangeHours = (event) => {

      const newHours = parseFloat(this.stripLeadingZeros(event.target.value) || 0);
      const newHours2 = parseFloat((event.target.value) || 0);
      console.log ('newHours', newHours, 'newHours2', newHours2);
        // this.setState({ hours: parseFloat(event.target.value || 0) });
        this.setState({ hours: newHours });
        console.log('state', this.state);

        this.setState({ hours: newHours2 });
        console.log('state', this.state);
    }
    onChangeMinutes = (event) => {
      console.log('\nold', this.state);
      const newMinutes = parseInt(this.stripLeadingZeros(event.target.value) || 0, 10);
      console.log ('newMinutes', newMinutes);

        this.setState({ minutes: 4000 });
        // this.setState({ minutes: parseInt(event.target.value || 0) });
        console.log('state', this.state);

        this.setState({ minutes: newMinutes });
        // this.setState({ minutes: parseInt(event.target.value || 0) });
        console.log('state', this.state);
    }
    onClearHours = (event) => {
        this.setState({hours: 0});
    }
    onClearMinutes = (event) => {
        this.setState({minutes: 0});
    }


  componentDidMount(props){
    //this.setState();
  }

    render(props){

        // TODO DURATION UI
          // Change so uses only buttons to enter the workout time
          //  +/- on each button label: 1hr, 30min, 15min, 5min, 1min
          //  those buttons change the state.exerciseTotalMinutes
          //    maybe change var name to durationInMinutes or totalDurationInMinutes
          //  total time is displayed as text only
          //  normalize the total minutes displayed to HH:MM minutes

        const duration = this.state.exerciseTotalMinutes;

        // currently I do not record seconds.
        //  But when running, sometimes did..
        //  store instead as exerciseElapsedSeconds ?
        // const [exerciseHH, exerciseMM] = toHHMM(duration);



        const [normalizedHH, normalizedMM] = this.normalizeHHMM(this.state.hours, this.state.minutes);

       // pad MM portion of string with zeros if needed for human readable output strings
        const padded_MM_str = normalizedMM<10 ? '0' + normalizedMM.toString() : normalizedMM.toString();

        const duration_clock_str   = normalizedHH.toString() + ':' + padded_MM_str;
        const decimalMM = parseFloat(parseInt(normalizedMM)/60);

        // toFixed()turns into a STRING. Here formated to 2 decimal places
        const duration_decimal_str = (normalizedHH + decimalMM).toFixed(2);

        // { Input type for number:
        //         step="any" turns it into float, or can indicate a decimal value
        //          such as .1 or .01.
        //          step valuen Controls increment value of arrow buttons/keys of keyboard
        //       If decide I do NOT want rollover eg 90minutes can set min/max as 0 and 60
        //  }

        // HACK TOR FORCE REACT TO REMOVE LEADING 0 WHEN INPUT TYPE IS NUMBER
        // it seems react will not re-render the input, even when I stripped
        //  leading zeros in the onChange handlers.. maybe it sees 00 === 0?
        //  so will not re-draw the input boxes, even though setState was called?
        // FORCE IT BY USING A TEMP VARIABLE AND USING BELOW
        // THEN RENDER INPUT USING THE TEMP VAR AS VALUE INSTEAD OF THIS.STATE numeric value.

        // I guess it notices changes in string, when it does not notice a change in number
        // because number with leading zeros is equivalent to number without leading zeros?

        // OMG!! THIS WORKS!!
          // (even though console.logs show the leading zeros were stripped, and state
          //  has the stripped version stored, the input box still shows leading zero.
          // If I switch to type="text" the input box is properly updated.
          //  but I want type="number" so that number keyboard appears on mobile.
          // and auto increment/decrement arrows appear next to input boxes.
          // and it makes input validation easier too.)

        const strippedMinutes = (this.state.minutes || 0).toString();
        const strippedhours   = (this.state.hours   || 0).toString();



        return (
          <div>


            <fieldset>
              <label>Workout Duration:</label>
              <h3>{duration_clock_str} | {duration_decimal_str}</h3>

              <label>Workout Duration:</label>
              <br />
              <label>Hours</label>
              <input
                      name="hours" id="hours"
                      type="number" min="0" max="24" step=".01"
                      placeholder="1.25"
                      value={strippedhours}
                      onChange={this.onChangeHours}
              />
              <button onClick={this.onClearHours}>clear</button>

              <br /><br />

              <label>Minutes</label>
              <input
                      name="minutes" id="minutes"
                      type="number" min="0"
                      placeholder="90"
                      value={strippedMinutes}
                      onInput={this.onChangeMinutes}
              />
              <button onClick={this.onClearMinutes}>clear</button>
              <br /><br />
            </fieldset>

          </div>
        );
    }
}

export default SetWorkoutDuration;
