"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let consented = false;
    if (typeof window !== "undefined") {
      try {
        if (localStorage.getItem("ml-cookie-consent") === "true") {
          consented = true;
        }
      } catch (e) {
        // Fallback to cookie if localStorage is unavailable
        if (document.cookie.includes("ml-cookie-consent=true")) {
          consented = true;
        }
      }
    }

    if (!consented) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = () => {
    setIsVisible(false);
    try {
      localStorage.setItem("ml-cookie-consent", "true");
    } catch (e) {
      // Fallback to cookie if localStorage is unavailable
      const d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie = `ml-cookie-consent=true;${expires};path=/;SameSite=Lax`;
    }
  };

  return (
    <div
      role="region"
      aria-label="Cookie Consent Banner"
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background shadow-[0_-2px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-3 md:flex-row md:gap-8">
        <p className="text-center text-sm text-foreground md:text-left">
          Usamos cookies para melhorar sua experiência no Mercado Livre. Consulte mais
          informações na nossa{" "}
          <a
            href="https://www.mercadolivre.com.br/privacidade#tech-and-cookies"
            className="text-primary hover:text-interactive-hover hover:underline"
          >
            Central de privacidade.
          </a>
        </p>
        <div className="flex w-full flex-shrink-0 items-center gap-4 md:w-auto">
          <Button
            variant="default"
            onClick={handleConsent}
            className="h-auto flex-1 whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-semibold md:flex-none"
          >
            Aceitar cookies
          </Button>
          <Button
            variant="outline"
            onClick={handleConsent}
            className="h-auto flex-1 whitespace-nowrap rounded-md border-primary bg-transparent px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 hover:text-primary md:flex-none"
          >
            Configurar cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;