import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';

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
  artist: L;
  title: L;
  date: L;
  source: L;
  /** approximate dominant glow, for the loading frame before the image paints */
  tone: string;
  alt: L;
}

const met: L = { en: 'The Met', zh: '大都会博物馆' };

/** The four Venice vedute that rotate behind the hero, mirroring the app's rotation. */
export const hero: Artwork[] = [
  {
    src: canalettoPiazza,
    artist: { en: 'Canaletto', zh: '卡纳莱托' },
    title: { en: 'Piazza San Marco', zh: '《圣马可广场》' },
    date: { en: 'late 1720s', zh: '1720 年代晚期' },
    source: met,
    tone: 'oklch(0.46 0.06 76)',
    alt: {
      en: "Canaletto's sunlit view across the Piazza San Marco in Venice, the basilica's domes warm against a pale morning sky.",
      zh: '卡纳莱托笔下阳光下的威尼斯圣马可广场，大教堂的穹顶在浅淡的晨空映衬下泛着暖意。',
    },
  },
  {
    src: canalettoGrandCanal,
    artist: { en: 'Canaletto', zh: '卡纳莱托' },
    title: { en: 'The Grand Canal, Looking South toward the Rialto', zh: '《大运河，向南望向里亚尔托桥》' },
    date: { en: '1730s', zh: '1730 年代' },
    source: met,
    tone: 'oklch(0.48 0.05 80)',
    alt: {
      en: 'Canaletto looks down the Grand Canal toward the Rialto bridge, palaces lining still green water under a bright Venetian sky.',
      zh: '卡纳莱托沿大运河向里亚尔托桥望去，宫邸夹岸，碧水如镜，威尼斯天空明亮。',
    },
  },
  {
    src: turnerVenice,
    artist: { en: 'J. M. W. Turner', zh: '透纳' },
    title: { en: 'Venice, from the Porch of Madonna della Salute', zh: '《威尼斯，自安康圣母堂门廊望去》' },
    date: { en: 'ca. 1835', zh: '约 1835 年' },
    source: met,
    tone: 'oklch(0.55 0.04 78)',
    alt: {
      en: 'Turner dissolves Venice into luminous gold and haze, the Salute and the lagoon barely held together by light.',
      zh: '透纳把威尼斯化作一片明亮的金色与薄雾，安康圣母堂与潟湖几乎只靠光线维系。',
    },
  },
  {
    src: guardiGrandCanal,
    artist: { en: 'Francesco Guardi', zh: '弗朗切斯科·瓜尔迪' },
    title: { en: 'The Grand Canal above the Rialto', zh: '《里亚尔托桥上游的大运河》' },
    date: { en: 'late 1760s', zh: '1760 年代晚期' },
    source: met,
    tone: 'oklch(0.50 0.04 72)',
    alt: {
      en: 'Guardi paints the Grand Canal above the Rialto with quick, silvery touches, gondolas scattered across rippling water.',
      zh: '瓜尔迪以轻快的银灰笔触画下里亚尔托桥上游的大运河，贡多拉散落在粼粼水波之上。',
    },
  },
];

/** The salon hang: a broader cut of the open-access library. */
export const gallery: Artwork[] = [
  {
    src: vangoghCypresses,
    artist: { en: 'Vincent van Gogh', zh: '文森特·梵高' },
    title: { en: 'Wheat Field with Cypresses', zh: '《有丝柏的麦田》' },
    date: { en: '1889', zh: '1889 年' },
    source: met,
    tone: 'oklch(0.62 0.09 130)',
    alt: {
      en: 'Van Gogh sets a dark green cypress swirling against a wheat field and rolling clouds, every brushstroke in motion.',
      zh: '梵高让一株深绿的丝柏在麦田与翻卷的云层间盘旋，每一笔都在涌动。',
    },
  },
  {
    src: hokusaiWave,
    artist: { en: 'Katsushika Hokusai', zh: '葛饰北斋' },
    title: { en: 'Under the Wave off Kanagawa', zh: '《神奈川冲浪里》' },
    date: { en: 'ca. 1830–32', zh: '约 1830–32 年' },
    source: met,
    tone: 'oklch(0.58 0.06 230)',
    alt: {
      en: 'Hokusai’s great wave curls over fishing boats with Mount Fuji small and calm in the distance.',
      zh: '葛饰北斋的巨浪卷过渔舟，远处的富士山小而沉静。',
    },
  },
  {
    src: churchAndes,
    artist: { en: 'Frederic Edwin Church', zh: '弗雷德里克·埃德温·丘奇' },
    title: { en: 'Heart of the Andes', zh: '《安第斯之心》' },
    date: { en: '1859', zh: '1859 年' },
    source: met,
    tone: 'oklch(0.55 0.06 140)',
    alt: {
      en: 'Church builds a vast South American landscape, snow peaks above a sunlit valley threaded with a waterfall and forest.',
      zh: '丘奇铺陈出辽阔的南美风景：雪峰之下，阳光照亮的山谷里有瀑布与森林蜿蜒。',
    },
  },
  {
    src: vangoghSunflowers,
    artist: { en: 'Vincent van Gogh', zh: '文森特·梵高' },
    title: { en: 'Sunflowers', zh: '《向日葵》' },
    date: { en: '1887', zh: '1887 年' },
    source: met,
    tone: 'oklch(0.70 0.12 85)',
    alt: {
      en: 'Four cut sunflowers by Van Gogh lie against a turquoise ground, petals burning from gold to rust.',
      zh: '梵高画下四枝剪下的向日葵，衬着青绿底色，花瓣由金黄烧向赭红。',
    },
  },
  {
    src: rembrandtAristotle,
    artist: { en: 'Rembrandt van Rijn', zh: '伦勃朗' },
    title: { en: 'Aristotle with a Bust of Homer', zh: '《亚里士多德与荷马半身像》' },
    date: { en: '1653', zh: '1653 年' },
    source: met,
    tone: 'oklch(0.48 0.05 70)',
    alt: {
      en: 'Rembrandt lights Aristotle from the dark, his hand resting on a bust of Homer, gold chain catching the gloom.',
      zh: '伦勃朗让亚里士多德自暗处被照亮，手按在荷马半身像上，金链在幽暗中泛光。',
    },
  },
  {
    src: davidSocrates,
    artist: { en: 'Jacques Louis David', zh: '雅克-路易·大卫' },
    title: { en: 'The Death of Socrates', zh: '《苏格拉底之死》' },
    date: { en: '1787', zh: '1787 年' },
    source: met,
    tone: 'oklch(0.5 0.05 40)',
    alt: {
      en: 'David stages the death of Socrates, the philosopher reaching for the hemlock cup while his students grieve.',
      zh: '大卫铺演苏格拉底之死：哲人伸手去接毒堇酒杯，弟子们悲恸环绕。',
    },
  },
];

export const allArtwork = [...hero, ...gallery];
