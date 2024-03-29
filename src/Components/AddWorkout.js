import React from "react";

class AddWorkout extends React.Component {

    state = {
        hours:          '',
        minutes:        '',
        location:       '',
        exerciseType:   'Get Moving!',
        dayOfWeek:      'Tue',
        month:          'Oct',
        dayofMonth:     '27',
        year:           '2021'
    };

    onChangeDate = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        console.log(event.target.id);
        this.setState({});
    }

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

    onChangeExercise = (event) => {
      this.setState({exerciseType: event.target.value});
    }

    onChangelocation = (event) => {
      const newValue = event.target.value;
      this.setState({location: newValue.trim()});
      // TODO: do not trim until send form. Otherwise cannot add spaces between words
      // TODO: even better, use a searchable drop down PLUS ADD NEW option
    }

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

    onSubmit = (event) => {
        event.preventDefault();
        console.log('I have your data:\n', this.state);
    }

    render() {

        const dateString = this.state.dayOfWeek + ' ' + this.state.dayofMonth + ' ' + this.state.month + ' ' + this.state.year;

        // adds minutes and hours fields (note:  hours can be fractional, eg 1.5 hr)
        // note: if had not strip letters off, a prefix parseFloat/parseInt might convert to oOctal, hex, etc, unless supplied 2nd param of 10
        let totalMinutes = parseFloat(this.state.hours || 0) * 60 + parseInt(this.state.minutes || 0);
        totalMinutes = Math.round(totalMinutes);

        // normalize to integer hours and minutes, keeping minutes < 60
        const wholeHours = Math.trunc(totalMinutes/60);
        const leftoverMinutes = totalMinutes % 60;

       // pad minutes with zeros if needed for human readable output strings
        const leftoverMinutesStr = leftoverMinutes<10 ? '0' + leftoverMinutes.toString() : leftoverMinutes.toString();
        const totalTime = wholeHours.toString() + ':' + leftoverMinutesStr;
        const totalTime2 = (wholeHours + (leftoverMinutes/60)).toFixed(2).toString();

        return(
           <section>
                <br />
                <form onSubmit={this.onSubmit}>
                      {/*HA! onSubmit is attached to the FORM, NOT the button!*/}

                    <fieldset>
                      <div>
                        <label>Time</label>
                        <h3>{totalTime} / {totalTime2}</h3>
                      </div>

                      <label>Hours</label>
                      <input  type="text" name="hours" id="hours"
                              placeholder="2"
                              value={this.state.hours}
                              onChange={this.onChangeHours}
                      />
                      <button onClick={this.onClearHours}>clear</button>
                      <br /><br />

                      <label>Minutes</label>
                      <input  type="text" name="minutes" id="minutes"
                              placeholder="20"
                              value={this.state.minutes}
                              onChange={this.onChangeMinutes}
                      />
                      <button onClick={this.onClearMinutes}>clear</button>
                      <br /><br />
                    </fieldset>

                    <fieldset>
                      <h3>{this.toTitleCase(this.state.exerciseType)}</h3>
                      <label className="">
                        <input type="radio" name="exerciseType" id="cardio"
                               value="cardio" onChange={this.onChangeExercise}
                               checked={this.state.exerciseType === "cardio"}
                               />
                        Cardio
                      </label>
                      <label className="">
                        <input type="radio" name="exerciseType" id="weights"
                               value="weights" onChange={this.onChangeExercise}
                               checked={this.state.exerciseType === "weights"}
                               />
                        Weights
                      </label>
                      <label className="">
                        <input type="radio" name="exerciseType" id="stretch"
                               value="stretch" onChange={this.onChangeExercise}
                               checked={this.state.exerciseType === "stretch"}
                                />
                        Stretch
                      </label>
                      <label className="">
                        <input type="radio" name="exerciseType" id="other"
                               value="other" onChange={this.onChangeExercise}
                               checked={this.state.exerciseType === "other"}
                                />
                        Other
                      </label>
                    </fieldset>

                    <h3>{this.state.location}</h3>
                    <label>Location</label>
                    <input  type="text" name="location" id="location"
                            placeholder="24 SC"
                            value={this.state.location}
                            onChange={this.onChangelocation}
                    />
                    <br /><br />

                    <fieldset>
                      <h3>{dateString}</h3>

                      <label>Day of Week</label>
                      <input  type="text" name="dayOfWeek" id="dayOfWeek"
                              placeholder="Tue"
                              value={this.state.dayOfWeek}
                              onChange={this.onChangeDayOfWeek}
                      />
                      <br />

                      <label>Date in Month</label>
                      <input  type="text" name="date" id="date"
                              placeholder="27"
                              value={this.state.dayofMonth}
                              onChange={this.onChangeDayOfMonth}
                      />
                      <label>Month</label>
                      <input  type="text" name="month" id="month"
                              placeholder="Oct"
                              value={this.state.month}
                              onChange={this.onChangeMonth}
                      />
                      <label>Year</label>
                      <input  type="text" name="year" id="year"
                              placeholder="2021"
                              value={this.state.year}
                              onChange={this.onChangeYear}
                      />
                    </fieldset>

                    <button>Add Workout</button>
                    {/*HA! onSubmit is attached to the FORM, NOT the button!*/}

                </form>
            </section>
        );
    }

}

