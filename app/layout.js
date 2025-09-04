export const metadata = {
  title: 'STEMized — Focused STEM Learning',
  description: 'Learn STEM one focused topic at a time.'
}

import './globals.css'
import SearchBox from '../components/SearchBox'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <div className="header-content">
              <a className="brand" href="/">STEMized</a>
              <SearchBox />
            </div>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <span>Learn one thing well.</span>
          </div>
        </footer>
      </body>
    </html>
  )
}

