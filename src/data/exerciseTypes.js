// These evenually will be user-defined values
// and stored in a database.

// should these be an array, or an object?
// start with object, then display name can be different from field name, if needed.
// perhaps update & simplify to array, if that makes sense later.

// or make mor "complicated" by adding subtypes as an object inside

// or should these be categories (exerciseCategories)
// an cycling/jogging, machines/calesthenics, stretch/yoga, ect
//   be types? (exerciseTypes)
const exerciseTypes1 = ["Cardio","Weights", "Stretch", "Other"];

// For v.001, I suppose I could just use a simple array to populate
//  a drop down menu.

// eventually will want to be able to list items in the dropdown EITHER
//  - by most often used (or most often used "recently"
//    (in the time frame looking at surrounding) workout dates.
//    IMPT in the case of old data entry. EG I no longer own my Vicount bike.
//    But if data entry when it was used daily, I want it at the top.)
// - most recently entered (for that exercise type, anyway.)
// - MOON: or by best prediction as to what I will enter next,
//    in the event that I show regular workout patterns. And I have
//    *any* kind of AI avail.

const exerciseTypes2 = {
    cardio:     "Cardio",
    weights:    "Weights",
    stretch:    "Stretch",
    other:      "Other"
  }

// TODO: Questions:
//       should walking be "other" or "cardio" ?
//       should cycling indoorsvs outdoors be a subset,
//          or listed as separate exerciseNames (as I currently have)?
//       should exerciseNames be an object (probably)
//          or an array (as I currently have)?

const exerciseTypes3 = [
    cardio:     {
        displayAs: "Cardio",
        exerciseNames: ["cycling (MB4)", "cycling (MB4 outdoors)",
            "cycling (gym-recumbant)", "cycling (gym-upright)",
            "cycling (Trek)",
            "cycling (Vicount outdoors)", "cycling (Vicount stationary)",
            "jogging (treadmill)", "walking (treadmill)",
            "jogging (outdoors)", "walking (ourdoors)",
            "swimming"]
        },
    weights:     {
        displayAs: "Weights",
        exerciseNames: {
            ["machines", "free weights", "calesthenics"]
        },
    stretch:     {
        displayAs: "Stretch",
        exerciseNames: {
            ["sretch", "yoga", "Qi Gong?"]
        },
    other:     {
        displayAs: "Cardio",
        exerciseNames: {
            ["walking outdoors", "jogging outdoors", "cycling outdoors", "Tai Chi"]
        },

];


export default exerciseTypes1;
