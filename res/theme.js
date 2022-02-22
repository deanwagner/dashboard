"use strict";

/**
 * Theme
 * @class
 * @property {array}  light     - CSS Properties for Light Mode
 * @property {array}  dark      - CSS Properties for Dark Mode
 * @property {object} lightMode - Enable Light Mode Element
 * @property {object} darkMode  - Enable Dark Mode Element
 * @author Dean Wagner <info@deanwagner.net>
 */
class Theme {

    // Class Properties
    light     = [];
    dark      = [];
    darkMode  = {};
    lightMode = {};

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
     * Change Light/Dark Mode
     * @param {object} colors - [this.light] or [this.dark]
     */
    changeMode(colors) {
        for (let index in colors) {
            document.documentElement.style.setProperty('--' + index, colors[index]);
        }
    }
}

export default Theme;