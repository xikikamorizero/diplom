import type { Metadata } from 'next'
import { AboutUs } from '@/page';

export const metadata: Metadata = {
    title: 'Next 1.0 | AboutUs',
    description: 'Portfolio website About Us',
  }

export default function About() {
    return (
        <div>
            <AboutUs />
        </div>
    );
}
