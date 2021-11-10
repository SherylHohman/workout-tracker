import React from "react";
import "./css/bulma.min.css";

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

              <div className="field">
                <label className="label">Hours</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </div>
              </div>

              <div className="field">
                <label className="label">Minutes</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </div>
              </div>

              <div className="field">
                <label className="label">Where?</label>
                <div className="control">
                  <input className="input is-success" type="text" placeholder="e.g. Alex Smith" />
                </div>
                <p className="help is-success">This username is available</p>
              </div>

              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input className="input is-danger" type="email" placeholder="e.g. alexsmith@gmail.com" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p className="help is-danger">This email is invalid</p>
              </div>

              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Notes</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>


              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>


              <div className="field">
                  <div className="control">
                    <label className="radio">
                      <input className="input" type="radio" name="exerciseType" value="cardio" id="cardio" />
                      Cardio
                    </label>
                    <label className="radio">
                      <input className="input" type="radio" name="exerciseType" value="weights" id="weights"  />
                      Weights
                    </label>
                    <label className="radio">
                      <input className="input" type="radio" name="exerciseType" value="stretch" id="stretch"  />
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
                      <input type="radio" name="exerciseType" value="cardio" id="cardio"  />
                      Cardio
                  </label>
                  <label>
                      <input type="radio" name="exerciseType" value="weights" id="weights"  />
                      Weights
                  </label>
                  <label>
                      <input type="radio" name="exerciseType" value="stretch" id="stretch"  />
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

export default formBulmaStyled;

  /*
  If decide to use Bulma, here is where it can be found
      <!-- Bulma.css: To test out bulma.io styling, use  -->
      //  To use for the entire app add below to public/index.html -->
      // <link rel="stylesheet" href="css/bulma.min.css">
      <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> -->
      // or npm install it into the project
  */
