import { useState } from 'react'
import type { FormEvent } from 'react'

const services = [
  {
    name: 'Signature Haircut',
    price: '$34',
    time: '45 min',
    description:
      'Classic scissor or clipper cut with a clean neckline, hot lather finish, and styling tips you can actually use at home.',
  },
  {
    name: 'Beard Trim & Line-Up',
    price: '$18',
    time: '25 min',
    description:
      'Shape, balance, and detail work for beards and mustaches, finished with a straight-edge cleanup around the cheeks and neck.',
  },
  {
    name: 'Cut + Beard Combo',
    price: '$48',
    time: '60 min',
    description:
      'Our most-booked appointment. A sharp haircut paired with beard shaping so you leave looking handled from every angle.',
  },
  {
    name: 'Hot Towel Razor Finish',
    price: '$22',
    time: '20 min',
    description:
      'A quiet reset with hot towels, lather, and a smooth razor finish. Great as an add-on before weddings, interviews, or date night.',
  },
]

const reasons = [
  'Barbers who listen before they cut',
  'Enough time in the chair to get the details right',
  'Straightforward booking by phone or appointment request',
  'Clean, dependable cuts that grow out well',
]

const gallery = [
  {
    title: 'Clean taper, no fuss',
    note: 'Natural texture left on top with a soft taper through the sides.',
    visualClass: 'gallery-swatch-1',
  },
  {
    title: 'Saturday beard reset',
    note: 'Line-up, shape, and hot towel finish before the weekend starts.',
    visualClass: 'gallery-swatch-2',
  },
  {
    title: 'Classic chair, modern detail',
    note: 'The kind of cut that still looks right on Monday morning.',
    visualClass: 'gallery-swatch-3',
  },
]

const hours = [
  ['Tuesday', '9:00 AM - 6:00 PM'],
  ['Wednesday', '9:00 AM - 6:00 PM'],
  ['Thursday', '9:00 AM - 7:00 PM'],
  ['Friday', '9:00 AM - 7:00 PM'],
  ['Saturday', '8:00 AM - 4:00 PM'],
  ['Sunday - Monday', 'Closed'],
]

const heroHighlights = [
  {
    title: 'Haircuts from $34',
    detail: 'Simple pricing for regular upkeep, beard trims, and combination visits.',
  },
  {
    title: 'Tuesday to Saturday',
    detail: 'Later hours on Thursday and Friday for after-work appointments.',
  },
  {
    title: 'Walk-ins welcome',
    detail: 'Call ahead if you are hoping to get in the same day.',
  },
]

