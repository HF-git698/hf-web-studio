'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Menu, X, MapPin, Phone, Clock, Leaf, Flame } from '@/components/demo-icons';
import { restaurant as r, menu } from '@/config/restaurant';

const pictures = [
  { src: '/demos/golden-dragon/dumplings.jpg', alt: 'A generous spread of Chinese dumplings and small plates', caption: 'Little bites. Big happiness.' },
  { src: '/demos/golden-dragon/noodles.jpg', alt: 'A comforting bowl of noodles with colorful toppings', caption: 'Comfort, by the bowl.' },
  { src: '/demos/golden-dragon/table.jpg', alt: 'Warm restaurant interior with greenery and softly lit tables', caption: 'Make yourself at home.' },
  { src: '/demos/golden-dragon/chinese.jpg', alt: 'Chinese-inspired dishes ready to share around the table', caption: 'Always better together.' },
];
const links = [['Our menu', 'menu'], ['Our story', 'about'], ['Gallery', 'gallery'], ['Visit us', 'visit']];
type Category = keyof typeof menu;

export default function RestaurantDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState<Category>('House favorites');
  const [modal, setModal] = useState<'order' | 'reservation' | number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  function open(value: 'order' | 'reservation' | number) {
    previousFocus.current = document.activeElement as HTMLElement;
    setModal(value);
    dialog.current?.showModal();

  }
  useEffect(() => {
    if (modal === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [modal]);
  function close() { dialog.current?.close(); }
  function onClose() {

    setModal(null);
    previousFocus.current?.focus();
  }
  function action(kind: 'order' | 'reservation', className = 'gd-button gd-gold', label?: string) {
    const url = kind === 'order' ? r.orderUrl : r.reservationUrl;
    const text = label || (kind === 'order' ? 'Order online' : 'Reserve a table');
    return url
      ? <a className={className} href={url} target="_blank" rel="noopener noreferrer">{text}<ArrowUpRight size={17}/></a>
      : <button className={className} onClick={() => open(kind)}>{text}<ArrowUpRight size={17}/></button>;
  }
  return <div className="golden-demo">
    <div className="gd-demo-banner"><Link href="/#work">← HF Web Studio</Link>A taste of what’s possible <span>— Fictional restaurant demo</span></div>
    <header className="gd-site-header">
      <a href="#" className="gd-brand" aria-label="Golden Dragon home"><span className="gd-brand-seal" aria-hidden="true">龍</span><span>GOLDEN DRAGON<small>CHINESE CUISINE</small></span></a>
      <nav className="gd-desktop-nav" aria-label="Main navigation">{links.map(([label,id]) => <a key={id} href={'#'+id}>{label}</a>)}</nav>
      <div className="gd-header-actions">{action('order', 'gd-button gd-gold gd-compact')}<button className="gd-menu-toggle" aria-label={mobileOpen?'Close navigation':'Open navigation'} aria-expanded={mobileOpen} aria-controls="gd-mobile-nav" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button></div>
      {mobileOpen && <nav id="gd-mobile-nav" className="gd-mobile-nav" aria-label="Mobile navigation" onKeyDown={e=>{if(e.key==='Escape')setMobileOpen(false);}}>{links.map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setMobileOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}</nav>}
    </header>
    <main id="main-content">
      <section className="gd-hero" aria-labelledby="hero-heading">
        <div className="gd-hero-copy"><p className="gd-eyebrow"><span className="gd-tiny-line"/>ROOTED IN TRADITION. MADE FOR TODAY.</p><h1 id="hero-heading">A little tradition.<br/>A lot of <em>flavor.</em></h1><p className="gd-hero-description">From the first dumpling to the last shared bite.<br className="desktop-break"/> Chinese comfort food, made with heart.</p><div className="gd-hero-buttons">{action('order')}<a className="gd-button gd-outline" href="#menu">Explore the menu <ArrowRight size={17}/></a></div><div className="gd-hero-note"><span className="gd-note-icon">✦</span><span>Good food. Good company.<br/><strong>There’s always room at our table.</strong></span></div></div>
        <div className="gd-hero-photo"><Image src={pictures[0].src} alt={pictures[0].alt} fill priority sizes="(max-width: 760px) 100vw, 52vw"/><div className="gd-photo-shade"/><span className="gd-vertical-label">FRESHLY MADE · HAPPILY SHARED</span><div className="gd-photo-caption"><span>THE ART OF COMING TOGETHER</span><p>Small plates.<br/>Lasting memories.</p></div><a className="gd-round-link" href="#favorites" aria-label="Discover our favorites">↙</a></div>
      </section>
      <div className="gd-values-strip"><span>WOK-FIRED FLAVOR</span><i>✦</i><span>HAND-FOLDED HAPPINESS</span><i>✦</i><span>MADE TO SHARE</span><i>✦</i><span>A WARM WELCOME</span></div>
      <section id="favorites" className="section favorites">
        <div className="gd-section-heading"><div><p className="gd-eyebrow">THE DISHES YOU COME BACK FOR</p><h2>Meet your new favorites.</h2></div><a className="gd-text-link" href="#menu">Discover our menu <ArrowUpRight size={18}/></a></div>
        <div className="gd-favorite-grid">
          {[{name:'Dim sum, done with love.',text:'Delicate folds. Savory fillings. One more? Always.',image:0,tag:'LITTLE BITES, BIG FLAVOR',cat:'Dim sum & starters'},{name:'Your comfort-food fix.',text:'Slurp-worthy noodles, made for your kind of day.',image:1,tag:'FROM THE WOK',cat:'Rice & noodles'},{name:'A feast for the table.',text:'The classics you love, with plenty to go around.',image:3,tag:'BETTER TOGETHER',cat:'House favorites'}].map(item=><a href="#menu" className="gd-favorite-card" key={item.name} onClick={()=>setCategory(item.cat as Category)}><div className="gd-card-photo"><Image src={pictures[item.image].src} alt={pictures[item.image].alt} fill sizes="(max-width: 700px) 90vw, 30vw"/><span className="gd-card-tag">{item.tag}</span></div><div className="gd-card-title"><h3>{item.name}</h3><ArrowUpRight size={21}/></div><p>{item.text}</p></a>)}
        </div>
      </section>
      <section id="menu" className="gd-section gd-menu-section">
        <div className="gd-center-heading"><p className="gd-eyebrow">SOMETHING FOR EVERY CRAVING</p><h2>Your next “usual” is here.</h2><p>Familiar favorites. Fresh discoveries. Best enjoyed together.</p></div>
        <div className="gd-menu-tabs" aria-label="Menu categories">{(Object.keys(menu) as Category[]).map(key=><button key={key} aria-pressed={category===key} onClick={()=>setCategory(key)} className={category===key?'gd-active':''}>{key}</button>)}</div>
        <div className="gd-menu-grid" aria-live="polite">{menu[category].map(item=><article className="gd-menu-item" key={item.name}><div className="gd-dish-heading"><h3>{item.name}</h3><span className="gd-dots"/><span className="gd-price">${item.price}</span></div><p>{item.description}</p>{item.tag && <small className="gd-dish-tag">{item.tag.includes('SPICY')?<Flame size={12}/>:item.tag.includes('VEG')?<Leaf size={12}/>:<span>✦</span>}{item.tag}</small>}</article>)}</div>
        <p className="gd-menu-disclaimer">Sample menu · Prices in USD, before tax. Please tell your server about allergies.<br/>Vegetarian dishes may share preparation surfaces with other foods.</p>
        <div className="gd-center-action">{action('order','gd-button gd-dark','Found your favorite? Order online')}</div>
      </section>
      <section id="about" className="gd-about-section"><div className="gd-about-photo"><Image src="/demos/golden-dragon/table.jpg" alt="An inviting dining room with warm lighting and plants; concept imagery" fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="gd-about-stamp">COME HUNGRY.<br/><em>Leave happy.</em></span></div><div className="gd-about-copy"><p className="gd-eyebrow">OUR TABLE, YOUR TRADITION</p><h2>More than a meal.<br/>A moment to share.</h2><p>We believe the best meals bring people closer. A table full of dishes, a familiar face across from you, and a little time to slow down.</p><p>At Golden Dragon, our menu celebrates Chinese comfort food — from delicate dumplings to bold, wok-fired favorites. Come for a quick lunch. Stay for a long conversation.</p><span className="gd-signature">Good company is always on the menu.</span><a className="gd-text-link" href="#visit">Find your seat at our table <ArrowUpRight size={18}/></a></div></section>
      <section id="gallery" className="section gallery-section"><div className="gd-section-heading"><div><p className="gd-eyebrow">A GLIMPSE OF THE GOOD STUFF</p><h2>A little look around.</h2></div><span className="gd-gallery-note">Food, friends & all the in-between.</span></div><div className="gd-gallery-grid">{pictures.map((pic,index)=><button key={pic.src} className="gd-gallery-photo" onClick={()=>open(index)} aria-label={'Enlarge photo: '+pic.alt}><Image src={pic.src} alt={pic.alt} fill sizes="(max-width: 700px) 45vw, 24vw"/><span><ArrowUpRight size={22}/></span></button>)}</div><p className="gd-image-note">Atmosphere & food inspiration. Photos are illustrative.</p></section>
      <section className="gd-reservation-section"><span className="gd-reservation-flower" aria-hidden="true">✳</span><p className="gd-eyebrow">MAKE AN EVENING OF IT</p><h2>We’ll save you a seat.</h2><p>Date night, family night, or just-because-it’s-Tuesday night.<br/>There’s a place for you here.</p>{action('reservation')}</section>
      <section id="visit" className="gd-section gd-visit-section"><div className="gd-visit-copy"><p className="gd-eyebrow">YOUR NEXT GOOD MEAL STARTS HERE</p><h2>Come on over.</h2><div className="gd-contact-block"><MapPin/><div><h3>Find us</h3><p>{r.address}<br/>{r.city}</p><small>Sample address · Not a real restaurant location</small></div></div><div className="gd-contact-block"><Clock/><div><h3>Hours at the table</h3><dl>{r.hours.map(([day,time])=><div key={day}><dt>{day}</dt><dd>{time}</dd></div>)}</dl></div></div><div className="gd-contact-block"><Phone/><div><h3>Give us a ring</h3><a className="gd-phone-link" href={r.phoneHref}>{r.phone}</a><small>Demo phone number</small></div></div></div><div className="gd-map-panel" aria-label="Decorative map placeholder, not a real location"><div className="gd-map-roads"/><span className="gd-map-area gd-area-one">YOUR NEIGHBORHOOD</span><span className="gd-map-area gd-area-two">GOOD FOOD, CLOSE BY</span><div className="gd-map-pin"><MapPin size={30}/></div><div className="gd-map-label"><strong>Golden Dragon</strong><span>Your new favorite corner.</span></div><div className="gd-map-notice"><MapPin size={17}/><span>Map preview — real location coming soon</span></div></div></section>
    </main>
    <footer><div className="gd-footer-top"><a href="#" className="gd-brand"><span className="gd-brand-seal" aria-hidden="true">龍</span><span>GOLDEN DRAGON<small>CHINESE CUISINE</small></span></a><p>A little tradition. A lot of flavor.</p><a href="#menu">Come hungry. <ArrowUpRight size={18}/></a></div><div className="gd-footer-bottom"><span>© {new Date().getFullYear()} Golden Dragon Chinese Cuisine</span><span>Fictional concept · Sample menu, hours & contact details</span><a href="#main-content">Back to top ↑</a></div></footer>
    <div className="gd-mobile-bottom">{action('order','gd-button gd-gold')}{action('reservation','gd-button gd-outline','Reservation')}</div>
    <dialog ref={dialog} aria-label={typeof modal==='number'?'Photo preview':modal==='order'?'Online ordering demo':'Reservation demo'} className={typeof modal==='number'?'gd-lightbox':'service-dialog'} onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)close();}}>
      <button className="gd-dialog-close" onClick={close} aria-label="Close dialog" autoFocus><X/></button>
      {typeof modal==='number'?<><div className="gd-lightbox-image"><Image src={pictures[modal].src} alt={pictures[modal].alt} fill sizes="90vw"/></div><p>{pictures[modal].caption}</p></>:<><span className="gd-dialog-symbol">✦</span><p className="gd-eyebrow">GOLDEN DRAGON · WEBSITE DEMO</p><h2>{modal==='order'?'Your next great meal.':'A place at our table.'}</h2><p>{modal==='order'?'Online ordering will be available here when the restaurant’s ordering service is connected.':'Reservations will be available here when the restaurant’s booking service is connected.'}</p><p className="gd-dialog-note">This is a fictional restaurant demo. No {modal==='order'?'orders or payments':'reservations'} are accepted.</p><button className="gd-button gd-dark" onClick={close}>Keep exploring <ArrowRight size={17}/></button></>}
    </dialog>
  </div>;
}
