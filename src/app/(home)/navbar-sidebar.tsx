import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode
}

interface NavbarSidebarProps {
  items: NavbarItemProps[]
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
      >
        <SheetHeader className="p-4 border-b">
          <div className="flex item-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex h-full flex-col gap-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2"
            >
              {item.children}
            </a>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  ) 
}