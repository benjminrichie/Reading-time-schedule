import './globals.css';

export const metadata = {
  title: 'Page by Page | Reading Schedule',
  description: 'Plan how much time to read each day and finish your handout on schedule.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
       {children}
      </body>
    </html>
  );
}