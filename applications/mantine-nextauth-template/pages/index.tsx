import { Button } from '@mantine/core';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  AuthChecker
} from '../components/AuthChecker/AuthChecker';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage({ ...props }) {
  console.log('props', props);
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <AuthChecker />
      <Button onClick={() => signIn()}>Sign In</Button>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  );
}
