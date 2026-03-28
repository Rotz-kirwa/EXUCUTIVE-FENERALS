import aboutTeam400Avif from "@/assets/adaptive/about-team-400.avif";
import aboutTeam800Avif from "@/assets/adaptive/about-team-800.avif";
import aboutTeam400Webp from "@/assets/adaptive/about-team-400.webp";
import aboutTeam800Webp from "@/assets/adaptive/about-team-800.webp";
import contactMap320Avif from "@/assets/adaptive/contact-map-320.avif";
import contactMap650Avif from "@/assets/adaptive/contact-map-650.avif";
import contactMap320Webp from "@/assets/adaptive/contact-map-320.webp";
import contactMap650Webp from "@/assets/adaptive/contact-map-650.webp";
import hero640Avif from "@/assets/adaptive/hero-funeral-640.avif";
import hero1024Avif from "@/assets/adaptive/hero-funeral-1024.avif";
import hero1600Avif from "@/assets/adaptive/hero-funeral-1600.avif";
import hero640Webp from "@/assets/adaptive/hero-funeral-640.webp";
import hero1024Webp from "@/assets/adaptive/hero-funeral-1024.webp";
import hero1600Webp from "@/assets/adaptive/hero-funeral-1600.webp";
import serviceBurial400Avif from "@/assets/adaptive/service-burial-400.avif";
import serviceBurial800Avif from "@/assets/adaptive/service-burial-800.avif";
import serviceBurial400Webp from "@/assets/adaptive/service-burial-400.webp";
import serviceBurial800Webp from "@/assets/adaptive/service-burial-800.webp";
import serviceCasket400Avif from "@/assets/adaptive/service-casket-400.avif";
import serviceCasket800Avif from "@/assets/adaptive/service-casket-800.avif";
import serviceCasket400Webp from "@/assets/adaptive/service-casket-400.webp";
import serviceCasket800Webp from "@/assets/adaptive/service-casket-800.webp";
import serviceFloral400Avif from "@/assets/adaptive/service-floral-400.avif";
import serviceFloral800Avif from "@/assets/adaptive/service-floral-800.avif";
import serviceFloral400Webp from "@/assets/adaptive/service-floral-400.webp";
import serviceFloral800Webp from "@/assets/adaptive/service-floral-800.webp";
import serviceHearse400Avif from "@/assets/adaptive/service-hearse-400.avif";
import serviceHearse800Avif from "@/assets/adaptive/service-hearse-800.avif";
import serviceHearse400Webp from "@/assets/adaptive/service-hearse-400.webp";
import serviceHearse800Webp from "@/assets/adaptive/service-hearse-800.webp";
import serviceMemorial400Avif from "@/assets/adaptive/service-memorial-400.avif";
import serviceMemorial800Avif from "@/assets/adaptive/service-memorial-800.avif";
import serviceMemorial400Webp from "@/assets/adaptive/service-memorial-400.webp";
import serviceMemorial800Webp from "@/assets/adaptive/service-memorial-800.webp";
import serviceTent400Avif from "@/assets/adaptive/service-tent-400.avif";
import serviceTent800Avif from "@/assets/adaptive/service-tent-800.avif";
import serviceTent400Webp from "@/assets/adaptive/service-tent-400.webp";
import serviceTent800Webp from "@/assets/adaptive/service-tent-800.webp";
import serviceTribute600Avif from "@/assets/adaptive/service-tribute-programs-600.avif";
import serviceTribute1200Avif from "@/assets/adaptive/service-tribute-programs-1200.avif";
import serviceTribute600Webp from "@/assets/adaptive/service-tribute-programs-600.webp";
import serviceTribute1200Webp from "@/assets/adaptive/service-tribute-programs-1200.webp";

export const heroMedia = {
  avif: [
    { src: hero640Avif, width: 640 },
    { src: hero1024Avif, width: 1024 },
    { src: hero1600Avif, width: 1600 },
  ],
  webp: [
    { src: hero640Webp, width: 640 },
    { src: hero1024Webp, width: 1024 },
    { src: hero1600Webp, width: 1600 },
  ],
  fallback: hero1024Webp,
};

export const aboutMedia = {
  avif: [
    { src: aboutTeam400Avif, width: 400 },
    { src: aboutTeam800Avif, width: 800 },
  ],
  webp: [
    { src: aboutTeam400Webp, width: 400 },
    { src: aboutTeam800Webp, width: 800 },
  ],
  fallback: aboutTeam800Webp,
};

export const contactMapMedia = {
  avif: [
    { src: contactMap320Avif, width: 320 },
    { src: contactMap650Avif, width: 650 },
  ],
  webp: [
    { src: contactMap320Webp, width: 320 },
    { src: contactMap650Webp, width: 650 },
  ],
  fallback: contactMap650Webp,
};

export const serviceMedia = {
  burial: {
    avif: [
      { src: serviceBurial400Avif, width: 400 },
      { src: serviceBurial800Avif, width: 800 },
    ],
    webp: [
      { src: serviceBurial400Webp, width: 400 },
      { src: serviceBurial800Webp, width: 800 },
    ],
    fallback: serviceBurial800Webp,
  },
  casket: {
    avif: [
      { src: serviceCasket400Avif, width: 400 },
      { src: serviceCasket800Avif, width: 800 },
    ],
    webp: [
      { src: serviceCasket400Webp, width: 400 },
      { src: serviceCasket800Webp, width: 800 },
    ],
    fallback: serviceCasket800Webp,
  },
  floral: {
    avif: [
      { src: serviceFloral400Avif, width: 400 },
      { src: serviceFloral800Avif, width: 800 },
    ],
    webp: [
      { src: serviceFloral400Webp, width: 400 },
      { src: serviceFloral800Webp, width: 800 },
    ],
    fallback: serviceFloral800Webp,
  },
  hearse: {
    avif: [
      { src: serviceHearse400Avif, width: 400 },
      { src: serviceHearse800Avif, width: 800 },
    ],
    webp: [
      { src: serviceHearse400Webp, width: 400 },
      { src: serviceHearse800Webp, width: 800 },
    ],
    fallback: serviceHearse800Webp,
  },
  memorial: {
    avif: [
      { src: serviceMemorial400Avif, width: 400 },
      { src: serviceMemorial800Avif, width: 800 },
    ],
    webp: [
      { src: serviceMemorial400Webp, width: 400 },
      { src: serviceMemorial800Webp, width: 800 },
    ],
    fallback: serviceMemorial800Webp,
  },
  tent: {
    avif: [
      { src: serviceTent400Avif, width: 400 },
      { src: serviceTent800Avif, width: 800 },
    ],
    webp: [
      { src: serviceTent400Webp, width: 400 },
      { src: serviceTent800Webp, width: 800 },
    ],
    fallback: serviceTent800Webp,
  },
  tributePrograms: {
    avif: [
      { src: serviceTribute600Avif, width: 600 },
      { src: serviceTribute1200Avif, width: 1200 },
    ],
    webp: [
      { src: serviceTribute600Webp, width: 600 },
      { src: serviceTribute1200Webp, width: 1200 },
    ],
    fallback: serviceTribute1200Webp,
  },
};
