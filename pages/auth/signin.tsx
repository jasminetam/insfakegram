import React from 'react';
import { getProviders, signIn as SignInProvider } from 'next-auth/react';

type Props = {
  providers: { id: string | any; name: string };
};

const signIn = ({ providers }: Props) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignInProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
