
// will push the element uniquely; if any such element 
// available in the array already, then it won't do anything
Array.prototype.uniquePush = function (element) {
    if (!this.contains(element))
        return this.push(element);
}

// will find whether the element is inside the current array
Array.prototype.contains = function (element) {
    if (element == null || element == undefined || element == '')
        return false;
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element)
            return true;
    }
    return false;
}

// will remove the speicific element from the current array
Array.prototype.removeElement = function (element) {
    if (element == null || element == undefined || element == '')
        return;

    var newArray = new Array();
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            //continue;
            this.splice(i, 1);
        }
    }
}

// will remove the mentioned special string from the array elements
Array.prototype.removeSpecialString = function (specialString) {
    if (specialString == null || specialString == undefined || specialString == '')
        return;

    var newArray = new Array();
    for (var i = 0; i < this.length; i++) {
        //alert(this[i]+', '+this[i].indexOf(specialString));
        if (this[i].indexOf(specialString) != -1) {
            this[i] = this[i].substring(0, this[i].indexOf(specialString));
        }
    }
}

// will remove all duplicate elements if any
Array.prototype.removeDuplicates = function () {
    var newArray = new Array();
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.length; j++) {
            if (i == j)
                continue;

            if (this[i] == this[j])
                this.splice(j, 1);
        }
    }
}

// will clone the array and return the cloned array
Array.prototype.clone = function () {
    if (this == null || this == undefined || this.length == 0)
        return this;

    var newArray = new Array();
    for (var i = 0; i < this.length; i++) {
        newArray[i] = this[i];
    }
    return newArray;
}
