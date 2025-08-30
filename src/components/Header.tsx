import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Politics", path: "/politics" },
    { name: "Sports", path: "/sports" },
    { name: "Tech", path: "/tech" },
    { name: "Opinion", path: "/opinion" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b-2 border-primary bg-background sticky top-0 z-50 aged-paper">
      <div className="container mx-auto px-4">
        {/* Decorative top border */}
        <div className="border-t-4 border-double border-primary pt-2">
          
          {/* Publication info */}
          <div className="text-center py-2 border-b border-muted-foreground">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Established 1892 • Issue #{Math.floor(Math.random() * 1000) + 1} • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Main header */}
          <div className="text-center py-6">
            <Link to="/" className="block">
              <h1 className="newspaper-header text-6xl md:text-8xl text-primary mb-2">
                THE HERALD
              </h1>
              <p className="text-sm italic text-muted-foreground border-t border-b border-muted-foreground py-1 max-w-md mx-auto">
                "All the News That's Fit to Print"
              </p>
            </Link>
          </div>

          {/* Top navigation bar */}
          <div className="flex items-center justify-between py-2 border-y-2 border-double border-primary">
            <div className="text-xs text-muted-foreground">
              PRICE: $2.50
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-xs uppercase tracking-wider">
                <Search className="h-3 w-3 mr-1" />
                Search
              </Button>
              <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider vintage-border">
                Subscribe
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground">
              WEATHER: 72°F
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className={`pb-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
            <div className="border-y border-primary py-2">
              <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-2 md:space-y-0">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                        isActive(item.path)
                          ? "text-primary bg-muted"
                          : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;