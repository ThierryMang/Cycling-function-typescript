import { describe, it, expect, beforeEach } from 'vitest';
import { CircleAnimator } from '../cycle.js';
import { zodiacSigns } from '../zodiac-data.js';

describe('CircleAnimator', () => {
    let container: HTMLElement;
    const config = { rayon: 250, variationSpeed: 0.01, inertia: 0.05 };

    beforeEach(() => {
        // On réinitialise le body et on crée le container
        document.body.innerHTML = '<div id="origine"></div>';
        container = document.getElementById('origine')!;
    });

    it('doit créer 12 éléments span pour les signes du zodiaque', () => {
        const animator = new CircleAnimator(container, zodiacSigns, config);
        animator.createElements();

        const spans = container.querySelectorAll('span');
        expect(spans.length).toBe(12); // On attend 12 signes
    });

    it('doit avoir le premier signe avec le bon texte FR', () => {
        const animator = new CircleAnimator(container, zodiacSigns, config);
        animator.createElements();

        const firstLabel = container.querySelector('label');
        
        // On utilise le "?" pour accéder au texte
        expect(firstLabel?.textContent).toBe(zodiacSigns[0]?.name.fr);
    });
});