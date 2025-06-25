# Avis Client Front End

Ce projet permet de gérer les avis clients via une application frontend.

Structure du projet

📦 avis_client_front_end
├── 📁 public
│   └── index.html
│
├── 📁 src
│   ├── 📁 assets             # images, icônes, fonts, etc.
│   │
│   ├── 📁 components         # composants réutilisables et globaux
│   │   └── Button.jsx
│   │   └── Loader.jsx
│
│   ├── 📁 features           # dossiers fonctionnels modulaires
│   │   └── avis
│   │       ├── AvisList.jsx
│   │       ├── AvisForm.jsx
│   │       └── avisApi.js
│   │
│   ├── 📁 hooks              # custom hooks (useFetch, useAuth…)
│   │   └── useAvis.js
│   │
│   ├── 📁 layouts            # layout de page (MainLayout, DashboardLayout…)
│   │   └── MainLayout.jsx
│   │
│   ├── 📁 pages              # pages (pages liées aux routes)
│   │   └── Home.jsx
│   │   └── AvisPage.jsx
│   │   └── NotFound.jsx
│   │
│   ├── 📁 services           # appels API génériques ou helpers HTTP
│   │   └── axiosClient.js
│   │
│   ├── 📁 store              # state management (Zustand, Redux…)
│   │   └── avisStore.js
│   │
│   ├── 📁 styles             # fichier CSS ou Tailwind config si besoin
│   │   └── index.css
│   │
│   ├── 📁 utils              # helpers et utilitaires
│   │   └── formatDate.js
│   │
│   ├── 📁 router             # configuration des routes
│   │   └── index.jsx
│   │
│   ├── App.jsx               # composant racine
│   ├── main.jsx              # point d’entrée Vite
│   └── vite.config.js
│
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

