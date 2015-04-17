function getFullType(variable){
    //first get the simple type of a given variable
    var simpleType = typeof variable;
    var trueType;
    
    //now find out the specific details about this variable!
    if(simpleType === 'number'){
        console.log("fired");
        trueType = getNumberType(variable);
    }else if(simpleType === 'string'){
        trueType = this.getStringInfo(variable);
    }else if(simpleType === 'object'){ 
        trueType = this.getObjectInfo(variable);
    }else if(simpleType === 'boolean'){
        trueType = simpleType;
    }
    
    
    var fullType = "" + variable + ' type is: ' + trueType;
    return fullType;
}

function printType (variable){
    var trueType = getFullType(variable);
    console.log(trueType);
}

function getNumberType(variable){
    var subType = (variable % 1 === 0) ? 'Integer Number' : 'Floating Point Number';
    return subType;
}

function getObjectInfo(variable){
    var variableName = variable.name;
    console.log(variableName);
    return 'Object'
}

function getStringInfo(variable){
    //these are for string primitives, not the new String(); form
    var numeric = variable.contains('[0-9]');
    return 'not implemented';
}