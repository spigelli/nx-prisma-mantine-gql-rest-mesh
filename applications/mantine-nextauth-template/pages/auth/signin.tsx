import { Center, Container } from '@mantine/core';
import {
  getProviders,
  signIn,
} from 'next-auth/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
// @ts-ignore
import { AuthenticationForm } from '@qrscribe/mantine-ui';
import {
  AuthChecker
} from '../../components/AuthChecker/AuthChecker';

export default function SignIn({ providers }) {
  const {query: { callbackUrl }} = useRouter();

  const commonSignInOptions = useMemo(() => ({
    callbackUrl,
  } as { callbackUrl: string }), [callbackUrl]);

  const authFormProviderConfig = useMemo(() => ({
    google: () => signIn("google"),
    github: () => console.log('Not implemented'),
  }), [providers, commonSignInOptions]);

  return (
    <Container
      size="sm"
      style={{ height: '100vh' }}
    >
      <AuthChecker />
      <Center style={{ height: '100vh' }}>
        <AuthenticationForm
          name="Mantine Next Auth Template"
          onSubmit={(data) => {
            console.log(data);
          }}
          providerSignInCallbacks={authFormProviderConfig}
        />
      </Center>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
