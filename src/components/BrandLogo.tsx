import Link from "next/link";

type BrandLogoProps={className?:string;compact?:boolean};

export default function BrandLogo({className="",compact=false}:BrandLogoProps){
 return <Link href="/" aria-label="KODERA — главная" className={`brand-logo ${compact?"brand-logo--compact":""} ${className}`.trim()}>
  <span className="brand-logo__word" aria-hidden="true">KODERA</span>
  <span className="brand-logo__descriptor" aria-hidden="true">DIGITAL STUDIO</span>
  <span className="brand-logo__rule" aria-hidden="true"/>
 </Link>;
}
