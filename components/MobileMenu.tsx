import { Menu } from "lucide-react";
import { LinkedInLogoIcon, NotionLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

import ModeToggle from "./ModeToggle";
import LanguageToggle from './LanguageToggle';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion } from "@/components/ui/accordion";
import { SocialLinks } from './SocialLinks';
import NavMenu from './NavMenu';
import { cn } from "@/lib/utils";
import Logo from "./Logo";

interface MobileMenuProps {
  home: string;
  about: string;
  contacts: string;
  tModeToggle: {
    lightLabel: string;
    darkLabel: string;
    systemLabel: string;
    toggleTheme: string;
  };
  tLanguageToggle: {
    english: string;
    polski: string;
    ukrainian: string;
    russian: string;
    changeLanguage: string;
  };
  className?: string;
}

export default function MobileMenu({
  home,
  about,
  contacts,
  tModeToggle,
  tLanguageToggle,
  className,
}: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className={cn("md:hidden", className)}>
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
        <SheetTitle><Logo variant="dialog"/></SheetTitle>
          <Accordion type="single" collapsible className="w-full">
            <LanguageToggle
              variant="accordion"
              englishLabel={tLanguageToggle.english}
              polishLabel={tLanguageToggle.polski}
              ukrainianLabel={tLanguageToggle.ukrainian}
              russianLabel={tLanguageToggle.russian}
              changeLanguageLabel={tLanguageToggle.changeLanguage}
            />
            <ModeToggle 
              variant="accordion"
              lightLabel={tModeToggle.lightLabel}
              darkLabel={tModeToggle.darkLabel}
              systemLabel={tModeToggle.systemLabel}
              toggleTheme={tModeToggle.toggleTheme}
            />
          </Accordion>
          <NavMenu 
            className='flex-col'
            home={home}
            about={about}
            contacts={contacts}
          />
        </nav>
        <SocialLinks 
          variant="sidebar"  
          className="flex flex-col justify-center items-center absolute bottom-10 right-10"
        />
      </SheetContent>
    </Sheet>
  );
}