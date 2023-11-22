import { Question } from "./types";

export const apiUrl = "https://api.openai.com/v1/chat/completions";

export const apiOpenAPIKEY = import.meta.env.VITE_REACT_APP_OPEN_AI;
console.log(apiOpenAPIKEY);

export const sampleQuestions: Question[] = [
  new Question(
    "Comment décririez-vous généralement votre niveau de stress au cours des dernières semaines ?",
    ["Faible", "Modéré", "Élevé"]
  ),
  new Question(
    "Comment votre sommeil a-t-il été affecté récemment en raison du stress ?",
    [
      "Mon sommeil est généralement bon",
      "J'ai quelques difficultés occasionnelles à m'endormir",
      "Je rencontre des problèmes fréquents d'insomnie",
    ]
  ),
  new Question("Comment gérez-vous habituellement le stress au quotidien ?", [
    "Je fais de l'exercice régulièrement et utilise des techniques de relaxation",
    "Je m'efforce de faire face, mais parfois cela devient difficile",
    "Je lutte fréquemment pour faire face et me sentir dépassé(e)",
  ]),
  new Question(
    "Comment décririez-vous votre niveau d'énergie global ces derniers temps ?",
    [
      "Énergique et motivé(e)",
      "Variable, parfois énergique, parfois fatigué(e)",
      "Fréquemment fatigué(e) et démotivé(e)",
    ]
  ),
  new Question(
    "Comment votre concentration a-t-elle été affectée par le stress ?",
    [
      "Ma concentration est généralement bonne",
      "J'ai parfois du mal à me concentrer",
      "J'ai des difficultés fréquentes à me concentrer",
    ]
  ),
  new Question(
    "Comment votre appétit a-t-il été affecté récemment en raison du stress ?",
    [
      "Mon appétit est normal",
      "Je perds parfois l'appétit",
      "Je mange souvent de façon excessive ou compulsive",
    ]
  ),
];

export const beginPrompt =
  "Cher ChatGPT, j'ai répondu à un questionnaire de 06 questions afin de connaitre mon niveau de stress. Peux tu me générer à base des questions et de mes réponses mon niveau de stress et me fournit des suggestion afin de l'améliorer. Voici les questions/réponses: ";
export const endPrompt =
  "Peux tu formatter le resultat en incluant uniquant des balises p, ul, li au bon endroit";
