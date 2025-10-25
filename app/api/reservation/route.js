import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.EMAIL_FROM || 'reservations@pharaohhookah.com';
const toEmail = process.env.EMAIL_TO || 'your-email@example.com';

export async function POST(request) {
  try {
    const { name, phone, date, time, party, email } = await request.json();
    
    // Send email to business
    await resend.emails.send({
      from: `Pharaoh Hookah <${fromEmail}>`,
      to: [toEmail],
      subject: 'New Reservation Request',
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Party Size:</strong> ${party}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
      `,
    });

    // Send confirmation to customer if email was provided
    if (email) {
      await resend.emails.send({
        from: `Pharaoh Hookah <${fromEmail}>`,
        to: [email],
        subject: 'Reservation Confirmation',
        html: `
          <h2>Reservation Confirmed</h2>
          <p>Thank you, ${name}!</p>
          <p>Your reservation for ${party} on ${date} at ${time} has been received.</p>
          <p>We'll contact you at ${phone} if we need any additional information.</p>
          <p>We look forward to serving you at Pharaoh Hookah!</p>
        `,
      });
    }

    return new Response(
      JSON.stringify({ message: 'Reservation submitted successfully' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing reservation:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process reservation' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
