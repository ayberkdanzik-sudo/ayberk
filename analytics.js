/* Local demo analytics: no network, fingerprinting, IP or account identity. */
(function(root){
const DAY=86400000,offset=10800000;
function bounds(period,now=Date.now()) {const d=new Date(now+offset);let start=Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate())-offset;if(period==='week')start-=6*DAY;if(period==='month')start-=29*DAY;if(period==='year')start=Date.UTC(d.getUTCFullYear(),d.getUTCMonth()-11,1)-offset;return {start,end:now};}
function summarize(events,period,now=Date.now()) {const {start,end}=bounds(period,now),list=events.filter(e=>e.date>=start&&e.date<=end);const buckets=[];if(period==='day'){for(let i=0;i<24;i++)buckets.push({start:start+i*3600000,end:start+(i+1)*3600000,label:String(i).padStart(2,'0')+':00'});}else if(period==='year'){const d=new Date(start+offset);for(let i=0;i<12;i++)buckets.push({start:Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+i,1)-offset,end:Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+i+1,1)-offset,label:new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+i,1)).toLocaleDateString('tr-TR',{month:'short',year:'2-digit',timeZone:'UTC'})});}else for(let s=start;s<=end;s+=DAY)buckets.push({start:s,end:s+DAY,label:new Date(s+offset).toISOString().slice(5,10)});
return {views:list.length,visitors:new Set(list.map(e=>e.visitor)).size,sessions:new Set(list.map(e=>e.session)).size,buckets:buckets.map(b=>({...b,count:new Set(list.filter(e=>e.date>=b.start&&e.date<b.end).map(e=>e.visitor)).size})),start,end};}
function summarizeRange(events,from,to){
const valid=s=>/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(Date.parse(s))&&new Date(Date.parse(s)).toISOString().slice(0,10)===s;
if(!valid(from)||!valid(to))throw Error('İki geçerli tarih seç.');
const start=Date.parse(from+'T00:00:00+03:00'),end=Date.parse(to+'T23:59:59.999+03:00');
if(start>end)throw Error('Başlangıç tarihi bitiş tarihinden sonra olamaz.');
if(end-start>=366*DAY)throw Error('En fazla 366 günlük bir aralık seç.');
const list=events.filter(e=>e.date>=start&&e.date<=end),step=end-start>62*DAY?7*DAY:DAY,buckets=[];
for(let s=start;s<=end;s+=step){const stop=Math.min(s+step,end+1);buckets.push({start:s,end:stop,label:new Date(s+offset).toISOString().slice(5,10)+(step>DAY?' haftası':''),count:new Set(list.filter(e=>e.date>=s&&e.date<stop).map(e=>e.visitor)).size})}
return {start,end,views:list.length,visitors:new Set(list.map(e=>e.visitor)).size,sessions:new Set(list.map(e=>e.session)).size,buckets};
}
const api={bounds,summarize,summarizeRange};if(typeof module==='object')module.exports=api;root.RadarAnalytics=api;
})(typeof globalThis!=='undefined'?globalThis:this);
