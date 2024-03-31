import dynamic from 'next/dynamic';

'use client';
const ShakaPlayer = dynamic(
  () => import('shaka-player-react'), 
  { ssr: false },
);