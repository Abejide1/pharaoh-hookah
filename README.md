# Pharaoh Hookah & Cigar Lounge

A premium, responsive website for Pharaoh Hookah & Cigar Lounge featuring online reservations, menu, and gallery.

## Features

- Responsive design for all devices
- Interactive image gallery
- Online reservation system with email confirmations
- Menu display with tabbed interface
- Contact information and business hours

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
   EMAIL_TO=your-email@example.com
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

For any questions or support, please contact us at [your-email@example.com](mailto:your-email@example.com) — Static Website

A premium, responsive static website for the Pharaoh Hookah & Cigar Lounge.

## Getting Started

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
# macOS simple server options
python3 -m http.server 5173
# or
npx serve -l 5173
```

Then visit `http://localhost:5173`.

## Customize

- Update copy in `index.html` (address, hours, menu items, prices).
- Replace images in `index.html` gallery with your own assets.
- Swap `assets/img/logo.svg` and add `assets/img/social-card.png` for link previews.
- Colors and theme live in `assets/css/styles.css` under `:root` variables.

## Hosting

This site is static—host on any provider: GitHub Pages, Netlify, Vercel, S3, etc.

Forms are preconfigured for Netlify (`data-netlify="true"`). If not using Netlify, wire the forms to your backend or a form service.

## License

All rights reserved © Pharaoh Hookah. Replace Unsplash demo images for production use.


