"use strict";

/**
 * Dashboard
 * @class
 * @property {array}  light     - CSS Properties for Light Mode
 * @property {array}  dark      - CSS Properties for Dark Mode
 * @property {object} lightMode - Enable Light Mode Element
 * @property {object} darkMode  - Enable Dark Mode Element
 * @property {array}  projects  - JSON Array of Projects
 * @property {array}  exercises - JSON Array of Exercises
 * @author Dean Wagner <info@deanwagner.net>
 */
class Dashboard {

    // Class Properties
    light = [];
    dark  = [];

    /* * * * * * * * * *\
     *    Projects     *
    \* * * * * * * * * */

    // Projects
    projects = [{
        name : 'LCD Calculator',
        desc : 'An LCD Calculator App written in JavaScript with an SVG display.',
        live : 'https://deanwagner.github.io/calculator/',
        repo : 'https://github.com/deanwagner/calculator',
        icon : 'https://deanwagner.github.io/calculator/img/calculator.svg',
        img  : 'https://deanwagner.github.io/calculator/img/calculator-screenshot.png'
    }, {
        name : 'Paint App',
        desc : 'A Paint-by-Pixel App written in JavaScript.',
        live : 'https://deanwagner.github.io/paint/',
        repo : 'https://github.com/deanwagner/paint',
        icon : 'https://deanwagner.github.io/paint/img/paint.png',
        img  : 'https://deanwagner.github.io/paint/img/paint-screenshot.png'
    }, {
        name : 'Library App',
        desc : 'Library app to store, track, and sort a book collection.',
        live : 'https://deanwagner.github.io/library/',
        repo : 'https://github.com/deanwagner/library',
        icon : 'https://deanwagner.github.io/library/img/library.svg',
        img  : 'https://deanwagner.github.io/library/img/library-screenshot.png'
    }, {
        name : 'Tic Tac Toe',
        desc : 'A Tic Tac Toe game with an intelligent AI opponent.',
        live : 'https://deanwagner.github.io/tic-tac-toe/',
        repo : 'https://github.com/deanwagner/tic-tac-toe',
        icon : 'https://deanwagner.github.io/tic-tac-toe/img/ttt.svg',
        img  : 'https://deanwagner.github.io/tic-tac-toe/img/tictactoe-screenshot.png'
    }, {
        name : 'Rock Paper Scissors',
        desc : 'A Rock Paper Scissors game written in JavaScript.',
        live : 'https://deanwagner.github.io/rock-paper-scissors/',
        repo : 'https://github.com/deanwagner/rock-paper-scissors',
        icon : 'https://deanwagner.github.io/rock-paper-scissors/img/scissors.svg',
        img  : 'https://deanwagner.github.io/rock-paper-scissors/img/rps-screenshot.png'
    }, {
        name : 'Clock',
        desc : 'An Animated Clock written in JavaScript and CSS.',
        live : 'https://deanwagner.github.io/clock/',
        repo : 'https://github.com/deanwagner/clock',
        icon : 'https://deanwagner.github.io/clock/res/clock.png',
        img  : 'https://deanwagner.github.io/clock/img/clock-screenshot.png'
    }, {
        name : 'Sign-Up Form',
        desc : 'A Sign-Up Form Mock-Up written in JavaScript and CSS.',
        live : 'https://deanwagner.github.io/odin_project/signup/',
        repo : 'https://github.com/deanwagner/odin_project/tree/main/signup',
        icon : 'https://www.theodinproject.com/favicon-32x32.png',
        img  : 'https://deanwagner.github.io/odin_project/signup/img/signup-screenshot.png'
    }, {
        name : 'Landing Page',
        desc : 'A Landing Page Mock-Up written in CSS and HTML.',
        live : 'https://deanwagner.github.io/odin_project/landingpage/',
        repo : 'https://github.com/deanwagner/odin_project/tree/main/landingpage',
        icon : 'https://www.theodinproject.com/favicon-32x32.png',
        img  : 'https://deanwagner.github.io/odin_project/landingpage/img/landingpage-screenshot.png'
    }];

    /* * * * * * * * * *\
     *    Exercises    *
    \* * * * * * * * * */

