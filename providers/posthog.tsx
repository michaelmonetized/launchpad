"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, useState } from "react";

let posthogInitialized = false;

export default function PostHogProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const key = process.env.NEXT_PUBLIC_POSTHOG_API_KEY;

  useEffect(() => {
    if (!key || typeof window === "undefined") return;
    if (!posthogInitialized) {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
        person_profiles: "always",
      });
      posthogInitialized = true;
    }
    setReady(true);
  }, [key]);

  if (!key || !ready) {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
