const nodemailer = require("nodemailer");

/**
 * Creates a reusable transporter using Gmail.
 * For other providers change the `service` or use `host`/`port` directly.
 */
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // use an App Password, not your real password
    },
  });
}

/**
 * Sends a notification email to you when someone fills the contact form.
 * @param {{ name: string, email: string, message: string }} data
 */
async function sendContactNotification({ name, email, message }) {
  const transporter = createTransporter();

  // Email you receive
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // sends to yourself
    replyTo: email,             // reply goes directly to the sender
    subject: `📬 New message from ${name} – Portfolio`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 24px; border-radius: 10px;">
        <h2 style="color: #6366f1; margin-bottom: 4px;">New Portfolio Message</h2>
        <p style="color: #64748b; margin-top: 0; font-size: 14px;">Someone reached out via your portfolio contact form.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 80px;">Name</td>
            <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
            </td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

        <p style="color: #64748b; font-size: 13px; margin-bottom: 8px;">Message</p>
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #1e293b; line-height: 1.7; white-space: pre-wrap;">${message}</div>

        <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
          Hit <strong>Reply</strong> to respond directly to ${name}.
        </p>
      </div>
    `,
  });

  // Auto-reply to the sender
  await transporter.sendMail({
    from: `"Threesha" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 24px; border-radius: 10px;">
        <h2 style="color: #6366f1;">Hey ${name}, thanks for your message!</h2>
        <p style="color: #475569; line-height: 1.7;">
          I've received your message and will get back to you as soon as possible — usually within 24–48 hours.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #64748b; font-size: 13px;">Your message:</p>
        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #1e293b; line-height: 1.7; white-space: pre-wrap;">${message}</div>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="color: #475569;">Best regards,<br/><strong>Threesha</strong></p>
      </div>
    `,
  });
}

module.exports = { sendContactNotification };
