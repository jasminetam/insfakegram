import NextAuth from 'next-auth/next';
import { OAuthUserConfig } from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';

type Props = {
  clientId: OAuthUserConfig<any>;
};

export default NextAuth({
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
