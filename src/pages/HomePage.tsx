import React, { useEffect } from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { BestSellers } from '../components/BestSellers';
import { CollectionsGrid } from '../components/CollectionsGrid';
import { ParallaxSection } from '../components/ParallaxSection';
import { WorldDelivery } from '../components/WorldDelivery';
import { OurStory } from '../components/OurStory';
import { SocialGrid } from '../components/SocialGrid';
import { VideoHero } from '../components/VideoHero';
import { BlogSlider } from '../components/BlogSlider';

export const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionOut = document.getElementById('minimizeout');
      if (sectionOut && window.innerWidth > 749) {
        const rect = sectionOut.getBoundingClientRect();
        const sectionHeight = rect.height;
        const topThreshold = sectionHeight * 0.3;
        const scrolledPast = -rect.top;

        if (scrolledPast <= 0) {
          sectionOut.style.width = '100%';
        } else if (scrolledPast >= topThreshold) {
          sectionOut.style.width = '80%';
        } else {
          const percentage = 100 - (scrolledPast / topThreshold) * 20;
          sectionOut.style.width = `${percentage}%`;
        }
      } else if (sectionOut) {
        sectionOut.style.width = '100%';
      }

      const sectionIn = document.getElementById('world-delivery-section');
      if (sectionIn && window.innerWidth > 749) {
        const rect = sectionIn.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = rect.height;
        const visibleAmount = viewportHeight - rect.top;
        const startThreshold = sectionHeight * 0.3;
        const endThreshold = sectionHeight * 0.6;

        let targetWidth;
        if (visibleAmount <= startThreshold) {
          targetWidth = 80;
        } else if (visibleAmount >= endThreshold) {
          targetWidth = 100;
        } else {
          const progress = (visibleAmount - startThreshold) / (endThreshold - startThreshold);
          targetWidth = 80 + (progress * 20);
        }
        sectionIn.style.width = `${targetWidth}%`;
      } else if (sectionIn) {
        sectionIn.style.width = '100%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <HeroSlider />
      <BestSellers />
      <CollectionsGrid />
      <ParallaxSection image="/img/banners/parallax-temple.jpg" />
      <WorldDelivery />
      <OurStory />
      <SocialGrid />
      <VideoHero />
      <BlogSlider />
      <ParallaxSection image="/img/banners/parallax-yagna.jpg" />
    </main>
  );
};

