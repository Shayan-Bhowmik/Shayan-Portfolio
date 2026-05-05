import { Github, Linkedin, Mail, Code } from 'lucide-react';

function MediumIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="50%" y="52%" fill="currentColor" fontSize="18" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" dominantBaseline="central">M</text>
    </svg>
  );
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/Shayan-Bhowmik', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shayan-bhowmik-227808321/', icon: Linkedin },
  { label: 'Email', href: 'mailto:shayan.bhowmik05@gmail.com', icon: Mail },
  { label: 'Medium', href: 'https://medium.com/@shayan.bhowmik', icon: MediumIcon },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Shayan_Bhowmik/', icon: Code },
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