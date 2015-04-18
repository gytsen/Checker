function getFullType(variable) {
    //first get the simple type of a given variable
    var simpleType = typeof variable;
    var trueType;

    //now find out the specific details about this variable!
    if (simpleType === 'number') {
        trueType = getNumberType(variable);
    } else if (simpleType === 'string') {
        trueType = getStringInfo(variable);
    } else if (simpleType === 'object') {
        trueType = getObjectInfo(variable);
    } else if (simpleType === 'boolean') {
        trueType = '' + simpleType + ' which has a value of: ' + variable;
    } else if (simpleType === 'undefined') {
        trueType = 'Undefined';
    }

    var fullType = 'variable\'s type is: ' + trueType;
    return fullType;
}

function printType(variable) {
    var trueType = getFullType(variable);
    console.log(trueType);
}

function getNumberType(variable) {
    if (isNaN(variable)) {
        return 'Not a Number';
    } else if (!isFinite(variable)) {
        return 'Infinite number';
    } else {
        var subType = (variable % 1 === 0) ? 'Integer Number' : 'Floating Point Number';
        return subType;
    }
}

function getObjectInfo(variable) {
    if (variable === null) { //catch the typeof null === 'object' bug
        return 'Null'
    }
    var objName = '';
    var objInstance = variable.constructor;
    //variable.constructor returns: function Object() { [native code] }, so split it to: "Object()"
    var objType = objInstance.toString().split(" ")[1];
    objName = 'It\'s \'type\' is: ' + objType + '\n';

    var objInfo = 'and it\'s properties are: \n';
    for (var prop in variable) {
        var value = variable[prop];
        if (typeof value === 'object') {
            var additionalInfo = getShortObjectInfo(value, 1);
            objInfo += prop + ':' + additionalInfo + '\n';
        } else {
            objInfo += prop + ':' + value + '\n'
        }
    }
    return 'Object\n' + objName + objInfo;
}

function getShortObjectInfo(variable, depth) {
    if (variable === null) {
        return 'Null';
    }
    //pretty indent the objects so you can clearly see
    //their level of depth
    var tabs = '';
    for (var i = 0; i < depth; i++) {
        tabs += '\t'
    }
    var objName = '';
    var objInstance = variable.constructor;
    //variable.constructor returns: function Object() { [native code] }, so split it to: "Object()"
    var objType = objInstance.toString().split(" ")[1];
    objName = ' ' + objType + '{\n';

    var objInfo = '';
    for (var prop in variable) {
        var value = variable[prop];
        if (typeof value === 'object') {
            var additionalInfo = getShortObjectInfo(value, depth + 1);
            objInfo += tabs + prop + ':' + additionalInfo + '\n';
        } else {
            objInfo += tabs + prop + ':' + value + '\n'
        }
    }
    return objName + objInfo + tabs + '}';
}

function getStringInfo(variable) {
    //these are for string primitives, not the new String(); form
    var stringInfo = '';

    if (variable === '') {
        stringInfo += 'Empty string ';
    } else if (/^\d+$/.test(variable)) { //regex for checking if string contains only digits
        stringInfo += 'Pure positive numeric string ';
    } else if (/^[a-zA-Z]+$/.test(variable)) { //regex for checking if string contains only letters
        stringInfo += 'Pure alphabetical string ';
    } else {
        stringInfo += 'Mixed string ';
    }

    var length = variable.length;
    stringInfo += 'and has length: ' + length;
    return stringInfo;
}
