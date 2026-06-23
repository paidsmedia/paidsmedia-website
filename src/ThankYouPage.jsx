import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, Calendar, Mail, MessageSquare } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#0f2a44_0%,#07111f_35%,#000000_100%)] text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-12 text-center">
        
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10">
          <CheckCircle2 className="h-12 w-12 text-emerald-400" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Audit Request Received
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Thank You. Your Audit Request Has Been Submitted.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
          I’ve received your request and will review your website, Google Ads setup,
          tracking, landing pages, and wasted spend opportunities. You should hear
          back within 24 hours.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3 text-left">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Mail className="mb-4 h-6 w-6 text-cyan-300" />
            <h3 className="text-xl font-black">Check Your Inbox</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              I may send a quick follow-up if I need account access details or
              clarification before preparing your audit.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Calendar className="mb-4 h-6 w-6 text-cyan-300" />
            <h3 className="text-xl font-black">Audit Review</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              I’ll review ad structure, tracking, landing pages, and conversion
              bottlenecks to identify the biggest growth opportunities.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <MessageSquare className="mb-4 h-6 w-6 text-cyan-300" />
            <h3 className="text-xl font-black">Next Steps</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              You’ll get action points, improvement opportunities, and recommended
              next steps based on your business goals and current setup.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>

          <a
            href="mailto:sumon@paidsmedia.com"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Contact PaidsMedia
          </a>
        </div>
      </div>
    </div>
  )
}
