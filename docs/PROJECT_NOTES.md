# Project Notes

## Concept

TeamUnlock+ Future Career Studio is a gamified career-exploration prototype created during a RightPick internship for St. James' Settlement. Players respond to workplace scenarios across six levels: Planet Y, Mysterious Man, Mysterious Base, Legend, Green Planet and Data Galaxy. Answers contribute to five illustrative interest categories: technology, data, business, creative and sustainability.

## Web implementation

`web/index.html` is the original standalone browser prototype. It includes the scenario experience, career recommendations, student report and institutional-report concept. Chart.js renders visual summaries and browser `localStorage` stores local prototype progress.

## Mobile implementation

`mobile/` is a cleaned Expo/React Native version of the supplied mobile prototype. It wires the real screens into a lightweight tab shell, accumulates answers across all questions, derives profile and student-report content from shared session state, and uses the modern Expo Camera API. The app deliberately uses Expo default visual assets rather than redistributing custom binary icons.

## Data and limitations

All profile names, cohort metrics and career outputs are illustrative. The mobile institutional screen uses fixed sample percentages. Neither implementation contains a production backend, authenticated roles or a real institutional reporting pipeline. Mobile results are not persisted, PDF export is not implemented, and the camera screen does not implement augmented reality. The scoring model is a demonstration mechanic rather than a validated assessment.

## Possible future work

A production pilot would require validated question design, consent and privacy controls, secure authentication, role-based access, backend persistence, aggregate-reporting safeguards, accessible UX testing and formal data-governance review.
