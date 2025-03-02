import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className = '',
}) => {
  return (
    <nav className={`flex items-center font-retro text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li>
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="text-pixel-blue hover:text-pixel-darkBlue transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`${isLast ? 'text-pixel-black' : 'text-pixel-gray'}`}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <li className="text-pixel-gray px-1">{separator}</li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;