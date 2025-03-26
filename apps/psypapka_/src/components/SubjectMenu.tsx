import type { Subject } from "../data/types"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SubjectMenuProps {
  subjects: Subject[]
  onSelectSubject: (subject: Subject) => void
}

export default function SubjectMenu({ subjects, onSelectSubject }: SubjectMenuProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Wybierz przedmiot</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Card key={subject.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{subject.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => onSelectSubject(subject)} className="w-full">
                Zobacz quiz
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

