import { motion } from 'framer-motion';
import { INVITATION } from '../invitation.config';

interface Props { playing: boolean; onToggle: () => void; visible: boolean }

export function AudioController({ playing, onToggle, visible }: Props) {
  const label = playing ? INVITATION.audio.pauseLabel : INVITATION.audio.playLabel;
  return (
    <motion.button type="button" onClick={onToggle} aria-label={label} title={label} aria-pressed={playing}
      className="audio-control" data-playing={playing || undefined} initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : .88 }} transition={{ duration: .3 }}
      whileTap={{ scale: .94 }} style={{ pointerEvents: visible ? 'auto' : 'none' }}>
      {playing ? (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6Z" /></svg>
      )}
    </motion.button>
  );
}
