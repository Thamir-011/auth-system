"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationToken";
import { db } from "@/lib/db";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Verification token does not exist!",
    };
  }

  if (new Date(existingToken.expires) < new Date()) {
    return {
      error: "Token has expired!",
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return {
      error: "Email does not exist!",
    };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      email: existingToken.email,
      emailVerified: new Date(),
    },
  });

  await db.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Email has been Verified!" };
};
