export const metadata = {
  title: 'Travel Journal',
  description: 'Developed by Navneet Krishna',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
