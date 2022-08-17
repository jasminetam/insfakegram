import React from 'react';
import { getProviders, signIn as SignInProvider } from 'next-auth/react';
import Header from '../../components/Header';

type Props = {
  providers: { id: string | any; name: string };
};

const signIn = ({ providers }: Props) => {
  return (
    <div>
      <Header />
      <div className="signInWrapper">
        <img className="w-80" src="/images/logo.png" alt="" />
        <p className="font-xs italic">
          This is a instagram clone site which is built for learning and
          practising purposes.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignInProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
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
