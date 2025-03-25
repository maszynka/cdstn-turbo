"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { validateTranslations, testTranslation } from "@/lib/i18n/debug-translations"
import { useTranslation } from "@/lib/i18n/use-translation"

export function DebugTranslations() {
  const { t, language } = useTranslation()
  const [testKey, setTestKey] = useState("cv.newCv")
  const [testResults, setTestResults] = useState<Record<string, string> | null>(null)
  const [validationResults, setValidationResults] = useState<Record<string, string[]> | null>(null)
  const [showDebug, setShowDebug] = useState(false)

  const handleTest = () => {
    const results = testTranslation(testKey)
    setTestResults(results)
  }

  const handleValidate = () => {
    const results = validateTranslations()
    setValidationResults(results)
  }

  if (!showDebug) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowDebug(true)}
        className="fixed bottom-4 right-4 opacity-50 hover:opacity-100"
      >
        Debug Translations
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 z-50 shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm">Translation Debugger</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setShowDebug(false)}>
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-xs">
        <div>
          <p>
            Current language: <strong>{language}</strong>
          </p>
          <p>
            Test key: <code>{testKey}</code>
          </p>
          <p>
            Current value: <code>{t(testKey)}</code>
          </p>
        </div>

        <div className="flex gap-2">
          <Input
            value={testKey}
            onChange={(e) => setTestKey(e.target.value)}
            placeholder="Enter translation key"
            size={10}
            className="text-xs h-8"
          />
          <Button size="sm" onClick={handleTest} className="h-8">
            Test
          </Button>
          <Button size="sm" onClick={handleValidate} className="h-8">
            Validate
          </Button>
        </div>

        {testResults && (
          <div className="border p-2 rounded-md bg-muted/50 max-h-40 overflow-auto">
            <h4 className="font-semibold mb-1">Test Results:</h4>
            {Object.entries(testResults).map(([lang, value]) => (
              <div key={lang} className="flex justify-between">
                <span>{lang}:</span>
                <code>{value}</code>
              </div>
            ))}
          </div>
        )}

        {validationResults && Object.keys(validationResults).length > 0 && (
          <div className="border p-2 rounded-md bg-muted/50 max-h-40 overflow-auto">
            <h4 className="font-semibold mb-1">Missing Translations:</h4>
            {Object.entries(validationResults).map(([lang, keys]) => (
              <div key={lang} className="mb-2">
                <p className="font-medium">{lang}:</p>
                <ul className="list-disc pl-4">
                  {keys.slice(0, 5).map((key) => (
                    <li key={key}>{key}</li>
                  ))}
                  {keys.length > 5 && <li>...and {keys.length - 5} more</li>}
                </ul>
              </div>
            ))}
          </div>
        )}

        {validationResults && Object.keys(validationResults).length === 0 && (
          <div className="text-green-600">All translations are complete!</div>
        )}
      </CardContent>
    </Card>
  )
}