const demoNotes = [
  {
    title: 'Services are easy to find',
    detail:
      'Customers can quickly understand what the business offers, what feels relevant to them, and what kind of visit to request.',
  },
  {
    title: 'Trust builds faster',
    detail:
      'Clear business information, consistent copy, and a polished presentation help a local company feel established and dependable.',
  },
  {
    title: 'Contacting the business takes less effort',
    detail:
      'Strong calls to action, visible phone details, and a simple request form make it easier for people to reach out and book.',
  },
]

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink-900)]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[18rem] bg-[linear-gradient(180deg,_rgba(236,221,203,0.68),_rgba(247,240,231,0))]"
      />

      <div className="border-b border-white/10 bg-[var(--ink-950)] text-[var(--paper)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-sm sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p className="tracking-[0.16em] text-[0.7rem] uppercase text-[var(--sand)]">
            Classic barbershop in Fairview since 1998
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/85">
            <a
              className="transition hover:text-white"
              href="tel:5550146612"
            >
              (555) 014-6612
            </a>
            <span className="hidden text-white/30 md:inline">|</span>
            <span>214 Maple Avenue, Fairview</span>
            <span className="hidden text-white/30 md:inline">|</span>
            <span>Walk-ins welcome when chairs are open</span>
          </div>
        </div>
      </div>

      <header className="border-b border-black/10 bg-[var(--paper)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[var(--ink-950)] text-[var(--paper)] shadow-[0_12px_30px_rgba(31,22,17,0.18)]">
              <span className="font-['Libre_Baskerville'] text-lg tracking-[0.2em]">
                HG
              </span>
            </span>
            <span>
              <span className="block font-['Libre_Baskerville'] text-2xl leading-none tracking-[0.04em]">
                Hair Guys
              </span>
              <span className="block text-xs uppercase tracking-[0.3em] text-[var(--ink-700)]">
                Classic cuts, good people
              </span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[var(--ink-800)] md:gap-6">
            <a className="transition hover:text-[var(--rust-600)]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[var(--rust-600)]" href="#about">
              Why Us
            </a>
            <a className="transition hover:text-[var(--rust-600)]" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-[var(--rust-600)]" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[var(--rust-600)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--rust-700)]"
          >
            Request appointment
          </a>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal-up">
              <p className="section-kicker">Hair Guys Barbershop</p>
              <h1 className="mt-5 max-w-3xl font-['Libre_Baskerville'] text-5xl leading-[1.02] text-[var(--ink-950)] sm:text-6xl lg:text-[4.25rem]">
                Classic cuts and beard trims in Fairview.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-700)]">
                Hair Guys is a straightforward neighborhood shop for clean
                haircuts, beard trims, and the kind of service that still feels
                personal. Book ahead, call for same-day openings, or stop in when
                the chairs are open.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--ink-950)] px-6 py-4 text-base font-bold text-[var(--paper)] transition hover:bg-[var(--ink-900)]"
                >
                  Request an appointment
                </a>
                <a
                  href="tel:5550146612"
                  className="inline-flex items-center justify-center rounded-md border border-[var(--ink-900)]/15 bg-white px-6 py-4 text-base font-bold text-[var(--ink-900)] transition hover:border-[var(--rust-600)] hover:text-[var(--rust-700)]"
                >
                  Call to book
                </a>
              </div>
            </div>

            <div className="relative reveal-up [animation-delay:140ms]">
              <div className="absolute -left-5 top-16 hidden h-44 w-10 overflow-hidden rounded-full border border-black/10 bg-white shadow-[0_18px_35px_rgba(31,22,17,0.12)] md:block">
                <div className="barber-pole h-full w-full" />
              </div>

              <div className="paper-card relative overflow-hidden p-6 sm:p-8">
                <p className="section-kicker">At the shop</p>
                <h2 className="mt-4 font-['Libre_Baskerville'] text-3xl leading-tight text-[var(--ink-950)]">
                  Hours and quick details
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-[var(--ink-700)]">
                  A simple local barbershop setup: dependable hours, fair pricing,
                  and room for regulars and first-timers alike.
                </p>

                <div className="mt-8 grid gap-3">
                  {hours.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between rounded-lg border border-black/8 bg-white px-4 py-3 text-sm"
                    >
                      <span className="font-semibold text-[var(--ink-900)]">{day}</span>
                      <span className="text-[var(--ink-700)]">{time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg border border-black/8 bg-[var(--paper-deep)] px-4 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--rust-700)]">
                    Good to know
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-800)]">
                    Best for classic cuts, tapers, beard trims, and regular cleanup visits.
                  </p>
                  <a
                    href="tel:5550146612"
                    className="mt-3 inline-flex text-sm font-bold text-[var(--rust-700)] transition hover:text-[var(--rust-800)]"
                  >
                    Call for same-day openings
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {heroHighlights.map((item, index) => (
              <div
                key={item.title}
                className="paper-card reveal-up px-5 py-5 [animation-delay:calc(120ms+var(--delay))]"
                style={{ ['--delay' as string]: `${index * 70}ms` }}
              >
                <p className="font-['Libre_Baskerville'] text-2xl leading-tight text-[var(--ink-950)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-700)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-18 lg:pt-10">
          <div className="max-w-2xl reveal-up">
            <p className="section-kicker">Services</p>
            <h2 className="mt-4 font-['Libre_Baskerville'] text-4xl text-[var(--ink-950)] sm:text-5xl">
              Built around everyday cuts, beard cleanups, and the occasional sharp occasion.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--ink-700)]">
              Straightforward pricing, enough time in the chair, and no guessing
              what you are paying for.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.name}
                className="paper-card reveal-up flex h-full flex-col [animation-delay:calc(120ms+var(--delay))]"
                style={{ ['--delay' as string]: `${index * 60}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rust-700)]">
                      {service.time}
                    </p>
                    <h3 className="mt-3 font-['Libre_Baskerville'] text-2xl text-[var(--ink-950)]">
                      {service.name}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[var(--sand-200)] px-3 py-2 text-sm font-bold text-[var(--ink-900)]">
                    {service.price}
                  </span>
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-7 text-[var(--ink-700)]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex text-sm font-bold text-[var(--rust-700)] transition hover:text-[var(--rust-800)]"
                >
                  Book this service
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="paper-card reveal-up bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,235,221,0.96))]">
              <p className="section-kicker">Why choose us</p>
              <h2 className="mt-4 font-['Libre_Baskerville'] text-4xl text-[var(--ink-950)] sm:text-5xl">
                Why locals keep coming back.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--ink-700)]">
                We keep things simple: a good haircut, a steady hand, and enough
                time to get it right. Most regulars want a cut that looks neat
                today and still makes sense two weeks from now, and that is what
                we aim for.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason, index) => (
                  <div
                    key={reason}
                    className="rounded-[1.5rem] border border-black/8 bg-white/80 p-4 reveal-up [animation-delay:calc(160ms+var(--delay))]"
                    style={{ ['--delay' as string]: `${index * 70}ms` }}
                  >
                    <p className="text-base leading-7 text-[var(--ink-800)]">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <article className="paper-card reveal-up [animation-delay:140ms]">
                <p className="section-kicker">Shop story</p>
                <h3 className="mt-4 font-['Libre_Baskerville'] text-3xl text-[var(--ink-950)]">
                  The old-school parts still matter.
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--ink-700)]">
                  Hot towels. Honest opinions. A barber who asks how the last cut
                  grew out before touching the clippers. Hair Guys was built to
                  feel familiar without getting stuck in the past.
                </p>
              </article>

              <article className="grid gap-5 md:grid-cols-2">
                <div className="paper-card reveal-up [animation-delay:220ms]">
                  <p className="section-kicker">What to expect</p>
                  <p className="mt-4 text-base leading-8 text-[var(--ink-700)]">
                    Appointments start on time, consultations stay practical, and
                    you will know exactly how to keep the cut looking right
                    between visits.
                  </p>
                </div>
                <div className="paper-card reveal-up [animation-delay:300ms]">
                  <p className="section-kicker">Good for</p>
                  <p className="mt-4 text-base leading-8 text-[var(--ink-700)]">
                    Regular maintenance, first professional cuts, wedding-week
                    cleanups, school photos, and last-minute beard rescues.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-18">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl reveal-up">
              <p className="section-kicker">Recent chair work</p>
              <h2 className="mt-4 font-['Libre_Baskerville'] text-4xl text-[var(--ink-950)] sm:text-5xl">
                The kind of work the shop is known for.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--ink-700)] reveal-up [animation-delay:120ms]">
              Clean shapes, sensible length, and finishes that still look right
              after the first day.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className="paper-card reveal-up overflow-hidden p-4 [animation-delay:calc(140ms+var(--delay))]"
                style={{ ['--delay' as string]: `${index * 90}ms` }}
              >
                <div className={`photo-shell ${item.visualClass}`}>
                  <div className="photo-label">
                    <span>Hair Guys</span>
                    <span>Fairview</span>
                  </div>
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-['Libre_Baskerville'] text-2xl text-[var(--ink-950)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--ink-700)]">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-18">
          <div className="overflow-hidden rounded-[2.5rem] border border-black/8 bg-[var(--ink-950)] shadow-[0_32px_90px_rgba(31,22,17,0.18)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden px-6 py-10 text-[var(--paper)] sm:px-8 sm:py-12 lg:px-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,165,84,0.3),_transparent_40%),linear-gradient(180deg,_rgba(255,255,255,0.06),_transparent_60%)]"
                />
                <div className="relative">
                  <p className="section-kicker text-[var(--sand)]">Contact & booking</p>
                  <h2 className="mt-4 font-['Libre_Baskerville'] text-4xl text-white sm:text-5xl">
                    Ready for a cleanup or a full reset?
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-8 text-white/76">
                    Send a quick request and we will usually confirm the same day
                    during shop hours. Prefer to talk it through? Give us a call.
                  </p>

                  <div className="mt-8 space-y-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--sand)]">
                        Visit us
                      </p>
                      <p className="mt-2 text-base leading-7 text-white/88">
                        214 Maple Avenue
                        <br />
                        Fairview, NY 10018
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--sand)]">
                        Reach us
                      </p>
                      <a
                        href="tel:5550146612"
                        className="mt-2 block text-base leading-7 text-white/88 transition hover:text-white"
                      >
                        (555) 014-6612
                      </a>
                      <a
                        href="mailto:hello@hairguysbarbershop.com"
                        className="block text-base leading-7 text-white/88 transition hover:text-white"
                      >
                        hello@hairguysbarbershop.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--sand)]">
                        Good to know
                      </p>
                      <p className="mt-2 text-base leading-7 text-white/88">
                        Cash, cards, and tap-to-pay accepted. Parking is easiest
                        behind Maple Market after 3 PM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--paper)] px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-[var(--ink-800)]">
                      Name
                      <input
                        type="text"
                        placeholder="Jordan Ellis"
                        className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-[var(--ink-900)] outline-none transition placeholder:text-[var(--ink-500)] focus:border-[var(--rust-500)] focus:ring-4 focus:ring-[rgba(187,100,56,0.14)]"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-[var(--ink-800)]">
                      Phone
                      <input
                        type="tel"
                        placeholder="(555) 014-6612"
                        className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-[var(--ink-900)] outline-none transition placeholder:text-[var(--ink-500)] focus:border-[var(--rust-500)] focus:ring-4 focus:ring-[rgba(187,100,56,0.14)]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-[var(--ink-800)]">
                      Service
                      <select className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-[var(--ink-900)] outline-none transition focus:border-[var(--rust-500)] focus:ring-4 focus:ring-[rgba(187,100,56,0.14)]">
                        <option>Signature Haircut</option>
                        <option>Beard Trim & Line-Up</option>
                        <option>Cut + Beard Combo</option>
                        <option>Hot Towel Razor Finish</option>
                      </select>
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-[var(--ink-800)]">
                      Preferred day
                      <select className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-base text-[var(--ink-900)] outline-none transition focus:border-[var(--rust-500)] focus:ring-4 focus:ring-[rgba(187,100,56,0.14)]">
                        <option>First available</option>
                        <option>Thursday evening</option>
                        <option>Friday evening</option>
                        <option>Saturday morning</option>
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-semibold text-[var(--ink-800)]">
                    Notes
                    <textarea
                      rows={5}
                      placeholder="Tell us what you usually get, how soon you need it, or whether this is your first visit."
                      className="rounded-[1.5rem] border border-black/10 bg-white px-4 py-3.5 text-base text-[var(--ink-900)] outline-none transition placeholder:text-[var(--ink-500)] focus:border-[var(--rust-500)] focus:ring-4 focus:ring-[rgba(187,100,56,0.14)]"
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[var(--rust-600)] px-6 py-4 text-base font-bold text-white transition hover:bg-[var(--rust-700)]"
                    >
                      Send booking request
                    </button>
                    <p className="text-sm leading-6 text-[var(--ink-600)]">
                      This demo form does not send anywhere. It is here to show the booking UI.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <p className="rounded-2xl border border-[var(--sage-300)] bg-[var(--sage-100)] px-4 py-3 text-sm font-semibold text-[var(--sage-800)]">
                      Thanks. In a live version, the shop would confirm your appointment by text or phone.
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-18">
          <div className="paper-card bg-[rgba(255,253,249,0.92)]">
            <div className="max-w-3xl">
              <p className="section-kicker">For Business Owners</p>
              <h2 className="mt-4 font-['Libre_Baskerville'] text-4xl text-[var(--ink-950)] sm:text-5xl">
                What this demo shows
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--ink-700)]">
                A one-page site like this can do a few important jobs well for a
                local business: explain the services clearly, help new customers
                feel comfortable, and make it easy to call or request an
                appointment without friction.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {demoNotes.map((note) => (
                <div
                  key={note.title}
                  className="rounded-[1.1rem] border border-black/8 bg-white px-5 py-5"
                >
                  <h3 className="font-['Libre_Baskerville'] text-2xl leading-tight text-[var(--ink-950)]">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-700)]">
                    {note.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/8 bg-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[var(--ink-700)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            Hair Guys Barbershop. Classic cuts, beard trims, and easy neighborhood booking.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-[var(--rust-700)]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[var(--rust-700)]" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-[var(--rust-700)]" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
