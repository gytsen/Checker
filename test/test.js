(function runTests(){
    printType(3);
    printType(3.14);
    printType('314');
    printType('abcdef');
    printType('28august');
    printType(true);
    printType(Infinity);
    printType(NaN);
    printType(null);
    printType(undefined);
    printType({
        a: 2,
        b: 3,
        c: 4,
        d: 5   
    });
    printType([1,2,3,4,5]);
})();