import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Layers, MessageSquare, Settings } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GrammaticalInfo {
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

interface SentenceStructure {
  subject?: string
  object?: string
  verb?: string
  predicate?: string
  modifiers: string[]
  structure: string
}

interface AnalysisResult {
  sandhiVigraha: string[]
  samasaVigraha: string
  padartha: { word: string; meaning: string }[]
  vakyartha: string
  grammaticalAnalysis?: {
    wordAnalysis: (GrammaticalInfo | null)[]
    sentenceStructure: SentenceStructure
    grammaticalNotes: string[]
  }
}

interface AnalysisResultsProps {
  analysis: AnalysisResult
  inputText: string
}

export function AnalysisResults({ analysis, inputText }: AnalysisResultsProps) {
  return (
    <div className="space-y-6">
      {/* Original Text Display */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <BookOpen className="w-5 h-5" />
            मूलपाठः (Original Text)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-2xl leading-relaxed text-center" style={{ fontFamily: "Noto Sans Devanagari, serif" }}>
              {inputText}
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic Analysis</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Grammar</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-1">
            {/* Sandhi Vigraha */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Layers className="w-5 h-5" />
                  सन्धि-विग्रहः
                </CardTitle>
                <CardDescription>Word separation by reversing sandhi rules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {analysis.sandhiVigraha.map((word, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-base px-3 py-1.5">
                          {word}
                        </Badge>
                        {index < analysis.sandhiVigraha.length - 1 && <span className="text-muted-foreground">+</span>}
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <p className="text-sm text-muted-foreground">
                    Total words identified: {analysis.sandhiVigraha.length}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Padartha - Full Width */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BookOpen className="w-5 h-5" />
                पदार्थः
              </CardTitle>
              <CardDescription>Individual word meanings in Sanskrit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {analysis.padartha.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col space-y-2 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-base px-3 py-1 font-semibold">
                          {item.word}
                        </Badge>
                        <span className="text-muted-foreground">→</span>
                      </div>
                      <div className="pl-2">
                        <p className="text-base leading-relaxed" style={{ fontFamily: "Noto Sans Devanagari, serif" }}>
                          {item.meaning}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vakyartha - Full Width */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageSquare className="w-5 h-5" />
                वाक्यार्थः
              </CardTitle>
              <CardDescription>Complete sentence meaning and interpretation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-muted/30 to-accent/5 rounded-lg p-6">
                <p
                  className="text-xl leading-relaxed text-center"
                  style={{ fontFamily: "Noto Sans Devanagari, serif" }}
                >
                  {analysis.vakyartha}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  This interpretation combines the individual word meanings into a coherent Sanskrit explanation
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          {analysis.grammaticalAnalysis && (
            <>
              {/* Grammatical Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Settings className="w-5 h-5" />
                    व्याकरणविश्लेषणम् (Grammatical Analysis)
                  </CardTitle>
                  <CardDescription>Detailed morphological and syntactic analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Word-by-word grammatical analysis */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">पदविश्लेषणम् (Word Analysis):</h4>
                      <div className="grid gap-4">
                        {analysis.grammaticalAnalysis.wordAnalysis.map((info, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="outline" className="text-base px-3 py-1">
                                {analysis.sandhiVigraha[index]}
                              </Badge>
                              {info && (
                                <Badge variant="secondary" className="text-sm">
                                  {info.partOfSpeech}
                                </Badge>
                              )}
                            </div>
                            {info && (
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                                {info.lemma && (
                                  <div>
                                    <strong>मूलरूप:</strong> {info.lemma}
                                  </div>
                                )}
                                {info.case && (
                                  <div>
                                    <strong>विभक्ति:</strong> {info.case}
                                  </div>
                                )}
                                {info.number && (
                                  <div>
                                    <strong>वचन:</strong> {info.number}
                                  </div>
                                )}
                                {info.gender && (
                                  <div>
                                    <strong>लिङ्ग:</strong> {info.gender}
                                  </div>
                                )}
                                {info.person && (
                                  <div>
                                    <strong>पुरुष:</strong> {info.person}
                                  </div>
                                )}
                                {info.tense && (
                                  <div>
                                    <strong>काल:</strong> {info.tense}
                                  </div>
                                )}
                                {info.root && (
                                  <div>
                                    <strong>धातु:</strong> {info.root}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Sentence structure */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">वाक्यसंरचना (Sentence Structure):</h4>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <div className="grid gap-2 text-sm">
                          <div>
                            <strong>संरचना:</strong> {analysis.grammaticalAnalysis.sentenceStructure.structure}
                          </div>
                          {analysis.grammaticalAnalysis.sentenceStructure.subject && (
                            <div>
                              <strong>कर्ता:</strong> {analysis.grammaticalAnalysis.sentenceStructure.subject}
                            </div>
                          )}
                          {analysis.grammaticalAnalysis.sentenceStructure.object && (
                            <div>
                              <strong>कर्म:</strong> {analysis.grammaticalAnalysis.sentenceStructure.object}
                            </div>
                          )}
                          {analysis.grammaticalAnalysis.sentenceStructure.verb && (
                            <div>
                              <strong>क्रिया:</strong> {analysis.grammaticalAnalysis.sentenceStructure.verb}
                            </div>
                          )}
                          {analysis.grammaticalAnalysis.sentenceStructure.predicate && (
                            <div>
                              <strong>विधेय:</strong> {analysis.grammaticalAnalysis.sentenceStructure.predicate}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Grammatical notes */}
                    {analysis.grammaticalAnalysis.grammaticalNotes.length > 0 && (
                      <>
                        <Separator />
                        <div className="space-y-2">
                          <h4 className="font-semibold">व्याकरणटिप्पणी (Grammatical Notes):</h4>
                          <ul className="space-y-1 text-sm">
                            {analysis.grammaticalAnalysis.grammaticalNotes.map((note, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
