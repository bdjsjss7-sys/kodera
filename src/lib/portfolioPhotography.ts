/** Original KODERA portfolio imagery.
 * Every category has a locally stored campaign image generated specifically for
 * this portfolio. Individual concepts keep their own SVG art direction for
 * secondary screens. No external stock-photo requests are used.
 */
const originalCategoryArt:Record<string,string>={
 ecommerce:"/art/generated/ecommerce.webp",
 corporate:"/art/generated/corporate.webp",
 landing:"/art/generated/landing.webp",
 saas:"/art/generated/saas.webp",
 healthcare:"/art/generated/healthcare.webp",
 "real-estate":"/art/generated/real-estate.webp",
 hospitality:"/art/generated/hospitality.webp",
 education:"/art/generated/education.webp",
 finance:"/art/generated/finance.webp",
 industrial:"/art/generated/industrial.webp",
 media:"/art/generated/media.webp",
 creative:"/art/generated/creative.webp"
};

export function projectPhotos(category:string,slug:string):[string,string,string]{
 const original=originalCategoryArt[category]||originalCategoryArt.creative;
 const desktop=`/art/portfolio/${slug}-desktop.svg`;
 const mobile=`/art/portfolio/${slug}-mobile.svg`;
 return [original,desktop,mobile];
}
export const portfolioPhotoCategories=Object.keys(originalCategoryArt);
