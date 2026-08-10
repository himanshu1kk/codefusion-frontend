import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpenText,
  BrainCircuit,
  ChartNoAxesColumnIncreasing,
  ListFilter,
} from 'lucide-react';
import { memo } from 'react';
import { PublicLayout } from '../components/layout/PublicLayout';
import { Badge } from '../components/ui/Badge';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { legacyRoutes } from '../services/config';
import type { FeatureItem, MetricItem, WorkflowStep } from '../types/navigation';
import { cn } from '../utils/cn';

const metrics: MetricItem[] = [
  { label: 'Rating history, contest by contest', value: 'Track' },
  { label: 'Weak topics surfaced from submissions', value: 'Find' },
  { label: 'Practice sets tuned to your level', value: 'Improve' },
];

const features: FeatureItem[] = [
  {
    title: 'Skill Analysis',
    description: 'See which topics you solve confidently and which ones need focused practice.',
    label: 'Analytics',
    icon: BrainCircuit,
    tone: 'blue',
  },
  {
    title: 'Submission Analytics',
    description:
      'Review verdicts, ratings, languages, and recent activity without digging through raw submissions.',
    label: 'Submissions',
    icon: ChartNoAxesColumnIncreasing,
    tone: 'cyan',
  },
  {
    title: 'Problem Explorer',
    description: 'Filter problems by tag and rating range so every session starts with the right queue.',
    label: 'Practice',
    icon: ListFilter,
    tone: 'green',
  },
  {
    title: 'Problem Journal',
    description: 'Keep short private notes beside each problem so lessons are easy to revisit later.',
    label: 'Notes',
    icon: BookOpenText,
    tone: 'amber',
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Create an account',
    description: 'Sign in once so your handle, notes, and analysis stay connected.',
    badge: 'Auth',
  },
  {
    title: 'Link Codeforces',
    description: 'Verify your handle and let CFF Explorer build a clean profile from your history.',
    badge: 'Verification',
  },
  {
    title: 'Analyze and practice',
    description: 'Use the dashboard to choose the next topic, contest, or problem set with confidence.',
    badge: 'Insights',
  },
];

function HeroPreview() {
  return (
    <Card className="relative overflow-hidden p-4 sm:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(34,211,238,0.1),transparent_42%),radial-gradient(circle_at_85%_18%,rgba(96,165,250,0.14),transparent_32rem)]" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-muted">Dashboard preview</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">tourist</h2>
          </div>
          <Badge tone="violet">Legendary Grandmaster</Badge>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-2.5 sm:gap-3">
          {[
            ['3900', 'Peak rating'],
            ['2.8k', 'Solved'],
            ['91%', 'Accepted'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-md border border-white/[0.08] bg-void/45 p-3">
              <div className="font-display text-lg font-semibold text-ink sm:text-xl">{value}</div>
              <div className="mt-1 text-[0.72rem] leading-4 text-muted">{label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/[0.08] bg-void/35 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Topic strength</p>
            <span className="text-xs text-muted">last 500 solves</span>
          </div>
          <div className="space-y-3.5">
            {[
              ['dp', '86%', 'bg-sky-300'],
              ['graphs', '72%', 'bg-cyan-300'],
              ['geometry', '41%', 'bg-amber-300'],
            ].map(([tag, score, color]) => (
              <div key={tag}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-muted">{tag}</span>
                  <span className="font-semibold text-ink">{score}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className={cn('h-full rounded-full', color)} style={{ width: score }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

const FeatureCard = memo(function FeatureCard({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon;

  return (
    <Card className="group p-5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/25 hover:bg-white/[0.055]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-md border border-white/[0.08] bg-white/[0.035] text-cyan-100">
          <Icon aria-hidden="true" size={20} strokeWidth={2} />
        </span>
        <Badge tone={feature.tone}>{feature.label}</Badge>
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-ink">{feature.title}</h3>
      <p className="text-sm leading-6 text-muted">{feature.description}</p>
    </Card>
  );
});

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pb-24 md:pt-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Badge className="mb-5" tone="cyan">
            For Codeforces practice
          </Badge>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[4rem]">
            Know what to practice next.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            CFF Explorer turns your Codeforces profile into clear signals: rating progress,
            submission patterns, weak tags, practice targets, and notes you can actually use.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={legacyRoutes.register} size="lg">
              Get Started
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink href={legacyRoutes.handle} variant="secondary" size="lg">
              Analyze a Handle
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-muted">
            Built for competitors who want a tighter feedback loop after every contest and practice set.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.55, ease: 'easeOut' }}
        >
          <HeroPreview />
        </motion.div>
      </div>
    </section>
  );
}

function MetricsBand() {
  return (
    <section className="border-y border-white/[0.08] bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-7 sm:grid-cols-3 sm:px-6 lg:px-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="py-2 sm:px-4">
            <div className="font-display text-xl font-semibold text-ink">{metric.value}</div>
            <div className="mt-1 text-sm leading-6 text-muted">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-9 max-w-2xl">
        <Badge tone="blue">Core tools</Badge>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Everything you need to review, decide, and practice.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          The interface keeps the important signals close together without turning your profile into
          another spreadsheet.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section id="how-it-works" className="bg-surface/35">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <Badge tone="green">How it works</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            A simple path from profile data to better practice.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            CFF Explorer keeps setup lightweight, then helps you turn recent results into concrete
            decisions.
          </p>
        </div>
        <div className="grid gap-4">
          {workflowSteps.map((step, index) => (
            <Card key={step.title} className="p-5 sm:p-6">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-cyan-200/25 bg-cyan-300/10 font-display text-sm font-semibold text-cyan-100">
                  {index + 1}
                </span>
                <div>
                  <Badge tone={index === 0 ? 'blue' : index === 1 ? 'amber' : 'green'}>
                    {step.badge}
                  </Badge>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Card className="overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge className="mb-4" tone="cyan">
              Ready when you are
            </Badge>
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink">
              Start with your Codeforces handle.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Create an account, link your profile, and use your own history to decide what deserves
              the next hour of practice.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ButtonLink href={legacyRoutes.login}>Login</ButtonLink>
            <ButtonLink href={legacyRoutes.register} variant="secondary">
              Get Started
            </ButtonLink>
          </div>
        </div>
      </Card>
    </section>
  );
}

export function LandingPage() {
  return (
    <PublicLayout>
      <main>
        <HeroSection />
        <MetricsBand />
        <FeaturesSection />
        <WorkflowSection />
        <CtaSection />
      </main>
    </PublicLayout>
  );
}
