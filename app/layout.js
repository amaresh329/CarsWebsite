import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";


const inter=Inter({subsets:["latin"]})

export const metadata = {
  title: "Vehiql",
  description: "Find your dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
      
      <Header/>
       <main className="min-h-screen">
        {children}
       </main>
       <footer className="bg-blue-50 py-12">
        <div className="conatiner mx-auto px-4 text-center text-gray-600">
          <p>An AI integrated cars website</p>
        </div>
       </footer>
        
      </body>
    </html>
  </ClerkProvider>
  );
}
