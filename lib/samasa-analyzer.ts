export interface SamasaRule {
  type: string
  description: string
  example: string
  vigraha: string
}

export const samasaTypes: Record<string, SamasaRule> = {
  तत्पुरुष: {
    type: "तत्पुरुषसमासः",
    description: "पूर्वपदं विशेषणम्, उत्तरपदं विशेष्यम्",
    example: "राजपुत्रः",
    vigraha: "राज्ञः पुत्रः",
  },
  कर्मधारय: {
    type: "कर्मधारयसमासः",
    description: "विशेषणविशेष्ययोः समासः",
    example: "नीलकमलम्",
    vigraha: "नीलं च तत् कमलं च",
  },
  द्विगु: {
    type: "द्विगुसमासः",
    description: "संख्यापूर्वपदकः समासः",
    example: "त्रिलोकी",
    vigraha: "त्रयाणां लोकानां समाहारः",
  },
  द्वन्द्व: {
    type: "द्वन्द्वसमासः",
    description: "समानाधिकरणयोः पदयोः समासः",
    example: "रामकृष्णौ",
    vigraha: "रामः च कृष्णः च",
  },
  बहुव्रीहि: {
    type: "बहुव्रीहिसमासः",
    description: "अन्यपदार्थप्रधानः समासः",
    example: "चक्रपाणिः",
    vigraha: "चक्रं पाणौ यस्य सः (विष्णुः)",
  },
  अव्ययीभाव: {
    type: "अव्ययीभावसमासः",
    description: "अव्ययपूर्वपदकः समासः",
    example: "यथाशक्ति",
    vigraha: "शक्तिं यथा",
  },
}

export interface SamasaAnalysis {
  compound: string
  type: string
  vigraha: string
  explanation: string
  components: string[]
}

export const compoundDatabase: Record<string, SamasaAnalysis> = {
  धर्मक्षेत्रे: {
    compound: "धर्मक्षेत्रे",
    type: "तत्पुरुषसमासः (षष्ठीतत्पुरुषः)",
    vigraha: "धर्मस्य क्षेत्रम्",
    explanation: "धर्मस्य क्षेत्रम् इति अर्थः। षष्ठी विभक्तेः लोपः।",
    components: ["धर्म", "क्षेत्र"],
  },
  कुरुक्षेत्रे: {
    compound: "कुरुक्षेत्रे",
    type: "तत्पुरुषसमासः (षष्ठीतत्पुरुषः)",
    vigraha: "कुरूणां क्षेत्रम्",
    explanation: "कुरूणां क्षेत्रम् इति अर्थः। षष्ठी विभक्तेः लोपः।",
    components: ["कुरु", "क्षेत्र"],
  },
  राजपुत्रः: {
    compound: "राजपुत्रः",
    type: "तत्पुरुषसमासः (षष्ठीतत्पुरुषः)",
    vigraha: "राज्ञः पुत्रः",
    explanation: "राज्ञः पुत्रः इति अर्थः। राजा इत्यस्य षष्ठी विभक्तेः लोपः।",
    components: ["राजन्", "पुत्र"],
  },
  भगवद्गीता: {
    compound: "भगवद्गीता",
    type: "तत्पुरुषसमासः (षष्ठीतत्पुरुषः)",
    vigraha: "भगवतः गीता",
    explanation: "भगवतः गीता इति अर्थः। भगवान् इत्यस्य षष्ठी विभक्तेः लोपः।",
    components: ["भगवत्", "गीता"],
  },
  गुरुदक्षिणा: {
    compound: "गुरुदक्षिणा",
    type: "तत्पुरुषसमासः (चतुर्थीतत्पुरुषः)",
    vigraha: "गुरवे दक्षिणा",
    explanation: "गुरवे दक्षिणा इति अर्थः। चतुर्थी विभक्तेः लोपः।",
    components: ["गुरु", "दक्षिणा"],
  },
  नीलकमलम्: {
    compound: "नीलकमलम्",
    type: "कर्मधारयसमासः",
    vigraha: "नीलं च तत् कमलं च",
    explanation: "नीलं कमलम् इति अर्थः। विशेषणविशेष्ययोः समासः।",
    components: ["नील", "कमल"],
  },
  त्रिलोकी: {
    compound: "त्रिलोकी",
    type: "द्विगुसमासः",
    vigraha: "त्रयाणां लोकानां समाहारः",
    explanation: "त्रयः लोकाः इति अर्थः। संख्यापूर्वपदकः समासः।",
    components: ["त्रि", "लोक"],
  },
  रामकृष्णौ: {
    compound: "रामकृष्णौ",
    type: "द्वन्द्वसमासः",
    vigraha: "रामः च कृष्णः च",
    explanation: "रामः च कृष्णः च इति अर्थः। द्वयोः समानाधिकरणयोः समासः।",
    components: ["राम", "कृष्ण"],
  },
  चक्रपाणिः: {
    compound: "चक्रपाणिः",
    type: "बहुव्रीहिसमासः",
    vigraha: "चक्रं पाणौ यस्य सः",
    explanation: "चक्रं पाणौ यस्य सः इति अर्थः। अन्यपदार्थप्रधानः समासः।",
    components: ["चक्र", "पाणि"],
  },
  यथाशक्ति: {
    compound: "यथाशक्ति",
    type: "अव्ययीभावसमासः",
    vigraha: "शक्तिं यथा",
    explanation: "शक्तिं यथा इति अर्थः। अव्ययपूर्वपदकः समासः।",
    components: ["यथा", "शक्ति"],
  },
}

export function analyzeSamasa(word: string): SamasaAnalysis | null {
  // Direct lookup
  if (compoundDatabase[word]) {
    return compoundDatabase[word]
  }

  // Try to identify compound patterns
  return identifyCompoundPattern(word)
}

function identifyCompoundPattern(word: string): SamasaAnalysis | null {
  // Basic pattern recognition for common compounds

  // Check for क्षेत्र endings (likely तत्पुरुष)
  if (word.endsWith("क्षेत्रे") || word.endsWith("क्षेत्रम्")) {
    const prefix = word.replace(/क्षेत्र[ेम्]?$/, "")
    if (prefix.length > 0) {
      return {
        compound: word,
        type: "तत्पुरुषसमासः (संभावितः)",
        vigraha: `${prefix}स्य क्षेत्रम्`,
        explanation: `${prefix}स्य क्षेत्रम् इति संभावितः अर्थः।`,
        components: [prefix, "क्षेत्र"],
      }
    }
  }

  // Check for पुत्र endings
  if (word.endsWith("पुत्रः") || word.endsWith("पुत्रम्")) {
    const prefix = word.replace(/पुत्र[ःम्]?$/, "")
    if (prefix.length > 0) {
      return {
        compound: word,
        type: "तत्पुरुषसमासः (संभावितः)",
        vigraha: `${prefix}स्य पुत्रः`,
        explanation: `${prefix}स्य पुत्रः इति संभावितः अर्थः।`,
        components: [prefix, "पुत्र"],
      }
    }
  }

  return null
}

export function getSamasaExamples(type: string): string[] {
  const examples: string[] = []

  for (const [compound, analysis] of Object.entries(compoundDatabase)) {
    if (analysis.type.includes(type)) {
      examples.push(compound)
    }
  }

  return examples
}
