import { getServerSession } from "next-auth"; // Import this function
import { authOptions } from "@/utils/authOptions";

const getSessionUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session.user.id) return null;

  return { userId: session.user.id };
};

export default getSessionUser;
