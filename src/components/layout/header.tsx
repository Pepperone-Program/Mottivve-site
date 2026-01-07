'use client';

import { useState, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from 'next';
import Image from "next/image";
import Button from "../ui/button";

interface NavigationItem {
  to: Route;
  label: string;
}

const Header = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Check if current route is active
  const isActiveRoute = useCallback((path: string) => {
    return pathname === path;
  }, [pathname]);

  // Route mapping for Next.js
  const getRouteByName = (name: string): Route => {
    const routes: Record<string, Route> = {
      'home': '/' as Route,
      'login': 'https://mottivve.lojavirtualnuvem.com.br/account/login/' as Route,
      'register': '/register' as Route
    };
    return routes[name] || ('/' as Route);
  };

  // Navigation items
  const getNavigationRoutes = (): NavigationItem[] => {
    return [
      { to: '/' as Route, label: 'Home' },
      { to: '/about' as Route, label: 'Sobre' },
      { to: 'https://mottivve.lojavirtualnuvem.com.br' as Route, label: 'Loja' },
      { to: '/contact' as Route, label: 'Contato' }
    ];
  };

  const navigationItems = getNavigationRoutes();

  return (
    <header role="banner">
      <nav className="relative bg-white" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="relative flex h-24 items-center">
            {/* Logo */}
            <Link className="inline-block" href={getRouteByName('home')} aria-label="Mottivve - Home">
              <Image
                className="h-10"
                src="/images/MOTTIVVE_LOGOMARCA_01.png"
                alt="Mottivve logo"
                width={180}
                height={20}
              />
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center justify-center h-10 w-10 ml-auto bg-gradient-to-b from-blue-500 to-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3 5H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3 19H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.to}
                  className={`inline-block hover:text-blue-500 ${index < navigationItems.length - 1 ? 'mr-10' : ''} font-medium transition duration-200 focus:outline-none focus:underline ${isActiveRoute(item.to) ? 'text-blue-500' : ''}`}
                  href={item.to}
                  aria-current={isActiveRoute(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden lg:block ml-auto">
              <Link
                className="inline-flex items-center justify-center h-10 mr-4 px-4 text-center leading-loose text-sm text-gray-700 hover:text-blue-500 font-semibold transition duration-200 focus:outline-none focus:underline"
                href={getRouteByName('login')}
              >
                Login
              </Link>
              <Button
                className="inline-flex items-center justify-center h-10 px-4 text-center leading-loose text-sm text-gray-700 hover:text-blue-500 font-semibold border border-gray-200 hover:border-blue-600 shadow-sm hover:shadow-none rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => window.location.href='https://mottivve.lojavirtualnuvem.com.br/'}
              >
                Acessar loja
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${mobileMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-blue-200 opacity-70"
            onClick={closeMobileMenu}
            aria-hidden="true"
          ></div>

          {/* Menu panel */}
          <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto" role="navigation">
            {/* Header */}
            <div className="flex mb-auto items-center">
              <Link
                className="inline-block mr-auto"
                href={getRouteByName('home')}
                onClick={closeMobileMenu}
                aria-label="Mottivve - Home"
              >
                <Image
                  className="h-10"
                  src="/images/MOTTIVVE_LOGOMARCA_01.png"
                  alt="Mottivve logo"
                  width={180}
                  height={20}
                />
              </Link>
              <button
                className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <div className="py-12 mb-auto">
              <ul className="flex-col space-y-6" role="list">
                {navigationItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      className={`inline-block text-lg font-medium transition duration-200 focus:outline-none focus:underline ${isActiveRoute(item.to) ? 'text-blue-500' : 'text-black hover:text-blue-500'}`}
                      href={item.to}
                      onClick={closeMobileMenu}
                      aria-current={isActiveRoute(item.to) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Auth buttons */}
            <div className="space-y-4">
              <Link
                className="flex items-center justify-center h-10 px-4 text-center text-sm text-gray-800 font-semibold border border-gray-200 hover:bg-gray-100 shadow-sm rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                href='https://mottivve.lojavirtualnuvem.com.br/account/login/'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <Link
                className="flex items-center justify-center h-10 px-4 text-center text-sm text-white font-semibold border border-blue-600 bg-blue-500 hover:bg-blue-500 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                href='https://mottivve.lojavirtualnuvem.com.br'
                onClick={closeMobileMenu}
              >
                Acessar loja
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;