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

        keys.forEach(value => {
            this.light[value] = getComputedStyle(document.documentElement).getPropertyValue('--' + value);
            this.dark[value]  = getComputedStyle(document.documentElement).getPropertyValue('--dark-' + value);
        });

        this.darkMode.addEventListener('click', () => {
            this.darkMode.classList.add('off');
            this.lightMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'dark');
            this.changeMode(this.dark);
        });

        this.lightMode.addEventListener('click', () => {
            this.lightMode.classList.add('off');
            this.darkMode.classList.remove('off');
            document.documentElement.style.setProperty('color-scheme', 'light');
            this.changeMode(this.light);
        });

        const h1 = document.getElementsByTagName('h1')[0];
        const aside = document.getElementsByTagName('aside')[0];
        h1.addEventListener('click', () => {
            aside.classList.toggle('collapsed');
        });
    }

    changeMode(colors) {
        for (let index in colors) {
            document.documentElement.style.setProperty('--' + index, colors[index]);
        }
    }
}