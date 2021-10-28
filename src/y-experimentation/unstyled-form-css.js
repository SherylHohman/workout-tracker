import React from "react";

class FormUnstyled extends React.Component {
        // Cons: ugly! forms
        // Pros: easiest to add styling to later :(

    state = {
        hours:          '',
        minutes:        '',
        location:       '',
        exerciseType:   '',
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

     toIntegerNumbersOnly = (str) => {
        str = str.replace(/\D/g,'');
        // no leading zeors
        str.replace(/^[0]+/g,"");
        return str;
    }
     toDecimalNumbersOnly = (str) => {
        str = str.replace(/[^\d.]/g, ''); // add - if want negative decimals
        // no leading zeors
        str.replace(/^[0]+/g,"");
        return str;
    }

    onChangeHours = (event) => {
        this.setState({hours: this.toDecimalNumbersOnly(event.target.value)});
    }
    onChangeMinutes = (event) => {
        this.setState({minutes: this.toIntegerNumbersOnly(event.target.value)});
    }
    onClearHours = (event) => {
        this.setState({hours: '0'});
    }
    onClearMinutes = (event) => {
        this.setState({minutes: '0'});
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('I have your data');
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
           <div>
                <form>

                      <fieldset>
                        <label>Total</label>
                        <h3>{totalTime}</h3>
                        <h3>{totalTime2}</h3>
                        <br /><br />

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
                      <label className="">
                        <input type="radio" name="exerciseType" value="cardio" id="cardio"  />
                        Cardio
                      </label>
                      <label className="">
                        <input type="radio" name="exerciseType" value="weights" id="weights"  />
                        Weights
                      </label>
                      <label className="">
                        <input type="radio" name="exerciseType" value="stretch" id="stretch"  />
                        Stretch
                      </label>
                    </fieldset>

                        <label>Location</label>
                        <input  type="text" name="location" id="location"
                                placeholder="24 SC"
                                value={this.state.location}
                                onChange={this.onChangeDate}
                        />
                        <br /><br />

                      <fieldset>
                        <h3>{dateString}</h3>

                        <label>Day of Week</label>
                        <input  type="text" name="dayOfWeek" id="dayOfWeek"
                                placeholder="Tue"
                                value={this.state.dayOfWeek}
                                onChange={this.onChangeDate}
                        />
                        <br />

                        <label>Date in Month</label>
                        <input  type="text" name="date" id="date"
                                placeholder="27"
                                value={this.state.dayofMonth}
                                onChange={this.onChangeDate}
                        />
                        <label>Month</label>
                        <input  type="text" name="month" id="month"
                                placeholder="Oct"
                                value={this.state.month}
                                onChange={this.onChangeDate}
                        />
                        <label>Year</label>
                        <input  type="text" name="year" id="year"
                                placeholder="2021"
                                value={this.state.year}
                                onChange={this.onChangeDate}
                        />
                      </fieldset>

                    <button onSubmit={this.onSubmit}>Add Workout</button>

                </form>
            </div>
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

export default FormUnstyled;
