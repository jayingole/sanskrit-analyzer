"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Search, Sparkles, AlertCircle, Lightbulb } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AnalysisResults } from "@/components/analysis-results"

interface AnalysisResult {
  sandhiVigraha: string[]
  samasaVigraha: string
  padartha: { word: string; meaning: string }[]
  vakyartha: string
}

const exampleTexts = ["रामो वनं गच्छति", "धर्मक्षेत्रे कुरुक्षेत्रे", "गुरुर्ब्रह्मा गुरुर्विष्णुः", "सत्यं शिवं सुन्दरम्"]

export default function SanskritAnalyzer() {
  const [inputText, setInputText] = useState("")
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const analyzeText = async () => {
    if (!inputText.trim()) return

    setIsAnalyzing(true)
    setError(null)

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText.trim() }),
      })

      if (!response.ok) {
        throw new Error("Analysis failed")
      }

      const result = await response.json()
      setAnalysis(result)
    } catch (err) {
      setError("विश्लेषणे त्रुटिः आसीत् (Analysis error occurred)")
      console.error("Analysis error:", err)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const clearAnalysis = () => {
    setInputText("")
    setAnalysis(null)
    setError(null)
  }

  const loadExample = (example: string) => {
    setInputText(example)
    setAnalysis(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">संस्कृतश्लोकविश्लेषणम्</h1>
              <p className="text-muted-foreground">Sanskrit Sloka Analyzer System</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              श्लोक निवेशः (Sloka Input)
            </CardTitle>
            <CardDescription>
              Enter Sanskrit text in Devanāgarī script for comprehensive linguistic analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="रामो वनं गच्छति"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] text-lg font-mono resize-none"
              style={{ fontFamily: "Noto Sans Devanagari, serif" }}
            />

            {/* Example texts */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Try these examples:
              </p>
              <div className="flex flex-wrap gap-2">
                {exampleTexts.map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => loadExample(example)}
                    className="text-sm"
                    style={{ fontFamily: "Noto Sans Devanagari, serif" }}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={analyzeText}
                disabled={!inputText.trim() || isAnalyzing}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {isAnalyzing ? "विश्लेषणं चलति..." : "विश्लेषणं करोतु"}
              </Button>
              <Button variant="outline" onClick={clearAnalysis}>
                Clear
              </Button>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Analysis Results */}
        {analysis && <AnalysisResults analysis={analysis} inputText={inputText} />}

        {/* Instructions */}
        {!analysis && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Analysis Components:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>Sandhi-vigraha:</strong> Separates compound words by reversing sandhi rules
                    </li>
                    <li>
                      <strong>Samāsa-vigraha:</strong> Analyzes compound word formations
                    </li>
                    <li>
                      <strong>Padārtha:</strong> Provides Sanskrit meanings for each word
                    </li>
                    <li>
                      <strong>Vākyārtha:</strong> Gives complete sentence explanation in Sanskrit
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Real-time Sanskrit text analysis</li>
                    <li>• Comprehensive dictionary lookup</li>
                    <li>• Compound word identification</li>
                    <li>• Grammatical structure analysis</li>
                    <li>• Example texts for quick testing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
