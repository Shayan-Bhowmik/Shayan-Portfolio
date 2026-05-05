import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const contactCards = [
  { icon: Mail, label: 'Email', value: 'shayan.bhowmik05@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 - 9835116087' },
  { icon: MapPin, label: 'Location', value: 'India' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <SectionFrame id="contact" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Open to Opportunities and Conversations"
          description="Whether it's an internship, a collaboration, or just a conversation about tech — my inbox is always open."
        />

        <div className="grid gap-6">
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

              {/* Social links removed per user request */}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
