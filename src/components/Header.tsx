import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { UserIcon } from "lucide-react";
import { use } from "react";
import { NavigationContext } from "@/lib/NavigationProvider";

const Header = () => {
  const { setIsMobileNavOpen } = use(NavigationContext);

  return (
    <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => setIsMobileNavOpen(true)}
            size="icon"
            className="md:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
          >
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>
          <div className="font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Chat with an AI consultant
          </div>
        </div>

        <div className="flex items-center">
          <UserIcon />
        </div>
      </div>
    </header>
  );
};
export default Header;
