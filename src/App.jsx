import { useRef } from 'react'
import './App.css'
import Header from './components/sections/header/Header'
import Hero from './components/sections/hero/Hero'
import HeroContent from './components/sections/hero/HeroContent'
import LocalBanner from './components/others/LocalBanner'
import Section from './components/global/Section'
import ServicesList from './components/sections/services/ServicesList'
import StepsList from './components/sections/steps/StepsList'
import ProjectsList from './components/sections/projects/ProjectsList'
import Contact from './components/sections/contact/Contact'
import ContactInfo from './components/sections/contact/ContactInfo'
import Footer from './components/sections/footer/Footer'

function App() {
    const formRef = useRef(null)

    const onForm = () => {
        formRef.current.scrollIntoView()
    }

    return (
    <>
        <Header />
        <main className="main">
            <Hero>
                <HeroContent onClick={onForm} />
                <ContactInfo />
            </Hero>
            <LocalBanner />
            <Section type={'services'}>
                <ServicesList />
            </Section>
            <Section type={'steps'}>
                <StepsList />
            </Section>
            <Section type={'projects'}>
                <ProjectsList />
            </Section>
            <Contact ref={formRef} />
        </main>
        <Footer />
    </>
    )
}

export default App
