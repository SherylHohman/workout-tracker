import React from "react";

function AddWorkout() {

    const formBulmaStyled = function() {

        /*
                My Issues with Bulma are:
                    -   Only Flexbox, NO Grid !!
                    -   Cannot change colors without installing,
                        using precomiler framework and re-compiling.
                        (Less, I think, I do not rem which one).
                    -   It even overrides colors passed down as props.
                        Would have to apply the custom (non Bulma) class
                        to EVERY element! in order to override their colors.
                Benefits are:
                    - looks good
                    - has good field error checking and styling
          */

        return (

            <form className="box has-background-dark has-text-light" style={{backgroundColor : 'black', color:'white'}}>

                <div class="field">
                  <label class="label">Hours</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Text input" />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Minutes</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Text input" />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Where?</label>
                  <div class="control">
                    <input class="input is-success" type="text" placeholder="e.g. Alex Smith" />
                  </div>
                  <p class="help is-success">This username is available</p>
                </div>

                <div class="field">
                  <label class="label">Date</label>
                  <div class="control">
                    <input class="input is-danger" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field">
                  <label class="label">Subject</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Notes</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                  </div>
                </div>


                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                  <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                  </div>
                </div>


                <div className="field">
                    <div className="control">
                      <label className="radio">
                        <input className="input" type="radio" className="exerciseType" />
                        Cardio
                      </label>
                      <label className="radio">
                        <input className="input" type="radio" className="exerciseType" />
                        Weights
                      </label>
                      <label className="radio">
                        <input className="input" type="radio" className="exerciseType" />
                        Stretch
                      </label>
                    </div>

                    <div>
                        <label>Date</label>
                        <input className="input" /><br /><br />
                        <label>Hours</label>
                        <input className="input" /><br /><br />
                        <label>Minutes</label>
                        <input className="input" /><br /><br />
                        <label>Location</label>
                        <input className="input" /><br /><br />
                    </div>
                </div>



                <div>
                    <label>
                        <input type="radio" className="exerciseType" />
                        Cardio
                    </label>
                    <label>
                        <input type="radio" className="exerciseType" />
                        Weights
                    </label>
                    <label>
                        <input type="radio" className="exerciseType" />
                        Stretch
                    </label>
                    <div>
                        <label>Date</label>
                        <input /><br /><br />
                        <label>Hours</label>
                        <input /><br /><br />
                        <label>Minutes</label>
                        <input /><br /><br />
                        <label>Location</label>
                        <input /><br /><br />
                    </div>

                </div>

            </form>
        );
    }

    const formPurecssStyled = function() {

        /*
            My issues with Pure are:
            -  I forgot.
            -  (see Benefits) extra typing repetitive reading as every class is
                prefixed with "pure-". Also I do not like the NAME of the library.
                purecss is too similar to pure css as it is commonly used.
                This also makes searches difficult.
            -  Ugly classes. My brain does not want to read them. Maybe they are
                easier to read, once convince brain to bother with it?
            Benefits
            -  I forgot.
            -  all pure classes are prefixed as pure, for easy identification!
          */
        return (
            <form class=" pure-u-1 pure-u-md-1-2pure-u-lg-1-4  pure-form pure-form-aligned " background-color="yellow">
                <fieldset>
                    <div class="pure-control-group">
                        <label for="aligned-name">Username</label>
                        <input type="text" id="aligned-name" placeholder="Username" />
                        <span class="pure-form-message">This is a required field.</span>
                    </div>
                    <div class="pure-control-group">
                        <label for="aligned-password">Password</label>
                        <input type="password" id="aligned-password" placeholder="Password" />
                    </div>
                    <div class="pure-control-group">
                        <label for="aligned-email">Email Address</label>
                        <input type="email" id="aligned-email" placeholder="Email Address" />
                    </div>
                    <div class="pure-control-group">
                        <label for="aligned-foo">Supercalifragilistic Label</label>
                        <input type="text" id="aligned-foo" placeholder="Enter something here..." />
                    </div>
                    <div class="pure-controls">
                        <label for="aligned-cb" class="pure-checkbox">
                            <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the terms and conditions
                        </label>
                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </div>
                </fieldset>

                <div class="">
                    <label class="radio">
                        <input type="radio" className="exerciseType" />
                        Cardio
                    </label>
                    <label class="radio">
                        <input type="radio" className="exerciseType" />
                        Weights
                    </label>
                    <label class="radio">
                        <input type="radio" className="exerciseType" />
                        Stretch
                    </label>

                    <label>Hours</label>
                    <input /><br /><br />
                    <label>Minutes</label>
                    <input /><br /><br />
                    <label>Location</label>
                    <input /><br /><br />
                    <label>Date</label>
                    <input /><br /><br />
                </div>


                <div className='pure-g pure-u-1 pure-u-md-1-3'>

                    <div class="">
                      <label class="">
                        <input type="radio" className="exerciseType" />
                        Cardio
                      </label>
                      <label class="">
                        <input type="radio" className="exerciseType" />
                        Weights
                      </label>
                      <label class="">
                        <input type="radio" className="exerciseType" />
                        Stretch
                      </label>
                    </div>

                    <label className=''>Hours</label>
                    <input /><br /><br />

                    <label>Minutes</label>
                    <input /><br /><br />

                    <label>Location</label>
                    <input /><br /><br />

                    <label>Date</label>
                    <input /><br /><br />
                </div>

            </form>
        );
    }

    const formSemanticUIstyled = function () {

        /*
            My issues with Semantic UI are:
            -  on "mobile" widths, it overrides all fields to be 1 field/line
                NO way to override this via any classes. ARGH!!
                EVEN when SPECIFY widths of fields. :-((
                There MIGHT be a way around this by using GRID instead ??
                That will take some time to figure out, if so. It also takes away
                some of its standard features
            -  Without class name prefixes, it is difficult to know at a glance
                which classes are by them. This can make updating or swapping css
                frameworks difficult.
                Also might make troubleshooting CSS styles more difficult.
            -  It seems than some styling combos (such as number of columns,
                depending on size of screen) are order dependant.
                This makes those class lists difficult to read and interpret.
                I suspect it may lead to strange errors when adding and removing classes.
                As my understanding, classes added to elements are not supposed to
                be order dependant. AND a duplicate class name should not have any
                bearing (ie generally ignored.)
            Benefits
            -  Have more control over colors. At least some custom classes can
                overrid Semantics and will cascade down without being overridden.
            -  The classnames are more natural (language) and easier to read in some
                cases. Though some seem to be order dependant, which is weird and I
                suspect could lead to errors if add/remove class names via JS.
        */

        return (

            <form className="ui form ">

                <div className="ui equal width grid">
                  <div className="column">
                    <div className="ui segment">
                      1
                    </div>
                  </div>
                  <div className="eight wide column">
                    <div className="ui segment">
                      2
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui segment">
                      3
                    </div>
                  </div>
                </div>
                <br />
                <br />

                <div class="field inverted ui segment">
                    <div className="two fields">
                      <div className="field two wide">
                        <label  style={{'color': 'yellow'}}>Hours</label>
                        <input type="text" name="hours" placeholder="2.5" />

                      </div>
                      <div className="field two wide">
                        <label  style={{'color': 'yellow'}}>Minutes</label>
                        <input type="text" name="minutes" placeholder="30" />
                      </div>
                    </div>
                </div>

                <div className="">
                    <label>Hours</label>
                    <div class="ui right labeled input">
                      <input type="text" placeholder="Enter hours.." />
                      <div class="ui basic label">
                        hr
                      </div>
                    </div>
                    <br /><br />

                    <label>Minutes</label>
                    <div class="ui right labeled input">
                      <input type="text" placeholder="Enter minutes.." />
                      <div class="ui basic label">
                        min
                      </div>
                    </div>
                    <br /><br />

                    <label>Date</label>
                    <input /><br /><br />
                    <label>Location</label>
                    <input /><br /><br />
                </div>

                    <div className="">
                      <label className="">
                        <input type="radio" className="exerciseType" />
                        Cardio
                      </label>
                      <label className="">
                        <input type="radio" className="exerciseType" />
                        Weights
                      </label>
                      <label className="">
                        <input type="radio" className="exerciseType" />
                        Stretch
                      </label>
                    </div>

                    <div className="inline fields">
                      <label for="fruit">Select your favorite fruit:</label>
                        <div className="field">
                          <div className="ui radio checkbox">
                            <input type="radio" name="fruit" checked="" tabindex="0" className="hidden" />
                            <label>Apples</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden" />
                            <label>Oranges</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden" />
                            <label>Pears</label>
                          </div>
                        </div>
                        <div className="field">
                          <div className="ui radio checkbox">
                            <input type="radio" name="fruit" tabindex="0" className="hidden" />
                            <label>Grapefruit</label>
                          </div>
                        </div>
                    </div>


                    <div className="ui inverted segment">
                      <div className="ui inverted form">
                        <div className="two fields">
                          <div className="field">
                            <label>First Name</label>
                            <input placeholder="First Name" type="text" />
                          </div>
                          <div className="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" type="text" />
                          </div>
                        </div>
                        <div className="inline field">
                          <div className="ui checkbox">
                            <input type="checkbox" tabindex="0" className="hidden" />
                            <label>I agree to the terms and conditions</label>
                          </div>
                        </div>
                        <div className="ui submit button">Submit</div>
                      </div>
                    </div>

                <select name="skills" multiple="" className="ui fluid dropdown">
                  <option value="">Skills</option>
                  <option value="angular">Angular</option>
                  <option value="css">CSS</option>
                  <option value="ember">Ember</option>
                  <option value="html">HTML</option>
                  <option value="javascript">Javascript</option>
                  <option value="meteor">Meteor</option>
                  <option value="node">NodeJS</option>
                </select>

            </form>




        );
    }

    const formUnstyled = function() {

        // Cons: ugly!
        //

        return(
           <div>
                <form>

                    <div className="">
                        <label>Date</label>
                        <input /><br /><br />
                        <label>Hours</label>
                        <input /><br /><br />
                        <label>Minutes</label>
                        <input /><br /><br />
                        <label>Location</label>
                        <input /><br /><br />
                    </div>

                    <div className="">
                      <label className="">
                        <input type="radio" className="exerciseType" />
                        Cardio
                      </label>
                      <label className="">
                        <input type="radio" className="exerciseType" />
                        Weights
                      </label>
                      <label className="">
                        <input type="radio" className="exerciseType" />
                        Stretch
                      </label>
                    </div>

                </form>
            </div>
        );
    }


    // MAIN APP UI

    const border = {border: 'solid red 2px'};
    const colors = {backgroundColor : 'green', color:'orange'};
    const none = {}

    return (
        <div style={none}>
            <h1>Add Workout</h1>

            <h2>SemanticUI</h2>
            <div style={{backgroundColor : 'hsl(220, 13%, 18%)', color:'yellow'}} style={border}>
                {formSemanticUIstyled()}
            </div>
            <br />
            <hr />

            <h2 style={{backgroundColor : 'white', color:'black'}}>Pure</h2>
            <div style={{backgroundColor : 'white', color:'black'}}>
                {formPurecssStyled()}
            </div>
            <br />
            <hr />

            <h2>Bulma</h2>
            <div style={{backgroundColor : 'cyan', color:'yellow'}}>
                {formBulmaStyled()}
            </div>
            <br />
            <hr />

            <h2>unstyled</h2>
            <div style={{backgroundColor : 'black', color:'lightblue'}}>
                {formUnstyled()}
            </div>
         </div>
    );
}

export default AddWorkout;
