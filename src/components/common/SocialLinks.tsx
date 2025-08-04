import { socialLinks } from '@/utils/data';
import { Link } from '@tanstack/react-router';

interface Props {
  classname?: string;
  iconsHeight: number;
  iconsWidth: number;
}

function SocialLinks({ classname = '', }: Props) {
  return (
    <div className={`flex items-center gap-4 ${classname}`}>
      {socialLinks.map(({ icon: Icon, path, label }) => (
        <Link
          key={label}
          to={path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${label} page`}
          className=" overflow-hidden hover:opacity-80 transition transform hover:scale-110 "
        >
          <Icon className="text-xl md:text-2xl" />
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
