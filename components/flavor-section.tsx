'use client';

import { FlavorCarousel } from '@/components/flavor-carousel';
import { productFlavors } from '@/data';
import { SectionHeader } from '@/components/ui';

export default function FlavorSection() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    eyebrow="Complete Flavor Range"
                    title="Our Product Lineup"
                    description="Explore all flavors available across our whey protein, mass gainer, and pre-workout product lines"
                    className="mb-12 md:mb-16"
                />

                <FlavorCarousel items={productFlavors} />
            </div>
        </section>
    );
}
