
# README — Projet Analyse de Sentiments d’Avis Clients

## Présentation

Ce projet est une application web permettant aux clients de soumettre des avis via un formulaire. Ces avis sont analysés via un modèle NLP pré-entraîné (`bert-base-uncased` via Hugging Face) pour déterminer le sentiment, suggérer un thème et générer un avis percutant basé sur celui soumis.

## Stack Technique

| Composant        | Technologie                           |
|:-----------------|:--------------------------------------|
| Frontend         | React, Tailwind CSS, Axios            |
| Backend          | FastAPI, SQLAlchemy                   |
| Base de données  | PostgreSQL                            |
| NLP              | Transformers (`bert-base-uncased`)    |
| Tests            | pytest, React Testing Library, Vitest |

## Installation et Lancement

### Backend

```bash
# Cloner le projet backend
git clone https://github.com/TANTELY00/avis_client_back_end.git
cd avisclientbackend

# Créer et activer l’environnement virtuel
python3 -m venv venv
source venv/bin/activate

# Installer les dépendances
pip install -r requirements.txt

# Lancer l’application
uvicorn app.main:app --reload

# Lancer les tests backend
PYTHONPATH=. pytest
```

### Frontend

```bash
# Cloner le projet frontend
git clone https://github.com/TANTELY00/avis_client_front_end-.git
cd avis_client_front_end

# Installer les dépendances
npm install

# Lancer l’application
npm run dev

# Lancer les tests frontend
npm run test
```

## Sécurité

- **CORS Middleware** strict côté backend.
- **Validation des payloads** via Pydantic.
- **Protection des endpoints** (clé API ou JWT possible).
- **Logs et gestion centralisée des erreurs**.

## Dockerisation

### Lancer le projet complet avec Docker Compose :

```bash
docker-compose up --build
```

Cela dockerise les services backend (FastAPI) et la base de données (PostgreSQL).

## Tests

| Côté         | Commande              |
|:-------------|:----------------------|
| Backend      | `PYTHONPATH=. pytest` |
| Frontend     | `npm run test`        |

## Diagramme de Classe

- **Un Client** → 1..* **Reviews**
- **Un Review** → 1 **SentimentResult**

## Planning (PERT)

| Étape | Tâche                                        | O (h)  | R (h)  | P (h)  | PERT (h)  |
|:------|:---------------------------------------------|:-------|:-------|:-------|:----------|
| 1     | Création de la maquette (Figma)              | 1.5    | 2      | 3      | 2.08      |
| 2     | Structure frontend (React + Tailwind)        | 0.5    | 1      | 2      | 1.08      |
| 3     | Formulaire avis (React)                      | 0.5    | 1.5    | 1      | 1.00      |
| 4     | Backend + PostgreSQL (FastAPI)               | 1.5    | 2      | 3      | 2.08      |
| 5     | API POST avis (FastAPI)                      | 1.5    | 2      | 3      | 2.08      |
| 6     | Sécurité API (CORS, validation)              | 1.5    | 2      | 3      | 2.08      |
| 7     | Intégration modèle NLP (Transformers)        | 1.5    | 2      | 3      | 2.08      |
| 8     | Génération titre et avis (NLP)               | 1.5    | 2      | 3      | 2.08      |
| 9     | Stockage PostgreSQL (SQLAlchemy)             | 1.5    | 2      | 3      | 2.08      |
| 10    | Renvoi résultats (React + Axios)             | 1.5    | 2      | 3      | 2.08      |
| 11    | Tests unitaires / fonctionnels               | 3      | 4      | 6      | 4.17      |
| 12    | Documentation et README                      | 2      | 3      | 4      | 3.00      |
| 13    | Dockerisation et déploiement backend + DB    | 1.5    | 2      | 3      | 2.08      |
| 14    | Déploiement frontend (Netlify/Vercel/Nginx)  | 0.5    | 1.5    | 1      | 1.00      |
| 15    | Configuration SSL et firewall                | 0.5    | 1.5    | 1      | 1.00      |
| 16    | Mise en place des logs et surveillance       | 1      | 1.5    | 2.5    | 1.33      |

**Durée totale estimée :** **30 h** 

## Auteur

**Tantelinirina Ravoson** 
**tanteli.ia.engineer@gmail.com**

## Remarques

- Prévoir certificat SSL via **Let’s Encrypt** en production.
- Configurer un **firewall UFW** ou **Security Groups cloud**.
- En option pour projet évolutif : supervision via **Grafana + Loki** pour les logs et la surveillance applicative.


