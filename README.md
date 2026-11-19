# St James Career App

Web and mobile prototypes for **TeamUnlock+ Future Career Studio**, developed during a RightPick internship as an interactive career-exploration concept for St. James' Settlement.

## Prototypes

### Web

A standalone HTML/CSS/JavaScript prototype with six scenario levels, career-interest scoring, example career recommendations, student reporting and an illustrative institutional dashboard. It uses Chart.js and browser `localStorage`.

Open `web/index.html` in a modern browser. No build step or backend is required.

### Mobile

An Expo 54 / React Native implementation with six sequential missions, cumulative scoring, profile and student-report views, native text sharing, and a permission-based camera preview.

```bash
cd mobile
npm install
npm start
```

Use the Expo QR code or the Android/iOS run scripts with the required simulator setup. The mobile app uses Expo's default icons and splash screens, so no custom binary assets are needed.

## Repository structure

```text
web/index.html                         Standalone web prototype
mobile/App.js                         Tab shell and shared session state
mobile/constants/                     Scenario and career-reference data
mobile/screens/                       Game, profile, reports and camera views
mobile/app.json                       Expo configuration
mobile/package.json                   Mobile dependencies and run scripts
docs/PROJECT_NOTES.md                 Scope and implementation notes
```

## Prototype limitations

- Career suggestions and scores are illustrative, not a validated psychometric assessment or career advice.
- Institutional figures are fixed sample data, not real student records or live analytics.
- Web progress is stored locally in the browser; mobile progress is held in memory and resets on restart.
- There is no authentication, backend, central database or institutional data collection.
- Mobile sharing creates a text summary through the native share sheet, not a PDF.
- The mobile camera view is a preview only; it does not provide AR tracking, recording, recognition or uploads.

The repository contains only the approved prototype source and documentation. Dependency folders, Expo runtime state, native build outputs, credentials and personal identifiers are excluded.
