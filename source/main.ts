import { zodiacSigns } from './zodiac-data.js';
import { CircleAnimator } from './cycle.js';

interface Config {
    rayon: number;
    variationSpeed: number;
    inertia: number;
}

const CONFIG: Config = {
    rayon: 250,
    variationSpeed: 0.01,
    inertia: 0.05
};

let isRunning: boolean = true;

// Initialisation
const container = document.getElementById("origine") as HTMLElement | null;
if (!container) {
    throw new Error("L'élément #origine est introuvable dans le DOM.");
}
const animator = new CircleAnimator(container, zodiacSigns, CONFIG);

const startApp = (): void => {
    animator.createElements();

    // Événements gérés dans le Main
    window.addEventListener('click', () => {
        isRunning = !isRunning;
    });

    window.addEventListener('mousemove', (e: MouseEvent) => {
        const dist = Math.hypot(
            e.clientX - window.innerWidth / 2, 
            e.clientY - window.innerHeight / 2
        );
        animator.state.targetMouseEffect = 0.5 + (dist / (window.innerWidth / 2)) * 3;
    });

    // Gestion du switch de langue
    const langButtons = document.querySelectorAll<HTMLButtonElement>('.lang-switcher button');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e: MouseEvent) => {
            const target = e.currentTarget as HTMLButtonElement;
            const newLang = target.dataset.lang;

            if (newLang === 'fr' || newLang === 'en') {
                animator.setLanguage(newLang);
            }
        });
    });

    loop();
};

const loop = (): void => {
    animator.update(isRunning);
    requestAnimationFrame(loop);
};

document.addEventListener('DOMContentLoaded', startApp);