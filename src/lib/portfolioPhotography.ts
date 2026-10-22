/** Real editorial Unsplash photographs, used exclusively as demonstrative concept art.
 * No photograph is presented as a finished client website or verified portfolio work.
 * Remote image requests need internet access; component has a local SVG fallback.
 */
const photoIds:Record<string,readonly string[]>={
 ecommerce:["photo-1503602642458-232111445657","photo-1542291026-7eec264c27ff","photo-1523275335684-37898b6baf30","photo-1546868871-7041f2a55e12","photo-1565958011703-44f9829ba187","photo-1556742049-0cfed4f6a45d"],
 corporate:["photo-1486406146926-c627a92ad1ab","photo-1497366754035-f200968a6e72","photo-1497366811353-6870744d04b2","photo-1497366858526-0766cadbe8fa","photo-1487958449943-2429e8be8625"],
 landing:["photo-1492684223066-81342ee5ff30","photo-1470229722913-7c0e2dbbafd3","photo-1506157786151-b8491531f063","photo-1514525253161-7a46d19cd819","photo-1493225457124-a3eb161ffa5f"],
 saas:["photo-1551288049-bebda4e38f71","photo-1460925895917-afdab827c52f","photo-1553877522-43269d4ea984","photo-1551434678-e076c223a692","photo-1556761175-b413da4baf72"],
 healthcare:["photo-1551076805-e1869033e561","photo-1576091160399-112ba8d25d1d","photo-1559839734-2b71ea197ec2","photo-1538108149393-fbbd81895907","photo-1631815588090-d4bfec5b1ccb"],
 "real-estate":["photo-1600607687920-4e2a09cf159d","photo-1600566753190-17f0baa2a6c3","photo-1600596542815-ffad4c1539a9","photo-1600047509807-ba8f99d2cdde","photo-1600566753086-00f18fb6b3ea"],
 hospitality:["photo-1517248135467-4c7edcad34c4","photo-1552566626-52f8b828add9","photo-1566073771259-6a8506099945","photo-1542314831-068cd1dbfeeb","photo-1414235077428-338989a2e8c0"],
 education:["photo-1503676260728-1c00da094a0b","photo-1523050854058-8df90110c9f1","photo-1434030216411-0b793f4b4173","photo-1427504494785-3a9ca7044f45","photo-1516321318423-f06f85e504b3"],
 finance:["photo-1611974789855-9c2a0a7236a3","photo-1460925895917-afdab827c52f","photo-1543286386-713bdd548da4","photo-1554224155-6726b3ff858f","photo-1565514020179-026b92b84bb6"],
 industrial:["photo-1486406146926-c627a92ad1ab","photo-1581091226825-a6a2a5aee158","photo-1565514020179-026b92b84bb6","photo-1497366811353-6870744d04b2","photo-1532094349884-543bc11b234d"],
 media:["photo-1499750310107-5fef28a66643","photo-1456324504439-367cee3b3c32","photo-1519682337058-a94d519337bc","photo-1500534623283-312aade485b7","photo-1500534314209-a25ddb2bd429"],
 creative:["photo-1497366811353-6870744d04b2","photo-1545235617-9465d2a55698","photo-1507238691740-187a5b1d37b8","photo-1515378791036-0648a3ef77b2","photo-1531058020387-3be344556be6"]
};
const featuredPhotos:Record<string,readonly string[]>={
 "atelier-audio":["photo-1505740420928-5e560c06d30e","photo-1546435770-a3e426bf472b","photo-1487180144351-b8472da7d491"],
 "nord-clinic":["photo-1551076805-e1869033e561","photo-1576091160399-112ba8d25d1d","photo-1538108149393-fbbd81895907"],
 "form-architecture":["photo-1487958449943-2429e8be8625","photo-1600607687920-4e2a09cf159d","photo-1511818966892-d7d671e672a2"],
 "flux-workspace":["photo-1551288049-bebda4e38f71","photo-1460925895917-afdab827c52f","photo-1556761175-b413da4baf72"],
 "terra-stay":["photo-1566073771259-6a8506099945","photo-1542314831-068cd1dbfeeb","photo-1571896349842-33c89424de2d"],
 "vector-industry":["photo-1581091226825-a6a2a5aee158","photo-1486406146926-c627a92ad1ab","photo-1565514020179-026b92b84bb6"],
 "octave-fest":["photo-1492684223066-81342ee5ff30","photo-1459749411175-04bf5292ceea","photo-1470229722913-7c0e2dbbafd3"],
 "solar-run":["photo-1530549387789-4c1017266635","photo-1552674605-db6ffd4facb5","photo-1544717305-2782549b5136"],
 "aeris-residence":["photo-1600607687920-4e2a09cf159d","photo-1600596542815-ffad4c1539a9","photo-1600566753190-17f0baa2a6c3"],
 "noir-objects":["photo-1503602642458-232111445657","photo-1600607687920-4e2a09cf159d","photo-1538688423619-a81d3f23454b"],
 "pulse-metrics":["photo-1551288049-bebda4e38f71","photo-1460925895917-afdab827c52f","photo-1553877522-43269d4ea984"],
 "aura-dent":["photo-1606811971618-4486d14f3f99","photo-1551076805-e1869033e561","photo-1576091160399-112ba8d25d1d"],
 "casa-riva":["photo-1566073771259-6a8506099945","photo-1542314831-068cd1dbfeeb","photo-1520250497591-112f2f40a3f4"],
 "mira-skin":["photo-1522335789203-aabd1fc54bc9","photo-1596462502278-27bfdc403348","photo-1556228720-195a672e8a03"],
 "blackbox-lab":["photo-1531058020387-3be344556be6","photo-1545235617-9465d2a55698","photo-1507238691740-187a5b1d37b8"]
};
export function projectPhotos(category:string,slug:string):[string,string,string]{
 const arr=featuredPhotos[slug]||photoIds[category]||photoIds.creative;
 const hash=[...slug].reduce((n,ch)=>n+ch.charCodeAt(0),0);
 const base=featuredPhotos[slug]?0:hash%arr.length;
 return [0,1,2].map((offset)=>`https://images.unsplash.com/${arr[(base+offset)%arr.length]}?auto=format&fit=crop&w=1450&q=82`) as [string,string,string];
}
export const portfolioPhotoCategories=Object.keys(photoIds);
