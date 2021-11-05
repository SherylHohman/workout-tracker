// These evenually will be user-defined values
// and stored in a database.

// should these be an array, or an object?
// start with object, then display name can be different from field name, if needed.
// perhaps update & simplify to array, if that makes sense later.

// or make mor "complicated" by adding subtypes as an object inside

// or should these be categories (exerciseCategories)
// an cycling/jogging, machines/calesthenics, stretch/yoga, ect
//   be types? (exerciseTypes)

// eventually will want to be able to list items in the dropdown EITHER
//  - by most often used (or most often used "recently"
//    (in the time frame looking at surrounding) workout dates.
//    IMPT in the case of old data entry. EG I no longer own my Vicount bike.
//    But if data entry when it was used daily, I want it at the top.)
// - most recently entered (for that exercise type, anyway.)
// - MOON: or by best prediction as to what I will enter next,
//    in the event that I show regular workout patterns. And I have
//    *any* kind of AI avail.


const exerciseTypes3 = [
    {option: 'cardio',  label: 'Cardio'},
    {option: 'weights', label: 'Weights'},
    {option: 'stretch', label: 'Stretch'},
    {option: 'other',   label: 'Other'}
  ]

// TODO: Questions:
//       should walking be "other" or "cardio" ?
//       should cycling indoorsvs outdoors be a subset,
//          or listed as separate exerciseNames (as I currently have)?
//       should exerciseNames be an object (probably)
//          or an array (as I currently have)?

const exerciseTypes4 = [
    {  cardio:     {
        displayAs: "Cardio",
        exerciseNames: ["cycling (MB4)", "cycling (MB4 outdoors)",
            "cycling (gym-recumbant)", "cycling (gym-upright)",
            "cycling (Trek)",
            "cycling (Vicount outdoors)", "cycling (Vicount stationary)",
            "jogging (treadmill)", "walking (treadmill)",
            "jogging (outdoors)", "walking (ourdoors)",
            "swimming"]
        }
    },
    {  weights:     {
        displayAs: "Weights",
        exerciseNames: ["machines", "free weights", "calesthenics"]
        }
    },
    {  stretch:     {
        displayAs: "Stretch",
        exerciseNames:
            ["stretch", "yoga", "Qi Gong?"]
        }
    },
    {  other:     {
        displayAs: "Cardio",
        exerciseNames:
            ["walking outdoors", "jogging outdoors", "cycling outdoors", "Tai Chi"]
        }
    }
];

const exerciseTypes5 = [
    // or should this be like `{ category: 'cardio', label: 'Cardio, ...}`
    // instead of             `{cardio: { label: 'Cardio', ...}}``
    // but not have an encompasing/wrapping object name?
    // or both: `{cardio: { category: 'cardio', label: 'Cardio", ...}}'
    {  cardio:     {
        label: "Cardio",
        exerciseNames: [
            {   name: "cycling",
                equipment: [
                    "MB4 stationary", // this could further be Kinetic Rock-N-Roll vs Kinetic Orig
                    "MB4 outdoors",
                    "Trek stationary",  // Kinetic Rock-N-Roll vs Kinetic Orig
                    "Vicount stationary",
                    "Vicount outdoors",
                    "gym-recumbant",
                    "gym-upright",
                ]
            },
            {   name: "jogging",
                equipment: [
                    "treadmill", // could further be MY treadmill vs gym treadmill
                    "outdoors"
                ]
            },
            {   name: 'walking',
                equipment: [
                    "treadmill",
                    "outdoors",
                ]
            },
            {   name: 'swimming',
                equipment:  [
                    "pool",
                    "lake, river, ocean"
                ]
            }
        ] // exercise names
        }, // cardio details
    }, // cardio container
    {  weights:     {
        label: "Weights",
        exerciseNames: ["machines", "free weights", "calesthenics & home dumbells/bands, lounges, etc"]
        }
    }, // weights container
    {  stretch:     {
        label: "Stretch",
        exerciseNames:
            ["stretch", "yoga", "Qi Gong?"]
        }
    }, // stretch container
    {  other:     {
        label: "Cardio",
        exerciseNames:
            ["roller skating", "walking outdoors", "jogging outdoors", "cycling outdoors", "Tai Chi"]
            // not a proper exercise set. Must look at old data to remember how I broke this category down.
            // EITHER it is alternative activities, (not jogging/walking)
            // OR it is outdoor activity. (in which case could be a T/F field in the other category types instead.)
        }
    } // other container
];


export default exerciseTypes3;
