import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Entreprise Pro",
  description: "Site professionnel moderne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-night text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
