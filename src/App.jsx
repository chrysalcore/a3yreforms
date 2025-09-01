import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import LocalBanner from './components/LocalBanner'
import Services from './sections/Services'
import Steps from './sections/Steps'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
    return (
    <>
        <Header />
        <LocalBanner />
        <main className="main">
            <Hero />
            <Services />
            <Steps />
            <Projects />
            {/* <section className="about section">
                <header className="section-header">
                    <h2 className="section-header__title">Connect Your Way, Anytime</h2>
                    <p className="section-header__desc">Digital convenience meets expert advice. Start your renovation journey instantly</p>
                </header>
                <ul className="about-list">
                    <li className="about-list__item">
                        <div className="about-card">
                            <img src="assets/imgs/hero-bg-small.webp" alt="membership image" className="about-card__img" />
                            <div className="about-card__text">
                                <h3 className="about-card__name">Antonio Jomarrón</h3>
                                <p className="about-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="about-list__item">
                        <div className="about-card">
                            <img src="assets/imgs/hero-bg-small.webp" alt="membership image" className="about-card__img" />
                            <div className="about-card__text">
                                <h3 className="about-card__name">Yandro Pérez</h3>
                                <p className="about-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="about-list__item">
                        <div className="about-card">
                            <img src="assets/imgs/hero-bg-small.webp" alt="membership image" className="about-card__img" />
                            <div className="about-card__text">
                                <h3 className="about-card__name">Yorlay Cabrera</h3>
                                <p className="about-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                    <li className="about-list__item">
                        <div className="about-card">
                            <img src="assets/imgs/hero-bg-small.webp" alt="membership image" className="about-card__img" />
                            <div className="about-card__text">
                                <h3 className="about-card__name">Yudiel Corona</h3>
                                <p className="about-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section> */}
            <Contact />
        </main>
        <Footer />
    </>
    )
}

export default App
