
// Changes the DOM without going through React,
//  would this BREAK REACT ?
// Hmm.. this might be a bad idea.
// Maybe abandon this idea as a method for testing different styling libraries
//  but keeping the various style sheets from interfering with each other.
// Instead, just download/copy the css files into THIS
//  y-experimentation/css-forms folder, so they can be imported into the
//  relevant JS files.

// dynamically add CSS stylesheets
    //  use to add add cdn link on demand, instead of hardcoding into index.html
    // 1) I am experimenting with this stylesheet - do not know if I want to use it
    //    So, I can limit its use/import for only when I am displaying this page.
    //    This will also ensure it does not interfere with any other styles on any other pages
    // 2) If I do decide to use it formally, I would likely
    //    - install it as a dependancy via npm, or
    //    - save the css file to my project, either to public folder, and link in index.html, or
    //    - save to src folder, then import to relevant components
    //    rather than import the CDN on the index.html page anyway

// dynamically load the stylesheet when this component is removed
    // http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
    // this page also has a way to prevent adding duplicates!

// export function addFile(filename, filetype='css'){

export default function loadjscssfile(filename, filetype='css'){
    // only add the file if it does not already exist on the DOM
      if (filetype=="js"){ //if filename is a external JavaScript file
          var fileref=document.createElement('script')
          fileref.setAttribute("type","text/javascript")
          fileref.setAttribute("src", filename)
      }
      else if (filetype=="css"){ //if filename is an external CSS file
          var fileref=document.createElement("link")
          fileref.setAttribute("rel", "stylesheet")
          fileref.setAttribute("type", "text/css")
          fileref.setAttribute("href", filename)
      }
      // add to the END
      if (typeof fileref!="undefined")
          document.getElementsByTagName("head")[0].appendChild(fileref)

      // to use, call:
      // loadjscssfile("myscript.js", "js") //dynamically load and add this .js file
      // loadjscssfile("javascript.php", "js") //dynamically load "javascript.php" as a JavaScript file
      // loadjscssfile("mystyle.css", "css") ////dynamically load and add this .css file
}

export function removejscssfile(filename, filetype){
    const targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"; //determine element type to create nodelist from
    const targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"; //determine corresponding attribute to test for
    const allsuspects=document.getElementsByTagName(targetelement);

    //search backwards within nodelist for matching elements to remove
    for (let i=allsuspects.length; i>=0; i--){
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null &&
            allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1
        ){
            allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
        }
    }
    // to use, call:
    // removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
    // removejscssfile("somestyle.css", "css") //remove all occurences "somestyle.css" on page
}

    //list of files already added
    var filesadded="";

    function checkloadjscssfile(filename, filetype){
        // ONLY WORKS IF CALLING FUNCTION KEEPS A LIST OF FILESADDED, so NOT EXPORTED

        if (filesadded.indexOf("["+filename+"]")==-1){
            loadjscssfile(filename, filetype)
            filesadded+="["+filename+"]" //List of files added in the form "[filename1],[filename2],etc"
        }
        // else
            // alert("file already added!");
    }
        // to use, call:
        // checkloadjscssfile("myscript.js", "js") //success
        // checkloadjscssfile("myscript.js", "js") //redundant file, so file not added


    // dynamically remove the stylesheet
        // TODO: Should be done when this component is removed. Need useEffect hook, or class component
        // http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml
