import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const contactCards = [
  { icon: Mail, label: 'Email', value: 'shayan.bhowmik05@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 014-2026' },
  { icon: MapPin, label: 'Location', value: 'New York, NY' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 20) nextErrors.message = 'Add a little more detail.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setErrors({});
  };

  return (
    <SectionFrame id="contact" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out for roles, collaborations, or project discussions"
          description="The form is validated locally and the contact details are surfaced clearly for direct outreach."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-[1.75rem] border border-deep bg-secondary p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
            >
              <h3 className="text-2xl font-semibold text-text-base">Contact details</h3>
              <div className="mt-6 space-y-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.label} className="flex items-start gap-4 rounded-2xl bg-card p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-text-base/58">{card.label}</p>
                        <p className="mt-1 text-base text-text-base/86">{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-white transition-colors duration-300 hover:bg-accent/90"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-white transition-colors duration-300 hover:bg-accent/90"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:shayan.bhowmik05@gmail.com"
                  aria-label="Send email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-white transition-colors duration-300 hover:bg-accent/90"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="rounded-[1.75rem] border border-deep bg-secondary p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)] lg:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
              <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            </div>

            <div className="mt-5">
              <Field label="Company" name="company" value={formData.company} onChange={handleChange} optional />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-text-base/80" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-2xl border bg-card px-4 py-3 text-base text-text-base outline-none transition-colors duration-200 placeholder:text-text-base/30 focus:border-accent ${
                  errors.message ? 'border-red-400' : 'border-deep'
                }`}
                placeholder="Describe the role, project, or timeline you have in mind."
              />
              {errors.message ? <p className="mt-2 text-sm text-red-300">{errors.message}</p> : null}
            </div>

            {submitted ? (
              <p className="mt-5 rounded-2xl border border-accent/35 bg-accent/10 px-4 py-3 text-sm text-text-base">
                Message prepared successfully. Replace this placeholder with your preferred form
                backend or mail service.
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </SectionFrame>
  );
}

function Field({ label, optional = false, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-base/80" htmlFor={props.name}>
        {label}
        {optional ? <span className="ml-2 text-text-base/45">Optional</span> : null}
      </label>
      <input
        {...props}
        id={props.name}
        className={`w-full rounded-2xl border bg-card px-4 py-3 text-base text-text-base outline-none transition-colors duration-200 placeholder:text-text-base/30 focus:border-accent ${
          error ? 'border-red-400' : 'border-deep'
        }`}
      />
      {error ? <p className="mt-2 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}