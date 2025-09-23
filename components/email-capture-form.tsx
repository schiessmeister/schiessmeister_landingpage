"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface EmailCaptureFormProps {
  showSuccess?: boolean
}

export function EmailCaptureForm({ showSuccess = false }: EmailCaptureFormProps) {
  if (showSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto bg-secondary text-secondary-foreground">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Vielen Dank!</h3>
          <p className="text-sm mb-4">
            Sie wurden erfolgreich zur Voranmeldung hinzugefügt und erhalten in Kürze eine Bestätigungs-E-Mail.
          </p>
          <Button
            onClick={() => (window.location.href = "https://schiessmeister.vercel.app/")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
          >
            Weitere Voranmeldung senden
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <form action="https://formsubmit.co/4b353e0e758acafb684c2aecc4ef405f" method="POST" className="space-y-4">
          {/* FormSubmit configuration fields */}
          <input type="hidden" name="_subject" value="Schiessmeister - Neue Voranmeldung!" />
          <input type="hidden" name="_next" value="https://schiessmeister.vercel.app/?sent" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Vielen Dank für Ihre Voranmeldung bei Schiessmeister!

Wir haben Ihre Registrierung erfolgreich erhalten und Sie stehen nun auf unserer Voranmeldungsliste für die Beta-Version unserer digitalen Wettkampfauswertungs-Software.

Was passiert als nächstes?
• Sie erhalten rechtzeitig vor dem Launch eine E-Mail mit Ihren Zugangsdaten
• Als Beta-Tester haben Sie exklusiven Zugang zu allen neuen Funktionen
• Ihr Feedback hilft uns dabei, die Software noch besser zu machen

Über Schiessmeister:
Unsere Software revolutioniert die Wettkampfauswertung für Schützenvereine - ganz ohne digitales Zielsystem! Von der einfachen Ergebniserfassung bis hin zu Live-Ranglisten und umfangreichen Statistiken bieten wir alles, was Sie für eine professionelle Wettkampforganisation benötigen.

Bei Fragen können Sie uns jederzeit unter marketing-schiessmeister@dknw.me erreichen.

Vielen Dank für Ihr Vertrauen!
Ihr Schiessmeister-Team"
          />

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
              E-Mail-Adresse
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ihre.email@beispiel.de"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="club" className="block text-sm font-medium mb-2 text-left">
              Schießverein (optional)
            </label>
            <Input id="club" name="club" type="text" placeholder="Name Ihres Schießvereins" className="w-full" />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
          >
            Für Voranmeldung registrieren
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
