import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

// Correct export for both GET and POST
export { handler as GET, handler as POST };
