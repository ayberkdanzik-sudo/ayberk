const {test}=require('node:test');const assert=require('node:assert/strict');const {bounds,summarize}=require('../analytics.js');
const now=Date.parse('2026-10-19T12:00:00Z');
test('daily period starts at midnight in Turkey, excludes future and prior day',()=>{const start=Date.parse('2026-10-18T21:00:00Z');assert.equal(bounds('day',now).start,start);const events=[{date:start-1,visitor:'old',session:'x'},{date:start,visitor:'a',session:'a1'},{date:now,visitor:'a',session:'a2'},{date:now+1,visitor:'future',session:'x'}];const r=summarize(events,'day',now);assert.equal(r.visitors,1);assert.equal(r.sessions,2);assert.equal(r.views,2);assert.equal(r.buckets.length,24)});
test('rolling periods and yearly month boundaries',()=>{assert.equal(summarize([],'week',now).buckets.length,7);assert.equal(summarize([],'month',now).buckets.length,30);const r=summarize([],'year',now);assert.equal(r.buckets.length,12);assert.equal(r.start,Date.parse('2025-10-31T21:00:00Z'));assert.equal(r.views,0)});

test('custom range includes both Turkey calendar dates and rejects invalid ranges',()=>{
 const {summarizeRange}=require('../analytics.js');
 const from='2026-10-01',to='2026-10-02',start=Date.parse(from+'T00:00:00+03:00'),end=Date.parse(to+'T23:59:59.999+03:00');
 const r=summarizeRange([start-1,start,end,end+1].map((date,i)=>({date,visitor:'v'+i,session:'s'+i})),from,to);
 assert.equal(r.views,2);assert.equal(r.visitors,2);assert.equal(r.buckets.length,2);
 assert.throws(()=>summarizeRange([],to,from));assert.throws(()=>summarizeRange([],'2026-02-30',to));assert.throws(()=>summarizeRange([],'2020-01-01',to));
});
