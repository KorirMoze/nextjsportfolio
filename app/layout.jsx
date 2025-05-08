import "../styles/globals.css";

export const metadata = {
    title: "Korir's Portfolio",
    description: "Welcome to my portfolio!",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main>
          {children}
          </main>
          
        </body>
      </html>
    );
  }