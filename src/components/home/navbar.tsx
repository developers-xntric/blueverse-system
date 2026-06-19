import { navLinks } from "@/components/home/homepage-data";

export function Navbar() {
  return (
    <nav aria-label="Primary" className="sr-only">
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
