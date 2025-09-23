"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"
import { EmailCaptureForm } from "@/components/email-capture-form"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"

// Feature icons as simple SVGs
const EditIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
)

const ImportIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    />
  </svg>
)

const ExportIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

const TemplateIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const ScheduleIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const StatsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const LiveIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const PhotoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const MotivationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

function HomePageContent() {
  const searchParams = useSearchParams()
  const showSuccess = searchParams.get("sent") === ""

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[#1e5631] text-white">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex items-center justify-center">
            <Image
              src="/images/schiessmeister-logo.png"
              alt="Schiessmeister Logo"
              width={700}
              height={210}
              className="h-32 md:h-48 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1e5631] text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-balance">Digitale Wettkampfauswertung</h1>
          <p className="text-lg md:text-xl mb-2 md:mb-3 text-white/90 text-balance">
            Die smarte Lösung für Schützenvereine und ihre statischen Bewerbe.
          </p>
          <p className="text-base mb-6 md:mb-8 text-white/80 text-balance">Und das ganz ohne digitales Zielsystem!</p>

          <div className="max-w-md mx-auto">
            <EmailCaptureForm showSuccess={showSuccess} />
          </div>
        </div>
      </section>

      {/* Why Our Solution Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-balance">Warum unsere Lösung?</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Unsere Software spart Ihnen Zeit, reduziert Fehler und bringt Ihre Wettbewerbsorganisation auf das nächste
              Level.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <FeatureCard
              title="Einfache Eingabe"
              description="Manuelle Ergebniserfassung leicht gemacht."
              icon={<EditIcon />}
            />
            <FeatureCard
              title="Einfacher Schützenimport"
              description="Angemeldete Schützen schnell von anderen Plattformen importieren."
              icon={<ImportIcon />}
            />
            <FeatureCard
              title="Exportmöglichkeiten"
              description="Ergebnisse als PDF oder Excel-Datei exportieren."
              icon={<ExportIcon />}
            />
            <FeatureCard
              title="Vorlagen für effizientes Arbeiten"
              description="Vollumfängliche Vorlagen für die wichtigsten Bewerbe."
              icon={<TemplateIcon />}
            />
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-balance">Viele Sonderfunktionen!</h3>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Unsere Software bietet im Vergleich zur Konkurrenz eine große Auswahl an weiteren Funktionen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard
              title="Zeitplan importieren"
              description="Der Schreiber sieht alle kommenden Schützen dank einfachem Import."
              icon={<ScheduleIcon />}
            />
            <FeatureCard
              title="Umfangreiche Statistiken"
              description="Hilfreiche filterbare Statistiken für Ihre Schützen."
              icon={<StatsIcon />}
            />
            <FeatureCard
              title="Live Rangliste"
              description="Spannung ankurbeln mit einer Live-Rangierung."
              icon={<LiveIcon />}
            />
            <FeatureCard
              title="Zielschreiben Foto"
              description="Nie wieder Zielscheiben suchen, einfach digital ablegen."
              icon={<PhotoIcon />}
            />
            <FeatureCard
              title="Schützen Motivation"
              description="Dank digitalem Waffenschrank, Trainings, Statistiken und BH-Export."
              icon={<MotivationIcon />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">Was unsere Nutzer sagen</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto text-pretty">
              Erfahren Sie, wie andere Schützenvereine von unserer Software profitieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Endlich eine Software, die speziell für unsere Bedürfnisse entwickelt wurde. Die Zeitersparnis ist enorm!"
              author="Hans Müller"
              club="SV Alpenblick München"
            />
            <TestimonialCard
              quote="Die Live-Rangliste sorgt für zusätzliche Spannung bei unseren Wettkämpfen. Unsere Schützen sind begeistert."
              author="Maria Schmidt"
              club="Schützenverein Edelweiß"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="voranmeldung" className="py-12 bg-[#1e5631] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Bereit für die Zukunft der Wettkampfauswertung?
          </h2>
          <p className="text-base mb-6 text-white/90 max-w-2xl mx-auto text-pretty">
            Registrieren Sie sich jetzt für unsere Voranmeldung und erhalten Sie exklusiven Zugang zur Beta-Version.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCaptureForm showSuccess={showSuccess} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Schiessmeister. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-1">marketing-schiessmeister@dknw.me</p>
        </div>
      </footer>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  )
}
