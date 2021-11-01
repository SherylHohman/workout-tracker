import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import GetWorkoutDate from './GetWorkoutDate';
import SetWorkoutDuration from './SetWorkoutDuration';
import '../css/sh-custom-react-calendar.css';


class AddWorkout extends React.Component {

  // state = {
    //     hours:          '',
    //     minutes:        '',
    //     location:       '',
    //     exerciseType:   'Get Moving!',
    //     dayOfWeek:      'Tue',
    //     month:          'Oct',
    //     dayOfMonth:     '27',
    //     year:           '2021',
    //     calendarValue:  new Date()
    // };
    // TODO: in state, only need to store a Date object.
    //       Then locally, extract out the values that I will use on the page.
    //       Everything in the database should be stored as standard JS date objects
    //       Well, elapsed time, maybe not.
    // TODO: Need fields for stop & start exercise times, plus default values
    //        for when I do not actually record this data.
    //        rem: the start-stop time may be LONGER than the elapsed workout time.
    //      Need values for cycling, running, and misc cardio equipment.
    //        distance (eg miles), average speed, max speed, ODO reading.
    //        Name of equipment used (MB4, Trek;  stairmaster, specific brand of elliptical;
    //        calesthenics, free weights; stretch vs yoga vs qui gong)

    // how shall I store the elapsed exercise time in the DB?
    //  as total minutes? As some combo of fields like hours, minutes, (seconds?)
    //  some JS Date object, eg "total time since 1970"
    //  but its elapsed exercise time, not time since EPOCH?
    //  For now lets say minutes.

    // ideally, would defaults for
      //  duration, location, exerciseType... would be
      //  the last used, the most frequently used (recently anyway),
      //  or some prediction on what will be next entered

  state = {
      exerciseTotalMinutes: 0,
      //durationInMinutes: '0',
      // should I store in DB as "minutes", or as milliseconds since Epoch"
      //   eg new Date(0, 0, 0, 0, exerciseTotalMinutes).getDate();, where year=month=date=hour=0)
      // hours:          0,
      // minutes:        0,

      exerciseType:   'Get Moving!',  // cardio, weights, stretch, other/outdoor
      calDate:         new Date(),
      location:       '',

      // This was recorded for many years.
      //  In fact it was tied to a 4th Category!
      //  (outdoors, or ANY alternate activity: skating, walking outside)
      //    I had set a goal of doing something like that like
      //    1 or 2/week, or maybe 30 min/week. Particularly in McNaughton era
      //  )
      outdoors:       'false',

      // only applicable to cardio
      // (NEEDED for cycling)
      distanceInMiles:  '',
      aveMPH:           '',
      maxMPH:           '',

      // applicable to my home bike (bicycles only)
      // might even have 2 odometers: 1 per bike
      // (NEEDED for cycling)
      odoEnd:           '',

      // applicable to gym cardo machines only
      //  can enact this later, when actually begin entering old data
      // aveCadence:       '',
      // maxCadence:       '',
      // aveCaloriesBurned:'',

      // only emplement this for my bikes for now
      equipment:        'MB4',
        // for now: MB4, none, calesthenics/dumbells, gym weight machines,
        // then:    treadmill, gym cardio machines, Vicount, Trek

        // MB4, Trek, Vicount, gymElliptical, gymRecumbant, gymUprightBike
        // treadmill, none (eg outdoor running, walking)
        // outdoors vs indoors (cycling inside vs outside, )

      // I did record this for a few years!!
      //  sometimes as an exact time, sometimes as morn, night, afternoot, etc
      //  Will want this implemented before get to those records! DRY data entry.
        startTime:   '',  // TODO
        stopTime:    ''   // TODO
        // note: stop-start can be > exercise duration
  };


  // SetWorkoutDuration helper methods were here

  //const [value, onChange] = useState(new Date());

  componentDidMount(props){
    console.log("componentDidMount, state:", this.state);
  }

    onCalendarChange = (date) => {
      // for react-calendar: it gives me a Date object
      console.log('selected date:',date);
      this.setState({calDate: new Date(date)});
    }

    /*
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
    */

    // FOR ENTERING DATES, TIMES
    // -- These should be exported to a Utility File
    //  so it can be accessed by multiplel components

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

    // INPUT FIELDS FOR TIMES/ DURATIONS were here

    onChangeExercise = (event) => {
      this.setState({exerciseType: event.target.value});
    }

