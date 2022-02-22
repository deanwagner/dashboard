"use strict";

// Import Modules
import Theme     from './theme.js';
import Projects  from './projects.js';
import Exercises from './exercises.js';

/**
 * Dashboard
 * @class
 * @property {object} theme     - Theme Object
 * @property {object} projects  - Projects Object
 * @property {object} exercises - Exercises Object
 * @author Dean Wagner <info@deanwagner.net>
 */
class Dashboard {

    // Class Properties
    theme     = {};
    projects  = {};
    exercises = {};

    /**
     * Constructor
     * @constructor
     */
    constructor() {

        // Load Modules
        this.theme     = new Theme();
        this.projects  = new Projects();
        this.exercises = new Exercises();

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
    }
}

export default Dashboard;