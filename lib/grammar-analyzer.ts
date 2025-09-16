export interface GrammaticalInfo {
  word: string
  lemma: string
  partOfSpeech: string
  case?: string
  number?: string
  gender?: string
  person?: string
  tense?: string
  mood?: string
  voice?: string
  root?: string
  suffix?: string
}

export interface SentenceStructure {
  subject?: string
  object?: string
  verb?: string
  predicate?: string
  modifiers: string[]
  structure: string
}

// Comprehensive grammatical database
const grammaticalDatabase: Record<string, GrammaticalInfo> = {
  रामः: {
    word: "रामः",
    lemma: "राम",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  रामम्: {
    word: "रामम्",
    lemma: "राम",
    partOfSpeech: "संज्ञा (Noun)",
    case: "द्वितीया (Accusative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  वनम्: {
    word: "वनम्",
    lemma: "वन",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा/द्वितीया (Nom/Acc)",
    number: "एकवचन (Singular)",
    gender: "नपुंसकलिङ्ग (Neuter)",
  },
  वनं: {
    word: "वनं",
    lemma: "वन",
    partOfSpeech: "संज्ञा (Noun)",
    case: "द्वितीया (Accusative)",
    number: "एकवचन (Singular)",
    gender: "नपुंसकलिङ्ग (Neuter)",
  },
  गच्छति: {
    word: "गच्छति",
    lemma: "गम्",
    partOfSpeech: "क्रिया (Verb)",
    person: "प्रथमपुरुष (3rd Person)",
    number: "एकवचन (Singular)",
    tense: "वर्तमान (Present)",
    mood: "लट्लकार (Indicative)",
    voice: "परस्मैपद (Active)",
    root: "गम्",
    suffix: "ति",
  },
  आगच्छति: {
    word: "आगच्छति",
    lemma: "आगम्",
    partOfSpeech: "क्रिया (Verb)",
    person: "प्रथमपुरुष (3rd Person)",
    number: "एकवचन (Singular)",
    tense: "वर्तमान (Present)",
    mood: "लट्लकार (Indicative)",
    voice: "परस्मैपद (Active)",
    root: "आ + गम्",
    suffix: "ति",
  },
  गुरुः: {
    word: "गुरुः",
    lemma: "गुरु",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  धर्म: {
    word: "धर्म",
    lemma: "धर्म",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  क्षेत्रे: {
    word: "क्षेत्रे",
    lemma: "क्षेत्र",
    partOfSpeech: "संज्ञा (Noun)",
    case: "सप्तमी (Locative)",
    number: "एकवचन (Singular)",
    gender: "नपुंसकलिङ्ग (Neuter)",
  },
  कुरु: {
    word: "कुरु",
    lemma: "कुरु",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  च: {
    word: "च",
    lemma: "च",
    partOfSpeech: "अव्यय (Indeclinable)",
    case: "समुच्चयबोधक (Conjunction)",
  },
  ब्रह्मा: {
    word: "ब्रह्मा",
    lemma: "ब्रह्मन्",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  विष्णुः: {
    word: "विष्णुः",
    lemma: "विष्णु",
    partOfSpeech: "संज्ञा (Noun)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "पुंल्लिङ्ग (Masculine)",
  },
  सत्यम्: {
    word: "सत्यम्",
    lemma: "सत्य",
    partOfSpeech: "संज्ञा/विशेषण (Noun/Adjective)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "नपुंसकलिङ्ग (Neuter)",
  },
  शिवम्: {
    word: "शिवम्",
    lemma: "शिव",
    partOfSpeech: "संज्ञा/विशेषण (Noun/Adjective)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "नपुंसकलिङ्ग (Neuter)",
  },
  सुन्दरम्: {
    word: "सुन्दरम्",
    lemma: "सुन्दर",
    partOfSpeech: "विशेषण (Adjective)",
    case: "प्रथमा (Nominative)",
    number: "एकवचन (Singular)",
    gender: "नपुंसकलिङ्ग (Neuter)",
  },
}

export function analyzeGrammar(word: string): GrammaticalInfo | null {
  // Direct lookup
  if (grammaticalDatabase[word]) {
    return grammaticalDatabase[word]
  }

  // Pattern-based analysis for unknown words
  return analyzeWordPattern(word)
}

function analyzeWordPattern(word: string): GrammaticalInfo | null {
  // Basic pattern recognition

  // Verb patterns
  if (word.endsWith("ति")) {
    return {
      word,
      lemma: word.replace(/ति$/, ""),
      partOfSpeech: "क्रिया (Verb)",
      person: "प्रथमपुरुष (3rd Person)",
      number: "एकवचन (Singular)",
      tense: "वर्तमान (Present)",
      mood: "लट्लकार (Indicative)",
      voice: "परस्मैपद (Active)",
      suffix: "ति",
    }
  }

  // Masculine nominative singular
  if (word.endsWith("ः")) {
    return {
      word,
      lemma: word.replace(/ः$/, ""),
      partOfSpeech: "संज्ञा (Noun)",
      case: "प्रथमा (Nominative)",
      number: "एकवचन (Singular)",
      gender: "पुंल्लिङ्ग (Masculine)",
    }
  }

  // Neuter nominative/accusative singular
  if (word.endsWith("म्")) {
    return {
      word,
      lemma: word.replace(/म्$/, ""),
      partOfSpeech: "संज्ञा (Noun)",
      case: "प्रथमा/द्वितीया (Nom/Acc)",
      number: "एकवचन (Singular)",
      gender: "नपुंसकलिङ्ग (Neuter)",
    }
  }

  // Locative singular
  if (word.endsWith("े")) {
    return {
      word,
      lemma: word.replace(/े$/, ""),
      partOfSpeech: "संज्ञा (Noun)",
      case: "सप्तमी (Locative)",
      number: "एकवचन (Singular)",
      gender: "पुंल्लिङ्ग/नपुंसकलिङ्ग (Masc/Neut)",
    }
  }

  return null
}

export function analyzeSentenceStructure(words: string[]): SentenceStructure {
  const grammaticalInfo = words.map((word) => analyzeGrammar(word)).filter(Boolean) as GrammaticalInfo[]

  let subject: string | undefined
  let object: string | undefined
  let verb: string | undefined
  let predicate: string | undefined
  const modifiers: string[] = []

  // Identify sentence components
  for (const info of grammaticalInfo) {
    if (info.partOfSpeech === "क्रिया (Verb)") {
      verb = info.word
    } else if (info.case === "प्रथमा (Nominative)") {
      if (!subject) {
        subject = info.word
      } else {
        predicate = info.word
      }
    } else if (info.case === "द्वितीया (Accusative)" || info.case?.includes("द्वितीया")) {
      object = info.word
    } else if (info.partOfSpeech === "अव्यय (Indeclinable)") {
      modifiers.push(info.word)
    }
  }

  // Determine sentence structure
  let structure = "अज्ञात (Unknown)"

  if (subject && verb && object) {
    structure = "कर्तृ-कर्म-क्रिया (Subject-Object-Verb)"
  } else if (subject && verb) {
    structure = "कर्तृ-क्रिया (Subject-Verb)"
  } else if (subject && predicate) {
    structure = "कर्तृ-विधेय (Subject-Predicate)"
  } else if (words.length > 1 && words.every((w) => analyzeGrammar(w)?.case === "प्रथमा (Nominative)")) {
    structure = "समानाधिकरण (Apposition)"
  }

  return {
    subject,
    object,
    verb,
    predicate,
    modifiers,
    structure,
  }
}

export function getDetailedGrammaticalAnalysis(words: string[]): {
  wordAnalysis: (GrammaticalInfo | null)[]
  sentenceStructure: SentenceStructure
  grammaticalNotes: string[]
} {
  const wordAnalysis = words.map((word) => analyzeGrammar(word))
  const sentenceStructure = analyzeSentenceStructure(words)
  const grammaticalNotes: string[] = []

  // Generate grammatical notes
  const verbs = wordAnalysis.filter((w) => w?.partOfSpeech === "क्रिया (Verb)")
  const nouns = wordAnalysis.filter((w) => w?.partOfSpeech === "संज्ञा (Noun)")

  if (verbs.length > 0) {
    grammaticalNotes.push(`${verbs.length} क्रिया पद मिला (${verbs.length} verb(s) found)`)
  }

  if (nouns.length > 0) {
    grammaticalNotes.push(`${nouns.length} संज्ञा पद मिला (${nouns.length} noun(s) found)`)
  }

  // Check for sandhi opportunities
  for (let i = 0; i < words.length - 1; i++) {
    const current = words[i]
    const next = words[i + 1]

    if (current.endsWith("ः") && next.startsWith("व")) {
      grammaticalNotes.push("विसर्ग सन्धि संभव (Visarga sandhi possible)")
    }
  }

  return {
    wordAnalysis,
    sentenceStructure,
    grammaticalNotes,
  }
}
