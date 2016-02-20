
/*
 * Audience View Common Javascript methods
 * 
 * Applicable: Desktop Application
 *             Online Application
 *
 * Version 1.0
 * 
 * Compiled By : Raja Raman
 * 
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */


// substring if the specified string available
function subMe(sourceString, stringToFind) {
    var index = sourceString.indexOf(stringToFind);
    if (index != -1) {
        return sourceString.substr(0, index - 1);
    }
}

// contains method will check whether the specified element is 
// in the array; if yes, it will return true or return false
function containsValue(array, value) {
    
    if(array == null || array == undefined || array)

    for (var i = 0; i < array.length; i++) {
        if (array[i] == value)
            return true;
    }

    return false;
}



