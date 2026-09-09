import ClerkProviderWrapper from "@/providers/clerk";
import ConvexClientProvider from "@/providers/convex";
import PostHogProviderWrapper from "@/providers/posthog";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProviderWrapper>
      <ConvexClientProvider>
        <PostHogProviderWrapper>{children}</PostHogProviderWrapper>
      </ConvexClientProvider>
    </ClerkProviderWrapper>
  );
}
