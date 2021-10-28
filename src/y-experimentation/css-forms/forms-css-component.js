import React from "react";
// experimental
import formBulmaStyled from "./bulma-form-css";
import formPurecssStyled from "./pureio-form-css";
import formSemanticUIstyled from "./semantic-form-css";
// import formUnstyled from "./unstyled-form-css";
import FormUnstyled from "./unstyled-form-css";

class TestStyles extends React.Component {

  state = {selectedUI: 'unstyled'};

  // onComponentDidMount(props){
  //   this.setState({selectedUI: 'unstyled'})
  // }

  // on re-render: call setstate again

  onSelectUI = (event) => {
    // event.preventDefault();
    this.setState({selectedUI: event.target.value});
  }

  render() {

    // MAIN APP UI
    // const border = {border: 'solid red 2px'};
    const border = 'solid red 2px';
    // const colors = {backgroundColor : 'green', color:'orange'};
    const none = {}

    const showSemantic = function(){
      return(
          <div>
            <h2>SemanticUI</h2>
            <div style={{backgroundColor : 'hsl(220, 13%, 18%)', color:'yellow', border: border}}>
                {formSemanticUIstyled()}
            </div>
            <br />
            <hr />
          </div>
      );
    }

    const showPure = function(){
      return(
          <div>
            <h2 style={{backgroundColor : 'white', color:'black'}}>Pure</h2>
            <div style={{backgroundColor : 'white', color:'black'}}>
                {formPurecssStyled()}
            </div>
            <br />
            <hr />
          </div>
      );
    }

    const showBulma = function(){
      return(
          <div>
            <h2>Bulma</h2>
            <div style={{backgroundColor : 'cyan', color:'yellow'}}>
                {formBulmaStyled()}
            </div>
            <br />
            <hr />
          </div>

      );
    }

    // const formUnstyled = new FormUnstyled;
    const showUnstyled = function(){
      return(
          <div>
            <h2>unstyled</h2>
            <div style={{backgroundColor : 'black', color:'lightblue'}}>
                <FormUnstyled />
            </div>
          </div>
      );
    }

    return (
      <div style={none}>
          <h1>Add Workout</h1>

          <div>
            <button onClick={this.onSelectUI} value="unstyled" id="unstyled" name="uiStyle">unstyled</button>
            <button onClick={this.onSelectUI} value="semantic" id="semantic" name="uiStyle">Semantic UI</button>
            <button onClick={this.onSelectUI} value="bulma" id="bulma" name="uiStyle">Bulma</button>
            <button onClick={this.onSelectUI} value="pure" id="pure" name="uiStyle">Pure</button>
            <p>{this.state.selectedUI}</p>
          </div>

          { this.state.selectedUI==='semantic' && showSemantic() }
          { this.state.selectedUI==='pure' && showPure() }
          { this.state.selectedUI==='bulma' && showBulma() }
          { this.state.selectedUI==='unstyled' && showUnstyled() }



      </div>
    );
  }
}

export default TestStyles;
