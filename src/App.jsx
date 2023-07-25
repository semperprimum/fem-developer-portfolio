import { Links, Intro, Skills, Projects, Contact } from "./components";
export default function App() {
  return (
    <>
      <div className="wrapper">
        <header className="links">
          <Links />
        </header>
      </div>
      <main>
        <div className="wrapper">
          <Intro />
          <Skills />
          <Projects />
        </div>
        <Contact />
      </main>
    </>
  );
}
