"use strict";

/**
 * Projects
 * @class
 * @property {array} projects - JSON Array of Project Objects
 * @author Dean Wagner <info@deanwagner.net>
 */
class Projects {

    projects = [{
        name : 'Portfolio',
        desc : 'Portfolio Project which highlights achievements from The Odin Project curriculum.',
        live : 'https://deanwagner.github.io/portfolio/',
        repo : 'https://github.com/deanwagner/portfolio',
        icon : 'https://deanwagner.github.io/portfolio/img/portfolio.svg',
        img  : 'https://deanwagner.github.io/portfolio/img/portfolio-screenshot-light.png'
    }, {
        name : 'Weather',
        desc : 'Local Weather Conditions and 7-Day Forecast App with customizable settings and weather-based themes.',
        live : 'https://deanwagner.github.io/weather/',
        repo : 'https://github.com/deanwagner/weather',
        icon : 'https://deanwagner.github.io/weather/img/weather.svg',
        img  : 'https://deanwagner.github.io/weather/img/weather-screenshot.png'
    }, {
        name : 'LCD Calculator',
        desc : 'An LCD Calculator App written in JavaScript with an SVG display.',
        live : 'https://deanwagner.github.io/calculator/',
        repo : 'https://github.com/deanwagner/calculator',
        icon : 'https://deanwagner.github.io/calculator/img/calculator.svg',
        img  : 'https://deanwagner.github.io/calculator/img/calculator-screenshot.png'
    }, {
        name : 'Paint',
        desc : 'A Paint-by-Pixel Image Creation App with save, export, and print abilities.',
        live : 'https://deanwagner.github.io/paint/',
        repo : 'https://github.com/deanwagner/paint',
        icon : 'https://deanwagner.github.io/paint/img/paint.png',
        img  : 'https://deanwagner.github.io/paint/img/paint-screenshot.png'
    }, {
        name : 'Library',
        desc : 'Library App to store, track, and sort a book collection.',
        live : 'https://deanwagner.github.io/library/',
        repo : 'https://github.com/deanwagner/library',
        icon : 'https://deanwagner.github.io/library/img/library.svg',
        img  : 'https://deanwagner.github.io/library/img/library-screenshot.png'
    }, {
        name : 'T O D O :',
        desc : 'A To-Do List and Task Tracker.',
        live : 'https://deanwagner.github.io/todo/',
        repo : 'https://github.com/deanwagner/todo',
        icon : 'https://deanwagner.github.io/todo/img/todo.svg',
        img  : 'https://deanwagner.github.io/todo/img/todo-pc-dark.png'
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
        name : 'Sign-Up Form',
        desc : 'A Sign-Up Form Mock-Up with Browser-Based Input Validation.',
        live : 'https://deanwagner.github.io/signup/',
        repo : 'https://github.com/deanwagner/signup',
        icon : 'https://www.theodinproject.com/favicon-32x32.png',
        img  : 'https://deanwagner.github.io/signup/img/signup-screenshot.png'
    }, {
        name : 'Landing Page',
        desc : 'A Landing Page Mock-Up written in CSS and HTML.',
        live : 'https://deanwagner.github.io/landingpage/',
        repo : 'https://github.com/deanwagner/landingpage',
        icon : 'https://www.theodinproject.com/favicon-32x32.png',
        img  : 'https://deanwagner.github.io/landingpage/img/landingpage-screenshot.png'
    }];

    /*
        name : 'Clock',
        desc : 'An Animated Clock written in JavaScript and CSS.',
        live : 'https://deanwagner.github.io/clock/',
        repo : 'https://github.com/deanwagner/clock',
        icon : 'https://deanwagner.github.io/clock/res/clock.png',
        img  : 'https://deanwagner.github.io/clock/img/clock-screenshot.png'
    }, {
    */

    /**
     * Constructor
     * @constructor
     */
    constructor() {
        this.build();
    }

    /**
     * Build Projects
     */
    build() {
        const container = document.createElement('div');
        this.projects.forEach(project => {
            const article = document.createElement('article');
            article.innerHTML = this.template(project);
            container.appendChild(article);
        });
        document.getElementById('projects').appendChild(container);
    }

    /**
     * Project HTML Template
     * @param {object} project - Project Object
     * @returns {string} - HTML String
     */
    template(project) {
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
}

export default Projects;