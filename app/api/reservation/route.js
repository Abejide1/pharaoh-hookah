import { Resend } from 'resend';

// Initialize email service
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.EMAIL_FROM || 'reservations@pharaohhookah.com';
const toEmail = process.env.EMAIL_TO || 'your-email@example.com';

// Initialize Resend client
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request) {
  try {
    const { name, phone, date, time, party, email } = await request.json();
    
    // Validate required fields
    if (!name || !phone || !date || !time || !party || !email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Send email to business
    if (!resend) {
      console.error('Resend client not initialized');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email to business
    await resend.emails.send({
      from: `Pharaoh Hookah <${fromEmail}>`,
      to: [toEmail],
      subject: 'New Reservation Request',
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Party Size:</strong> ${party}</p>
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
          <p>Your reservation for ${party} people on ${date} at ${time} has been received.</p>
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
