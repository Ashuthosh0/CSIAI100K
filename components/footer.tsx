import Link from "next/link"
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About CSI", href: "/about" },
  { name: "Learning Path", href: "/learning" },
  { name: "Certification", href: "/certificate" },
  { name: "Gallery", href: "/gallery" },
]

const resources = [
  { name: "AI Fundamentals", href: "/learning" },
  { name: "Machine Learning", href: "/learning" },
  { name: "Deep Learning", href: "/learning" },
  { name: "Gen AI & LLMs", href: "/learning" },
  { name: "AI Ethics", href: "/learning" },
]

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { name: "X", icon: XIcon, href: "https://x.com/SocietyOf76433" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/computer-society-of-india-hyderabad-chapter" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/csi_hyderabad/" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9">

              </div>
              <span className="text-lg font-semibold text-white">CSI AI100K</span>
            </Link>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              World's Largest AI Readiness Program - Empowering 100,000+ learners to become AI-ready by 2026.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">AI 100K Session</h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">Computer Society of India, Hyderabad Chapter</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:ai100k@csi-india.org"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  ai100k@csihydchapter.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 96664 84891
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Computer Society of India. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
