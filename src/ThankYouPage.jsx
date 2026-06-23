import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, Calendar, Mail, MessageSquare } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/30">
          <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Audit Request Received
        </p>

        <h1 className="text-4xl md:text-5xl font-black leading-tight">
          Thank You. Your Audit Request Has Been Submitted.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/75 leading-8">
          I’ve received your request and will review your website, Google Ads setup, tracking,
          landing pages, and wasted spend opportunities. You should hear back within 24 hours.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3 text-left">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Mail className="mb-3 h-5 w-5 text-cyan-300" />
            <h3 className="font-bold">Check Your Inbox</h3>
            <p className="mt-2 text-sm text-white/65">
              I may send a quick follow-up if I need account access details or clarification.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <Calendar className="mb-3 h-5 w-5 text-cyan-300" />
            <h3 className="font-bold">Audit Review</h3>
            <p className="mt-2 text-sm text-white/65">
              I’ll review ad structure, tracking, landing pages, and conversion bottlenecks.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <MessageSquare className="mb-3 h-5 w-5 text-cyan-300" />
            <h3 className="font-bold">Next Steps</h3>
            <p className="mt-2 text-sm text-white/65">
              You’ll get action points, improvement opportunities, and recommended next steps.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>

          <a
            href="mailto:sumon@paidsmedia.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
          >
            Contact PaidsMedia
          </a>
        </div>
      </div>
    </div>
  )
}

