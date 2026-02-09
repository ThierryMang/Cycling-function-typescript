/**
 * Interface pour définir la structure de la position calculée
 */
interface CircularPosition {
    x: number;
    y: number;
    angle: number;
}

/**
 * Calcule la position X/Y sur un cercle/ellipse
 */
export const getCircularPosition = (
    index: number, 
    total: number, 
    radius: number, 
    offset: number, 
    ratioY: number = 1
): CircularPosition => {
    const angleStep: number = (2 * Math.PI) / total;
    const currentAngle: number = index * angleStep + offset;
    
    return {
        x: Math.cos(currentAngle) * radius,
        y: Math.sin(currentAngle) * (radius * ratioY),
        angle: currentAngle
    };
};

/**
 * Calcule l'inertie (Lerp - Linear Interpolation)
 */
export const lerp = (current: number, target: number, factor: number): number => {
    return current + (target - current) * factor;
};