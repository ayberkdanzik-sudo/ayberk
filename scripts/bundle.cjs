const fs=require('node:fs');const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
let html=read('index.html');
const assets={};for(const name of fs.readdirSync(path.join(root,'assets')))if(name.endsWith('.svg'))assets['assets/'+name]='data:image/svg+xml;base64,'+fs.readFileSync(path.join(root,'assets',name)).toString('base64');
const css=read('style.css').replace(/url\('([^']+\.woff2)'\)/g,(_,p)=>`url('data:font/woff2;base64,${fs.readFileSync(path.join(root,p)).toString('base64')}')`);
html=html.replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+css+'</style>');
html=html.replace(/<script src="([^"]+)"><\/script>/g,(_,name)=>{
 let source=read(name);
 if(name==='app.js')source=source.replace("this.src='assets/${game.id}-${kind}.svg'", "this.src='${OFFLINE_ASSETS['assets/'+game.id+'-'+kind+'.svg']}'");
 if(name==='hardware.js')source='const OFFLINE_ASSETS='+JSON.stringify(assets)+';\n'+source;
 return '<script>'+source.replace(/<\/script/gi,'<\\/script')+'</script>';
});
fs.writeFileSync(path.join(root,'DEMOYU-AC.html'),html);
console.log('DEMOYU-AC.html güncellendi ('+Math.round(Buffer.byteLength(html)/1024)+' KB).');
