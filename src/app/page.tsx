import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { SocialProof } from "@/components/social-proof";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { WhyUs } from "@/components/why-us";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { MobileCtaBar } from "@/components/ui/mobile-cta-bar";

const WA_LINK = "https://wa.me/+573156467691";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent-green)] focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-semibold focus:text-[var(--bg-page)]"
      >
        Saltar al contenido
      </a>
      <Header waLink={WA_LINK} />
      <main id="main-content" className="flex min-h-screen flex-col">
        <Hero waLink={WA_LINK} />
        <Problem waLink={WA_LINK} />
        <Solution />
        <HowItWorks waLink={WA_LINK} />
        <WhyUs waLink={WA_LINK} />
        <SocialProof />
        <Pricing waLink={WA_LINK} />
        <Faq />
        <FinalCta waLink={WA_LINK} />
      </main>
      <Footer waLink={WA_LINK} />
      <MobileCtaBar waLink={WA_LINK} />
    </>
  );
}
