import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <main className='container'>
        {children}
        </main>
        </body>
    </html>
  )
}