export default AddWorkout;

    // TODO look into the using a pre-made date selector:

        // Modern React Calendar DatePicker
          //  https://github.com/Kiarash-Z/react-modern-calendar-datepicker
          //          pros:   easy to access year, month, day, good customization examples, hooks, see below for first dsy of week hack
          //          cons:   last updated July 2020
          //     - docs:          : https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/core-concepts
          //                      : https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/default-values
          //                      : https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/customization
          //     - example        :  https://kiarash-z.github.io/react-modern-calendar-datepicker/
          //       first day of week hack
          //                      : https://github.com/Kiarash-Z/react-modern-calendar-datepicker/issues/177
          //                      and
          //                      : https://kiarash-z.github.io/react-modern-calendar-datepicker/docs/different-locales
          //

        // React Day Picker
          //         pro: works well with input form, so it gets out of the way, udpated 4 months ago, can set first day of week
          //         con: not fav styling, clicks are by month, not year (unless use input form) (for workout app that maybe ok)
          // http://react-day-picker.js.org/
          //     - repo:           https://github.com/gpbl/react-day-picker
          //       EXAMPLE DOCS NOT SECURE:
          //     - example / docs: http://react-day-picker.js.org/examples/customization-outside
          //          (eg. show days with workout):   http://react-day-picker.js.org/examples/selected
          //          styling :                       http://react-day-picker.js.org/docs/styling
          //          first day:                      http://react-day-picker.js.org/docs/localization

        // React Calendar
          // React Date Picker
          //  https://github.com/wojtekmaj/react-calendar
          //      ALSO HAS (easy to confuse them!! - additionally time pickers too)
          //  https://github.com/wojtekmaj/react-date-picker
          //     - example / docs:  https://
          //     - recipies:        https://github.com/wojtekmaj/react-calendar/wiki/Recipes
          //         pro: Excellent options for selecting year, month, day; can be opened from an input box, actively maintained
          //         con: not particularly pretty, cannot select first day, except by changinf locale firstDayOfWeek="Arabic",but puts weekends on fri/sat (https://github.com/wojtekmaj/react-calendar)

        // x React Infinite Calendar
        // https://github.com/clauderic/react-infinite-calendar
        //     - example / docs:  http://clauderic.github.io/react-infinite-calendar/#/basic-settings/max-date?_k=ao80pv
        //         pro: looks good, easy to change year, month, day, works well on mobile and desktop, EASY to use!!, could use t show dates with workouts
        //         con: infinite scroll is messy to me, "today" only shows up if do a big scroll, needs maintainer (2019)- last updated 2017,buggy
