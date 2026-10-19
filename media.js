(function(root){
  const MAX_IMAGES=5, MAX_IMAGE_BYTES=8*1024*1024, MAX_VIDEO_BYTES=100*1024*1024, MAX_SECONDS=180;
  function checkSelection(files){
    const images=files.filter(f=>f.type.startsWith('image/')), videos=files.filter(f=>f.type.startsWith('video/'));
    if(images.length+videos.length!==files.length)throw Error('Yalnızca JPEG, PNG, WebP görsel veya MP4/WebM video seçebilirsin.');
    if(images.length>MAX_IMAGES)throw Error('Bir gönderiye en fazla 5 görsel eklenebilir.');
    if(videos.length>1)throw Error('Bir gönderiye en fazla 1 video eklenebilir.');
    for(const f of files){
      if(!['image/jpeg','image/png','image/webp','video/mp4','video/webm'].includes(f.type))throw Error('Desteklenmeyen dosya türü. SVG ve çalıştırılabilir dosyalar kabul edilmez.');
      if(f.size===0||f.size>(f.type.startsWith('image/')?MAX_IMAGE_BYTES:MAX_VIDEO_BYTES))throw Error('Görsel en fazla 8 MB, video en fazla 100 MB olabilir; boş dosyalar kabul edilmez.');
    }
    return true;
  }
  function signature(bytes,type){
    const b=bytes, txt=(a,z)=>String.fromCharCode(...b.slice(a,z));
    if(type==='image/jpeg')return b[0]===255&&b[1]===216&&b[2]===255;
    if(type==='image/png')return [137,80,78,71,13,10,26,10].every((n,i)=>b[i]===n);
    if(type==='image/webp')return txt(0,4)==='RIFF'&&txt(8,12)==='WEBP';
    if(type==='video/mp4')return txt(4,8)==='ftyp';
    if(type==='video/webm')return [26,69,223,163].every((n,i)=>b[i]===n);
    return false;
  }
  function checkDuration(seconds){if(!Number.isFinite(seconds)||seconds<=0||seconds>MAX_SECONDS)throw Error('Video okunabilir ve en fazla 3 dakika (180 saniye) olmalı.');return true;}
  function metadata(file){return new Promise((resolve,reject)=>{
    const url=URL.createObjectURL(file), el=document.createElement(file.type.startsWith('video/')?'video':'img');
    const finish=(error,data)=>{clearTimeout(timer);el.removeAttribute('src');if(el.tagName==='VIDEO')el.load();URL.revokeObjectURL(url);error?reject(error):resolve(data)};
    const timer=setTimeout(()=>finish(Error('Medya okunamadı; farklı bir dosya dene.')),10000);
    el.onerror=()=>finish(Error('Dosyanın içeriği bozuk veya tarayıcı bu biçimi çözemiyor.'));
    if(el.tagName==='VIDEO'){el.preload='metadata';el.onloadedmetadata=()=>{try{checkDuration(el.duration);finish(null,{seconds:el.duration})}catch(e){finish(e)}}}
    else el.onload=()=>{if(!el.naturalWidth||el.naturalWidth*el.naturalHeight>40000000){finish(Error('Görsel en fazla 40 megapiksel olabilir.'));return}const canvas=document.createElement('canvas'),scale=Math.min(1,1600/Math.max(el.naturalWidth,el.naturalHeight));canvas.width=Math.round(el.naturalWidth*scale);canvas.height=Math.round(el.naturalHeight*scale);canvas.getContext('2d').drawImage(el,0,0,canvas.width,canvas.height);canvas.toBlob(blob=>blob?finish(null,{blob}):finish(Error('Görsel işlenemedi.')),'image/webp',.85)};
    el.src=url;
  })}
  let database;
  function db(){return database??=new Promise((resolve,reject)=>{if(!root.indexedDB){reject(Error('Bu tarayıcı medya saklamayı desteklemiyor.'));return}const req=indexedDB.open('radar-media-v2',1);req.onupgradeneeded=()=>req.result.createObjectStore('files',{keyPath:'id'});req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(Error('Medya deposu açılamadı. Tarayıcı depolama iznini kontrol et.'))})}
  async function transaction(mode,callback){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction('files',mode);const request=callback(tx.objectStore('files'));tx.oncomplete=()=>resolve(request?.result);tx.onabort=tx.onerror=()=>reject(Error('Medya kaydedilemedi; depolama kotası dolmuş olabilir.'))})}
  async function prepare(files){checkSelection(files);const records=[];for(const f of files){if(!signature(new Uint8Array(await f.slice(0,16).arrayBuffer()),f.type))throw Error('Dosya uzantısı ile gerçek dosya biçimi uyuşmuyor.');const meta=await metadata(f);records.push({id:crypto.randomUUID(),type:meta.blob?.type||f.type,blob:meta.blob||f,seconds:meta.seconds||null,status:'pending',name:f.name.slice(0,120)})}return records;}
  async function save(records){const d=await db();await new Promise((resolve,reject)=>{const tx=d.transaction('files','readwrite');records.forEach(r=>tx.objectStore('files').put(r));tx.oncomplete=resolve;tx.onabort=tx.onerror=()=>reject(Error('Dosyalar kaydedilemedi. Tarayıcı depolama alanını kontrol et.'))});return records.map(({blob,...r})=>r)}
  const api={checkSelection,signature,checkDuration,prepare,save,get:id=>transaction('readonly',s=>s.get(id)),remove:id=>transaction('readwrite',s=>s.delete(id)),clear:()=>transaction('readwrite',s=>s.clear()),MAX_IMAGES,MAX_SECONDS};root.RadarMedia=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
