function getFullType(variable){
    //first get the simple type of a given variable
    var simpleType = typeof variable;
    var trueType;
    
    //now find out the specific details about this variable!
    if(simpleType === 'number'){
        trueType = getNumberType(variable);
    }else if(simpleType === 'string'){
        trueType = getStringInfo(variable);
    }else if(simpleType === 'object'){ 
        trueType = getObjectInfo(variable);
    }else if(simpleType === 'boolean'){
        trueType = '' + simpleType + ' which has a value of: ' + variable;
    }else if(simpleType === 'undefined'){
        trueType = 'Undefined';
    }
    
    
    var fullType = 'variable\'s type is: ' + trueType;
    return fullType;
}

function printType (variable){
    var trueType = getFullType(variable);
    console.log(trueType);
}

function getNumberType(variable){
    if(isNaN(variable)){
        return 'Not a Number';
    }else if(!isFinite(variable)){
        return 'Infinite number';
    }else{
        var subType = (variable % 1 === 0) ? 'Integer Number' : 'Floating Point Number';
        return subType;
    }
}

function getObjectInfo(variable){ 
    if(variable === null){ //catch the typeof null === 'object' bug
        return 'Null'
    }
    var objInfo = 'and it\'s properties are: \n';
    for(var prop in variable){
        objInfo += prop + '\n'
    }
    return 'Object\n' + objInfo;
}

function getStringInfo(variable){
    //these are for string primitives, not the new String(); form
    var stringInfo = '';
    
    if(variable === ''){
        stringInfo += 'Empty string ';
    }else if(/^\d+$/.test(variable)) { //regex for checking if string contains only digits
        stringInfo += 'Pure positive numeric string ';
    }else if(/^[a-zA-Z]+$/.test(variable)){
        stringInfo += 'Pure alphabetical string ';
    }else{
        stringInfo += 'Mixed string ';
    }
    
    var length = variable.length;
    stringInfo += 'and has length: ' + length;
    return stringInfo;
}

