import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DevStack from './components/DevStack'
import Journey from './components/Journey'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EasterEggTerminal from './components/EasterEggTerminal'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-paper)] font-body">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-signal)] focus:text-[var(--color-bg)] focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevStack />
        <Journey />
        <Services />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <EasterEggTerminal />
    </div>
  )
}
