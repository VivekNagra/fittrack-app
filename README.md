# FitTrack – Health & Fitness Tracker

## Formål
Dette projekt er udviklet som eksamensaflevering i faget **Databaser** på Professionsbacheloruddannelsen i Softwareudvikling.  
Formålet er at demonstrere anvendelsen af *polyglot persistence* ved at integrere to forskellige databaser i samme applikation: en relationel PostgreSQL-database til strukturerede data og en dokumentbaseret MongoDB-database til ustrukturerede data.  

Projektet er udarbejdet som **reeksamen** og er derfor udviklet individuelt, selvom opgaven oprindeligt er tiltænkt en gruppe på tre studerende.

---

## Funktionalitet
- CRUD-operationer (Create, Read, Update, Delete) for:
  - Brugere
  - Træningspas
  - Måltider
  - Søvndata
- Dashboard-visning med samlet overblik.
- Integration mellem PostgreSQL og MongoDB uden forskel for brugeren.
- Responsiv frontend udviklet i React.
- Backend med REST API bygget i Java Spring Boot.

---

## Teknologistak
- **Frontend:** React, Tailwind CSS  
- **Backend:** Java Spring Boot  
- **Databaser:** PostgreSQL (relationel), MongoDB (dokumentbaseret)  
- **Værktøjer:** pgAdmin, MongoDB Compass  
- **Miljø:** Lokalt på MacOS  

---

## Krav
- Applikationen skal kunne køre lokalt uden internet.
- Koden skal være versioneret i GitHub.
- To databaser skal være integreret i samme applikation.
- Brugervenlig, enkel grænseflade.
- CRUD understøttet for alle datatyper.

---

## Installation og kørsel

### 1. Klon repository
```bash
git clone https://github.com/VivekNagra/fittrack-app.git
cd fittrack-app
```

---

### 2. Opsætning af databaser

#### PostgreSQL
1. Opret en ny database i pgAdmin med navnet `fittrack`.
2. Kør de SQL-scripts, der findes i mappen `/backend/sql/` for at oprette tabellerne.
3. Indstil forbindelse i `application.properties` (backend).

#### MongoDB
1. Start MongoDB lokalt (eller brug MongoDB Atlas).
2. Opret en database med navnet `fittrack`.
3. Indsæt eventuelt eksempeldokumenter for `sleep_logs`.

---

### 3. Start backend
```bash
cd backend
mvn spring-boot:run
```
Backend kører som standard på `http://localhost:8080`.

---

### 4. Start frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend kører som standard på `http://localhost:5173`.

---

## Brug
- Åbn frontend-URL’en i din browser.
- Opret en bruger, og registrer derefter træningspas, måltider og søvnlogs.
- Data opbevares i henholdsvis PostgreSQL og MongoDB, men præsenteres samlet i interfacet.

---

## Testværktøjer
- **pgAdmin** til inspektion af PostgreSQL-data.  
- **MongoDB Compass** til visning af `sleep_logs`.  

---

## Forfatter
**Vivek Singh Nagra**  
Professionsbachelor i Softwareudvikling  
Reeksamen – Databaser
