const CATEGORY_ACTIONS = {
  Tech: 'Build and test a technical solution',
  Data: 'Collect evidence and analyse the data',
  Business: 'Evaluate value, stakeholders and risks',
  Creative: 'Prototype an imaginative experience',
  Sustainable: 'Assess long-term social and environmental impact',
};

const makeChoices = (focus) => [focus, ...Object.keys(CATEGORY_ACTIONS).filter((key) => key !== focus)]
  .map((career) => ({
    text: CATEGORY_ACTIONS[career],
    scores: { [career]: career === focus ? 30 : 25 },
  }));

const level = (id, title, emoji, focus, clues) => ({
  id,
  title,
  emoji,
  questions: clues.map((clue) => ({ clue, choices: makeChoices(focus) })),
});

export const cardsData = [
  level(0, 'Planet Y', '🪐', 'Tech', [
    'A miniature robot appears in the office. How do you investigate it?',
    'The robot shares company data. What is your next step?',
    'A bug stops the robot from working. How do you respond?',
    'The robot suggests a new process. How do you evaluate it?',
    'Management requests a report. Which angle do you prioritise?',
  ]),
  level(1, 'Mysterious Man', '🧙', 'Business', [
    'A mysterious figure offers a secret project. How do you respond?',
    'The project has an unclear purpose. What do you establish first?',
    'A hidden opportunity emerges. How do you assess it?',
    'You must pitch the opportunity to your team. What do you prepare?',
    'The project uses unfamiliar technology. Where do you focus?',
  ]),
  level(2, 'Mysterious Base', '🔬', 'Data', [
    'The base requires a scientific experiment. What is your first step?',
    'An unexpected result appears. How do you investigate?',
    'You need to present experimental results. What do you emphasise?',
    'The base needs funding. How do you strengthen the proposal?',
    'You discover a new application. What do you do next?',
  ]),
  level(3, 'Legend', '📜', 'Creative', [
    'A legendary code must be solved. Which approach do you take?',
    'The legend reveals a new career path. How do you explore it?',
    'You can use the legend’s power in one way. What do you create?',
    'Your future workplace is changing. How do you prepare?',
    'You share the legend with your team. What do you highlight?',
  ]),
  level(4, 'Green Planet', '🌍', 'Sustainable', [
    'You arrive on Green Planet. What do you study first?',
    'A local species needs protection. How do you help?',
    'You must present a green solution. What is your priority?',
    'The planet offers a new energy source. How do you evaluate it?',
    'You need to train local residents. What do you teach?',
  ]),
  level(5, 'Data Galaxy', '📡', 'Data', [
    'You enter Data Galaxy. What do you explore first?',
    'A data anomaly appears. How do you investigate it?',
    'Stakeholders need a report. What do you include?',
    'The galaxy offers predictive insights. How do you use them?',
    'You share your discovery. How do you present it?',
  ]),
];
