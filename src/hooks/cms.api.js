import { useServerApi } from "./useServerApi";

// ================================================
//  ISR (Incremental Static Regeneration)
// ================================================

// Faq data
export async function getFaqData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/faqs",
  });
}

// ** Home Page

// hero section
export async function getHeroData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/homepage/top-section",
  });
}

// achivement section
export async function getAchivementData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/homepage/achivement-section",
  });
}

// ** About Page

// banner section
export async function getAboutBannerData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/aboutpage/top-section",
  });
}

// medloack section
export async function getAboutMedlockData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/aboutpage/medilock-section",
  });
}

// different section
export async function getAboutDifferentData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/aboutpage/different-section",
  });
}

// schedule section
export async function getAboutscheduleData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/aboutpage/schdule-section",
  });
}

// ** Buyer Page

// Buyer banner section
export async function getBuyerBannerData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/buyer-page/top-section",
  });
}

// Buying Process section
export async function getBuyerBuyingProcessData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/buyer-page/buying-journey-section",
  });
}

// ** Lending partner Page

// Lending partner banner section
export async function getLendingBannerData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/landing-partner-page/top-section",
  });
}

//  partner about section
export async function getPartnerAboutData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/landing-partner-page/partner-about-section",
  });
}

// ** Home seller Page

// home seller banner section
export async function getHomeSellerBanner() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/seller-page/top-section",
  });
}

// selling process section
export async function getSellingProcess() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/seller-page/selling-process-section",
  });
}
