import { INVITATION } from '../invitation.config';
import { Reveal } from './Reveal';

interface Props { onOpenMap: () => void }

export function VenueLocation({ onOpenMap }: Props) {
  return (
    <section aria-labelledby="venue-heading" className="venue-story">
      <Reveal kind="rise" duration={1}>
        <div className="venue-arch venue-arch--pink">
          <div className="venue-arch__content">
            <p>{INVITATION.venue.heading}</p>
            <h2 id="venue-heading">{INVITATION.venue.name}</h2>
            <button type="button" onClick={onOpenMap} aria-label={`${INVITATION.venue.buttonLabel} في خرائط Google`}>
              {INVITATION.venue.buttonLabel}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
