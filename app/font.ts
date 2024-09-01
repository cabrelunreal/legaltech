import { useFonts } from '@next/font/google';

export const notoSansJp = useFonts({
  family: 'Noto Sans Japanese',
  variable: ['wght', 'ital', 'opsz'],
  subsets: ['latin', 'japanese'],
});