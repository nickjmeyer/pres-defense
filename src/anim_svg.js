var pe_intro_data = {
    container: document.getElementById('pe_intro'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './capture1.json'

};
var pe_intro = bodymovin.loadAnimation(pe_intro_data);
Reveal.addEventListener("pe_intro", function() {
    pe_intro.goToAndPlay(0, true);
});



var pe_evadergoals_data = {
    container: document.getElementById('pe_evadergoals'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './capture2.json'

};
var pe_evadergoals = bodymovin.loadAnimation(pe_evadergoals_data);
Reveal.addEventListener("pe_evadergoals", function() {
    console.log(pe_evadergoals);
    pe_evadergoals.goToAndPlay(0, true);
});


var pe_onestep_data = {
    container: document.getElementById('pe_onestep'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './capture3.json'

};
var pe_onestep = bodymovin.loadAnimation(pe_onestep_data);
Reveal.addEventListener("pe_onestep", function() {
    pe_onestep.goToAndPlay(0, true);
});


var pe_informant_data = {
    container: document.getElementById('pe_informant'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './capture4.json'

};
var pe_informant = bodymovin.loadAnimation(pe_informant_data);
Reveal.addEventListener("pe_informant", function() {
    pe_informant.goToAndPlay(0, true);
});



var pe_capture_data = {
    container: document.getElementById('pe_capture'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './capture5.json'

};
var pe_capture = bodymovin.loadAnimation(pe_capture_data);
Reveal.addEventListener("pe_capture", function() {
    pe_capture.goToAndPlay(0, true);
});
