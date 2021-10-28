import React from "react";
// import '';

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

          <div className="ui ">
          <form className="ui form ">

              <div className="ui equal width grid">
                <div className="column">
                  <div className="ui segment inverted">
                    <input type="text" placeholder="type something" />
                  </div>
                </div>
                <div className="eight wide column">
                  <div className="ui segment inverted">
                    2
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment inverted">
                    3
                  </div>
                </div>
              </div>
              <br />
              <br />

              <div className="grid two fields inverted ui ">
                  <div className="column">
                    <div className="field six wide">
                      <label  style={{'color': 'yellow'}}>Hours</label>
                      <input type="text" name="hours" placeholder="2.5" />
                    </div>
                  </div>
                  <div className="column">
                    <div className=" field six wide">
                      <label  style={{'color': 'yellow'}}>Minutes</label>
                      <input type="text" name="minutes" placeholder="30" />
                    </div>
                  </div>
              </div>

              <div className="">
                  <label>Hours</label>
                  <div className="ui right labeled input">
                    <input type="text" placeholder="Enter hours.." />
                    <div className="ui basic label">
                      hr
                    </div>
                  </div>
                  <br /><br />

                  <label>Minutes</label>
                  <div className="ui right labeled input">
                    <input type="text" placeholder="Enter minutes.." />
                    <div className="ui basic label">
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
                  </div>

                  <div className="inline fields">
                    <label htmlFor="fruit">Select your favorite fruit:</label>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="fruit" checked="" tabIndex="0" className="hidden" />
                          <label>Apples</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="fruit" tabIndex="0" className="hidden" />
                          <label>Oranges</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="fruit" tabIndex="0" className="hidden" />
                          <label>Pears</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="fruit" tabIndex="0" className="hidden" />
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
                          <input type="checkbox" tabIndex="0" className="hidden" />
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
          </div>
      );
  }

export default formSemanticUIstyled;
