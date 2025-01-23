import { ReadSurveyQuestions } from "~/lib/types";

export const surveyQuestions: ReadSurveyQuestions = [
  {
    uuid: "2109fa7e-510f-4a9f-b9c7-1dce77c28184",
    question_type: "mcsa",
    prompt: "How are you feeling today?",
    alternatives: ["Good", "Bad"],
  },
  {
    uuid: "20182594-8a69-4f98-8cbb-f214b8d38b4b",
    question_type: "mcsa",
    prompt: "What flavor of cookie should we make?",
    alternatives: ["Chocolate Chip", "Oatmeal Raisin", "Peanut Butter", "Jalapeño Fire"],
  },
];
