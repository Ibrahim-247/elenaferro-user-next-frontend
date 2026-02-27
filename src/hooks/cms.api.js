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
    revalidate: 60,
    endpoint: "/cms/home_page/top_section",
  });
}

// about section
export async function getAboutData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/home_page/about_section",
  });
}

// achivement section
export async function getAchivementData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/home_page/achivement_section",
  });
}

// feature section
export async function getFeatureData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 60,
    endpoint: "/cms/home_page/explore_section",
  });
}

// latest blog
export async function getLatestBlogData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/latest/blogs",
  });
}

// all blog
export async function getAllBlogData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/blogs",
  });
}

// ** About Page

// banner section
export async function getAboutBannerData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/about_page/top_section",
  });
}

// medloack section
export async function getAboutMedlockData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/about_page/medilock_section",
  });
}

// different section
export async function getAboutDifferentData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/about_page/different_section",
  });
}

// schedule section
export async function getAboutscheduleData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/about_page/schdule_section",
  });
}

// ** Buyer Page

// Buyer banner section
export async function getBuyerBannerData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/buyer_page/top_section",
  });
}

// Buying Process section
export async function getBuyerBuyingProcessData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 60,
    endpoint: "/cms/buyer_page/buying_journey_section",
  });
}

// ** Lending partner Page

// Lending partner banner section
export async function getLendingBannerData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/landing_partner_page/top_section",
  });
}

//  partner about section
export async function getPartnerAboutData() {
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/cms/landing_partner_page/partner_about_section",
  });
}

// ** Home seller Page

// home seller banner section
export async function getHomeSellerBanner() {
  return useServerApi({
    mode: "SSR",
    revalidate: 60,
    endpoint: "/cms/seller_page/top_section",
  });
}

// selling process section
export async function getSellingProcess() {
  return useServerApi({
    mode: "SSR",
    revalidate: 60,
    endpoint: "/cms/seller_page/selling_process_section",
  });
}
