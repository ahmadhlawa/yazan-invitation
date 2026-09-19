import { INVITATION } from '../invitation.config';
import { Reveal } from './Reveal';
import { SectionDivider } from './SectionDivider';

export function InvitationClosing() {
  return (
    <footer className="storybook-closing closing--pink" aria-labelledby="closing-heading">
      <img className="closing--pink__flowers closing--pink__flowers--left" src="/assets/yazan-theme/flowers-left.png" alt="" />
      <img className="closing--pink__flowers closing--pink__flowers--right" src="/assets/yazan-theme/flowers-right.png" alt="" />
      <Reveal kind="rise" duration={.9}>
        <p id="closing-heading" className="storybook-closing__primary">{INVITATION.closing.primary}</p>
        <SectionDivider />
        <p className="storybook-closing__secondary">{INVITATION.closing.secondary}</p>
        <p className="storybook-closing__names">{INVITATION.hero.names}</p>
      </Reveal>
    </footer>
  );
}
