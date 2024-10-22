import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENTSECRET as string,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //invoked on successful sign in
    async signIn({ profile }: any) {
      //check if user exists
      const userExist = await User.findOne({ email: profile.email });
      console.log(userExist, "userExist");
      //if not, create user
      if (!userExist) {
        await User.create({
          email: profile.email,
          userName: profile.name,
          image: profile.picture,
        });
      }
      //return true to allow sign in
      return true;
    },
    // session callback function that modifies the session object
    async session({ session }: any) {
      //get the user from database
      const user = await User.findOne({ email: session.user.email });
      // asign the user to the session object
      session.user.id = user.id.toString();
      session.user.image = user.image || null;
      // return session object
      return session;
    },
  },
};
