// Utility Input Field conversions
//   for Date and Time fields and (Text for Month or Day of Week)

    // FOR ENTERING DATES, TIMES
    export const toIntegerDigitsOnly = function(str){
        str = str.replace(/\D/g,'');
        // no leading zeros
        str.replace(/^[0]+/g,"");
        return str;
    }
    export const toDecimalDigitsOnly = function(str){
        str = str.replace(/[^\d.]/g, ''); // add - if want negative decimals
        // no leading zeros
        str.replace(/^[0]+/g,"");
        return str;
    }

    // INPUT FIELDS ALPHABETIC Fields Locations / DATES (day of week/month)
    export const toLettersOnly = function(str){
        str = str.replace(/[^a-zA-Z]/g, ''); // add - if want negative decimals
        // remove spaces
        // str.replace(/^[0]+/g,"");
        return str;
    }
    export const toTitleCase = function(str){
      // This version only works on single words, not sentences or multiple words
        str = str.toLowerCase().split('');
        //requires single word, otherwise split on ' '
        str[0] = str[0].toUpperCase();
        return str.join('');
    }
