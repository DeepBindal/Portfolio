import { sidebarLinks } from "../constants";

function Footer() {

  return (
    <section className='bottombar'>
      <div className='bottombar_container'>
        {sidebarLinks.map((link) => {
          return (
            <a
              href={link.link}
              key={link.label}
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
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Footer;