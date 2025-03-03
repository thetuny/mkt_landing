"use server"

import Airtable from "airtable"

// Initialize Airtable
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN! })
const base = airtable.base(process.env.AIRTABLE_BASE!)

// Log the base ID and API key to ensure they are correct
console.log("Airtable Base ID:", process.env.AIRTABLE_BASE)
console.log("Airtable API Key:", process.env.AIRTABLE_TOKEN)


export async function subscribeToWaitlist(email: string) {
  try {
    console.log("Adding to waitlist:", email)
    await base("AllData").create([
      {
        fields: {
          Email: email,
        },
      },
    ])
    return { success: true }
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return { success: false, error: "Failed to add to waitlist. Please try again." }
  }
}

