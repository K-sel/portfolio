# Portfolio Jonathan Pinard

Portfolio moderne et minimaliste développé entièrement à la main avec **Vue 3**, **TailwindCSS** et **GSAP**.

## 🎯 Philosophie du projet

Ce portfolio reflète ma conviction que dans le domaine technique, il est crucial d'emprunter le chemin le plus exigeant. Chaque ligne de code a été écrite à la main, sans template, pour :

- **Maîtriser chaque aspect** de l'application
- **Comprendre les technologies** utilisées en profondeur  
- **Créer une base solide** pour des projets futurs
- **Démontrer mes compétences** techniques réelles

## 📞 Contact

- **Email** : jpinard@bluewin.ch
- **LinkedIn** : [jonathanpnrd](https://www.linkedin.com/in/jonathanpnrd/)

## 🌟 Fonctionnalités

### Architecture & Design
- **Architecture JSON-driven** : Projets gérés dynamiquement via fichiers JSON sans backend
- **Design system cohérent** : Interface minimaliste suivant la philosophie "less is more"
- **Mode sombre/clair automatique** : Basé sur l'heure locale (22h-6h = mode sombre)
- **Animations fluides** : Transitions et micro-interactions avec GSAP
- **Responsive design** : Optimisé pour tous les appareils

### Expérience utilisateur
- **Navigation intuitive** : Router Vue avec gestion de l'historique
- **Horloge temps réel** : Affichage UTC+1 avec statut de disponibilité
- **Chargement optimisé** : Images lazy loading et performances optimisées
- **Accessibilité** : Contraste et navigation clavier

## 🛠️ Stack technique

- **Frontend** : Vue 3 (Composition API)
- **Styling** : TailwindCSS avec variables CSS personnalisées
- **Animations** : GSAP pour les transitions avancées
- **Routing** : Vue Router avec hash history
- **Build** : Vite avec plugins Vue et Tailwind
- **Déploiement** : GitHub Pages

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Base-*          # Composants de base
│   ├── TheHero.vue     # Section hero
│   └── TheFooter.vue   # Pied de page
├── contents/           # Données JSON
│   ├── about.json      # Informations personnelles
│   └── projects/       # Projets individuels
├── pages/              # Pages principales
│   ├── TheHome.vue     # Page d'accueil
│   ├── TheAbout.vue    # Page à propos
│   └── projects/       # Pages projets détaillées
└── utils/              # Utilitaires
    ├── parser.js       # Parseur de fichiers JSON
    └── store.js        # Gestion des données
```

## 📱 Responsive Design

Le portfolio utilise une approche mobile-first avec les breakpoints Tailwind :

- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+

## 🔄 Animations

Les animations GSAP incluent :
- **Slide-in** : Entrée des pages depuis le haut/bas
- **Rotation 3D** : Effets de profondeur sur les éléments
- **Micro-interactions** : Hover effects et transitions fluides


## 📊 Performance

- **Lazy loading** sur toutes les images
- **Code splitting** automatique avec Vite
- **Compression** des assets en production
- **Variables CSS** pour les thèmes (performance > JS)


---

*Développé avec 💙 par Jonathan Pinard - Lausanne, Switzerland*
