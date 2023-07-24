import "@styles/globals.css";
import React from 'react'

export const metadata = {
    title: "Keeper App",
    description: "Take notes and keep it or delete it."
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout