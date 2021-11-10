import './App.css';
import AddWorkout from './Components/AddWorkout';
// TEMP EXPERIMENT:
import TestStyles from './y-experimentation/css-forms/testStyles.js';

// In general it is preferential to import images into the modules as needed.
  // Added benefit: The build breaks on missing images,
  //   unlike a missing image/path referenced directly
  // In general, also, all images should reside under the src directory.
  // Not the public directory.
  // Unless the same images are shared OUTSIDE of react.
  // Note that React CANNOT import images/files that reside
  //   OUTSIDE the scope of the src directory
  // However, in this case the image I am using IS used outside of react,
  //   and must exist in the public folder.
  // As is preferable to not duplicate the image...
  //   I'll just assign its path to a CONST instead
  //   The browser at run time can access ITS root to retrieve the file.
  //   Rem, React could not access it at Build time, as it is above React's root.
  // As for the path: note that
  //   the Public folder IS the root folder for the website
  //    (src is the root for the React so the build process cannot reach upward to public
  // For more info: https://daveceddia.com/react-image-tag/
  // Also, this is just a placeholder. I may not even have an image on this page later.
const flower_logo = './android-chrome-192x192.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Workout Tracker
        </h1>
        <img src={flower_logo} className="App-logo" alt="logo" />
        By Sheryl Hohman
      </header>
      <AddWorkout />

      <br /><br /><br />
      <h1>Test Style Libraries?</h1>
      <TestStyles />
      <br />
    </div>
  );
}

export default App;
