export interface DictionaryEntry {
  word: string
  meaning: string
  etymology?: string
  grammaticalInfo?: string
  synonyms?: string[]
}

export const sanskritDictionary: Record<string, DictionaryEntry> = {
  // Nouns - Masculine
  रामः: {
    word: "रामः",
    meaning: "अयोध्यानगरनिवासी इक्ष्वाकुवंशजः प्रसिद्धः पुरुषः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["दाशरथिः", "सीतापतिः", "कोसलेन्द्रः"],
  },
  रामम्: {
    word: "रामम्",
    meaning: "अयोध्यानगरनिवासी इक्ष्वाकुवंशजः प्रसिद्धः पुरुषः",
    grammaticalInfo: "पुंल्लिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["दाशरथिम्", "सीतापतिम्"],
  },
  गुरुः: {
    word: "गुरुः",
    meaning: "आचार्यः, शिक्षकः, भारी",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["आचार्यः", "उपाध्यायः", "शिक्षकः"],
  },
  पुरुषः: {
    word: "पुरुषः",
    meaning: "नरः, मनुष्यः, पुमान्",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["नरः", "मनुष्यः", "मानवः"],
  },
  बालकः: {
    word: "बालकः",
    meaning: "शिशुः, कुमारः, बालः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["शिशुः", "कुमारः", "बालः"],
  },
  बालकम्: {
    word: "बालकम्",
    meaning: "शिशुम्, कुमारम्, बालम्",
    grammaticalInfo: "पुंल्लिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["शिशुम्", "कुमारम्"],
  },
  छात्रः: {
    word: "छात्रः",
    meaning: "शिष्यः, विद्यार्थी, अध्येता",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["शिष्यः", "विद्यार्थी", "अध्येता"],
  },
  अश्वः: {
    word: "अश्वः",
    meaning: "घोटकः, हयः, तुरगः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["घोटकः", "हयः", "तुरगः"],
  },
  सूर्यः: {
    word: "सूर्यः",
    meaning: "आदित्यः, रविः, दिनकरः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["आदित्यः", "रविः", "दिनकरः"],
  },
  चन्द्रः: {
    word: "चन्द्रः",
    meaning: "शशी, सोमः, निशाकरः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["शशी", "सोमः", "निशाकरः"],
  },

  // Nouns - Neuter
  वनम्: {
    word: "वनम्",
    meaning: "अरण्यम्, विपिनम्, काननम्",
    grammaticalInfo: "नपुंसकलिङ्गः, प्रथमा/द्वितीया एकवचनम्",
    synonyms: ["अरण्यम्", "विपिनम्", "काननम्"],
  },
  वनं: {
    word: "वनं",
    meaning: "अरण्यम्, विपिनम्, काननम्",
    grammaticalInfo: "नपुंसकलिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["अरण्यम्", "विपिनम्", "काननम्"],
  },
  क्षेत्रम्: {
    word: "क्षेत्रम्",
    meaning: "भूमिः, स्थानम्, प्रदेशः",
    grammaticalInfo: "नपुंसकलिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["भूमिः", "स्थानम्", "प्रदेशः"],
  },
  क्षेत्रे: {
    word: "क्षेत्रे",
    meaning: "भूमौ, स्थाने, प्रदेशे",
    grammaticalInfo: "नपुंसकलिङ्गः, सप्तमी एकवचनम्",
    synonyms: ["भूमौ", "स्थाने", "प्रदेशे"],
  },
  पुस्तकम्: {
    word: "पुस्तकम्",
    meaning: "ग्रन्थः, पोथी, लेखः",
    grammaticalInfo: "नपुंसकलिङ्गः, प्रथमा/द्वितीया एकवचनम्",
    synonyms: ["ग्रन्थः", "पोथी", "लेखः"],
  },
  पुस्तकं: {
    word: "पुस्तकं",
    meaning: "ग्रन्थम्, पोथी, लेखम्",
    grammaticalInfo: "नपुंसकलिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["ग्रन्थम्", "पोथी"],
  },
  फलम्: {
    word: "फलम्",
    meaning: "फलम्, परिणामः, प्रतिफलम्",
    grammaticalInfo: "नपुंसकलिङ्गः, प्रथमा/द्वितीया एकवचनम्",
    synonyms: ["परिणामः", "प्रतिफलम्"],
  },
  फलं: {
    word: "फलं",
    meaning: "फलम्, परिणामम्, प्रतिफलम्",
    grammaticalInfo: "नपुंसकलिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["परिणामम्", "प्रतिफलम्"],
  },
  गुरुम्: {
    word: "गुरुम्",
    meaning: "आचार्यम्, शिक्षकम्, उपाध्यायम्",
    grammaticalInfo: "पुंल्लिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["आचार्यम्", "शिक्षकम्", "उपाध्यायम्"],
  },
  जलम्: {
    word: "जलम्",
    meaning: "उदकम्, नीरम्, वारि",
    grammaticalInfo: "नपुंसकलिङ्गः, प्रथमा/द्वितीया एकवचनम्",
    synonyms: ["उदकम्", "नीरम्", "वारि"],
  },
  जलं: {
    word: "जलं",
    meaning: "उदकम्, नीरम्, वारि",
    grammaticalInfo: "नपुंसकलिङ्गः, द्वितीया एकवचनम्",
    synonyms: ["उदकम्", "नीरम्", "वारि"],
  },

  // Nouns - Feminine
  गीता: {
    word: "गीता",
    meaning: "गीयते इति गीता, भगवद्गीता",
    grammaticalInfo: "स्त्रीलिङ्गः, प्रथमा एकवचनम्",
    etymology: "गै धातुः + क्त प्रत्ययः",
  },
  सीता: {
    word: "सीता",
    meaning: "रामपत्नी, जनकदुहिता",
    grammaticalInfo: "स्त्रीलिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["जानकी", "वैदेही", "मिथिलेशकुमारी"],
  },
  गङ्गा: {
    word: "गङ्गा",
    meaning: "गङ्गा नदी, पवित्रा नदी",
    grammaticalInfo: "स्त्रीलिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["भागीरथी", "जाह्नवी", "त्रिपथगा"],
  },
  गङ्गायाः: {
    word: "गङ्गायाः",
    meaning: "गङ्गायाः (गङ्गा नद्याः)",
    grammaticalInfo: "स्त्रीलिङ्गः, षष्ठी एकवचनम्",
    synonyms: ["भागीरथ्याः", "जाह्नव्याः"],
  },

  // Verbs
  गच्छति: {
    word: "गच्छति",
    meaning: "गमनं करोति, यात्रां करोति",
    grammaticalInfo: "गम् धातुः, लट्लकारः, प्रथमपुरुषः, एकवचनम्",
    synonyms: ["यात्रां करोति", "प्रस्थानं करोति"],
  },
  आगच्छति: {
    word: "आगच्छति",
    meaning: "आगमनं करोति, आयात्रां करोति",
    grammaticalInfo: "आ + गम् धातुः, लट्लकारः, प्रथमपुरुषः, एकवचनम्",
    synonyms: ["आयात्रां करोति", "समागच्छति"],
  },
  पठति: {
    word: "पठति",
    meaning: "अध्ययनं करोति, पाठं करोति",
    grammaticalInfo: "पठ् धातुः, लट्लकारः, प्रथमपुरुषः, एकवचनम्",
    synonyms: ["अध्ययनं करोति", "स्वाध्यायं करोति"],
  },
  खादति: {
    word: "खादति",
    meaning: "भक्षणं करोति, आहारं गृह्णाति",
    grammaticalInfo: "खाद् धातुः, लट्लकारः, प्रथमपुरुषः, एकवचनम्",
    synonyms: ["भक्षयति", "आहारं करोति"],
  },
  नमति: {
    word: "नमति",
    meaning: "प्रणामं करोति, नमस्कारं करोति",
    grammaticalInfo: "नम् धातुः, लट्लकारः, प्रथमपुरुषः, एकवचनम्",
    synonyms: ["प्रणामं करोति", "नमस्कारं करोति"],
  },
  पिबामि: {
    word: "पिबामि",
    meaning: "पानं करोमि, पीयूषं गृह्णामि",
    grammaticalInfo: "पा धातुः, लट्लकारः, उत्तमपुरुषः, एकवचनम्",
    synonyms: ["पानं करोमि", "आचमामि"],
  },

  // Particles and Conjunctions
  च: {
    word: "च",
    meaning: "अपि, तथा, समुच्चयार्थे",
    grammaticalInfo: "अव्ययम्, समुच्चयबोधकम्",
    synonyms: ["अपि", "तथा", "एवं च"],
  },
  तत्: {
    word: "तत्",
    meaning: "तस्य, तस्मात्, तदा",
    grammaticalInfo: "सर्वनाम, नपुंसकलिङ्गः",
    synonyms: ["तस्य", "तस्मात्"],
  },
  अहम्: {
    word: "अहम्",
    meaning: "मम्, स्वयम्",
    grammaticalInfo: "सर्वनाम, उत्तमपुरुषः, प्रथमा एकवचनम्",
    synonyms: ["मम्", "स्वयम्"],
  },

  // Compound words
  धर्म: {
    word: "धर्म",
    meaning: "न्यायः, कर्तव्यम्, धारणीयगुणः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    etymology: "धृ धातुः + मन् प्रत्ययः",
    synonyms: ["न्यायः", "कर्तव्यम्", "स्वधर्मः"],
  },
  कुरु: {
    word: "कुरु",
    meaning: "प्रसिद्धा राजवंशः, कुरुदेशः",
    grammaticalInfo: "पुंल्लिङ्गः, प्रथमा एकवचनम्",
    synonyms: ["कुरुवंशः", "कुरुदेशः"],
  },
}

