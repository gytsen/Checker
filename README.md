# Checker

JavaScripts typeof operator is nice to see what a variable is, but sadly it is not very informative beyond telling you what basic type a variable is. Checker aims to alleviate a bit of these pains by carefully dissecting a variable and telling you all the nice (or nasty) stuff about your variable. I'm currently in the process of documenting my code so you can see what exactly is going on when checker is checking a type, so you can see JavaScripts type system in action!

# Usage
Checker is mainly intended for development use, if you want to use it just add the checker.js file to your js files. You can now use the main function ```getFullType(variable)``` to inspect a variable. ```getFullType``` returns a string with the type info which you can pass around in your own program, or if you prefer to log the types to console output, you can use the function ```printType(variable)```.

# Disclaimer
This is mainly a study project to better understand JavaScript's type system. I'm flattered if you want to use this library, but please do so at your own risk, and keep in mind that there is probably a library out there that does this better!

If you have any comments on how to improve my JavaScript or how to better write modular JavaScript, please let me know and/or open a pull request!

#License
MIT
