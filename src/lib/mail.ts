import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "test@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA Code: ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "test@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `<p>Click <a href='${confirmLink}'>here</a> to verify your email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=${token}`;

  try {
    await resend.emails.send({
      from: "test@resend.dev",
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href='${confirmLink}'>here</a> to reset your password.</p>`,
    });
  } catch (error) {
    console.log(error);
  }
};
