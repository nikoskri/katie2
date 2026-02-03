import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">/ get in touch</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Let's bring your project to life.
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8">
              Have a project in mind? I'd love to hear about it. Reach out for rates, availability, or custom auditions.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:hello@elenavoice.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-body group"
              >
                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                hello@elenavoice.com
              </a>
              
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-body group"
              >
                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </span>
                +1 (234) 567-890
              </a>
              
              <div className="flex items-center gap-4 text-muted-foreground font-body">
                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </span>
                Los Angeles, California
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-body text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-body text-foreground mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body"
                >
                  <option value="">Select a category</option>
                  <option value="commercial">Commercial</option>
                  <option value="narration">Narration</option>
                  <option value="character">Character/Animation</option>
                  <option value="elearning">E-Learning</option>
                  <option value="audiobook">Audiobook</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-body text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
