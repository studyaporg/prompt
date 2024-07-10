import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "AP-Environmental-Science",
  unitNames: [
    "Unit 1: The Living World:Ecosystems",
    "Unit 2: The Living World:Biodiversity",
    "Unit 3: Populations",
    "Unit 4: Earth Systems and Resources",
    "Unit 5: Land and Water Use",
    "Unit 6: Energy Resources and Consumption",
    "Unit 7:Atmospheric Pollution",
    "Unit 8: Aquatic and Terrestial Pollution",
    "Unit 9: Global Change",
  ],
  stimuli: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create stimuli for questions on the AP Environmental Science exam.",
    descriptions: {
      text: "The stimulus should include data sets,tables,and graphs, utilizing numerical values and information that can be helpful in finding the answer. Reading passages are often used as well, with the answer occasionally inside the passage. ",
      attribution: "",
    },
    stimuliPerUnit: 3,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create multiple choice questions for the AP Environmental Science  exam.",
    descriptions: {
      question:
        "The multiple choice question should require students to RECALL content they have learned. However, the answer can occasionally be found by interpreting the stimulus. The multiple choice should also allow for the student to infer what would be the best possible solution to a certain environmental problem. ",
    },
    questionsPerStimulus: 4,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school science teacher employed by the collegeboard to create free response questions for the AP Environmental Science exam.",
    descriptions: {
      question:
        "Most of the free response questions require stimulus with answers drawn from the stimulus itself. Some questions should require the students to infer what would be the best possible solution for an environmental problem in the stimulus or what would happen if a potential problem occured. It should also require students to use information learned from the content and identify certain topics. The last free response question should have math:dimensional analysis,percentage conversions,algebra,and ratios and proportions.",
    },
    questionsPerStimulus: 10,
  },
},
