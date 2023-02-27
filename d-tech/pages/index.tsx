import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Box, Center } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

const LINKS = [
  'RHF1',
  'RHF2',
  'RHF3',
  'Image upload',
  'controller1',
  'controller2',
  'controller-basic',
  'firebase',
  'firebase-jotai',
  'firebase-theme',
  'useEffect-1',
  'useEffect-2',
  'jotai-core',
  'firebase-practice',
  'yup-react-hook-form',
  'zod-react-hook-form',
  'react-hook-form-watch',
] as const;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Center bg="tomato" color="white">
          <Box w={700} m={20}>
            {LINKS.map((link, index) => (
              <Link
                href={`index${index + 1}`}
                key={link}
                style={{ padding: '10px' }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Center>
      </main>
    </>
  );
}
