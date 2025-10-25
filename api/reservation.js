const { Resend } = require('resend');

// Initialize email service
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.EMAIL_FROM || 'reservations@pharaohhookah.com';
const toEmail = process.env.EMAIL_TO || 'your-email@example.com';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, date, time, party, email } = req.body;
    
    // Validate required fields
    if (!name || !phone || !date || !time || !party || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Reservation from ${name}`,
      html: `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Party Size:</strong> ${party}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.status(200).json({ message: 'Reservation submitted successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
