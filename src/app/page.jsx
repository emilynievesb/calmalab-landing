// app/page.js
import Navbar from './Navbar';
import Header from './Header';
import WhyCalmalab from './WhyCalmalab';
import WhatWeOffer from './WhatWeOffer';
import Beneficios from './Beneficios';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import PricingPlans from './PricingPlans';
import SupportSection from './Support';
import ProposalSection from './ProposalSection';
import MissionVisionSection from './MissionVision';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Header />
            <ProposalSection />
            <MissionVisionSection />
            <WhyCalmalab />
            <WhatWeOffer />
            <Beneficios />
            <HowItWorks />
            <Testimonials />
            <PricingPlans />
            <SupportSection />
        </main>
    );
}
