import { getCircularPosition, lerp } from './math-utils.js';
import type { ZodiacSign } from './zodiac-data.js'; 

// Définition des interfaces
interface Config {
    rayon: number;
    variationSpeed: number;
    inertia: number;
}

interface AnimatorState {
    targetMouseEffect: number;
    currentMouseEffect: number;
}

export class CircleAnimator {
    private lang: 'fr' | 'en' = 'fr';// Langue par défaut
    private elements: HTMLElement[] = [];
    private angleOffset: number = 0;

    // Initialisation de l'état pour éviter l'erreur "undefined" dans main.ts
    public state: AnimatorState = {
        targetMouseEffect: 0.5,
        currentMouseEffect: 0.5
    };

    constructor(
        private container: HTMLElement,
        private data: ZodiacSign[],
        private config: Config
    ) {}

    /**
     * Crée les éléments HTML pour chaque signe du zodiaque
     */
    public createElements(): void {
        const fragment = document.createDocumentFragment();
        
        this.elements = this.data.map(item => {
            const span = document.createElement('span');
            
            // Création de l'icône (le petit caractère)
            const icon = document.createElement('small');
            icon.textContent = item.char;
            
            // Création du label (le texte du signe)
            const label = document.createElement('label');
            label.textContent = item.name[this.lang];
            
            // Assemblage 
            span.append(icon, " ", label);
            fragment.appendChild(span);
            return span;
        });
        
        this.container.appendChild(fragment);
    }

    // Méthode pour changer de langue à la volée
     public setLanguage(newLang: 'fr' | 'en'): void {
        this.lang = newLang;
        this.elements.forEach((span, i) => {
            const label = span.querySelector('label') as HTMLLabelElement | null;
            const item = this.data[i];
            if (label && item) {
                label.textContent = item.name[this.lang];
            }
        });
    }

    public update(isRunning: boolean): void {
        if (!isRunning) return;

        this.state.currentMouseEffect += (this.state.targetMouseEffect - this.state.currentMouseEffect) * this.config.inertia;

        this.state.currentMouseEffect = lerp(
            this.state.currentMouseEffect,
            this.state.targetMouseEffect,
            this.config.inertia
        )

        this.angleOffset += this.config.variationSpeed * this.state.currentMouseEffect;

        const total = this.elements.length;
        
        this.elements.forEach((span, i) => {
            const pos = getCircularPosition(
                i, 
                total, 
                this.config.rayon,
                this.angleOffset,
                0.4 // Ratio pour l'effet ellipse
            );

             // Application du style (View update)
            span.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            span.style.opacity = " "+ 0.5 + (pos.y + this.config.rayon/2) / this.config.rayon;
        });
    }
}