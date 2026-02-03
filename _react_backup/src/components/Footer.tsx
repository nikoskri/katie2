const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-heading text-lg text-foreground">Elena Voice</span>
          <span className="text-muted-foreground font-body">© {currentYear}</span>
        </div>
        
        <div className="flex gap-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Instagram
          </a>
          <a
            href="https://voices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Voices.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
