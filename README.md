# Étapes de lancement du projet Next.js & FastAPI

## 1. Initialisation du projet Next.js

```bash
npx create-next-app@latest frontend
cd frontend
npm run dev
```

## 2. Initialisation du projet FastAPI

```bash
python -m venv venv
 Sur Windows: venv\Scripts\activate
pip install fastapi uvicorn
mkdir backend
cd backend
touch main.py
```

Exemple de `main.py` :
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

Lancer le serveur FastAPI :
```bash
uvicorn main:app --reload
```

## 3. Structure recommandée

```
/circuit-touristique
│
├── frontend/   # Next.js
└── backend/    # FastAPI
```

## 4. Conseils

- Utilisez des ports différents (ex: 3000 pour Next.js, 8000 pour FastAPI).
requêtes du frontend.

### Comment lancer le backend FastAPI avec ta structure

Dans ta structure, le fichier principal FastAPI se trouve ici :  
`next/backend/app/main.py`

Pour lancer le backend, exécute ces commandes depuis le dossier `next/backend/app` :

```bash
cd next/backend/app
uvicorn main:app --reload
```

- Si tu utilises un environnement virtuel, active-le d'abord (ex : `..\venv\Scripts\activate` sur Windows).
- Par défaut, le serveur sera accessible sur http://127.0.0.1:8000

Si tu veux changer le port ou l’hôte :

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8080
```requêtes du frontend.
- Utilisez `.env` pour les variables d’environnement.
