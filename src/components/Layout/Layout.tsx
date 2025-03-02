import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

interface NavCategory {
  title: string;
  items: Array<{
    path: string;
    label: string;
  }>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Forms",
    "Feedback",
    "Layout",
  ]);

  const navCategories: NavCategory[] = [
    {
      title: "Forms",
      items: [
        { path: "/input", label: "Input" },
        { path: "/select", label: "Select" },
        { path: "/calendar", label: "Calendar" },
      ],
    },
    {
      title: "Feedback",
      items: [
        { path: "/alert", label: "Alert" },
        { path: "/modal", label: "Modal" },
        { path: "/accordion", label: "Accordion" },
      ],
    },
    {
      title: "Layout",
      items: [
        { path: "/button", label: "Button" },
        { path: "/badge", label: "Badge" },
        { path: "/card", label: "Card" },
        { path: "/avatar", label: "Avatar" },
        { path: "/breadcrumbs", label: "Breadcrumbs" },
        { path: "/carousel", label: "Carousel" },
        { path: "/chat-bubble", label: "Chat Bubble" },
      ],
    },
    {
      title: "Data Visualization",
      items: [
        { path: "/chart", label: "Chart" },
        { path: "/table", label: "Table" },
      ],
    },
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex min-h-screen bg-pixel-white">
      {/* Sidebar */}
      <div className="w-64 border-r-4 border-pixel-darkGray">
        <div className="p-6">
          <Link to="/" className="block">
            <h1 className="text-2xl font-pixel text-pixel-black mb-6 hover:text-pixel-blue transition-colors">
              ArcadeUI
            </h1>
          </Link>
          <nav className="space-y-4">
            {navCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between font-pixel text-sm text-pixel-black hover:text-pixel-blue transition-colors"
                >
                  <span>{category.title}</span>
                  <span className="font-retro">
                    {expandedCategories.includes(category.title) ? "-" : "+"}
                  </span>
                </button>
                {expandedCategories.includes(category.title) && (
                  <div className="space-y-1 pl-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block font-retro text-sm p-2 border-2 transition-all ${
                          location.pathname === item.path
                            ? "bg-pixel-blue text-pixel-white border-pixel-darkBlue transform -translate-y-0.5"
                            : "border-pixel-darkGray hover:bg-pixel-gray/10 hover:transform hover:-translate-y-0.5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
