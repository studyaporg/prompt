import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "AP Chemistry",
  unitNames: [
    "Unit 1: Atomic Structures and Properties",
    "Unit 2: Compound Structures and Properties",
    "Unit 3: Properties of Substances and Mixtures",
    "Unit 4: Chemical Reactions",
    "Unit 5: Kinetics",
    "Unit 6: Thermochemistry",
    "Unit 7: Equilibrium",
    "Unit 8: Acids and Bases",
    "Unit 9: Thermodynamics and Electrochemistry,
  ],
  stimuli: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create stimuli for questions on the AP Chemistry exam.",
    descriptions: {
      text: "The stimulus should have textual descriptions of chemical reactions and processes. There should also be visual stimulus, such as data sets, tables, graphs, and diagrams. There should be also chemical equations and reactions, balanced or unbalanced. Finally expiermental setups of labratory experiments ",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create multiple choice questions for the AP Chemistry exam.",
    descriptions: {
      question:
        "The multiple choice questions should require students to understand chemical concepts, such as atomic structure. It should also require students to involve calculations based on chemical principals and formulas.Finally, questions should have students interpret and analyza data.",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create free response questions for the AP Chemistry exam.",
    descriptions: {
      question:
        "The questions should require students to utilize their calculations based off the stiimulus and utilizing their chemical formulas. The questions should also have students justify or prove wrong claims that the question created based off the stimulus. There should also be questions that have answers found in the stimulus.",
    },
    questionsPerStimulus: 4,
  },
}
