import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stack = [
  "Next.js 15",
  "React 19",
  "Tailwind + shadcn",
  "Clerk",
  "Convex",
  "PostHog",
  "Stripe",
  "Resend",
  "Sentry",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">LaunchPad</span>
          <Link
            href="https://www.hustlelaunch.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Hustle Launch
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Hustle Launch starter
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          LaunchPad is the starter kit. Not a live product.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          This is the public Hustle Launch boilerplate: Next, shadcn, Clerk,
          Convex, PostHog, Stripe, Resend, Sentry. Providers are mounted in
          the root layout. Keys are not configured. There is no client
          dashboard, no billing portal, and no <code>/pro</code> page.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="https://www.hustlelaunch.com">Hustle Launch</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/michaelmonetized/launchpad">
              GitHub
            </Link>
          </Button>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>What is true</CardTitle>
              <CardDescription>The repo as it actually ships.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Host: launchpad.hustlelaunch.com</p>
              <p>
                Clerk, Convex, and PostHog wrappers render children when env
                vars are missing, so this landing can 200 without invented
                keys.
              </p>
              <p>
                Resend lives at <code>/api/send</code>. Stripe is a dependency
                plus a sanity note, not a checkout.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What is not true</CardTitle>
              <CardDescription>Do not sell this as finished.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Not a client portal. PLAN.md still lists that work as unstarted.</p>
              <p>Not a premier framework. It is a starter with providers wired.</p>
              <p>create-next-app chrome is gone. This page is the honest landing.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold">Stack in package.json</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
