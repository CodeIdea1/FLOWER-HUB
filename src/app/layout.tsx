import './/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})
export const metadata = {
  title: 'My Flowers',
  description: 'Discover an elegant collection of fresh and artificial flowers, crafted for every occasion to bring beauty, joy, and a touch of nature to your life.',
  icons: '/icon3.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}