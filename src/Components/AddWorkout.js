import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
      exerciseTotalMinutes: '',
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
        // startTime:   '',  // TODO
        // stopTime:    ''   // TODO
        // note: stop-start can be > exercise duration
  };

  // utility conversion functions
  toHHMM(totalMinutes){
    // hh can be a float or integer. mm must be an integer
    // normalizes to max hr, and  mm < 60
    // normalize to integer hours and minutes, keeping minutes < 60
    const hh = Math.trunc(totalMinutes/60);
    const mm = totalMinutes % 60;
    return [hh, mm];
  }
  toTotalMinutes(hh, mm){
    // returns sum of hh + mm as total minutes as an Integer
    // hh can be entered as a decimal value eg 1.25hr, or an integer, or string
    // mm should be an integer (or string) (maybe round JIC get some decimal value??)
    // input can be STRING or Integer or Float (or null or empty string)
    // NOTE: assumes a string only contains numbers or an optional decimal point.
        // an error will occur elsewise.
        // an odd bug not throwing an error will result if certain chars
        // are not stripped letters off: parseFloat/parseInt might convert
        // to oOctal, hex, insted. To avoid that, supply 2nd param of 10
        // also JIC could re-strip the numbers.
    const totalMinutes = parseFloat(hh || 0) * 60 +
                           parseInt(mm || 0);
    // JS float plus irrational numbers require rounding to closest integer
    return Math.round(totalMinutes);
  }
  normalizeHHMM(hh, mm){
    //  input can be string representations or numbers, where
    //    hh is float or integer (or stripped string representation),
    //    mm is integer (or stripped string representation of int)
    //  returns normalized integer values of hh and mm
    //  eg 1.25hr + 15 minutes is returned as 1hr 30min
    //  ie an [hh, mm] array of: [1, 30]
    return toHHMM(toTotalMinutes(hh, mm));
  }

  //const [value, onChange] = useState(new Date());

  componentDidMount(props){
    // set initial default calendar date to the time at component's initial mount.
    //  This can then be changed through the calendar or input fields.
    //  but is set/initialized as the current time only once: here!
    const calDate= new Date();
    console.log("componentDidMount, new calDate:", calDate);

    this.setState({
      calDate: calDate,
    });
    console.log("componentDidMount, state:", this.state);
  }

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



  // NEW VERSION OF CODE. Refactor Render fUnction to use this instead
    const exerciseLocation = this.state.location;
    // TODO specific equipment used (MB4, Vicount, Trek, elliptical + brand)
      //  also city, country, state (past workouts)
      //  also name of club (24hour fit generally, home, hotel, outside)
      //  currently what I will store is only the specific place
      //    (24 SC, 24 Antioch, The Gym Rio Vista, home trailer park, "home Landaiche")
      //    Note that the specific locations automatically encode City, Business Name, et al
      //    it is simply a matter of setting up the various data associated with each
      //    so that can run stats on the broader categories, rather than just the specific ones.
      //    All that data can be input later by the user. And by me, the programmer.

      const duration = this.state.exerciseTotalMinutes;
      const [exerciseHH, exerciseMM] = toHHMM(duration);
      // currently I do not record seconds.
      //  But when running, sometimes did..
      //  exerciseElapsedSeconds ?

      const calDate     = this.state.calDate;
      const year        = calDate.getFullYear();
      const month       = calDate.getMonth();
      const monthText   = months[month];
      const dateInMonth = calDate.getDate();
      const dayOfWeekText  = days[calDate.getDay()];

      // Do not implement yet ? Not sure if Calendars even support this
      // const startTime_hh   =    calDate.getHours(),
      // const startTime_mm   =    calDate.getMinutes(),
      // TBS, could just use input boxes. Pre-populate with current time
      //    allow user to change it manually.
    // }
    // These should be local variables, not ultimately store in the database,
        // nor even in state. Can provide a utility function for pulling out these
        // values from the state Date object.
        // should be recalculated every time the component re-renders
        // due to a state change. (well, everytime the state.calDate value changes)
        // so maybe it needs to be in the render function.
        // Do I need them anywhere else? Think only relevent in render.

    const days   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    hours  :    calDate.getHours(),
    minutes:    calDate.getMinutes(),
    dayOfWeek:  days[calDate.getDay()],
    dayOfMonth: months[calDate.getDate()],
    year:       calDate.getFullYear()

  // SOME OF THE BELOW has been replaced with above.
        // Need to refactor render code to use the replacements
        //  then delete what is no longer needed.
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

  //  End local Render helper functions

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

                    <Calendar
                      onChange={this.onCalendarChange}
                      value={this.state.calendarValue}
                    />

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
