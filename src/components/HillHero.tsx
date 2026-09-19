import { motion, useReducedMotion } from 'framer-motion';
import { INVITATION } from '../invitation.config';

interface Props { open: boolean; done: boolean; onOpen: () => void }

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function HillHero({ open, done, onOpen }: Props) {
  const reduced = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 14 },
    animate: open ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 14 },
    transition: { duration: reduced ? .15 : .9, delay: reduced ? 0 : delay, ease: EASE },
  });

  return (
    <section className="entrance-hero" data-open={open || undefined} data-done={done || undefined} aria-labelledby="hero-names">
      <div className="entrance-hero__curtain" aria-hidden="true" />
      <div className="entrance-hero__light" aria-hidden="true" />
      <img className="entrance-hero__chandelier" src="/assets/yazan-theme/chandelier.png" alt="" aria-hidden="true" />
      <img className="entrance-hero__flowers entrance-hero__flowers--left" src="/assets/yazan-theme/flowers-left.png" alt="" aria-hidden="true" />
      <img className="entrance-hero__flowers entrance-hero__flowers--right" src="/assets/yazan-theme/flowers-right.png" alt="" aria-hidden="true" />
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
        <motion.h1 id="hero-names" {...reveal(3.55)}>{INVITATION.hero.names}</motion.h1>
      </div>
      <img className="entrance-hero__stairs" src="/assets/yazan-theme/stairs.jpg" alt="" aria-hidden="true" />
      <div className="entrance-hero__doors" aria-hidden={done || undefined}>
        <div className="entrance-hero__door entrance-hero__door--left"><img src="/assets/yazan-theme/door-right.jpg" alt="" /></div>
        <div className="entrance-hero__door entrance-hero__door--right"><img src="/assets/yazan-theme/door-left.jpg" alt="" /></div>
      </div>
      <button className="entrance-hero__open" type="button" onClick={onOpen} disabled={open} aria-label={INVITATION.gate.lockLabel}><span>{INVITATION.gate.hint}</span></button>
    </section>
  );
}