    // Exercises
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
    }];

    /**
     * Constructor
     * @constructor
     */
    constructor() {

        /* * * * * * * * * *\
         * Configure Theme *
        \* * * * * * * * * */

        // Class Elements
        this.darkMode  = document.getElementById('dark_mode');
        this.lightMode = document.getElementById('light_mode');

        // CSS Properties
        const keys = [
            'accent-color',
            'special-color',
            'ceiling-color',
            'high-color',
            'medium-color',
            'low-color',
            'floor-color',
            'aside-svg-shadow',
            'aside-svg-glow',
            'aside-text-shadow',
            'aside-text-glow',
            'action-svg-shadow',
            'action-svg-glow',
            'action-text-shadow',
            'action-text-glow'
        ];

        // Get Values from CSS
        keys.forEach(value => {
            this.light[value] = getComputedStyle(document.documentElement).getPropertyValue('--' + value);
            this.dark[value]  = getComputedStyle(document.documentElement).getPropertyValue('--dark-' + value);
        });

        // Auto-Load Dark Mode per User Settings
        const isDark = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--dark-mode'));
        if (isDark) {
            this.darkMode.classList.add('off');
            this.lightMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'dark');
            this.changeMode(this.dark);
        }

        /* * * * * * * * * *\
         *   Build Page    *
        \* * * * * * * * * */

        // Projects
        const container = document.createElement('div');
        this.projects.forEach(project => {
            const article = document.createElement('article');
            article.innerHTML = this.buildProject(project);
            container.appendChild(article);
        });
        document.getElementById('primary').appendChild(container);

        // Exercises
        const javascript  = document.getElementById('javascript');
        const stylesheets = document.getElementById('stylesheets');
        const js          = document.createElement('article');
        const css         = document.createElement('article');
        this.exercises.forEach(exercise => {
            if (exercise.type === 'js') {
                js.innerHTML += this.buildExercise(exercise);
            } else {
                css.innerHTML += this.buildExercise(exercise);
            }
        });
        javascript.appendChild(js);
        stylesheets.appendChild(css);

        // Build Search Hints Datalist from page links
        const datalist = document.getElementById('search-hints');
        const links = document.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            const text = links[i].textContent.trim();
            if (text !== '') {
                const option = document.createElement('option');
                option.value = text;
                datalist.appendChild(option);
            }
        }

        /* * * * * * * * * *\
         * Event Listeners *
        \* * * * * * * * * */

        // Dark Mode Button
        this.darkMode.addEventListener('click', () => {
            this.darkMode.classList.add('off');
            this.lightMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'dark');
            this.changeMode(this.dark);
        });

        // Light Mode Button
        this.lightMode.addEventListener('click', () => {
            this.lightMode.classList.add('off');
            this.darkMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'light');
            this.changeMode(this.light);
        });

        // Resize Window Event Listener
        const aside = document.getElementsByTagName('aside')[0];
        window.addEventListener('resize', () => {
            if (window.innerHeight >= window.innerWidth) {
                aside.classList.add('collapsed');
            } else {
                aside.classList.remove('collapsed');
            }
        });

        // Expand/Collapse Navigation
        const h1 = document.getElementsByTagName('h1')[0];
        h1.addEventListener('click', () => {
            aside.classList.toggle('collapsed');
        });

        // Automatically Collapse Nav for Mobile Devices
        const isMobile = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile-view'));
        if (isMobile) {
            aside.classList.add('collapsed');
        }
    }

    /**
     * Project HTML Template
     * @param {object} project - Project Object
     * @returns {string} - HTML String
     */
    buildProject(project) {
        return `
            <h4><a href="${project.live}"><img src="${project.icon}" alt="Project Icon" loading="lazy">${project.name}</a></h4>
            <img src="${project.img}" alt="Thumbnail Image" loading="lazy">
            <p>${project.desc}</p>
            <div>
                <a title="Live Version" href="${project.live}">
                    <svg class="icon_view" viewBox="0 0 24 24">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                    </svg>
                </a>
                <a title="GitHub Repository" href="${project.repo}">
                    <svg class="icon_github" viewBox="0 0 32 32">
                        <path d="M16.0018,0A16.2088,16.2088,0,0,0,0,16.4223,16.4156,16.4156,0,0,0,10.7179,31.9376c.84.2166.7114-.3966.7114-.8153v-2.846c-4.8513.5839-5.0479-2.7138-5.3732-3.2646-.6578-1.1531-2.213-1.4469-1.7482-1.9977,1.1047-.5839,2.2308.1469,3.5357,2.1262.9438,1.4359,2.7849,1.1935,3.718.9548a4.664,4.664,0,0,1,1.24-2.2327c-5.0264-.9254-7.1214-4.0762-7.1214-7.8219A7.3467,7.3467,0,0,1,7.4074,11.204a6.5675,6.5675,0,0,1,.1752-4.4067C9.66,6.6064,11.819,8.325,11.987,8.4609a15.14,15.14,0,0,1,4.0362-.5,15.1577,15.1577,0,0,1,4.0577.51c.404-.3158,2.406-1.7921,4.3365-1.6121a6.6124,6.6124,0,0,1,.1966,4.3332,7.3488,7.3488,0,0,1,1.7482,4.8584c0,3.7531-2.1093,6.9075-7.15,7.8182a4.7469,4.7469,0,0,1,1.362,3.3418v4.1313c.0286.3305,0,.6573.5363.6573A16.4082,16.4082,0,0,0,32,16.426,16.2136,16.2136,0,0,0,16.0018,0Z" />
                    </svg>
                </a>
            </div>
        `;
    }

    /**
     * Exercise HTML Template
     * @param {object} exercise - Exercise Object
     * @returns {string} - HTML String
     */
    buildExercise(exercise) {
        return `
            <h4><a href="${exercise.link}">${exercise.name}</a></h4>
            <p>${exercise.desc}</p>
        `;
    }

    /**
     * Change Light/Dark Mode
     * @param {object} colors - [this.light] or [this.dark]
     */
    changeMode(colors) {
        for (let index in colors) {
            document.documentElement.style.setProperty('--' + index, colors[index]);
        }
    }
}