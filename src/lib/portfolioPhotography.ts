/** Original KODERA portfolio imagery.
 * Generated campaign photographs are stored locally; every concept also has its own
 * local SVG art direction as a fallback. No external stock-photo requests are used.
 */
const originalCategoryArt:Record<string,string>={
 ecommerce:"/art/generated/ecommerce.webp",
 corporate:"/art/generated/corporate.webp",
 healthcare:"/art/generated/healthcare.webp",
 "real-estate":"/art/generated/real-estate.webp",
 hospitality:"/art/generated/hospitality.webp"
};

export function projectPhotos(category:string,slug:string):[string,string,string]{
 const original=originalCategoryArt[category];
 const desktop=`/art/portfolio/${slug}-desktop.svg`;
 const mobile=`/art/portfolio/${slug}-mobile.svg`;
 if(original)return [original,desktop,mobile];
 return [desktop,mobile,desktop];
}
export const portfolioPhotoCategories=Object.keys(originalCategoryArt);
