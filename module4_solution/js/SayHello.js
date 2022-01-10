(function(window) {
    var hello=new Object();
    var speakenWord="Hello";
    hello.speak=function(name) {
        console.log(speakenWord + " " + name);
    };
    window.hello=hello;
})(window);
