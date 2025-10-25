import { Resend } from 'resend';
import twilio from 'twilio';

// Initialize email service
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.EMAIL_FROM || 'reservations@pharaohhookah.com';
const toEmail = process.env.EMAIL_TO || 'your-email@example.com';

// Initialize SMS service
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number
const businessPhoneNumber = process.env.BUSINESS_PHONE_NUMBER; // Your business phone number to receive SMS

// Initialize clients
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const twilioClient = accountSid && authToken ? twilio(accountSid, authToken) : null;

// Helper function to send SMS
async function sendSMS(to, body) {
  if (!twilioClient) {
    console.warn('Twilio client not initialized - SMS not sent');
    return null;
  }
  
  try {
    return await twilioClient.messages.create({
      body: body,
      from: twilioPhoneNumber,
      to: to
    });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return null;
  }
}

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
    if (resend) {
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
    }

    // Send SMS to business
    if (businessPhoneNumber) {
      await sendSMS(
        businessPhoneNumber,
        `📅 New Reservation!\nName: ${name}\nPhone: ${phone}\nWhen: ${date} at ${time}\nParty: ${party} people`
      );
    }

    // Send confirmation to customer if email was provided
    if (email && resend) {
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

    // Send SMS confirmation to customer if phone number is provided
    if (phone) {
      await sendSMS(
        phone,
        `✅ Pharaoh Hookah: Hi ${name}, your reservation for ${party} on ${date} at ${time} is confirmed! We'll see you soon!`
      );
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
