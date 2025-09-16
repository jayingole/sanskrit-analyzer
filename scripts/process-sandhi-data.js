// Script to fetch and process the sandhi training dataset
const DATASET_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/train-twv2JIBskDYrqsqlSKgZzHDaZ95cMO.csv"

async function processSandhiData() {
  console.log("[v0] Fetching sandhi dataset...")

  try {
    const response = await fetch(DATASET_URL)
    const csvText = await response.text()

    console.log("[v0] Dataset fetched, processing CSV...")

    // Parse CSV
    const lines = csvText.split("\n")
    const headers = lines[0].split(",")
    const data = []

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(",")
        const entry = {
          word: values[0]?.replace(/"/g, "").trim(),
          split: values[1]?.replace(/"/g, "").trim(),
          type: values[2]?.replace(/"/g, "").trim(),
        }

        if (entry.word && entry.split) {
          data.push(entry)
        }
      }
    }

    console.log(`[v0] Processed ${data.length} sandhi entries`)

    // Analyze the data structure
    const typeDistribution = {}
    const sandhiPatterns = new Map()

    data.forEach((entry) => {
      // Count types
      typeDistribution[entry.type] = (typeDistribution[entry.type] || 0) + 1

      // Extract sandhi patterns
      if (entry.split.includes("+")) {
        const parts = entry.split.split("+")
        if (parts.length === 2) {
          const pattern = `${parts[0].slice(-1)}+${parts[1].charAt(0)}`
          const result = entry.word

          if (!sandhiPatterns.has(pattern)) {
            sandhiPatterns.set(pattern, [])
          }
          sandhiPatterns.get(pattern).push({
            original: entry.split,
            result: result,
            type: entry.type,
          })
        }
      }
    })

    console.log("[v0] Type distribution:", typeDistribution)
    console.log(`[v0] Found ${sandhiPatterns.size} unique sandhi patterns`)

    // Generate sandhi rules from the dataset
    const sandhiRules = []
    sandhiPatterns.forEach((examples, pattern) => {
      if (examples.length >= 2) {
        // Only include patterns with multiple examples
        const mostCommon = examples.reduce((acc, curr) => {
          const key = curr.result
          acc[key] = (acc[key] || 0) + 1
          return acc
        }, {})

        const bestResult = Object.keys(mostCommon).reduce((a, b) => (mostCommon[a] > mostCommon[b] ? a : b))

        sandhiRules.push({
          pattern: pattern,
          examples: examples.slice(0, 3), // Keep first 3 examples
          confidence: examples.length,
          type: examples[0].type,
        })
      }
    })

    console.log(`[v0] Generated ${sandhiRules.length} sandhi rules`)

    return {
      totalEntries: data.length,
      typeDistribution,
      sandhiRules: sandhiRules.slice(0, 50), // Top 50 rules
      sampleData: data.slice(0, 10),
    }
  } catch (error) {
    console.error("[v0] Error processing sandhi data:", error)
    return null
  }
}

// Execute the processing
processSandhiData().then((result) => {
  if (result) {
    console.log("[v0] Sandhi data processing complete!")
    console.log("[v0] Sample entries:", result.sampleData)
  }
})
