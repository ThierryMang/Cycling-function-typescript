# 🌌 Zodiac Cycling Animation - Typescript version

[🇫🇷 Français](#fr) | [🇬🇧 English](#en)

<a name="fr"></a>

## 🇫🇷 🚀 Présentation

Ce projet démontre une transition réussie d'un code JavaScript natif vers un environnement TypeScript moderne. L'animation calcule les positions circulaires en temps réel et réagit aux mouvements de la souris avec un effet d'inertie.

## 🛠️ Caractéristiques

Architecture Modulaire : Séparation stricte entre les données, les utilitaires mathématiques et la logique d'animation.

- **Type Safety :** Utilisation intensive des interfaces pour sécuriser les configurations et les données du zodiaque.
- **Bilingue :** Support natif du Français et de l'Anglais.
- **Tests :** Tests unitaires avec Vitest et Happy-dom pour valider l'intégrité du DOM.

## 📦 Installation

**Installer les dépendances**

```bash
npm install
```

**Lancez la compilation TS**

```bash
 npm run dev (mode watch)
```

**Lancez les tests**

```bash
 npm test
```

## 🏗️ Structure du Projet

```bash
/
├── source/
│ ├── tests/ # Unit tests (Vitest)
│ ├── cycle.ts # Main Animator class
│ ├── main.ts # App entry point & event listeners
│ ├── math-utils.ts # Geometry functions
│ └── zodiac-data.ts # Typed datasets
├── dist/ # Compiled JS files (Production)
├── tsconfig.json # TypeScript configuration
└── vitest.config.ts # Testing environment setup
```

## ⚖️ Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<a name="en"></a>

## 🇺🇸 🚀 Overview

This project showcases a clean migration from vanilla JavaScript to a modern TypeScript environment. The animation computes circular positions in real-time and reacts to mouse movements with a smooth inertia effect.

## 🛠️ Key Features

Modular Architecture: Strict separation of concerns between data, math utilities, and animation logic.

- **Type Safety :** eavy use of interfaces to secure configurations and zodiac datasets.
- **Bilingual :** Native support for French and English languages.
- **Testing :** Unit tests powered by Vitest and Happy-dom to ensure DOM integrity.

## 📦 Setup

**Install dependencies**

```bash
npm install
```

**Start TS compilation TS**

```bash
 npm run dev (mode watch)
```

**Run tests**

```bash
 npm test
```

## 🏗️ Project Structure

```bash
/
├── source/
│ ├── tests/ # Unit tests (Vitest)
│ ├── cycle.ts # Main Animator class
│ ├── main.ts # App entry point & event listeners
│ ├── math-utils.ts # Geometry functions
│ └── zodiac-data.ts # Typed datasets
├── dist/ # Compiled JS files (Production)
├── tsconfig.json # TypeScript configuration
└── vitest.config.ts # Testing environment setup
```

## ⚖️ Licence

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
