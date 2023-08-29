var {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin
} = OverlayScrollbarsGlobal;

OverlayScrollbars(document.querySelector('#scrollbars'), {});
OverlayScrollbars({ target: document.querySelector('#scrollbars') }, {});

OverlayScrollbars(document.querySelector('#right'), {});
OverlayScrollbars({ target: document.querySelector('#right') }, {});

const elements = document.querySelectorAll('.sp-center_t');

let maxWidth = 0;
let elementWithMax = null;

elements.forEach((element) => {
    const width = element.offsetWidth;
    if (width > maxWidth) {
        maxWidth = width;
        elementWithMax = element;

    }
});

let times = document.querySelectorAll('.sp-center__time-container')
times.forEach(item => {
    item.style.width = maxWidth + 'px';

})

let resize = document.querySelector(".resizer");
let left = document.querySelector(".sp-left");

function initResizerFn(resize, left) {

    var x, w;

    function rs_mousedownHandler(e) {
        x = e.clientX;
        var sbWidth = window.getComputedStyle(left).width;
        w = parseInt(sbWidth, 10);
        console.log("🚀 ~ rs_mousedownHandler ~ w:", w)

        document.addEventListener("mousemove", rs_mousemoveHandler);
        document.addEventListener("mouseup", rs_mouseupHandler);
    }
    function rs_mousemoveHandler(e) {
        var dx = e.clientX - x;
        console.log("🚀 ~ rs_mousemoveHandler ~ dx:", dx)

        var cw = w + dx;

        if (cw < 990 && cw > 50) {
            left.style.width = `${cw}px`;
        }
    }
    function rs_mouseupHandler() {

        document.removeEventListener("mouseup", rs_mouseupHandler);
        document.removeEventListener("mousemove", rs_mousemoveHandler);
    }
    resize.addEventListener("mousedown", rs_mousedownHandler);
}
initResizerFn(resize, left);