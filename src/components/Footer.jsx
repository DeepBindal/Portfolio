import { Link } from "react-scroll";
import { sidebarLinks } from "../constants";

function Footer() {

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {sidebarLinks.map((link) => {
          return (
            <Link
              to={link.link}
              key={link.label}
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className={`bottombar_link `}
            >
              <img
                src={link.imgUrl}
                alt={link.label}
                width={16}
                height={16}
                className='object-contain'
              />

              <p className='text-subtle-medium text-white sm:hidden'>
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Footer;