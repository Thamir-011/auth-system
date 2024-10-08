import { db } from "@/lib/db";

export const getTwoFactorCondirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = db.twoFactorConfirmation.findUnique({
      where: {
        userId,
      },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
