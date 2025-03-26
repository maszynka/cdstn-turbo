import { Subject } from "../types";
import {quiz as psychometryQuiz1} from "./tests-data/psychometry/styczen-2024";
import {quiz as psychometryQuiz2} from "./tests-data/psychometry/pm-nj3-t01-januszek";
import {quiz as psychometryQuiz3} from "./tests-data/psychometry/zima-2022-2023";
import {quiz as test} from "./tests-data/psychometry/test";
import {quiz as pomoc1} from "./tests-data/pomc/pomoc-1";
import {quiz as pomoc2} from "./tests-data/pomc/pomoc-2";
import {quiz as metodologia1} from "./tests-data/metodologia/metodologia-zbiorecze-o1";
import {quiz as metodologia2} from "./tests-data/metodologia/metodologia-zbiorecze-o1-gen";






export const subjects: Subject[] = [
    {
      id: 1,
      title: "Zaawansowana psychometria",
      quizzes: [
        psychometryQuiz1,
        psychometryQuiz2,
        psychometryQuiz3,
        test,
      ],
    },
    {
      id: 2,
      title: "Pomoc psychologiczna",
      quizzes: [
        pomoc1,
        pomoc2
      ],
    },
    {
      id: 3,
      title: "Medodologia badan",
      quizzes: [
        metodologia1,
        metodologia2
      ],
    }
  ]