    onChangelocation = (event) => {
      const newValue = event.target.value;
      this.setState({location: newValue.trim()});
      // TODO: do not trim until send form. Otherwise cannot add spaces between words
      // TODO: even better, use a searchable drop down PLUS ADD NEW option
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

    onSubmit = (event) => {
        event.preventDefault();
        console.log('I have your data:\n', this.state);
    }

    render() {



  // NEW VERSION OF CODE. Refactor Render fUnction to use this instead

    // const exerciseLocation = this.state.location;

    // TODO specific equipment used (MB4, Vicount, Trek, elliptical + brand)
      //  also city, country, state (past workouts)
      //  also name of club (24hour fit generally, home, hotel, outside)
      //  currently what I will store is only the specific place
      //    (24 SC, 24 Antioch, The Gym Rio Vista, home trailer park, "home Landaiche")
      //    Note that the specific locations automatically encode City, Business Name, et al
      //    it is simply a matter of setting up the various data associated with each
      //    so that can run stats on the broader categories, rather than just the specific ones.
      //    All that data can be input later by the user. And by me, the programmer.


    // SetWorkoutDuration render helper functions were here


    //
    // Not sure if start/end TIME of workout should be part of THIS component or
      // DATE - get workout Date component, as it is part of a Date()
      // or should be a separate getStartTIME/getEndTime component.
      // the 3rd party Calendar component I eventually use may only do the DATE
      // but not the TIME.
      // so for now I have code fragments both here and in the parent AddWorkout.js
    const calDate = this.state.calDate;

    /* HIDE FOR NOW
    const startTimeMin = calDate.getMinutes();
    let startTimeHr    = calDate.getHours();
    let strAMorPM         = 'AM';
    // (assumes any value input has been normalized 0-23,
    //  make sure onChange Input handles bad input, or perform Hr % 24)
    if (startTimeHr >= 12) {
      strAMorPM = 'PM';
      startTimeHr = startTimeHr - 12;
    }
    */



    // TODO: This should be moved to a global utilities file
    function shDateString(dateObj){
      // output date in format: Fri, 29 Oct 2021
      // (Date.toDateString returns format: Fri Oct 29 2021)
      // (ie add comma and swap month and date values)

      // Note my preferred calendar shortcuts are Different than toDateString()
      // June, July, and Sept use 4 characters
      // optionally use monthAlt instead of month in output string
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      const monthAlt   = months[dateObj.getMonth()];

      const [day, month, date, year] = dateObj.toDateString().split(' ');
      return `${day}, ${date} ${month} ${year}`;
    }

    function shTimeString(dateObj){
      // output time in format: 3:30 PM
      // (Date.toTimeString returns format: 15:30:00 GMT-0700 (Pacific Daylight Time))
      // I am not even in Daylight time right now, why does my local browser think I am??
      // Does NOT output the time zone. Could this be problematic?
      // Does NOT output time in format: 3:30 PM PST or PDT
      // becauase I will NOT do a lookup for other time zone abbreviations
      const [time24, gmt, timeZone] = dateObj.toTimeString().split(' ');
      const [HH24, MM, ss] = time24.split(':');
      let HH = HH24;
      let AMorPM = 'AM';
      if (HH >=12){
        HH = HH - 12;
        AMorPM = 'PM';
      }
      return `${HH}:${MM} ${AMorPM}`;
    }

    // const calendarStyle_selectedDate =
    //      '.react-calendar__tile--active {
    //           background: #ffac33;
    //           color: white;
    //           border-radius: 50%;
    //       }';


  //  End local Render helper functions

        return(
           <section>
                <br />
                <form onSubmit={this.onSubmit}>
                      {/*HA! onSubmit is attached to the FORM, NOT the button!*/}

                    <fieldset>
                      <button>Add Workout</button>
                      <button>Save DRAFT</button>
                      <br />
                    </fieldset>

                    <fieldset>
                      Workout Date:
                      <h3>{shDateString(this.state.calDate)}</h3>
                    </fieldset>

                    <SetWorkoutDuration />

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

                    <GetWorkoutDate>
                      {/* will I have a getworkoutTime or Calendar children or not?  */}
                      {/* currently only shows START TIME. should move calendar into here  */}
                    </GetWorkoutDate>


                    <fieldset>
                      {/* TODO:
                            - move all custom react-calendar stuff to GetWorkoutDate component
                            - only open it if the h3 ShDateString is clicked on
                            - add a "today" button to reset to current day
                            - style today with a green border
                            - highlight weekends
                            - move first day of week as Mon, or Sat
                            - Add Mon, Tue, ... Day of Week Headers!!
                            - I would actually prefer to only show 1-2 weeks. Scroll for more weeks
                      */}
                      <Calendar
                        onChange={this.onCalendarChange}
                        value={this.state.calDate}
                        view={"month"}
                      />
                    </fieldset>

                    <fieldset>
                      {/* This might be moved into getWorkoutDate or getworkoutTime component
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
                      */}
                    </fieldset>

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

        // React Calendar AND
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
