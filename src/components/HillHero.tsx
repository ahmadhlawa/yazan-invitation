import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { INVITATION } from '../invitation.config';

interface Props { open: boolean; done: boolean; onOpen: () => void }

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function HillHero({ open, done, onOpen }: Props) {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef);
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 14 },
    animate: open ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 14 },
    transition: { duration: reduced ? .15 : .9, delay: reduced ? 0 : delay, ease: EASE },
  });

  return (
    <section ref={heroRef} className="entrance-hero" data-ambient={done && inView && !reduced || undefined} data-open={open || undefined} data-done={done || undefined} aria-labelledby="hero-names">
      <div className="entrance-hero__curtain" aria-hidden="true" />
      <div className="entrance-hero__light" aria-hidden="true" />
      <img className="entrance-hero__chandelier" src="/assets/yazan-theme/chandelier.png" alt="" aria-hidden="true" />
      <img className="entrance-hero__flowers entrance-hero__flowers--left" src="/assets/yazan-theme/flowers-left.png" alt="" aria-hidden="true" />
      <img className="entrance-hero__flowers entrance-hero__flowers--right" src="/assets/yazan-theme/flowers-right.png" alt="" aria-hidden="true" />
      <div className="entrance-hero__petals" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <i key={index} />)}
      </div>
      <div className="entrance-hero__copy">
        <motion.p className="entrance-hero__blessing" {...reveal(1.35)}>{INVITATION.blessing}</motion.p>
        <motion.div className="entrance-hero__families" {...reveal(2.05)}>
          <span>{INVITATION.hero.groomFamily.replace('أهل العريس: ', '')}</span>
          <i>و</i>
          <span>{INVITATION.hero.brideFamily.replace('أهل العروس: ', '')}</span>
        </motion.div>
        <motion.div className="entrance-hero__invitation" {...reveal(2.75)}>
          <span>في يوم مبارك وحدث مبارك</span>
          <span>نتشرف بدعوتكم لمشاركتنا فرحتنا</span>
          <span>بإشهار خطوبة</span>
        </motion.div>
        <motion.h1 id="hero-names" {...reveal(3.2)}>
          <span>{INVITATION.groomName}</span><i>&</i><span>{INVITATION.brideName}</span>
        </motion.h1>
        <motion.p className="entrance-hero__date" {...reveal(3.65)}>
          الجمعة <span aria-hidden="true">·</span> <time dateTime={INVITATION.wedding.date} dir="ltr">2 / 10 / 2026</time>
        </motion.p>
      </div>
      <div className="entrance-hero__stairs" aria-hidden="true" />
      <div className="entrance-hero__threshold" aria-hidden="true" />
      <div className="entrance-hero__doors" aria-hidden={done || undefined}>
        <div className="entrance-hero__door entrance-hero__door--left"><img src="/assets/yazan-theme/door-right.jpg" alt="" /></div>
        <div className="entrance-hero__door entrance-hero__door--right"><img src="/assets/yazan-theme/door-left.jpg" alt="" /></div>
      </div>
      <button className="entrance-hero__open" type="button" onClick={onOpen} disabled={open} aria-label={INVITATION.gate.lockLabel}><span className="entrance-hero__seal" aria-hidden="true">ي &amp; ا</span><span>{INVITATION.gate.hint}</span></button>
    </section>
  );
}
