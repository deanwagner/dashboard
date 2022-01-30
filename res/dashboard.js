"use strict";

class Dashboard {
    constructor() {
        this.darkMode  = document.getElementById('dark_mode');
        this.lightMode = document.getElementById('light_mode');

        this.light = [];
        this.dark  = [];

        const keys = [
            'accent-color',
            'special-color',
            'ceiling-color',
            'high-color',
            'medium-color',
            'low-color',
            'floor-color'
        ];

        keys.forEach(value => {
            this.light[value] = getComputedStyle(document.documentElement).getPropertyValue('--' + value);
            this.dark[value]  = getComputedStyle(document.documentElement).getPropertyValue('--dark-' + value);
        });

        this.darkMode.addEventListener('click', () => {
            this.darkMode.classList.add('off');
            this.lightMode.classList.remove('off');
            this.changeMode(this.dark);
        });

        this.lightMode.addEventListener('click', () => {
            this.lightMode.classList.add('off');
            this.darkMode.classList.remove('off');
            this.changeMode(this.light);
        });
    }

    changeMode(colors) {
        for (let index in colors) {
            document.documentElement.style.setProperty('--' + index, colors[index]);
        }
    }
}