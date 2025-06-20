function enlargeImage(imgZoom, resultZoom) {
    var zoomLens, xPos, yPos;
    zoomLens = document.createElement("DIV");
    zoomLens.setAttribute("class", "zoomLens");
    imgZoom.parentElement.insertBefore(zoomLens, imgZoom);
    xPos = resultZoom.offsetWidth / zoomLens.offsetWidth;
    yPos = resultZoom.offsetHeight / zoomLens.offsetHeight;
    resultZoom.style.backgroundImage = `url(${imgZoom.src})`;
    resultZoom.style.backgroundSize = (imgZoom.width * xPos) + "px " + (imgZoom.height * yPos) + "px";
    zoomLens.addEventListener("mousemove", lensMoveCalculate);
    imgZoom.addEventListener("mousemove", lensMoveCalculate);
    zoomLens.addEventListener("touchmove", lensMoveCalculate);
    imgZoom.addEventListener("touchmove", lensMoveCalculate);

    zoomLens.addEventListener("mouseover", function( event ) {
        resultZoom.style.display = "inline-block"
        resultZoom.style.opacity = "1"
        this.style.opacity = "0.3"
    })
    zoomLens.addEventListener("mouseout", function( event ) {
        resultZoom.style.display = "none"
        resultZoom.style.opacity = "0"
        this.style.opacity = "0"
    })

    function lensMoveCalculate(e) {
        var pos, x, y;
        pos = currentCursonPos(e);
        x = pos.x - (zoomLens.offsetWidth / 2);
        y = pos.y - (zoomLens.offsetHeight / 2);
        if (x > imgZoom.width - zoomLens.offsetWidth) {x = imgZoom.width - zoomLens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > imgZoom.height - zoomLens.offsetHeight) {y = imgZoom.height - zoomLens.offsetHeight;}
        if (y < 0) {y = 0;}
        zoomLens.style.left = x + "px";
        zoomLens.style.top = y + "px";
        resultZoom.style.backgroundPosition = "-" + (x * xPos) + "px -" + (y * yPos) + "px";
    }
    function currentCursonPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        a = imgZoom.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}