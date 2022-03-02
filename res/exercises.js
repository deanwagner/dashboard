"use strict";

/**
 * Exercises
 * @class
 * @property {array} exercises - JSON Array of Exercise Objects
 * @author Dean Wagner <info@deanwagner.net>
 */
class Exercises {

    // Javascript
    exercises = [{
        name : 'Caesar Cipher',
        desc : 'Encrypt/Decrypt messages using the Caesar Cipher.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/13_caesar',
        type : 'js'
    }, {
        name : 'Fibonacci',
        desc : 'Calculate the value of the position in the Fibonacci sequence of a given number.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/10_fibonacci',
        type : 'js'
    }, {
        name : 'Palindromes',
        desc : 'Analyze a string and determine if it is a Palindrome.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/09_palindromes',
        type : 'js'
    }, {
        name : 'Find the Oldest',
        desc : 'Find the oldest person in an object regardless of living.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/12_findTheOldest',
        type : 'js'
    }, {
        name : 'Get the Titles',
        desc : 'Get book titles from an array of book objects.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/11_getTheTitles',
        type : 'js'
    }, {
        name : 'Calculator',
        desc : 'Basic calculator functions.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/08_calculator',
        type : 'js'
    }, {
        name : 'Temp Conversion',
        desc : 'Temperature celsius/fahrenheit conversion.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/07_tempConversion',
        type : 'js'
    }, {
        name : 'Leap Years',
        desc : 'Determine whether or not a given year is a leap year.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/06_leapYears',
        type : 'js'
    }, {
        name : 'Sum All',
        desc : 'Take 2 integers and return the sum of every number between (and including) them.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/05_sumAll',
        type : 'js'
    }, {
        name : 'Remove from Array',
        desc : 'Remove a specified value from an array.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/04_removeFromArray',
        type : 'js'
    }, {
        name : 'Reverse a String',
        desc : 'Reverse a string.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/03_reverseString',
        type : 'js'
    }, {
        name : 'Repeat a String',
        desc : 'Repeat a string a given number of times.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/02_repeatString',
        type : 'js'
    }, {
        name : 'Hello World',
        desc : 'JEST Javascript Testing Framework exercise.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/javascript-exercises/01_helloWorld',
        type : 'js'
    },
    // CSS
    {
        name : 'Grid Layout',
        desc : 'The Holy Grail Layout with Grid',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/grid/01-grid-layout-1',
        type : 'css'
    }, {
        name : 'Grid Scaling 2',
        desc : 'Holy Grail Mockup with Grid',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/grid/03-grid-layout-3',
        type : 'css'
    }, {
        name : 'Grid Scaling 1',
        desc : 'Responsive Holy Grail Layout with Grid',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/grid/02-grid-layout-2',
        type : 'css'
    }, {
        name : 'Flex Layout 2',
        desc : 'The Holy Grail of Layouts with Flexbox',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/07-flex-layout-2',
        type : 'css'
    }, {
        name : 'Flex Layout 1',
        desc : 'An entire page.',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/06-flex-layout',
        type : 'css'
    }, {
        name : 'Flex Modal',
        desc : 'A common "modal" style with Flexbox',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/05-flex-modal',
        type : 'css'
    }, {
        name : 'Flex Information',
        desc : 'A very common website feature',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/04-flex-information',
        type : 'css'
    }, {
        name : 'Flex Header 2',
        desc : 'Another common header style',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/03-flex-header-2',
        type : 'css'
    }, {
        name : 'Flex Header 1',
        desc : 'A Basic Header',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/02-flex-header',
        type : 'css'
    }, {
        name : 'Flex Center',
        desc : 'Centering with Flexbox',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/flex/01-flex-center',
        type : 'css'
    }, {
        name : 'Pop-Up Modal',
        desc : 'Pop-Up Modal Activated on Button Click',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/animation/03-pop-up/',
        type : 'css'
    }, {
        name : 'Drop-Down Menu',
        desc : 'Drop-Down Menu Activated on Hover',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/animation/02-drop-down',
        type : 'css'
    }, {
        name : 'Button Hover',
        desc : 'Change Text Size on Hover',
        link : 'https://github.com/deanwagner/odin_project/tree/main/css-exercises/animation/01-button-hover',
        type : 'css'
    }];

    /**
     * Constructor
     * @constructor
     */
    constructor() {
        this.build();
    }

    /**
     * Build Exercises
     */
    build() {
        const javascript  = document.getElementById('javascript');
        const stylesheets = document.getElementById('stylesheets');
        const js          = document.createElement('article');
        const css         = document.createElement('article');
        this.exercises.forEach(exercise => {
            if (exercise.type === 'js') {
                js.innerHTML += this.template(exercise);
            } else {
                css.innerHTML += this.template(exercise);
            }
        });
        javascript.appendChild(js);
        stylesheets.appendChild(css);
    }

    /**
     * Exercise HTML Template
     * @param {object} exercise - Exercise Object
     * @returns {string} - HTML String
     */
    template(exercise) {
        return `
            <h4><a href="${exercise.link}">${exercise.name}</a></h4>
            <p>${exercise.desc}</p>
        `;
    }
}

export default Exercises;