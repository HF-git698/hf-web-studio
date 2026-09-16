import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Arrow, RestaurantPreview, ServiceCard } from "@/components/site-ui";
import { QuoteForm } from "@/components/quote-form";

const services = [
  { title: "Website design & redesign", icon: "screen", description: "A thoughtful, mobile-first website that feels like your business and makes the next step clear." },
  { title: "Local SEO foundations", icon: "search", description: "Clear page structure, location-focused content, and search essentials to help people discover you." },
  { title: "Booking & ordering", icon: "calendar", description: "Connect the tools you already use so customers can book, order, or get in touch with less effort." },
  { title: "Website care", icon: "care", description: "Keep your site current with content updates, routine checks, and support as your business grows." },
];
const faqs = [
  ["How much will my website cost?", "Every quote is based on the pages, content, and features your business needs. After we discuss your project, you’ll receive a clear scope and price before work begins. Hosting, domains, and third-party subscriptions are identified separately."],
  ["How long does a project take?", "Timing depends on the scope and how ready your content is. We’ll agree on a realistic schedule in your proposal, including time for your feedback, revisions, and launch checks."],
  ["Can you redesign my existing website?", "Yes. We can review what is working, identify what needs improvement, and plan a redesign around your business goals. We’ll discuss existing content, URLs, and any integrations before starting."],
  ["Will my website work on mobile?", "Yes. Responsive layouts and easy-to-use navigation are part of every project. We check the main pages and customer journeys on both desktop and smaller screens."],
  ["Can I keep my domain and booking tools?", "Usually, yes. We’ll review your current domain, hosting, and tools together and explain any compatibility limits or additional subscription costs before you commit."],
  ["Do you offer support after launch?", "Website care can be included as an optional ongoing service. The proposal will explain what is covered, how requests work, and any recurring costs."],
];

