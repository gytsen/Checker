function runTests(){
    //test for Integer
    printType(3);
    //test for Floating Point
    printType(3.14);
    //test for Numerical String
    printType('314');
    //test for Alphabetical string
    printType('abcdef');
    //test for mixed string
    printType('28august');
    //test for boolean
    printType(true);
    //test for Infinite number
    printType(Infinity);
    //test for Not a Number
    printType(NaN);
    //test for null
    printType(null);
    //test for undefined
    printType(undefined);
    //test a simple object with a few properties
    printType({
        a: 2,
        b: 3,
        c: 4,
        d: 5
    });
    //test a JavaScript builtin object
    printType([1,2,3,4,5]);
    //test an object with multiple nesting levels
    printType({
        a: function(){
            return 'Hello World!';
        },
        b: 'azinga!',
        c: {
            d: function(){
                return 'I already said hello!';
            },
            e: {
                f: function(){
                    return 'Nobody ever visits me here! :(';
                },
                g: 3,
                h: null,
                i: {
                    j: function(){
                        return 'Bro, you know nothin\'';
                    }
                }
            }
        }
    });
}
