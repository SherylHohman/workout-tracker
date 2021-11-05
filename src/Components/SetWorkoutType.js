import React from 'react';
import exerciseTypes from '../data/exerciseTypes';

class SetWorkoutType extends React.Component{

  state = {exerciseType:   'Get Moving!'}
          // Legit Values: cardio, weights, stretch, other/outdoor

  componentDidMount(props){
    this.setState({exerciseType: this.props.exerciseType});
  }

  onChangeExercise = (event) => {
    const exerciseType = event.target.value;
    this.setState({exerciseType: exerciseType});
    this.props.onChangeExercise(exerciseType)
  }

  render(props){

    // INPUT FIELDS ALPHABETIC Fields Locations / DATES (day of week/month)
    //  const toLettersOnly = (str) => {
    //     str = str.replace(/[^a-zA-Z]/g, ''); // add - if want negative decimals
    //     // remove spaces
    //     // str.replace(/^[0]+/g,"");
    //     return str;
    // }
    const toTitleCase = (str) => {
      // This version only works on single words, not sentences or multiple words
        str = str.toLowerCase().split('');
        //requires single word, otherwise split on ' '
        str[0] = str[0].toUpperCase();
        return str.join('');
    }

    const renderedRadioButtons = exerciseTypes.map( exerciseType =>{
      const value = exerciseType.option;
      return (
        <React.Fragment key={value}>
          <label className="">
          <input type="radio" name={value} id={value}
                 value={value} onChange={this.onChangeExercise}
                 checked={this.state.exerciseType === value}
                 />
          {exerciseType.label}
          </label>
        </React.Fragment>
      );
    });

      return (
        <div>SetWorkoutType
                    <fieldset>
                      <h3>{toTitleCase(this.state.exerciseType)}</h3>
                      {renderedRadioButtons}

                    </fieldset>

        </div>
      );
    }
}


export default  SetWorkoutType;
