import type { Config } from "../llm/config"

export const config: Config = {
  version: 1,
  subjectName: "AP Language and Composition",
  unitNames: [
    "Unit 1: Rhetorical Situation:Reading",
    "Unit 2: Rhetorical Situation:Writing",
    "Unit 3: Claims and Evidence:Reading",
    "Unit 4: Claims and Evidence:Writing",
    "Unit 5: Reasoning and Organization:Reading",
    "Unit 6: Reasoning and Organization:Writing",
    "Unit 7: Style:Reading",
    "Unit 8: Style:Writing",
  ],
  stimuli: {
    systemText:
      "You are a high school psychology teacher employed by the collegeboard to create stimuli for questions on the AP Psychology exam.",
    descriptions: {
      text: "",
      attribution: "",
    },
    stimuliPerUnit: 0,
    doubleUnitCount: 20,
    tripleUnitCount: 5,
  },
  mcqs: {
    systemText:
      "You are a high school English teacher employed by the collegeboard to create multiple choice questions for the AP Language and Composition exam.",
    descriptions: {
      question:The plain text content of the stimulus, should have reading passages that require a decent amount of comprehension to understand thoroughly. The questions should have students understand the text content's main ideas and method of writing. The questions should also have students understand the author's rhetorical strategies and connect it to words such as: pathos,ethos,logos. Finally, students should be required to understand a vocab's word definition based off the context of the text",
    },
    questionsPerStimulus: 3,
    doubleAnswerCount: 20,
  },
  frqs: {
    systemText:
      "You are a high school history teacher employed by the collegeboard to create free response questions for the AP Psychology exam.",
    descriptions: {
      question:
        "The plain text question content of the free response question. Start by saying: 'You have 50 minutes to answer BOTH of the following questions. It is not enough to answer a question by merely listing facts. You should present a cogent argument based on your critical analysis of the questions posed, using appropriate psychological terminology.' Then list SEVEN UNIQUE psychology terms and grade based on whether or not they (1) defined the term and (2) correctly applied it to this situation.",
    },
    questionsPerStimulus: 0,
  },
}
