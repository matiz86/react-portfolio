import {
  Header,
  Footer,
  Home,
  About,
  Clients,
  Contacts,
  Portfolio,
  Services,
  Skills,
} from "./assets/components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Clients />
        <Contacts />
        <Portfolio />
        <Services />
        <Skills />
        <div className="container">
          <h1>React Portfolio</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
