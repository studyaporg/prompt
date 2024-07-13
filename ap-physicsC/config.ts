import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "AP Physics 2",
  unitNames: [
    "Unit 1: Kinematics",
    "Unit 2: Force and Translational Dynamics",
    "Unit 3: Work, Energy, and Power",
    "Unit 4: Linear Momentum",
    "Unit 5: Torque and Rotational Dynamics",
    "Unit 6: Energy and Momentum of Rotating Systems",
    "Unit 7: Oscillations",
    "Unit 8: Electric Charges, Fields, and Gauss's Law",
    "Unit 9: Electric Potential",
    "Unit 10: Conductors and Capacitors",
    "Unit 11: Electric Circuits",
    "Unit 12: Magnetic Fields and Electromagnetism",
    "Unit 13: Electromagnetic Induction",
  ],
  stimuli: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create stimuli for questions on the AP Phyiscs C exam.",
    descriptions: {
      text: "The stimulus should have text descriptions of physical situations. There should also be data graphs, tables, and diagrams to visually represent the problems.",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create multiple choice questions for the AP Physics C exam.",
    descriptions: {
      question:
        "The multiple choice questions should primarily have students solve problems based off the stimulus, utilizing calculus-based calculations. Occasionally, there should be questions that require students to understand and recall concepts they have learned. Finally, students should also be able to interpret and understand data from the stimulus and use calculus-based calculations to solve it.",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create free response questions for the AP Physics C exam.",
    descriptions: {
      question:
        "The free response questions should require students to justify a claim that was created based off the stimulus, and may have the student create calculus-based calculations to justify or prove the claim right or wrong. The questions should also have students explain and describe a physical process based off the stimulus as well. ",
    },
    questionsPerStimulus: 4,
  },
}
