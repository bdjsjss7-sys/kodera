/** Strictly project-specific portfolio imagery.
 * Each concept resolves only to assets carrying its own slug. This deliberately
 * avoids category-level image banks: two different cards can no longer receive
 * the same photograph or illustration.
 */
const legacyWorks=new Set(["atelier-audio","nord-clinic","form-architecture","flux-workspace","terra-stay","vector-industry"]);

export function projectPhotos(category:string,slug:string):[string,string,string]{
 const folder=legacyWorks.has(slug)?"works":"portfolio";
 const desktop=`/art/${folder}/${slug}-desktop.svg`;
 const mobile=`/art/${folder}/${slug}-mobile.svg`;
 // The third view intentionally reuses the project's own desktop art with a
 // fragment identifier. PortfolioArtwork gives it a different crop/composition;
 // importantly, it never falls back to imagery belonging to another project.
 return [desktop,mobile,`${desktop}#detail`];
}
export const portfolioPhotoCategories=["project-specific"] as const;
