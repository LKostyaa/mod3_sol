(function() {
    var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i<name.length; i++) {
        var letter = name[i].charAt(0).toLowerCase();
        if (letter === 'j') {
            bye.speak(name[i]);
        } else {
            hello.speak(name[i]);
        }
    }
})();
