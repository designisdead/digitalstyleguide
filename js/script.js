(function () {

})();

window.addEventListener("load", function(event) {

    /*
    lazy load images
    http://www.andreaverlicchi.eu/lazyload/
     */
    new LazyLoad({
        elements_selector: ".js-LazyLoad",
        container: document.getElementById('scrollingPanel'),
        threshold: 500
    });
});
