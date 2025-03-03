"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CircleChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ComingSoonPage() {
  // Calculate launch date - 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <CircleChevronUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">The Tuny</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
                Coming Soon
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Bringing authenticity and human connections to Marketing. 
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Amplify people, improve trust with customers
                </p>
              </div>

              <WaitlistForm />
              </div>
              <Image
              src="/hero_bkgnd.jpg"
              width={550}
              height={550}
              alt="Product Preview"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        {/* <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Launching In</h2>
              <div className="grid grid-cols-4 gap-4 md:gap-8 text-center max-w-md">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-3xl font-bold shadow-sm">
                    30
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-3xl font-bold shadow-sm">
                    00
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-3xl font-bold shadow-sm">
                    00
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-background text-3xl font-bold shadow-sm">
                    00
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* What to Expect Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What to Expect</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our Guiding Principles Intentional. Sign up to join our community and be notified when we launch.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Market freely with authenticity</h3>
                  <p className="text-center text-muted-foreground">
                    Reach your audience with a human touch.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Smart Automation</h3>
                  <p className="text-center text-muted-foreground">
                    Rely on us to automate behind the scenes. Focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Powerful Insights</h3>
                  <p className="text-center text-muted-foreground">
                    See how your audience is engaging. Make data-driven decisions -- fast. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <CircleChevronUp className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">The Tuny</span>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} The Tuny. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Airtable configuration - replace with your actual values
  const AIRTABLE_API_KEY = "pat8KQZU2sXf3ZeSk.9cffba1d0400358c6b396ea30d6690e65774e1656fe8f55ecb887b4524c7994c"
  const AIRTABLE_BASE_ID = "appb6TpGEyY9wqUEa"
  const AIRTABLE_TABLE_NAME = "AD"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      setIsSubmitting(false)
      return
    }

    try {
      // Direct Airtable API call
      const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
          },
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Airtable error:", data)
        setError("Failed to submit. Please try again.")
      }
    } catch (err) {
      console.error("Error submitting to Airtable:", err)
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mt-6 max-w-md">
        <p className="text-green-600 font-medium">Thank you! We will notify you when it is available.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 max-w-md space-y-2">
      <p className="text-sm text-muted-foreground">Sign up to get notified when we launch:</p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "border-red-500" : ""}
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <p className="text-xs text-muted-foreground">We will never share your email with anyone else.</p>
      </form>
    </div>
  )
}

