import type { Category } from '../types/element';

export const categories: readonly Category[] = [
  { name: '鹼金屬', nameEn: 'Alkali Metal', color: '#ff5252' },
  { name: '鹼土金屬', nameEn: 'Alkaline Earth Metal', color: '#ffb142' },
  { name: '過渡金屬', nameEn: 'Transition Metal', color: '#706fd3' },
  { name: '後過渡金屬', nameEn: 'Post-transition Metal', color: '#33d9b2' },
  { name: '類金屬', nameEn: 'Metalloid', color: '#34ace0' },
  { name: '非金屬', nameEn: 'Nonmetal', color: '#ffda79' },
  { name: '鹵素', nameEn: 'Halogen', color: '#218c74' },
  { name: '惰性氣體', nameEn: 'Noble Gas', color: '#b33939' },
  { name: '鑭系', nameEn: 'Lanthanide', color: '#f78fb3' },
  { name: '錒系', nameEn: 'Actinide', color: '#cd84f1' },
] as const;

export const categoryNameMap: Record<string, number> = {
  '鹼金屬': 0,
  '鹼土金屬': 1,
  '過渡金屬': 2,
  '後過渡金屬': 3,
  '類金屬': 4,
  '非金屬': 5,
  '鹵素': 6,
  '惰性氣體': 7,
  '鑭系': 8,
  '錒系': 9,
};
