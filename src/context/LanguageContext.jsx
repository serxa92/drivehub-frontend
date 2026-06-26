import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    navCars: "Cars",
    navFavorites: "Favorites",
    navContact: "Contact",

    heroEyebrow: "Premium used cars",
    heroTitle: "Drive what you love",
    heroText:
      "Handpicked performance and sport cars. Transparent details. Real drivers.",

    searchBrand: "Brand",
    allBrands: "All brands",

    searchMaxPrice: "Max price",
    anyPrice: "Any price",

    searchYear: "Year",
    anyYear: "Any year",

    searchCars: "Search cars",

    verifiedCars: "Verified cars",
    verifiedCarsText: "Checked and inspected",

    noHiddenFees: "No hidden fees",
    noHiddenFeesText: "What you see is what you pay",

    personalSupport: "Personal support",
    personalSupportText: "We're here to help",

    featured: "Featured",
    viewDetails: "View details",

    recentlyAdded: "Recently added",
    viewAllCars: "View all cars",
    contactEyebrow: "Contact",
contactTitle: "Let’s talk about your next car",
contactText:
  "Send us a message and we will help you with buying, selling or finding the right vehicle.",
contactPhone: "Phone",
contactLocation: "Location",
contactBoxTitle: "Personal support",
contactBoxText:
  "We review every request and guide you through the process with clear information and no pressure.",
formName: "Name",
formNamePlaceholder: "Your name",
formEmail: "Email",
formSubject: "Subject",
formSubjectPlaceholder: "Choose an option",
formSubjectBuy: "I want to buy a car",
formSubjectSell: "I want to sell my car",
formSubjectSupport: "I need support",
formMessage: "Message",
formMessagePlaceholder: "Tell us what you need...",
formSubmit: "Send message",
formRequired: "This field is required",
formNameMin: "Name must be at least 2 characters",
formEmailInvalid: "Enter a valid email",
formMessageMin: "Message must be at least 10 characters",
formSuccess: "Message sent successfully. We will contact you soon.",
  },

  es: {
    navCars: "Coches",
    navFavorites: "Favoritos",
    navContact: "Contacto",

    heroEyebrow: "Coches premium de ocasión",
    heroTitle: "Conduce lo que te apasiona",
    heroText:
      "Una selección de deportivos y vehículos de altas prestaciones con total transparencia.",

    searchBrand: "Marca",
    allBrands: "Todas las marcas",

    searchMaxPrice: "Precio máximo",
    anyPrice: "Cualquier precio",

    searchYear: "Año",
    anyYear: "Cualquier año",

    searchCars: "Buscar coches",

    verifiedCars: "Coches verificados",
    verifiedCarsText: "Inspeccionados y revisados",

    noHiddenFees: "Sin costes ocultos",
    noHiddenFeesText: "El precio es el precio",

    personalSupport: "Asesoramiento",
    personalSupportText: "Te acompañamos durante la compra",

    featured: "Destacado",
    viewDetails: "Ver detalles",

    recentlyAdded: "Últimos vehículos",
    viewAllCars: "Ver todos",
    contactEyebrow: "Contacto",
contactTitle: "Hablemos de tu próximo coche",
contactText:
  "Envíanos un mensaje y te ayudaremos a comprar, vender o encontrar el vehículo adecuado.",
contactPhone: "Teléfono",
contactLocation: "Ubicación",
contactBoxTitle: "Asesoramiento personal",
contactBoxText:
  "Revisamos cada solicitud y te guiamos durante el proceso con información clara y sin presión.",
formName: "Nombre",
formNamePlaceholder: "Tu nombre",
formEmail: "Email",
formSubject: "Asunto",
formSubjectPlaceholder: "Elige una opción",
formSubjectBuy: "Quiero comprar un coche",
formSubjectSell: "Quiero vender mi coche",
formSubjectSupport: "Necesito ayuda",
formMessage: "Mensaje",
formMessagePlaceholder: "Cuéntanos qué necesitas...",
formSubmit: "Enviar mensaje",
formRequired: "Este campo es obligatorio",
formNameMin: "El nombre debe tener al menos 2 caracteres",
formEmailInvalid: "Introduce un email válido",
formMessageMin: "El mensaje debe tener al menos 10 caracteres",
formSuccess: "Mensaje enviado correctamente. Contactaremos contigo pronto.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("drivehub-lang") || "en"
  );

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem("drivehub-lang", code);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);