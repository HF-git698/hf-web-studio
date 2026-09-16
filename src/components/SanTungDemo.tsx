'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Phone, MapPin, Menu, X, Clock } from '@/components/demo-icons';

const cdn = 'https://images.squarespace-cdn.com/content/v1/618b56bbb50653019ebdecaf/';
const photos = [
  { name: 'Original Fried Chicken Wings', chinese: '招牌雞翅', group: 'House favorites', src: cdn + '1642043866710-1AVFWQ49P9B1NBP8LXEJ/Hot%2BBraised%2BChicken.jpg', note: 'The first plate to share.' },
  { name: 'Shrimp & Chive Dumplings', chinese: '蝦仁韭菜水餃', group: 'Dumplings', src: cdn + '1642043988852-LXL19T5QJTJGQ8VPORUO/Shrimp%2Band%2BLeek%2BDumplings.jpg', note: 'A little parcel of happiness.' },
  { name: 'Steamed Pork Dumplings', chinese: '豬肉水餃', group: 'Dumplings', src: cdn + '1642044024899-NRIS4OFREKH8NQM452H2/Pork%2BDumplings.jpg', note: 'Comfort in every bite.' },
  { name: 'Honey Walnut Prawn', chinese: '核桃蝦', group: 'House favorites', src: cdn + 'a2dd759e-c312-4e85-be5a-511dbf2cb288/Honey%2BWalnut%2BPrawn.jpg', note: 'Make room for another favorite.' },
];
const atmosphere = cdn + '1639534398538-HCQWO6HUEFUJ6AZ6COA3/DSC03708.jpg';
const additional = ['Noodles with Black Bean Sauce', 'Three Deluxe Spicy Noodles', 'Cold Sliced Beef', 'Cherry Pork', 'Broccoli Beef'];
const official = 'https://www.santungsf.com/';
const phone = 'tel:+14152420828';
const directions = 'https://www.google.com/maps/search/?api=1&query=San+Tung+1031+Irving+Street+San+Francisco+CA+94122';

