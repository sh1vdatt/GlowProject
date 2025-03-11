import React from "react";
import "./globals.css";
import FadeEffect from "../fade-effect";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FadeEffect />
      </body>
    </html>
  );
}
