import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'Email', href: 'mailto:shayan.bhowmik05@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-card bg-secondary">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center lg:flex-row lg:px-8 lg:text-left">
        <p className="text-sm text-text-base/74">
          © 2026 Shayan Bhowmik. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-white transition-colors duration-300 hover:bg-accent/90"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}