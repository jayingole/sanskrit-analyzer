// Enhanced sandhi analysis engine using the training dataset
export interface SandhiRule {
  pattern: string
  examples: Array<{
    original: string
    result: string
    type: string
  }>
  confidence: number
  type: string
}

export interface SandhiAnalysis {
  original: string
  split: string
  type: string
  confidence: number
}

export class SandhiEngine {
  private rules: SandhiRule[] = []
  private initialized = false

  async initialize() {
    if (this.initialized) return

    console.log("[v0] Initializing Sandhi Engine with dataset...")

    try {
      // Fetch and process the sandhi dataset
      const response = await fetch(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/train-twv2JIBskDYrqsqlSKgZzHDaZ95cMO.csv",
      )
      const csvText = await response.text()

      // Parse CSV and extract sandhi patterns
      const lines = csvText.split("\n")
      const sandhiPatterns = new Map()

      for (let i = 1; i < lines.length && i < 1000; i++) {
        // Process first 1000 entries
        if (lines[i].trim()) {
          const values = lines[i].split(",")
          const word = values[0]?.replace(/"/g, "").trim()
          const split = values[1]?.replace(/"/g, "").trim()
          const type = values[2]?.replace(/"/g, "").trim()

          if (word && split && split.includes("+")) {
            const parts = split.split("+")
            if (parts.length === 2) {
              const key = `${parts[0]}+${parts[1]}`

              if (!sandhiPatterns.has(key)) {
                sandhiPatterns.set(key, [])
              }

              sandhiPatterns.get(key).push({
                original: split,
                result: word,
                type: type,
              })
            }
          }
        }
      }

      // Convert to rules
      sandhiPatterns.forEach((examples, pattern) => {
        if (examples.length >= 1) {
          this.rules.push({
            pattern,
            examples: examples.slice(0, 5),
            confidence: examples.length,
            type: examples[0].type,
          })
        }
      })

      console.log(`[v0] Loaded ${this.rules.length} sandhi rules from dataset`)
      this.initialized = true
    } catch (error) {
      console.error("[v0] Error loading sandhi dataset:", error)
      // Fallback to basic rules
      this.loadBasicRules()
      this.initialized = true
    }
  }

  private loadBasicRules() {
    // Basic fallback rules
    this.rules = [
      {
        pattern: "अ+इ",
        examples: [{ original: "अ+इ", result: "ए", type: "vowel" }],
        confidence: 1,
        type: "vowel",
      },
      {
        pattern: "अ+उ",
        examples: [{ original: "अ+उ", result: "ओ", type: "vowel" }],
        confidence: 1,
        type: "vowel",
      },
    ]
  }

  analyzeSentence(sentence: string): SandhiAnalysis[] {
    if (!this.initialized) {
      console.log("[v0] Sandhi engine not initialized")
      return []
    }

    const results: SandhiAnalysis[] = []

    // Try to find sandhi patterns in the sentence
    for (const rule of this.rules) {
      const parts = rule.pattern.split("+")
      if (parts.length === 2) {
        const pattern = parts[0] + parts[1]

        // Look for this pattern in the sentence
        if (sentence.includes(pattern)) {
          results.push({
            original: sentence,
            split: rule.pattern,
            type: rule.type,
            confidence: Math.min(rule.confidence / 10, 1),
          })
        }
      }
    }

    // If no specific patterns found, try basic word splitting
    if (results.length === 0) {
      const words = this.basicWordSplit(sentence)
      if (words.length > 1) {
        results.push({
          original: sentence,
          split: words.join(" + "),
          type: "basic",
          confidence: 0.5,
        })
      }
    }

    return results
  }

  private basicWordSplit(sentence: string): string[] {
    // Basic word splitting logic for Sanskrit
    const words = []
    let currentWord = ""

    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i]

      // Sanskrit word boundaries (simplified)
      if (char === " " || char === "।" || char === "॥") {
        if (currentWord.trim()) {
          words.push(currentWord.trim())
          currentWord = ""
        }
      } else {
        currentWord += char
      }
    }

    if (currentWord.trim()) {
      words.push(currentWord.trim())
    }

    return words
  }
}

// Export singleton instance
export const sandhiEngine = new SandhiEngine()