export function lookupWord(word: string): DictionaryEntry | null {
  console.log("[v0] Looking up word:", word)

  // Direct lookup
  if (sanskritDictionary[word]) {
    console.log("[v0] Direct match found for:", word)
    return sanskritDictionary[word]
  }

  const variations = [
    word.replace(/ः$/, ""), // Remove visarga
    word.replace(/म्$/, ""), // Remove final म्
    word.replace(/ं$/, ""), // Remove anusvara
    word.replace(/े$/, ""), // Remove final े
    word.replace(/ा$/, ""), // Remove final ा
    word + "ः", // Add visarga
    word + "म्", // Add final म्
    word + "ं", // Add anusvara
    word + "े", // Add final े
    word + "ा", // Add final ा
  ]

  for (const variation of variations) {
    if (sanskritDictionary[variation]) {
      console.log("[v0] Variation match found:", variation, "for word:", word)
      return sanskritDictionary[variation]
    }
  }

  console.log("[v0] No match found for word:", word)
  return null
}

export function searchDictionary(query: string): DictionaryEntry[] {
  const results: DictionaryEntry[] = []
  const lowerQuery = query.toLowerCase()

  for (const entry of Object.values(sanskritDictionary)) {
    if (
      entry.word.includes(query) ||
      entry.meaning.includes(query) ||
      entry.synonyms?.some((synonym) => synonym.includes(query))
    ) {
      results.push(entry)
    }
  }

  return results
}
