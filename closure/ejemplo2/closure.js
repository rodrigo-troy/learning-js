var fade = function (node) {
    console.log("inicio");

    var level1 = 1;
    var level2 = 15;
    var step = function () {
        console.log("level1 " + level1);
        console.log("level2 " + level2);
        var hex1 = level1.toString(16);
        var hex2 = level2.toString(16);
        var backgroundColor = '#C0' + hex2 + hex1 + hex2 + hex1;
        console.log(backgroundColor);

        node.style.backgroundColor = backgroundColor;

        if (level1 < 15) {
            level1 += 1;
            level2 -= 1;
            setTimeout(step, 500);
        }
    };

    setTimeout(step, 500);
    console.log("fin");
};

fade(document.body);

