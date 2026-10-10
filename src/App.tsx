import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { experiences, gallery, models, photos, type Photo } from './content'

type ImageProps = Photo & {
  className?: string
  eager?: boolean
}

function EditorialImage({ src, fallback, alt, className = '', eager = false }: ImageProps) {
  const [phase, setPhase] = useState(0)
  const imageSrc = phase === 0 ? src : fallback

  if (phase >= 2 || !imageSrc) {
    return (
      <div role="img" aria-label={alt} className={className + ' image-unavailable'}>
        <span>PORSCHE / VISUAL STUDY</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      onError={() => setPhase((current) => current === 0 && fallback ? 1 : 2)}
    />
  )
}

const navItems = [
  { href: '#modelos', label: 'Modelos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#galeria', label: 'Galeria' },
]

function SectionHeading({ number, eyebrow, title, highlight }: {
  number: string
  eyebrow: string
  title: string
  highlight: string
}) {
  return (
    <div className="section-heading reveal">
      <div className="section-heading-top">
        <span className="eyebrow"><span className="eyebrow-line" /> {number} / {eyebrow}</span>
        <span className="section-icon" aria-hidden="true">↗</span>
      </div>
      <h2>{title}<br /><em>{highlight}</em></h2>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const lastGalleryTrigger = useRef<HTMLButtonElement | null>(null)

  const closeGallery = () => {
    setSelectedPhoto(null)
    requestAnimationFrame(() => lastGalleryTrigger.current?.focus())
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' })

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedPhoto === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery()
      if (event.key === 'ArrowRight') setSelectedPhoto((current) => current === null ? null : (current + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setSelectedPhoto((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedPhoto])

  const currentExperience = experiences[activeExperience]

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início — Porsche Concept">PORSCHE<span className="brand-period">.</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <span className="header-caption">INDEPENDENT CONCEPT <span>© 2026</span></span>
          <a className="header-explore" href="#modelos" aria-label="Explorar modelos">
            <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} strokeWidth={1.6} /> : <Menu size={24} strokeWidth={1.6} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={'mobile-nav' + (menuOpen ? ' mobile-nav-open' : '')} aria-label="Navegação mobile" inert={!menuOpen}>
          {navItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={19} aria-hidden="true" />
            </a>
          ))}
          <span className="mobile-nav-note">PROJETO INDEPENDENTE · NÃO OFICIAL</span>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-photo">
            <EditorialImage {...photos.hero} eager alt="Porsche 911 GT3 RS preto em perfil, iluminado pela luz do pôr do sol" />
          </div>
          <div className="hero-shade" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-topline">
            <span><span className="indicator-dot" /> DESIGN. PRECISION. EMOTION.</span>
            <span>PORSCHE / 001</span>
          </div>
          <div className="hero-ghost" aria-hidden="true">911</div>
          <div className="hero-bottom">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> UMA VISÃO SOBRE O EXTRAORDINÁRIO</span>
              <h1 id="hero-title">A arte de<br /><em>desafiar</em> limites<span className="hero-dot">.</span></h1>
            </div>
            <div className="hero-side">
              <p>Algumas máquinas são feitas para se mover. Outras, para mover você.</p>
              <a className="primary-link" href="#modelos"><span>Explorar modelos</span><ArrowUpRight size={19} strokeWidth={1.6} aria-hidden="true" /></a>
            </div>
          </div>
          <a className="hero-scroll" href="#modelos" aria-label="Rolar até a seção de modelos">
            <span>SCROLL TO EXPLORE</span><ArrowDown size={16} strokeWidth={1.6} aria-hidden="true" />
          </a>
          <div className="hero-edition" aria-hidden="true">911 — A TIMELESS ICON</div>
        </section>

        <section className="models-section" id="modelos" aria-labelledby="models-title">
          <div className="section-wrap">
            <div className="models-intro">
              <SectionHeading number="01" eyebrow="A COLEÇÃO" title="Ícones em" highlight="movimento." />
              <p className="section-description reveal" id="models-title">Três interpretações de uma mesma obsessão: criar algo que você não apenas dirige — você sente.</p>
            </div>
            <div className="model-grid">
              {models.map((model, index) => (
                <article className={'model-card reveal' + (index === 0 ? ' model-card-featured' : '')} key={model.name}>
                  <div className="model-image">
                    <EditorialImage {...model.image} />
                    <div className="model-image-tone" />
                  </div>
                  <div className="model-card-top">
                    <span>{model.number} / {model.category}</span>
                    <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <div className="model-card-content">
                    <span className="model-meta">{model.fullName}</span>
                    <h3>{model.name}</h3>
                    <p>{model.description}</p>
                    <a className="text-link" href="#galeria" aria-label={'Ver ' + model.fullName + ' na galeria'}>
                      Descobrir mais <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="models-footnote reveal">
              <span>FORMA / EMOÇÃO / MOVIMENTO</span>
              <span>UMA PERSPECTIVA INDEPENDENTE</span>
            </div>
          </div>
        </section>

        <section className="manifesto-section" aria-label="Manifesto sobre experiência">
          <div className="manifesto-inner reveal">
            <span className="eyebrow"><span className="eyebrow-line" /> NÃO É APENAS SOBRE DIRIGIR</span>
            <p>Existem experiências que você vive.<br />E existem aquelas que <em>ficam em você.</em></p>
            <span className="manifesto-signature">THE ART OF DRIVING / A VISUAL STUDY</span>
          </div>
        </section>

        <section className="experience-section" id="experiencia" aria-labelledby="experience-title">
          <div className="section-wrap experience-wrap">
            <div className="experience-column">
              <div className="experience-intro reveal">
                <span className="eyebrow"><span className="eyebrow-line" /> 02 / ALÉM DA SUPERFÍCIE</span>
                <h2 id="experience-title">Tudo começa<br />com uma <em>sensação.</em></h2>
                <p>Design, engenharia e performance. Não como elementos isolados, mas como partes de uma única linguagem.</p>
              </div>
              <div className="experience-tabs reveal">
                {experiences.map((item, index) => (
                  <button
                    type="button"
                    className={'experience-tab' + (activeExperience === index ? ' experience-tab-active' : '')}
                    key={item.label}
                    aria-expanded={activeExperience === index}
                    onClick={() => setActiveExperience(index)}
                  >
                    <span className="experience-tab-number">{item.number}</span>
                    <span className="experience-tab-main">
                      <span className="experience-tab-title">{item.label}</span>
                      {activeExperience === index && <span className="experience-tab-description">{item.description}</span>}
                    </span>
                    {activeExperience === index ? <ChevronDown className="experience-chevron" size={19} aria-hidden="true" /> : <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="experience-visual reveal">
              <EditorialImage key={activeExperience} {...currentExperience.image} alt={currentExperience.image.alt} />
              <div className="experience-visual-shade" />
              <div className="experience-visual-top"><span>THE PORSCHE SPIRIT</span><span>0{activeExperience + 1} / 03</span></div>
              <div className="experience-visual-copy">
                <span className="eyebrow">{currentExperience.kicker}</span>
                <h3>{currentExperience.title}</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="galeria" aria-labelledby="gallery-title">
          <div className="section-wrap">
            <div className="gallery-intro">
              <SectionHeading number="03" eyebrow="GALERIA VISUAL" title="O extraordinário" highlight="em detalhes." />
              <p className="section-description reveal" id="gallery-title">Uma seleção de perspectivas, texturas e instantes que merecem um segundo olhar.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <button
                  type="button"
                  key={image.tag}
                  className={'gallery-item reveal' + (image.wide ? ' gallery-wide' : '')}
                  onClick={(event) => { lastGalleryTrigger.current = event.currentTarget; setSelectedPhoto(index) }}
                  aria-label={'Ampliar fotografia: ' + image.title}
                >
                  <EditorialImage src={image.src} fallback={image.fallback} alt={image.alt} />
                  <span className="gallery-image-shade" />
                  <span className="gallery-caption"><span><small>{image.tag}</small><strong>{image.title}</strong></span><span className="gallery-plus"><ArrowUpRight size={21} strokeWidth={1.5} aria-hidden="true" /></span></span>
                </button>
              ))}
            </div>
            <div className="gallery-endnote reveal"><span>AN OBSESSION WITH THE DETAILS</span><span>05 SELECTED FRAMES</span></div>
          </div>
        </section>

        <section className="outro-section" aria-labelledby="outro-title">
          <div className="outro-image"><EditorialImage {...photos.nocturne} /></div>
          <div className="outro-shade" />
          <div className="section-wrap outro-content reveal">
            <span className="eyebrow"><span className="eyebrow-line" /> O FIM É SÓ O COMEÇO</span>
            <h2 id="outro-title">A estrada<br /><em>continua.</em></h2>
            <a className="primary-link primary-link-light" href="#inicio"><span>Voltar ao início</span><ArrowUpRight size={19} aria-hidden="true" /></a>
          </div>
          <span className="outro-index">DRIVE THE FEELING — NEVER THE ORDINARY</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a href="#inicio" className="footer-brand" aria-label="Voltar para o início">PORSCHE<span>.</span></a>
          <a className="footer-external" href="https://www.porsche.com/" target="_blank" rel="noopener noreferrer">
            Visitar site oficial <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p><strong>PROJETO CONCEITUAL NÃO OFICIAL.</strong> Estudo independente de design e desenvolvimento web, sem afiliação, autorização ou endosso da Porsche AG. Marcas e fotografias pertencem a seus respectivos titulares.</p>
          <div><span>CONCEPT / 2026</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div>
        </div>
      </footer>

      {selectedPhoto !== null && (
        <div className="lightbox" onMouseDown={(event) => { if (event.target === event.currentTarget) closeGallery() }}>
          <div className="lightbox-content" role="dialog" aria-modal="true" aria-label={'Fotografia ampliada: ' + gallery[selectedPhoto].title}>
            <div className="lightbox-toolbar">
              <span>PORSCHE / IMAGE STUDY</span>
              <button ref={closeButton} type="button" className="lightbox-close" onClick={closeGallery} aria-label="Fechar fotografia"><X size={24} aria-hidden="true" /></button>
            </div>
            <div className="lightbox-image"><EditorialImage key={selectedPhoto} src={gallery[selectedPhoto].src} fallback={gallery[selectedPhoto].fallback} alt={gallery[selectedPhoto].alt} /></div>
            <div className="lightbox-bottom">
              <div><span>{gallery[selectedPhoto].tag}</span><strong>{gallery[selectedPhoto].title}</strong></div>
              <div className="lightbox-controls">
                <button type="button" aria-label="Fotografia anterior" onClick={() => setSelectedPhoto((selectedPhoto - 1 + gallery.length) % gallery.length)}><ArrowLeft size={20} aria-hidden="true" /></button>
                <span>{String(selectedPhoto + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>
                <button type="button" aria-label="Próxima fotografia" onClick={() => setSelectedPhoto((selectedPhoto + 1) % gallery.length)}><ArrowRight size={20} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
