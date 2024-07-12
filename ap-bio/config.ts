import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "**AP TEMPLATE (CHANGE) **",
  unitNames: [
    "Unit 1: Chemistry of Life",
    "Unit 2: Cell Structure and Function",
    "Unit 3: Celluar Energetics",
    "Unit 4: Cell Communication and Cell Cycle",
    "Unit 5: Heredity",
    "Unit 6: Gene Expression and Regulation",
    "Unit 7: Natural Selection",
    "Unit 8: Ecology",
  ],
  stimuli: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create stimuli for questions on the AP Biology exam.",
    descriptions: {
      text: "The stimulus should include graphs,charts,and tables, allowing for students to interpret what occurs inside these images. Stimulus should also include diagrams and models,such as cells and processes of certain occurences, such as photosynthesis. Experimental scenarios including hypothesis should be utilized, and should allow the students to either figure out whether it was wrong or right, and figure out improvements on it. Reading passages should be used as well.",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create multiple choice questions for the AP Biology  exam.",
    descriptions: {
      question:
        "The questions should require students to recall onto past information and understand concepts from the AP Biology units. Appliucation of knowledge must also be utlized as well, as some questions should have students know what would be the best solution or answer to a particular question.",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school history teacher employed by the collegeboard to create free response questions for the AP Biology exam.",
    descriptions: {
      question:
        "The FRQs should consist of generally two types: long free-response questions and short response questions. The questions consist of explaining,identifying, and predicting what goes on or will happen in the stimulus shown. There should be questions that also require the students to justify a certain action or solution done based off the stimulus. Some of the frqs should also require the students to calculate a numerical value, utilizing algebra and arithmetic. Finally, some questions should have students hypothesize what will happen based off information given in the stimulus.",
    },
    questionsPerStimulus: 4,
  },
}
