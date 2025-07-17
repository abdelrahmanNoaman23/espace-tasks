// app/layout.js
import './globals.css';
import { ThemeProvider } from '../contexts/index';

export const metadata = {
  title: 'My Game App',
  description: 'React to NextJS with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
