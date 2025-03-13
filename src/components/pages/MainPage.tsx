import Header from "../widgets/Header";
import ComputerMonitor from "../widgets/ComputerMonitor";
import Keyboard from "../fitures/keyboard/Keyboard";
import Footer from "../widgets/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mainContent">
        <ComputerMonitor />
        <Keyboard />
      </main>
      <Footer />
    </>
  );
}
