import React, { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface ContactDialogProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

export const ContactDialog: React.FC<ContactDialogProps> = ({
  children,
  triggerClassName,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const dialogContent = (
    <div className="bg-black text-white max-h-[80vh] overflow-y-auto">
      <ContactForm onClose={handleClose} />
    </div>
  );

  const sheetContent = (
    <div className="bg-black text-white overflow-y-auto">
      <ContactForm onClose={handleClose} />
    </div>
  );

  if (isDesktop) {
    return (
      <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild className={triggerClassName}>
            {children}
          </DialogTrigger>
          <DialogContent className="bg-black border-gray-800 text-white max-w-4xl max-h-[90vh] overflow-hidden p-0 rounded-[50px] [&>button]:hidden">
            {dialogContent}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className={triggerClassName}>
          {children}
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="bg-black border-gray-800 text-white w-screen p-0 rounded-t-[20px] inset-x-0 bottom-0 [&>button]:hidden max-h-[90vh] h-auto overflow-hidden"
        >
          {sheetContent}
        </SheetContent>
      </Sheet>
    </>
  );
};
