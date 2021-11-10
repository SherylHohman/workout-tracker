import React from "react";
import './css/pure-min.css';

  const formPurecssStyled = function() {

      return (
          <form className=" pure-u-1 pure-u-md-1-2pure-u-lg-1-4  pure-form pure-form-aligned " background-color="yellow">
              <fieldset>
                  <div className="pure-control-group">
                      <label htmlFor="aligned-name">Username</label>
                      <input type="text" id="aligned-name" placeholder="Username" />
                      <span className="pure-form-message">This is a required field.</span>
                  </div>
                  <div className="pure-control-group">
                      <label htmlFor="aligned-password">Password</label>
                      <input type="password" id="aligned-password" placeholder="Password" />
                  </div>
                  <div className="pure-control-group">
                      <label htmlFor="aligned-email">Email Address</label>
                      <input type="email" id="aligned-email" placeholder="Email Address" />
                  </div>
                  <div className="pure-control-group">
                      <label htmlFor="aligned-foo">Supercalifragilistic Label</label>
                      <input type="text" id="aligned-foo" placeholder="Enter something here..." />
                  </div>
                  <div className="pure-controls">
                      <label htmlFor="aligned-cb" className="pure-checkbox">
                          <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the terms and conditions
                      </label>
                      <button type="submit" className="pure-button pure-button-primary">Submit</button>
                  </div>
              </fieldset>

              <div className="">
                <fieldset>
                  <label className="radio">
                      <input type="radio" name="exerciseType" value="cardio" id="cardio"  />
                      Cardio
                  </label>
                  <label className="radio">
                      <input type="radio" name="exerciseType" value="weights" id="weights"  />
                      Weights
                  </label>
                  <label className="radio">
                      <input type="radio" name="exerciseType" value="stretch" id="stretch"  />
                      Stretch
                  </label>
                </fieldset>

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

                  <div className="">
                    <label className="">
                      <input type="radio" name="exerciseType_2" value="cardio_2" id="cardio_2"  />
                      Cardio
                    </label>
                    <label className="">
                      <input type="radio" name="exerciseType_2" value="weights_2" id="weights_2"  />
                      Weights
                    </label>
                    <label className="">
                      <input type="radio" name="exerciseType_2" value="stretch_2" id="stretch_2"  />
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

export default formPurecssStyled;

  /*
      My issues with Pure are:
      -  I forgot.
      -  (also see Benefits) extra typing repetitive reading as every class is
          prefixed with "pure-".
      -  Ugly classes. My brain does not want to read them. Maybe they are
          easier to read, once convince brain to bother with it?
      -  Also I do not like the NAME of the library.
          purecss is too similar to pure css as it is commonly used.
          This also makes searches difficult.
      -   I do not like the word "pure" to be in  every className list
          though one might think I might like the word "pure", I do not.
        - Do not like the name "pure", particularly as it gives itself the
          nomenclature: pure css. Which is clearly not pure css.
          It is custom classes.
          I get that it is classes ONLY, nothing applied to elements themselves
          and no custom components, et al. So it tried to market itself on this
          as its strength. But the effect lends itself to a misnomer.
          It also pollutes the search term for pure css,
          whether you are searching for info on this library,
          or info excluding this library!
      Benefits
      -  I forgot.
      -  all pure classes are prefixed as pure, for easy identification!
    */

  /*
      To use this library for the entire app, either:
        install it via npm, or add one of the following link tags
        to public/index.html,
        or add the css file to public/css and add a link tag to that file.
      <!-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/pure/2.0.6/build/pure-min.css"> -->
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">
      <!-- PureCss: To test out pure.io styling, use  this/
              Note: Normalize.css is performed at the base of pure.io and
               built up from there. It is duplicitous to include normalize when
              using this library.
      -->
  */