export default function Home() {
  return <><Link className="skip-link" href="#main">Skip to content</Link><Navbar/><main id="main">
    <HeroSection badge={{ text: "BUILT FOR LOCAL. DESIGNED TO GROW.", action: { text: "Our approach", href: "#about" } }} title={<>Your business.<br/>Your neighborhood.<br/><span>A better website.</span></>} description="Modern websites built for local businesses. Get found, build trust, and turn more visitors into your next customers." actions={[{ text: "Get a Free Quote", href: "#contact", icon: <Arrow/> }, { text: "Explore Our Work", href: "#work", variant: "outline", icon: <span aria-hidden="true">↓</span> }]}>
      <div className="visual-orbit" aria-hidden="true"/><div className="visual-label"><span>YOUR NEXT CHAPTER, ONLINE.</span><span>↙</span></div>
      <div className="hero-browser"><RestaurantPreview/></div>
      <div className="floating-label"><span className="check-circle">✓</span><div>Looks good. Works harder.<small>Built around your customers.</small></div></div>
      <span className="mockup-caption">A glimpse of what we can build · Restaurant concept</span>
    </HeroSection>


    <section id="work" className="work-section"><div className="section-shell section-space"><div className="section-heading"><div><p className="eyebrow">01 / A LITTLE OF WHAT’S POSSIBLE</p><h2>Small business.<br/><span className="serif">Standout presence.</span></h2></div><p>Explore our restaurant demo and design concepts.<br/>Your brand comes next.</p></div><div className="featured-work golden-dragon-work"><Link className="golden-dragon-work-preview" href="/demos/golden-dragon" aria-label="Open the Golden Dragon restaurant demo"><div className="browser-bar"><span className="browser-dots">● ● ●</span><span>GOLDEN DRAGON — RESTAURANT DEMO</span><span>↗</span></div><div className="golden-dragon-work-cover"><span className="golden-dragon-work-seal">龍</span><span className="eyebrow">CHINESE CUISINE · RESTAURANT DEMO</span><h3>A little tradition.<br/><em>A lot of flavor.</em></h3><p>Chinese comfort food.<br/>Made with heart.</p><span className="golden-dragon-work-cta">Explore the full demo ↗</span></div></Link><div className="work-copy"><span className="pill">FICTIONAL RESTAURANT · INTERACTIVE DEMO</span><h3>Golden Dragon.<br/>A table worth sharing.</h3><p>The original Golden Dragon Chinese Cuisine demo: a warm, welcoming restaurant website with menu categories, photo galleries, and ordering and reservation previews. All restaurant details are fictional sample content.</p><div className="tags"><span>Restaurant</span><span>Menu & reservations</span><span>Mobile-friendly</span></div><Link className="text-link" href="/demos/golden-dragon">View restaurant demo <Arrow/></Link></div></div><div className="featured-work"><Link className="work-preview" href="/work/restaurant" aria-label="Explore the restaurant website concept"><RestaurantPreview compact/></Link><div className="work-copy"><span className="pill">DESIGN CONCEPT · NOT CLIENT WORK</span><h3>A warm welcome.<br/>Before they walk in.</h3><p>Olive & Ember is a restaurant website concept designed around the things guests look for: the menu, the atmosphere, and their next visit.</p><div className="tags"><span>Restaurant</span><span>Responsive design</span><span>Menu & reservations</span></div><Link className="text-link" href="/work/restaurant">Explore the concept <Arrow/></Link></div></div></div></section>

    <section id="services" className="section-shell section-space"><div className="section-heading"><div><p className="eyebrow">02 / LESS FRICTION. MORE POSSIBILITY.</p><h2>Everything your website needs.<br/><span className="serif">Nothing it doesn’t.</span></h2></div><Link className="text-link" href="#contact">Find your starting point <Arrow/></Link></div><div className="services-grid">{services.map((service, i) => <ServiceCard key={service.title} {...service} number={`0${i + 1}`}/>)}</div></section>

    <section id="about" className="about-section"><div className="section-shell about-grid"><div><p className="eyebrow">A SMALL STUDIO, ON YOUR SIDE.</p><h2>You know your business.<br/><span className="serif">We’ll help the web see it.</span></h2></div><div><p>HF Web Studio creates thoughtful websites for local businesses. Our focus is simple: make your business easy to find, easy to understand, and easy to choose.</p><p>Expect clear communication, practical advice, and a website shaped around your customers. We keep the process personal, from the first conversation to launch.</p><Link className="text-link" href="#contact">Let’s get to know your business <Arrow/></Link></div></div></section>



    <section id="faq" className="section-shell section-space faq-grid"><div><p className="eyebrow">GOOD QUESTIONS.</p><h2>A few things<br/><span className="serif">you might wonder.</span></h2><p>Still have something on your mind?</p><Link href="#contact" className="text-link">Let’s talk it through <Arrow/></Link></div><div className="faqs">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

    <section id="contact" className="contact-section"><div className="section-shell contact-grid"><div><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE.</p><h2>Ready for a website<br/>that works as<br/><span className="serif">hard as you do?</span></h2><p>Tell us a little about your business.<br/>Let’s find the right next step, together.</p><Link className="contact-email text-link" href="mailto:huangfxs1995@163.com">huangfxs1995@163.com <Arrow/></Link><div className="contact-stamp">↗<span>A better website.<br/>A stronger first impression.</span></div></div><div className="contact-panel"><h3>Let’s build something good.</h3><p>A few details are all we need to get started.</p><QuoteForm email="huangfxs1995@163.com"/></div></div></section>
  </main><footer className="section-shell footer"><Link href="/" className="brand"><span className="brand-mark">hf<span>↗</span></span><span>HF WEB<span className="brand-light"> STUDIO</span></span></Link><p>Thoughtful websites. Local business in mind.</p><span>© {new Date().getFullYear()} HF Web Studio</span><Link href="#main">Back to top ↑</Link></footer></>;
}




