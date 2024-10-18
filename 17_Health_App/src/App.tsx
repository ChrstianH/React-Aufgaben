import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KcalCalculator from "./components/KcalCalculator";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Blogs />
        <KcalCalculator />
      </main>
      <Footer />
    </div>
  );
}
