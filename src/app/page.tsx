"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Layers, Linkedin, Twitter } from "lucide-react"
import { subscribeToWaitlist } from "./actions/subscribe"
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
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StreamLine</span>
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
                    Streamline Your Workflow, Amplify Your Productivity
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one platform that helps teams collaborate, automate, and deliver faster results with less
                    effort. Launching on {launchDate.toLocaleDateString()}.
                  </p>
                </div>

                <WaitlistForm />
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Product Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="w-full py-12 md:py-16 bg-muted">
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
        </section>

        {/* What to Expect Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What to Expect</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  We're working hard to bring you a platform that will transform how your team works.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Seamless Collaboration</h3>
                  <p className="text-center text-muted-foreground">
                    Work together in real-time with your team, no matter where they are.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Smart Automation</h3>
                  <p className="text-center text-muted-foreground">
                    Automate repetitive tasks and focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Powerful Insights</h3>
                  <p className="text-center text-muted-foreground">
                    Get the data you need to make informed decisions quickly.
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
              <Layers className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    const result = await subscribeToWaitlist(email)
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError(result.error || "An error occurred. Please try again.")
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
          />
          <Button type="submit">Notify Me</Button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <p className="text-xs text-muted-foreground">We'll never share your email with anyone else.</p>
      </form>
    </div>
  )
}

