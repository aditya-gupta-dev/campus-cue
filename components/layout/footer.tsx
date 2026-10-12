import Link from "next/link";
import { Compass, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Separator />
        <div className="footer-main">
          <div>
            <Link href="/" className="wordmark">
              <Compass aria-hidden="true" />
              CampusCue.
            </Link>
            <p>A little awareness. A clearer next step.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/help">Practice a scenario</Link>
            <Link href="/contacts">Explore contacts</Link>
            <Link href="/locations">Find a location</Link>
            <Link href="/about">
              About the project
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CampusCue · Student project P22</span>
          <span>Educational prototype. No emergency service integration.</span>
        </div>
      </div>
    </footer>
  );
}
