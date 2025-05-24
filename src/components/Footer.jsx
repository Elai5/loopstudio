import { assets } from '../assets/assets';

const Footer = () => {
  const footerProps = {
    logo: assets.logo,
    socialIcons: [
      { src: assets.facebook, alt: 'Facebook' },
      { src: assets.twitter, alt: 'Twitter' },
      { src: assets.pinterest, alt: 'Pinterest' },
      { src: assets.instagram, alt: 'Instagram' },
    ],
    secondaryNav: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Products', href: '#' },
      { name: 'Support', href: '#' },
    ],
  };

  return (
    <footer className="footer bg-black text-white px-20 lg:px-40 py-20 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
      <section className="footer-section flex flex-col items-center lg:items-start gap-8 lg:gap-6">
        <div className="footer-logo">
          <img
            src={footerProps.logo}
            alt="Loopstudios Logo"
            className="logo w-50 h-auto"
          />
        </div>
        <nav
          className="secondary-nav"
          aria-label="Secondary Navigation"
          role="navigation"
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 text-center lg:text-left">
            {footerProps.secondaryNav.map((item, index) => (
              <li key={index} className="footer-item lg:p-0 sm:p-2">
                <a href={item.href} className="footer-item-link text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="social-icons flex flex-col items-center lg:items-end gap-6 font-alata">
        <ul className="flex gap-5">
          {footerProps.socialIcons.map((icon, index) => (
            <li key={index}>
              <a href="#" className="social-icon">
                <img src={icon.src} alt={icon.alt} className="w-6 h-auto" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 text-sm">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
