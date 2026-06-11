import type { ImageMetadata } from 'astro';

import canalettoPiazza from '../assets/art/canaletto-piazza-san-marco.jpg';
import canalettoGrandCanal from '../assets/art/canaletto-grand-canal-rialto.jpg';
import turnerVenice from '../assets/art/turner-venice-salute.jpg';
import guardiGrandCanal from '../assets/art/guardi-grand-canal.jpg';
import vangoghCypresses from '../assets/art/vangogh-wheat-cypresses.jpg';
import hokusaiWave from '../assets/art/hokusai-great-wave.jpg';
import churchAndes from '../assets/art/church-heart-of-andes.jpg';
import vangoghSunflowers from '../assets/art/vangogh-sunflowers.jpg';
import rembrandtAristotle from '../assets/art/rembrandt-aristotle.jpg';
import davidSocrates from '../assets/art/david-death-of-socrates.jpg';

export interface Artwork {
  src: ImageMetadata;
  artist: string;
  title: string;
  date: string;
  source: string;
  /** approximate dominant glow, for the loading frame before the image paints */
  tone: string;
  alt: string;
}

/** The four Venice vedute that rotate behind the hero, mirroring the app's rotation. */
export const hero: Artwork[] = [
  {
    src: canalettoPiazza,
    artist: 'Canaletto',
    title: 'Piazza San Marco',
    date: 'late 1720s',
    source: 'The Met',
    tone: 'oklch(0.46 0.06 76)',
    alt: "Canaletto's sunlit view across the Piazza San Marco in Venice, the basilica's domes warm against a pale morning sky.",
  },
  {
    src: canalettoGrandCanal,
    artist: 'Canaletto',
    title: 'The Grand Canal, Looking South toward the Rialto',
    date: '1730s',
    source: 'The Met',
    tone: 'oklch(0.48 0.05 80)',
    alt: 'Canaletto looks down the Grand Canal toward the Rialto bridge, palaces lining still green water under a bright Venetian sky.',
  },
  {
    src: turnerVenice,
    artist: 'J. M. W. Turner',
    title: 'Venice, from the Porch of Madonna della Salute',
    date: 'ca. 1835',
    source: 'The Met',
    tone: 'oklch(0.55 0.04 78)',
    alt: 'Turner dissolves Venice into luminous gold and haze, the Salute and the lagoon barely held together by light.',
  },
  {
    src: guardiGrandCanal,
    artist: 'Francesco Guardi',
    title: 'The Grand Canal above the Rialto',
    date: 'late 1760s',
    source: 'The Met',
    tone: 'oklch(0.50 0.04 72)',
    alt: 'Guardi paints the Grand Canal above the Rialto with quick, silvery touches, gondolas scattered across rippling water.',
  },
];

/** The salon hang: a broader cut of the open-access library. */
export const gallery: Artwork[] = [
  {
    src: vangoghCypresses,
    artist: 'Vincent van Gogh',
    title: 'Wheat Field with Cypresses',
    date: '1889',
    source: 'The Met',
    tone: 'oklch(0.62 0.09 130)',
    alt: 'Van Gogh sets a dark green cypress swirling against a wheat field and rolling clouds, every brushstroke in motion.',
  },
  {
    src: hokusaiWave,
    artist: 'Katsushika Hokusai',
    title: 'Under the Wave off Kanagawa',
    date: 'ca. 1830–32',
    source: 'The Met',
    tone: 'oklch(0.58 0.06 230)',
    alt: 'Hokusai’s great wave curls over fishing boats with Mount Fuji small and calm in the distance.',
  },
  {
    src: churchAndes,
    artist: 'Frederic Edwin Church',
    title: 'Heart of the Andes',
    date: '1859',
    source: 'The Met',
    tone: 'oklch(0.55 0.06 140)',
    alt: 'Church builds a vast South American landscape, snow peaks above a sunlit valley threaded with a waterfall and forest.',
  },
  {
    src: vangoghSunflowers,
    artist: 'Vincent van Gogh',
    title: 'Sunflowers',
    date: '1887',
    source: 'The Met',
    tone: 'oklch(0.70 0.12 85)',
    alt: 'Four cut sunflowers by Van Gogh lie against a turquoise ground, petals burning from gold to rust.',
  },
  {
    src: rembrandtAristotle,
    artist: 'Rembrandt van Rijn',
    title: 'Aristotle with a Bust of Homer',
    date: '1653',
    source: 'The Met',
    tone: 'oklch(0.48 0.05 70)',
    alt: 'Rembrandt lights Aristotle from the dark, his hand resting on a bust of Homer, gold chain catching the gloom.',
  },
  {
    src: davidSocrates,
    artist: 'Jacques Louis David',
    title: 'The Death of Socrates',
    date: '1787',
    source: 'The Met',
    tone: 'oklch(0.5 0.05 40)',
    alt: 'David stages the death of Socrates, the philosopher reaching for the hemlock cup while his students grieve.',
  },
];

export const allArtwork = [...hero, ...gallery];
