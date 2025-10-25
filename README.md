# Pharaoh Hookah & Cigar Lounge

A premium, responsive website for Pharaoh Hookah & Cigar Lounge featuring online reservations, menu, and gallery. Enjoy our welcoming atmosphere with free WiFi, making it a perfect spot to study after class. Catch all the live sports action on our big screens while you relax with our premium hookah selection.

## Features

- Responsive design for all devices
- Interactive image gallery
- Online reservation system with email confirmations
- Menu display with tabbed interface
- Contact information and business hours
- Free high-speed WiFi
- Great study environment
- Live sports on big screens

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Vercel account
- Resend API key (for email notifications)

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd pharaoh-hookah
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key
   EMAIL_FROM=reservations@yourdomain.com
   EMAIL_TO=pharaoh.hookah.cigar@gmail.com
   ```

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel Deployment

1. Push your code to a GitHub/GitLab repository
2. Sign in to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Add the following environment variables in Vercel:
   - `RESEND_API_KEY`: Your Resend API key
   - `EMAIL_FROM`: Sender email (e.g., reservations@yourdomain.com)
   - `EMAIL_TO`: Your business email for receiving reservations
5. Click "Deploy"

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |
| `EMAIL_FROM` | Sender email address | Yes |
| `EMAIL_TO` | Your business email for notifications | Yes |

## Technologies Used

- HTML5, CSS3, JavaScript
- [Next.js](https://nextjs.org/) - React framework
- [Resend](https://resend.com/) - Email API
- [Pikaday](https://pikaday.com/) - Date picker

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact JIDE LLC.

# Pharaoh Hookah

A modern, responsive website for Pharaoh Hookah & Cigar Lounge. Built and maintained by JIDE LLC.

## Features

- Mobile-responsive design
- Image gallery with lightbox
- Interactive reservation form
- Hours and location section
- Menu display

## Development

### Local Development

1. Clone the repository
2. Start the development server:
   ```bash
   npx serve -l 5173
   ```
   Then visit `http://localhost:5173`.

## About

This website was built and is maintained by JIDE LLC. For any technical inquiries or support, please contact JIDE LLC.

## License

All rights reserved  Pharaoh Hookah. Website built and maintained by JIDE LLC.
