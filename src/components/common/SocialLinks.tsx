import { socialLinks } from '@/utils/data';
import { Link } from '@tanstack/react-router';

interface Props {
  classname?: string;
  iconsHeight: number;
  iconsWidth: number;
}

function SocialLinks({ classname = '', iconsHeight, iconsWidth }: Props) {
  return (
    <div className={`flex items-center gap-4 ${classname}`}>
      {socialLinks.map(({ icon, path, label }) => (
        <Link
          key={label}
          to={path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${label} page`}
          className="rounded-full overflow-hidden hover:opacity-80 transition transform hover:scale-110"
        >
          <img   
            src={icon}
            alt={label}
            style={{ height: `${iconsHeight}px`, width: `${iconsWidth}px` }}
            className="object-contain"
            onError={(e) => {
              e.currentTarget.src =
                'https://placehold.co/24x24/ff0000/ffffff?text=E';
            }}
          />
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
