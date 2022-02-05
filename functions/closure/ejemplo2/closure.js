const fade = function (node) {
    console.log("inicio");

    const level1 = 1;
    const level2 = 15;
    const step = function () {
        console.log("level1 " + level1);
        console.log("level2 " + level2);
        const hex1 = level1.toString(16);
        const hex2 = level2.toString(16);
        const backgroundColor = '#C0' + hex2 + hex1 + hex2 + hex1;
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

