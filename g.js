

// author: raja raman

// created on : 01m.02d.2012y

// generalized javascript functions :: for audience view purpose

// substring if the specified string available
function subMe(sourceString, stringToFind) {
    var index = sourceString.indexOf(stringToFind);
    if (index == -1)
        return sourceString;
    return sourceString.substr(0, index - 1);
}

function br() {
    document.write("<br/>");
}

function sortByValueThenDescription(a, b) {
    var x = a.Value;
    var y = b.Value;
    return ((x < y) ? -1 : ((x > y) ? 1 : sortByDescription(a, b)));
}

function sortByDescription(a, b) {
    var x = a.Description.toLowerCase();
    var y = b.Description.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

function checkDotAtLast(cPriceType) {
    return false;
    var dotPattern = /\.$/i;
    return dotPattern.test(cPriceType);
}

document.getElementsByClass = function (currentClassName) {
    var itemsfound = new Array;
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == currentClassName) {
            itemsfound.push(elements[i]);
        }
    }
    return itemsfound;
}

// called to check elements based on index
// it will update all matched elements' value to specified parameter
function updateElementsValue(key, cValue) {    
    var cElements = getAllTextBoxesStartsWith(key);
    for (var i = 0; i < cElements.length; i++) {
        var cElement = cElements[i];        
        if (cElement != null && cElement != undefined && typeof cElement != undefinedKey) {
            cElement.value = cValue;
        }
    }
}

// will return all the inputs which starts with <stringPart>
// will be applicable only for <checkbox>
function getAllCheckboxesStartsWith(stringPart) {
    var inputs = document.getElementsByTagName('input');
    //alert(inputs.length);

    var fOneInputs = new Array(); //filer one
    for (var i = 0; i < inputs.length; i++) {
        var cInput = inputs[i];
        if (!(cInput.type == 'checkbox')) {
            continue;
        }
        fOneInputs.push(cInput);
    }

    //alert(fOneInputs.length);
    var fTwoInputs = new Array();
    for (var i = 0; i < fOneInputs.length; i++) {
        var cInput = fOneInputs[i];
        //match for string part
        if (cInput.id.indexOf(stringPart) != -1) {
            fTwoInputs.push(cInput);
        }
    }
    return fTwoInputs;
}

// will return all the inputs which starts with <stringPart>
// will be applicable only for <checkbox>, <text>, <hidden>
function getAllInputsStartsWith(stringPart) {
    var inputs = document.getElementsByTagName('input');
    //alert(inputs.length);

    var fOneInputs = new Array(); //filer one
    for (var i = 0; i < inputs.length; i++) {
        var cInput = inputs[i];
        if (!
                        ((cInput.type == 'checkbox')
                        ||
                        (cInput.type == 'text')
                        ||
                        (cInput.type == 'hidden'))
                    ) {
            continue;
        }
        fOneInputs.push(cInput);
    }

    //alert(fOneInputs.length);
    var fTwoInputs = new Array();
    for (var i = 0; i < fOneInputs.length; i++) {
        var cInput = fOneInputs[i];
        //match for string part
        if (cInput.id.indexOf(stringPart) != -1) {
            fTwoInputs.push(cInput);
        }
    }
    return fTwoInputs;
}

// resize the iframe widow according to the content
function autoResize(id) {
    var newheight;
    var newwidth;

    var passingDom = null;
    if (document.getElementById) {
        passingDom = document.getElementById(id);
        newheight = passingDom.contentWindow.document.body.scrollHeight;
        newwidth = passingDom.contentWindow.document.body.scrollWidth;
    }

    alert(' newheight : ' + newheight + ', newwidth : ' + newwidth);

    passingDom.height = (newheight) + "px";
    passingDom.width = (newwidth) + "px";

    alert(passingDom.style.height);
    if (passingDom.style.height != null)
        passingDom.style.height = "520px";
}