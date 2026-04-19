"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Menu",
          id: "#products",
        },
        {
          name: "Our Story",
          id: "#story",
        },
        {
          name: "Order",
          id: "#order",
        },
      ]}
      brandName="The Bakehouse of Tarrytown"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Worth the journey."
      description="A beloved bakery nestled inside Tarrytown’s historic train station — where handcrafted pastries, exceptional coffee, and warm hospitality meet."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarah.travels",
          testimonial: "The best almond croissant I’ve ever had.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/croissant-with-coffee-french-croissant-wooden-board-cup-espresso_114579-58937.jpg",
          imageAlt: "bakery fresh croissant steam coffee",
        },
        {
          name: "Michael K.",
          handle: "@mike.eats",
          testimonial: "I change my train route just to stop here.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-abstract-architecture-with-sky-rail-passing-through-it-sunlight_181624-19455.jpg",
          imageAlt: "bakery fresh croissant steam coffee",
        },
        {
          name: "Elena R.",
          handle: "@elena.cozy",
          testimonial: "The coffee alone is worth the trip.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-recipe-book-still-life-concept_23-2149056054.jpg",
          imageAlt: "bakery fresh croissant steam coffee",
        },
        {
          name: "Thomas B.",
          handle: "@t.bakery.fan",
          testimonial: "An absolute gem in the Hudson Valley.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/iced-coffee-table_1203-2504.jpg",
          imageAlt: "bakery fresh croissant steam coffee",
        },
        {
          name: "Linda W.",
          handle: "@linda.morning",
          testimonial: "Their morning routine is my favorite part of the day.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516878.jpg",
          imageAlt: "bakery fresh croissant steam coffee",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#products",
        },
        {
          text: "Order Ahead",
          href: "#order",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/croissant-with-coffee-french-croissant-wooden-board-cup-espresso_114579-58937.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/croissants-with-chocolate-filling-wooden-board_114579-77531.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/aroma-cup-tea-with-delicious-croissants_114579-37477.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-cup-tea-with-cinnamon-pastry-pink-background_140725-50107.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/croissants-coffee-old-wood-table_1150-12248.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-redhead-woman-sitting-cafe_171337-15663.jpg",
          alt: "Customer 5",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Tarrytown Gazette",
        "Metro Culinary",
        "Hudson Valley Eats",
        "Regional Rail News",
        "Coffee Connoisseur",
        "Bakery Monthly",
        "Train Traveler",
      ]}
      title="A Destination Brand"
      description="Trusted by commuters and culinary explorers alike."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Signature",
          name: "Almond Croissant",
          price: "$6.50",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-recipe-book-still-life-concept_23-2149056054.jpg",
        },
        {
          id: "2",
          brand: "Coffee",
          name: "Iced Mocha",
          price: "$5.75",
          rating: 5,
          reviewCount: "800+",
          imageSrc: "http://img.b2bpic.net/free-photo/iced-coffee-table_1203-2504.jpg",
        },
        {
          id: "3",
          brand: "Savory",
          name: "Empanadas",
          price: "$7.00",
          rating: 4,
          reviewCount: "400+",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-appetizing-street-food_23-2151516878.jpg",
        },
        {
          id: "4",
          brand: "Breakfast",
          name: "Breakfast Sandwich",
          price: "$9.50",
          rating: 5,
          reviewCount: "650",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-sandwich-with-cream_23-2148640179.jpg",
        },
        {
          id: "5",
          brand: "Bakery",
          name: "Sourdough Loaf",
          price: "$8.00",
          rating: 5,
          reviewCount: "900",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-rustic-village-bread-cut-slices-wooden-board_181624-59450.jpg",
        },
        {
          id: "6",
          brand: "Coffee",
          name: "Espresso Latte",
          price: "$5.25",
          rating: 5,
          reviewCount: "1.1k",
          imageSrc: "http://img.b2bpic.net/free-photo/latte-coffee-art-table_1232-3410.jpg",
        },
      ]}
      title="Our Signature Creations"
      description="Artisan pastries baked fresh, every single morning."
    />
  </div>

  <div id="story" data-section="story">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "A bakery built into history",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/colorful-abstract-architecture-with-sky-rail-passing-through-it-sunlight_181624-19455.jpg",
          alt: "Restored train station",
        },
      ]}
      buttons={[
        {
          text: "Read Our History",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="experience" data-section="experience">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "exp-1",
          title: "Crafted Daily",
          author: "Handmade",
          description: "Fresh pastries, baked in-house every morning.",
          tags: [
            "Artisan",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cake-slices-coffee-shop_23-2148027939.jpg",
        },
        {
          id: "exp-2",
          title: "A Place to Pause",
          author: "Waiting Room",
          description: "Work, meet, or wait — comfortably.",
          tags: [
            "Social",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/empty-train-seats-shot-from-floor_181624-2952.jpg",
        },
        {
          id: "exp-3",
          title: "Genuine Hospitality",
          author: "Warm Service",
          description: "Friendly faces and real conversations.",
          tags: [
            "Warmth",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-buys-buns-bakery_1157-24668.jpg",
        },
      ]}
      title="A Place to Pause"
      description="More than a bakery — it’s a daily ritual."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "g1",
          name: "The Croissant",
          role: "Texture",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-texture-cream_23-2149409602.jpg",
        },
        {
          id: "g2",
          name: "Morning Roast",
          role: "Coffee",
          imageSrc: "http://img.b2bpic.net/free-photo/person-pouring-mil-cup-coffee_23-2148623254.jpg",
        },
        {
          id: "g3",
          name: "Station Ambiance",
          role: "Historic",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-teens-subway-station_23-2149241547.jpg",
        },
        {
          id: "g4",
          name: "Train Arrival",
          role: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-train-sunny-day_23-2147770315.jpg",
        },
        {
          id: "g5",
          name: "Bakery Entry",
          role: "Welcoming",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-bakery_23-2150273148.jpg",
        },
        {
          id: "g6",
          name: "Bakery Shelf",
          role: "Selection",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-sweet-slice-cake-glass-cabinet_23-2148027938.jpg",
        },
      ]}
      title="Moments in Time"
      description="See the artistry behind the journey."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Regular",
          company: "Tarrytown Commuter",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-baker-giving-wrapped-bread-customer-bakery_23-2148189127.jpg",
        },
        {
          id: "t2",
          name: "Michael K.",
          role: "Enthusiast",
          company: "Hudson Traveler",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-colleagues-chatting-break-time_23-2149308481.jpg",
        },
        {
          id: "t3",
          name: "Elena R.",
          role: "Foodie",
          company: "Local Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-shot-handsome-young-man-sitting-cafe-front-table-drinking-coffee-wearing_1258-314069.jpg",
        },
        {
          id: "t4",
          name: "David L.",
          role: "Worker",
          company: "Train Station User",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/phone-woman-using-female-cafe_1303-1863.jpg",
        },
        {
          id: "t5",
          name: "Jessica M.",
          role: "Coffee Lover",
          company: "Morning Commuter",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-woman-holding-coffee-cup_53876-111347.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "4.7",
          label: "Avg Rating",
        },
        {
          value: "100%",
          label: "Handcrafted",
        },
        {
          value: "Daily",
          label: "Freshly Baked",
        },
      ]}
      title="Loved by locals & commuters"
      description="What our guests are saying about their journey."
    />
  </div>

  <div id="trust" data-section="trust">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Why are items priced this way?",
          content: "We use premium, locally sourced ingredients and time-honored artisanal techniques that demand patience and precision.",
        },
        {
          id: "q2",
          title: "Are products made fresh?",
          content: "Yes, every item is baked from scratch each morning. We sell out daily to ensure the highest standards.",
        },
        {
          id: "q3",
          title: "Do you offer catering?",
          content: "Absolutely! Elevate your next meeting or event with a selection of our signature pastries.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/condensed-nut-dessert-sprinkled-with-powdered-sugar_140725-6600.jpg"
      mediaAnimation="slide-up"
      title="Quality you can taste"
      description="We take no shortcuts to deliver the perfect pastry experience."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="order" data-section="order">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Order Now"
      title="Skip the line. Keep the magic."
      description="Everything you love, ready for pickup."
      buttons={[
        {
          text: "Order Pickup",
          href: "#",
        },
        {
          text: "Catering",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="The Bakehouse"
      columns={[
        {
          title: "Bakery",
          items: [
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "Order",
              href: "#order",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Our Story",
              href: "#story",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
