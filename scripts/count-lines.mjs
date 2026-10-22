import {readdirSync,readFileSync,statSync} from "node:fs";
import {join,extname,relative} from "node:path";
const root=process.cwd();
const exclude=new Set([".git",".next","node_modules","coverage","dist","build",".turbo"]);
const extensions=new Set([".ts",".tsx",".js",".jsx",".mjs",".cjs",".css",".json",".md",".yml",".yaml"]);
const sourceExtensions=new Set([".ts",".tsx",".js",".jsx",".mjs",".cjs",".css"]);
const rows=[];
function walk(dir){
 for(const e of readdirSync(dir,{withFileTypes:true})){
  if(exclude.has(e.name))continue;
  const full=join(dir,e.name);
  if(e.isDirectory())walk(full);
  else if(e.isFile()&&extensions.has(extname(e.name))){
   const text=readFileSync(full,"utf8");
   const lines=text.length===0?0:text.split(/\r?\n/).length-(text.endsWith("\n")?1:0);
   rows.push({path:relative(root,full),lines,source:sourceExtensions.has(extname(e.name))});
  }
 }
}
walk(root);
const code=rows.filter(x=>x.source);const sum=xs=>xs.reduce((n,x)=>n+x.lines,0);
console.log("KODERA — строки по текущим файлам");
console.log("Исходный код (TS/TSX/JS/JSX/MJS/CJS/CSS):",sum(code));
console.log("Файлов с исходным кодом:",code.length);
console.log("Код + JSON/Markdown/YAML:",sum(rows));
console.log("Все учтённые файлы:",rows.length);
console.log("Зависимости node_modules, .next, Git и сборка НЕ учитываются.");
console.log("Топ-10 файлов по строкам:");
for(const x of [...rows].sort((a,b)=>b.lines-a.lines).slice(0,10))console.log(String(x.lines).padStart(6),x.path);
