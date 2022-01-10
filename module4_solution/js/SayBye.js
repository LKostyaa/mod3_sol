(function(window) {
    var bye=new Object();
    var speakenWord="Good Bye";
    bye.speak=function speak(name){
        console.log(speakenWord+" "+name);
    };
    window.bye = bye;
})(window);
