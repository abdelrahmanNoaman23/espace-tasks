import logo from './assets/logo.png';
import heroImage from './assets/hero.jpg';
import appOne from "./assets/carrikcare-cover.jpg";
import appTwo from "./assets/elections-cover.jpg";
import './App.css';

function App() {
  return (
    <>
      <header role="banner" className="navbar">
        <div className="container flex justify-between items-center">
          <a href="/" aria-label="eSpace homepage">
            <img src={logo} alt="eSpace Logo" className="w-36" name="eSpace logo " />
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex gap-6 text-base font-semibold">
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero relative text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})`, height: '80vh' }} role="region" aria-label="Hero">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Leading Digital Transformation</h1>
          <p className="text-lg max-w-xl text-white">Empowering organizations through innovative software and cutting-edge IT services.</p>
        </div>
      </section>

      <main role="main" className="container mt-12">
        <section id="services" aria-labelledby="services-heading" className="mb-16">
          <h2 id="services-heading" className="text-3xl font-bold border-b pb-2 mb-4">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white dark:bg-card p-6 rounded-lg shadow" aria-label="Custom Software Development">
              <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
              <p>Scalable, secure, and tailored solutions built to meet your business needs.</p>
            </article>
            <article className="bg-white dark:bg-card p-6 rounded-lg shadow" aria-label="DevOps and Cloud Solutions">
              <h3 className="text-xl font-semibold mb-2">DevOps & Cloud Solutions</h3>
              <p>Streamline your development processes and cloud infrastructure for optimal efficiency.</p>
            </article>
          </div>
        </section>
        <section id="why-us" aria-labelledby="why-us-heading" className="mb-16">
          <h2 id="why-us-heading" className="text-3xl font-bold border-b pb-2 mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-lg shadow">
              <svg className="w-12 h-12 mb-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p>Projects delivered on schedule, with agile iterations that keep you informed and in control.</p>
            </article>

            <article className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-lg shadow">
              <svg className="w-12 h-12 mb-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 4.5l7.5 15H4.5L12 4.5z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p>20+ years of experience across industries and technologies — we’ve seen it all and built it all.</p>
            </article>

            <article className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-lg shadow">
              <svg className="w-12 h-12 mb-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
              <p>We adopt modern frameworks, AI capabilities, and cloud-native practices to keep you ahead.</p>
            </article>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="mb-16">
          <h2 id="projects-heading" className="text-3xl font-bold border-b pb-2 mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <figure>
              <img src={appOne} alt="Carrikcare app interface" className="rounded-lg shadow" />
              <figcaption className="text-sm text-muted mt-2">Digitizing nurse shift assignments for healthcare providers.</figcaption>
            </figure>
            <figure>
              <img src={appTwo} alt="Elections.eg dashboard" className="rounded-lg shadow" />
              <figcaption className="text-sm text-muted mt-2">National Elections Authority official platform.</figcaption>
            </figure>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="mb-16">
          <h2 id="about-heading" className="text-3xl font-bold border-b pb-2 mb-4">About Us</h2>
          <article className="prose dark:prose-invert">
          <h3 className="text-2xl font-semibold mb-2">we always keep our promises</h3>
            <p>Over the past two decades our accomplishments and success stories have earned us partnerships with several governmental entities, companies and entrepreneurs. In fact, we have worked with names like Google, Vodafone, Etisalat, the Egyptian Government, the Saudi Government and many more organizations and entities. Each time we have delivered solutions to bring the visions of these organizations to life.

Aside from results that speak for themselves, there is another reason for why we are trusted by our clients: We always keep our promises.</p>
          </article>
          <article className="prose dark:prose-invert">
          <h3 className="text-2xl font-semibold mb-2">Results Speak for Themselves.</h3>
            <p>Because the realm of IT and digital products and services is as competitive as it is, we are proud of being the leading IT services provider in Egypt and the Middle East. It is something we have earned through two decades of helping businesses make an impact through digital transformation and by improving their digital processes.

No other discipline changes and evolves as quickly as Information Technology. Because of this fact, we take it upon ourselves to stay on top of trends and new technologies that help give our clients powerful, reliable and highly scalable web and mobile applications and solutions.

Regardless of what your organization needs, we make sure to uphold anything and everything we say we will do. We also know that quality isn’t the only concern and we know that things need to be done within budget and within a given timeframe. After all, we are here to facilitate your operations and not to delay them.

Whatever we do, we do with confidence; and that’s because we depend on a team of professionals who are at the heart of what has made eSpace the company that it is today. Aside from being as experienced as they are, every member of our team is understanding, cooperative, and uses their analytical and communication skills to work with their clients towards the desired outcomes. In fact, more than any other asset, it is our team that we depend on to realize our Vision and accomplish our Mission.</p>
          </article>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-3xl font-bold border-b pb-2 mb-4">Get In Touch</h2>
          <p className="mb-4">We'd love to hear about your next big idea. Reach out to us at:</p>
          <address className="not-italic">
            <a href="mailto:hello@espace.com.eg" className="text-accent hover:underline">hello@espace.com.eg</a>
          </address>
        </section>
      </main>

      <footer role="contentinfo" className="mt-20 bg-card border-t">
        <div className="container py-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted">
          <p>&copy; <time dateTime="2025">2025</time> eSpace Software Solutions</p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-4">
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
