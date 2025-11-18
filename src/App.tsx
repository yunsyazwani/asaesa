import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('we-are')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Set active section based on URL hash
    const hash = window.location.hash.replace('#', '') || 'we-are'
    setActiveSection(hash)

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '') || 'we-are'
      setActiveSection(newHash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="bg-brand-dark text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black" aria-label="Site">
        <div style={{
          padding: '0',
          marginTop: '5px',
          marginBottom: '5px',
          boxSizing: 'border-box',
          display: 'flex',
          height: '100%',
          width: '100%',
          border: '0 solid #ccc',
          borderRadius: '0',
          paddingRight: '27%',
          paddingLeft: '27%',
          background: 'rgba(15, 15, 15, 0)'
        }}>
          <ul className="list-none" style={{
            display: 'flex',
            direction: 'ltr',
            width: 'calc(100% + 8px)',
            marginLeft: '-4px',
            marginRight: '-4px',
            flexGrow: 1,
            justifyContent: 'center',
            height: 'calc(100% + 8px)',
            marginTop: '-4px',
            marginBottom: '-4px',
            flexWrap: 'wrap',
            minWidth: 'fit-content'
          }}>
            <li
              className="menu-item-wrapper"
              data-testid="menuItemDepth0"
              data-item-depth="0"
              data-is-current={activeSection === 'we-are'}
              aria-current={activeSection === 'we-are'}
              style={{ flexGrow: 'inherit' }}
            >
              <div className="menu-item-root-container" style={{ height: '100%' }}>
                <a
                  data-item-label="true"
                  data-testid="linkElement"
                  href="#we-are"
                  target="_self"
                  className={`menu-item-link block cursor-pointer ${activeSection === 'we-are' ? 'is-current-page' : ''}`}
                  style={{
                    padding: '10px',
                    marginLeft: '4px',
                    marginRight: '4px',
                    marginTop: '4px',
                    marginBottom: '4px',
                    border: '0',
                    borderRadius: '0',
                    background: 'rgba(247, 247, 247, 0)',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.08s linear',
                    color: activeSection === 'we-are' ? '#8B0000' : '#DB1D60'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== 'we-are') {
                      e.currentTarget.style.background = 'rgba(219, 29, 96, 0.52)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(247, 247, 247, 0)';
                    e.currentTarget.style.color = activeSection === 'we-are' ? '#8B0000' : '#DB1D60';
                  }}
                  tabIndex={0}
                >
                  <div className="menu-item-container" style={{ justifyContent: 'center', display: 'flex', height: '100%', alignItems: 'center' }}>
                    <span className="menu-item-label" style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'none',
                      fontStyle: 'normal',
                      transition: 'inherit',
                      whiteSpace: 'nowrap'
                    }}>WE ARE</span>
                  </div>
                </a>
              </div>
            </li>
            <li
              className="menu-item-wrapper"
              data-testid="menuItemDepth0"
              data-item-depth="0"
              data-is-current={activeSection === 'we-do'}
              aria-current={activeSection === 'we-do'}
              style={{ flexGrow: 'inherit' }}
            >
              <div className="menu-item-root-container" style={{ height: '100%' }}>
                <a
                  data-item-label="true"
                  data-testid="linkElement"
                  href="#we-do"
                  target="_self"
                  className={`menu-item-link block cursor-pointer ${activeSection === 'we-do' ? 'is-current-page' : ''}`}
                  style={{
                    padding: '10px',
                    marginLeft: '4px',
                    marginRight: '4px',
                    marginTop: '4px',
                    marginBottom: '4px',
                    border: '0',
                    borderRadius: '0',
                    background: 'rgba(247, 247, 247, 0)',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.08s linear',
                    color: activeSection === 'we-do' ? '#8B0000' : '#DB1D60'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== 'we-do') {
                      e.currentTarget.style.background = 'rgba(219, 29, 96, 0.52)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(247, 247, 247, 0)';
                    e.currentTarget.style.color = activeSection === 'we-do' ? '#8B0000' : '#DB1D60';
                  }}
                  tabIndex={0}
                >
                  <div className="menu-item-container" style={{ justifyContent: 'center', display: 'flex', height: '100%', alignItems: 'center' }}>
                    <span className="menu-item-label" style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'none',
                      fontStyle: 'normal',
                      transition: 'inherit',
                      whiteSpace: 'nowrap'
                    }}>WE DO</span>
                  </div>
                </a>
              </div>
            </li>
            <li
              className="menu-item-wrapper"
              data-testid="menuItemDepth0"
              data-item-depth="0"
              data-is-current={activeSection === 'we-hear'}
              aria-current={activeSection === 'we-hear'}
              style={{ flexGrow: 'inherit' }}
            >
              <div className="menu-item-root-container" style={{ height: '100%' }}>
                <a
                  data-item-label="true"
                  data-testid="linkElement"
                  href="#we-hear"
                  target="_self"
                  className={`menu-item-link block cursor-pointer ${activeSection === 'we-hear' ? 'is-current-page' : ''}`}
                  style={{
                    padding: '10px',
                    marginLeft: '4px',
                    marginRight: '4px',
                    marginTop: '4px',
                    marginBottom: '4px',
                    border: '0',
                    borderRadius: '0',
                    background: 'rgba(247, 247, 247, 0)',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.08s linear',
                    color: activeSection === 'we-hear' ? '#8B0000' : '#DB1D60'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== 'we-hear') {
                      e.currentTarget.style.background = 'rgba(219, 29, 96, 0.52)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(247, 247, 247, 0)';
                    e.currentTarget.style.color = activeSection === 'we-hear' ? '#8B0000' : '#DB1D60';
                  }}
                  tabIndex={0}
                >
                  <div className="menu-item-container" style={{ justifyContent: 'center', display: 'flex', height: '100%', alignItems: 'center' }}>
                    <span className="menu-item-label" style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'none',
                      fontStyle: 'normal',
                      transition: 'inherit',
                      whiteSpace: 'nowrap'
                    }}>WE HEAR</span>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="we-are" className="relative min-h-screen overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/1.avif')`,
            transform: `scale(${1 + scrollY * 0.0003})`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 pt-16">
          <h1 className="mb-8">
            <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#111113', fontWeight: 'bold', fontSize: '40px', letterSpacing: '0.4em' }}>ASA ESA</span>
            <br />
            <span className="text-white font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '120px' }}>FILMS</span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Tags */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <span>Film & Television</span>
            <span>Video Production</span>
            <span>Online Content</span>
          </div>
        </div>
      </section>

      {/* WE MAKE FILMS Section */}
      <section id="we-do" className="relative py-20 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-black"
          style={{
            transform: `scale(${1 + (scrollY - 800) * 0.0002})`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
            WE MAKE
            <br />
            <span className="text-brand-pink">FILMS</span>
          </h2>

          {/* Clapperboard Icon Placeholder */}
          <div className="flex justify-center mb-12">
            <div className="w-24 h-24 border-2 border-brand-pink rounded-lg flex items-center justify-center">
              <span className="text-brand-pink text-4xl">🎬</span>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gray-800 rounded overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Placeholder for gallery images */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-brand-dark overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${1 + (scrollY - 1600) * 0.0002})`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          {/* Video Player Placeholder */}
          <div className="max-w-4xl mx-auto aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span className="text-6xl">▶</span>
            </div>
          </div>

          {/* Video Info Panel */}
          <div className="max-w-4xl mx-auto mt-8 bg-brand-magenta/20 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Video Projects</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-pink rounded-full mr-3" />
                Short Films
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-pink rounded-full mr-3" />
                Corporate Advertising
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-pink rounded-full mr-3" />
                Music Videos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-pink rounded-full mr-3" />
                Documentaries
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-pink rounded-full mr-3" />
                Online Videos
              </li>
            </ul>
            <button className="mt-6 bg-brand-pink hover:bg-brand-magenta text-white px-8 py-3 rounded-full transition-colors duration-300">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* WE HEAR Section */}
      <section id="we-hear" className="relative py-20 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-brand-dark to-black"
          style={{
            transform: `scale(${1 + (scrollY - 2400) * 0.0002})`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            WE <span className="text-brand-pink">HEAR</span>
          </h2>

          <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
            Great ideas come from collaborative creativity. We've got you covered from{' '}
            <span className="text-brand-pink font-semibold">pre-production</span> to{' '}
            <span className="text-brand-pink font-semibold">post-production</span> anywhere in{' '}
            <span className="text-brand-pink font-semibold">Sarawak / Malaysia</span>. Let's talk!
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-brand-pink">CONTACT</span> US
            </h3>

            {/* Contact Icons */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all duration-300">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-all duration-300">
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-12">
            {['YouTube', 'TikTok', 'Facebook', 'Instagram', 'Vimeo'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-xs"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN US Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            transform: `scale(${1 + (scrollY - 3200) * 0.0002})`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-brand-pink">JOIN US</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-12">
            TO BECOME <span className="text-brand-pink">A / AN</span>
          </h3>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              'Production Assistant', 'Crew member', 'Light Supervisor', 'Producer',
              'Executive Producer', 'Director', 'Director of Photography', 'Development Producer',
              'Camera Operator', 'DOP', 'Makeup & Wardrobe', 'Production Producer',
              'Script', 'Scriptwriter', 'Storyboard Artist', 'Location Scout',
              'Director\'s Assistant', 'Art & Decors', 'Set Up',
              'Lighting Technician', 'Sound Dept.', 'Boom Operator',
              'Art Department Assistant', 'Standby Costume', 'Makeup Artist',
              'Hair Makeup Collaboration', 'Production Assistant or Graphic', 'Prop master',
              'Videographer / Cinematographer', 'Video Director', 'All Rounder',
              'Junior / Sound Mix.', 'Intern / Sound Mix.',
              'Anything Else', 'Interested?', 'Knowledge and teams are opportunity. Know the joy of each other'
            ].map((role, index) => (
              <div
                key={index}
                className="text-gray-300 hover:text-brand-pink transition-colors duration-300 cursor-pointer"
              >
                {role}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-brand-pink w-full max-w-md"
            />
            <button className="mt-4 bg-brand-pink hover:bg-brand-magenta text-white px-12 py-3 rounded-full transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Join the Talk Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-brand-dark to-black"
          style={{
            transform: `scale(${1 + (scrollY - 4000) * 0.0002})`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="text-brand-pink">Talk</span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our forum is a space for like-minded, passionate individuals to participate in conversations about{' '}
            <span className="text-white font-semibold">filmmaking techniques</span>,{' '}
            <span className="text-white font-semibold">film production tips</span>,{' '}
            <span className="text-white font-semibold">film industry trends</span> and more.
          </p>

          <button className="bg-brand-pink hover:bg-brand-magenta text-white px-12 py-4 rounded-full transition-colors duration-300 text-lg font-semibold">
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">
              <span className="text-gray-400">ASA ESA</span>
              <br />
              <span className="text-white">FILMS</span>
            </h3>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WIXSITE.COM ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
