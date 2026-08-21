import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { AboutTeaser } from "@/components/AboutTeaser";
import { BrandValuesTeaser } from "@/components/BrandValuesTeaser";
import { SolutionCards } from "@/components/SolutionCards";
import { Bestsellers } from "@/components/Bestsellers";
import { CertStrip, PartnerLogos } from "@/components/CertPartner";
import { BlogGrid } from "@/components/BlogGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <AboutTeaser />
      <BrandValuesTeaser />
      <SolutionCards />
      <Bestsellers />
      <CertStrip />
      <PartnerLogos />
      <BlogGrid />
    </>
  );
}
