import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="w-full py-space-4xl px-gutter-mobile lg:px-gutter-desktop bg-surface">
      <Container className="max-w-xl flex flex-col items-center text-center gap-space-md">
        <span className="font-display-md text-display-md text-secondary-container">404</span>
        <h1 className="font-headline-lg text-headline-lg text-primary">Page Not Found</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Button href="/">Back to Home</Button>
      </Container>
    </section>
  );
}