function Photo({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  return failed ? <span className="st-photo-fallback">Photo temporarily unavailable. Restaurant photos are available on the official site.</span> : <Image src={src + '?format=1500w'} alt={alt} fill unoptimized priority={priority} sizes="(max-width:760px) 100vw, 50vw" onError={() => setFailed(true)} />;
}

export default function SanTungDemo() {
  const [navigation, setNavigation] = useState(false);
  const [filter, setFilter] = useState('All favorites');
  const [selected, setSelected] = useState<number | null>(null);
  const lightbox = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const nav = [['The favorites', 'st-menu'], ['Our story', 'st-story'], ['Visit us', 'st-visit']];
  function openPhoto(index: number) {
    trigger.current = document.activeElement as HTMLElement;
    setSelected(index);
    lightbox.current?.showModal();

  }
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  const shown = photos.filter(p => filter === 'All favorites' || p.group === filter);
  return <div className="st-site">
    <div className="st-concept"><Link href="/#work">← HF Web Studio</Link> INDEPENDENT REDESIGN CONCEPT <span>· Not the official San Tung website</span><a href={official} target="_blank" rel="noreferrer">Visit original ↗</a></div>
    <header className="st-header">
      <a className="st-logo" href="#st-top" aria-label="San Tung home"><span className="st-seal">山東</span><span>SAN TUNG<small>山東小館 · SAN FRANCISCO</small></span></a>
      <nav className="st-desktop" aria-label="San Tung navigation">{nav.map(([name, id]) => <a href={'#' + id} key={id}>{name}</a>)}</nav>
      <a className="st-button st-red st-header-call" href={phone}><Phone size={15} /> Call the restaurant</a>
      <button className="st-toggle" aria-label={navigation ? 'Close menu' : 'Open menu'} aria-expanded={navigation} aria-controls="st-navigation" onClick={() => setNavigation(!navigation)}>{navigation ? <X /> : <Menu />}</button>
      {navigation && <nav id="st-navigation" className="st-mobile-nav" aria-label="San Tung mobile navigation" onKeyDown={e => { if(e.key === 'Escape') setNavigation(false); }}>{nav.map(([name,id]) => <a key={id} href={'#'+id} onClick={() => setNavigation(false)}>{name}<ArrowUpRight size={18}/></a>)}</nav>}
    </header>
    <main id="main-content">
      <section className="st-hero" id="st-top">
        <div className="st-hero-copy"><p className="st-kicker">IRVING STREET, SAN FRANCISCO · EST. 1986</p><h1>A San Francisco<br/><em>original.</em></h1><p className="st-intro">Come for the wings.<br/>Stay for everything else.</p><p className="st-description">Northern Chinese favorites, a table full of good food,<br className="st-break"/> and a little more to share.</p><div className="st-hero-actions"><a className="st-button st-red" href="#st-menu">Explore the favorites <ArrowRight size={17}/></a><a className="st-text-link" href="#st-visit">Find us on Irving <ArrowUpRight size={17}/></a></div><div className="st-hero-bottom"><span className="st-small-seal">1986</span><p>Part of the neighborhood.<br/><strong>Always worth gathering for.</strong></p></div></div>
        <div className="st-hero-picture"><Photo src={photos[0].src} alt="San Tung Original Fried Chicken Wings, photograph from the restaurant website" priority/><div className="st-image-shade"/><span className="st-photo-label">THE ONE YOU CAME FOR</span><div className="st-hero-photo-title"><p>Original Fried<br/>Chicken Wings</p><span>01 / SAN TUNG FAVORITES</span></div><span className="st-vertical">山東小館</span></div>
      </section>
      <div className="st-service-strip"><span><Phone size={17}/><strong>Planning takeout?</strong> Call (415) 242-0828</span><span>Online ordering is currently unavailable.<a href={official} target="_blank" rel="noreferrer">Check current status ↗</a></span></div>
      <section id="st-menu" className="st-section">
        <div className="st-section-heading"><div><p className="st-kicker">THE TABLE STARTS HERE · 招牌菜</p><h2>Some things become<br/><em>favorites for a reason.</em></h2></div><p>A few familiar faces from the San Tung menu.<br/>Pick your first plate. Then pass it around.</p></div>
        <div className="st-filters" aria-label="Filter featured dishes">{['All favorites','House favorites','Dumplings'].map(name => <button key={name} aria-pressed={filter === name} className={filter === name ? 'selected' : ''} onClick={() => setFilter(name)}>{name}</button>)}<a href="https://www.santungsf.com/menu" target="_blank" rel="noreferrer">Official menu <ArrowUpRight size={16}/></a></div>
        <div className="st-food-grid" aria-live="polite">{shown.map(item => <article className="st-food-card" key={item.name}><button className="st-food-image" aria-label={'Enlarge ' + item.name} onClick={() => openPhoto(photos.indexOf(item))}><Photo src={item.src} alt={item.name + ', photo from San Tung’s website'}/><span><ArrowUpRight size={20}/></span></button><div className="st-food-caption"><div><small>{item.chinese}</small><h3>{item.name}</h3><p>{item.note}</p></div><span className="st-food-number">0{photos.indexOf(item)+1}</span></div></article>)}</div>
        <div className="st-more-menu"><p className="st-kicker">AND THERE’S MORE TO THE TABLE</p><div>{additional.map(name => <span key={name}>{name}</span>)}</div><p className="st-menu-note">Featured dishes from the official website. Confirm current prices, ingredients and availability with the restaurant.</p></div>
      </section>
      <section id="st-story" className="st-story"><div className="st-story-photo"><Photo src={atmosphere} alt="San Tung restaurant photograph from the official homepage"/><span>SAN FRANCISCO, SINCE 1986</span></div><div className="st-story-copy"><p className="st-kicker">A NEIGHBORHOOD ORIGINAL · 我們的故事</p><h2>Good food.<br/>An Irving Street<br/><em>tradition.</em></h2><p>San Tung has called San Francisco home since 1986. Its Northern Chinese specialties bring wings, dumplings and noodles to the same table.</p><p>This is a place to discover a favorite — and come back with someone to share it with.</p><a className="st-text-link" href="#st-visit">Make your way to Irving Street <ArrowUpRight size={17}/></a></div></section>
      <section className="st-takeout st-section"><span className="st-takeout-mark" aria-hidden="true">食</span><div><p className="st-kicker">GOOD FOOD, YOUR WAY</p><h2>Your next meal<br/><em>starts with a call.</em></h2></div><div><p>For takeout, allow at least 30 minutes for preparation. Busy periods and larger orders may take an hour. Call to confirm whether your order can be accepted.</p><a className="st-button st-red" href={phone}><Phone size={17}/> (415) 242-0828</a><small>Online orders are currently paused on the official website.</small></div></section>
      <section id="st-visit" className="st-section st-visit"><div><p className="st-kicker">COME FIND YOUR FAVORITE · 歡迎光臨</p><h2>Meet us<br/><em>on Irving.</em></h2><div className="st-contact"><MapPin size={21}/><div><h3>San Tung 山東小館</h3><p>1031 Irving Street<br/>San Francisco, CA 94122</p><a className="st-text-link" href={directions} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></div></div><div className="st-contact"><Clock size={21}/><div><h3>Hours</h3><dl><div><dt>Lunch</dt><dd>11:00 am – 3:00 pm</dd></div><div><dt>Dinner</dt><dd>4:30 pm – 8:30 pm</dd></div></dl><p className="st-closed">Closed Tuesday & Wednesday</p><small>Also closed Thanksgiving, Christmas and Chinese New Year.<br/>Confirm holiday schedules with the restaurant.</small></div></div><a className="st-email" href="mailto:santungsf@gmail.com">santungsf@gmail.com <ArrowUpRight size={15}/></a></div><div className="st-location-card"><span className="st-map-line line-one"/><span className="st-map-line line-two"/><span className="st-map-line line-three"/><p className="st-map-area">INNER SUNSET</p><div className="st-map-brand"><span>山東</span><strong>SAN TUNG</strong><small>1031 IRVING STREET</small></div><span className="st-street">IRVING STREET</span><a href={directions} className="st-map-button" target="_blank" rel="noreferrer"><MapPin size={17}/> Open in Google Maps <ArrowUpRight size={17}/></a><small className="st-map-note">Illustrated location card · not a to-scale map</small></div></section>
    </main>
    <footer className="st-footer"><div><a className="st-logo" href="#st-top"><span className="st-seal">山東</span><span>SAN TUNG<small>山東小館 · SAN FRANCISCO</small></span></a><p>Come hungry. Bring good company.</p><a href={phone}>(415) 242-0828 ↗</a></div><div className="st-footer-bottom"><span>Independent redesign proposal. Not affiliated with or endorsed by San Tung.</span><span>Restaurant photos & factual information: <a href={official} target="_blank" rel="noreferrer">santungsf.com ↗</a></span></div></footer>
    <div className="st-bottom-bar"><a href="#st-menu">View favorites</a><a href={phone}><Phone size={16}/> Call restaurant</a></div>
    <dialog ref={lightbox} className="st-lightbox" aria-label="San Tung food photo" onClose={() => { setSelected(null); trigger.current?.focus(); }} onClick={e => { if(e.target === e.currentTarget) lightbox.current?.close(); }}><button className="st-close" onClick={() => lightbox.current?.close()} autoFocus aria-label="Close photo"><X/></button>{selected !== null && <><div><Photo src={photos[selected].src} alt={photos[selected].name}/></div><p>{photos[selected].name}</p></>}</dialog>
  </div>;
}
