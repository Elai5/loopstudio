import { assets } from '../assets/assets';

export default function Footer() {
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
  }

  return (
    <footer className='footer bg-black text-white md:px-40 py-20 sm:px-20 flex md:flex-row sm:flex-col justify-between items-center md:gap-0 sm:gap-10'>
      <section className='footer-section flex flex-col md:items-start sm:items-center md:gap-6 sm:gap-8'>
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
          <ul className="flex md:flex-row sm:flex-col md:gap-8 sm:gap-2 md:text-left sm:text-center">
            {footerProps.secondaryNav.map((item, index) => (
              <li key={index} className='footer-item md:p-0 sm:p-2'>
                <a href={item.href} className="footer-item-link text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className='social-icons flex flex-col md:items-end sm:items-center gap-6 font-alata'>
        <ul className='flex gap-5'>
          {footerProps.socialIcons.map((icon, index) => (
            <li>
              <a href="#" key={index} className="social-icon">
                <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
        <p className='text-gray-400 text-sm'>© 2021 Loopstudios. All rights reserved.</p>
      </section>
    </footer>
  );
};
