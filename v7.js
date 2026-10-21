/* Local demo workflows. Production must enforce these permissions on the server. */
const roleName=role=>({owner:'Yönetici',admin:'Admin',member:'Üye'}[role]||'Üye');
const allowedAdminTab=tab=>isAdmin()&&(isOwner()||['overview','contacts','members','moderation','reports','tasks'].includes(tab));
const visibleTasks=()=>adminTasks.filter(t=>(t.owner||'admin')===user?.nickname);
let inboxFilters={keyword:'',sender:'',from:'',to:''},reportRange=null;
messages=[];blocks={};hiddenMessages={};
for(const key of ['messages','blocks','hidden-messages'])localStorage.removeItem('radar-'+key);
reports=reports.filter(r=>r.kind!=='message');write('reports',reports);
const v7Render=render;
render=function(){
  if(view==='inbox')view='discover';
  if(isAdmin()&&!allowedAdminTab(adminTab))adminTab='overview';
  v7Render();
  document.querySelectorAll('[data-v2="inbox"],[data-action="ads"]').forEach(el=>el.remove());
  const badge=document.querySelector('.role-badge');if(badge)badge.textContent=roleName(user?.role);
  if(view==='admin'&&isAdmin()){
    if(adminTab==='overview'){
      const metrics=document.querySelector('.metric-grid');if(metrics)metrics.innerHTML=[['Topluluk konusu',topics.length],['Üye',read('accounts',[]).length],['Bekleyen inceleme',moderationItems().length],['Yanıt bekleyen başvuru',contacts.filter(c=>(isOwner()||c.kind!=='ad')&&!['closed','replied'].includes(c.status)).length]].map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join('');
    }
    const inbox=document.querySelector('#inbox-filter');if(inbox)inbox.onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(inbox));if(f.from&&f.to&&f.from>f.to){inbox.querySelector('.form-error').textContent='Başlangıç tarihi bitiş tarihinden sonra olamaz.';return}inboxFilters=f;render()};
    const dates=document.querySelector('#report-range');if(dates)dates.onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(dates));try{RadarAnalytics.summarizeRange([],f.from,f.to);reportRange=f;reportPeriod='custom';render()}catch(err){dates.querySelector('.form-error').textContent=err.message}};
  }
};
const v7AdminPage=adminPage;adminPage=function(){if(isAdmin()&&!allowedAdminTab(adminTab))adminTab='overview';return v7AdminPage()};
inboxPage=()=>'';bindInbox=()=>{};
const v7DeleteAccount=deleteOwnAccount;deleteOwnAccount=async function(){if(isOwner()){toast('Yönetici hesabı bu demoda silinemez.');return}await v7DeleteAccount()};
const v7MemberDetail=memberDetail;
memberDetail=function(nick){
  v7MemberDetail(nick);if(!isOwner())return;
  const a=read('accounts',[]).find(a=>a.nickname===nick);if(!a||a.role==='owner'||nick===user.nickname)return;
  const activity=document.querySelector('#modal-root .activity-scroll');
  activity?.insertAdjacentHTML('beforebegin',`<form id="role-form" class="auth-form role-form"><h3>Yetki yönetimi</h3><p>Admin topluluğu yönetir. Reklamlar, ticari teklifler ve yetki değişiklikleri yalnızca yöneticidedir.</p><label>Rol<select name="role"><option value="member" ${a.role==='member'?'selected':''}>Üye</option><option value="admin" ${a.role==='admin'?'selected':''}>Admin</option></select></label><button class="btn btn-dark">Yetkiyi kaydet</button></form>`);
  const form=document.querySelector('#role-form');if(form)form.onsubmit=e=>{e.preventDefault();if(!isOwner())return;const accounts=read('accounts',[]),target=accounts.find(x=>x.nickname===nick),role=new FormData(form).get('role');if(!canManageMember(target)||!['member','admin'].includes(role))return;if(!memberAllowed(target)){toast('Önce üyelik kısıtlamasını kaldır.');return}target.role=role;write('accounts',accounts);logAdmin('Rol değiştirildi',nick,roleName(role));closeModal();render();toast(nick+' artık '+roleName(role)+'.')};
};
contactsAdmin=function(){
  if(!isAdmin())return '';
  const visible=contacts.filter(c=>isOwner()||c.kind!=='ad');if(!isOwner()&&contactFilter==='ad')contactFilter='all';
  const lower=x=>String(x||'').toLocaleLowerCase('tr');
  const start=inboxFilters.from?Date.parse(inboxFilters.from+'T00:00:00+03:00'):-Infinity,end=inboxFilters.to?Date.parse(inboxFilters.to+'T23:59:59.999+03:00'):Infinity;
  const list=visible.filter(c=>(contactFilter==='all'||c.kind===contactFilter)&&lower([c.body,c.company,c.target,c.reply].join(' ')).includes(lower(inboxFilters.keyword))&&lower([c.author,c.first,c.last,c.email].join(' ')).includes(lower(inboxFilters.sender))&&c.date>=start&&c.date<=end);
  const labels={all:'Tümü',ad:'Reklam',complaint:'Şikâyet',suggestion:'Öneri'};
  return `<h2>Gelen başvurular</h2><p>${isOwner()?'Reklam teklifleri, şikâyetler ve öneriler.':'Topluluktan gelen şikâyetler ve öneriler.'}</p><form id="inbox-filter" class="filter-panel"><label>Anahtar sözcük<input name="keyword" type="search" value="${esc(inboxFilters.keyword)}" placeholder="Başvuru içinde ara"></label><label>Gönderen<input name="sender" type="search" value="${esc(inboxFilters.sender)}" placeholder="Üye adı veya isim"></label><label>Başlangıç<input name="from" type="date" value="${esc(inboxFilters.from)}"></label><label>Bitiş<input name="to" type="date" value="${esc(inboxFilters.to)}"></label><button class="btn btn-dark">Ara</button><button class="btn btn-light" type="button" data-v7="clear-inbox">Temizle</button><p class="form-error" role="alert"></p></form><div class="studio-filters">${Object.entries(labels).filter(([v])=>v!=='ad'||isOwner()).map(([v,l])=>`<button data-contact-filter="${v}" class="${contactFilter===v?'selected':''}">${l} (${visible.filter(c=>v==='all'||c.kind===v).length})</button>`).join('')}</div><p class="muted">${list.length} başvuru bulundu</p>${list.sort((a,b)=>b.date-a.date).map(c=>`<article class="studio-card"><span class="pending-tag">${labels[c.kind]} · ${{new:'Yeni',read:'İnceleniyor',replied:'Yanıtlandı',closed:'Kapalı'}[c.status]||esc(c.status)}</span><h3>${esc(c.company||c.target||c.author||'Misafir')}</h3><p>${esc(c.body.slice(0,200))}</p><small>${displayDate(c.date)} · ${esc(c.author||[c.first,c.last].filter(Boolean).join(' ')||'Misafir')}</small><button class="btn btn-light" data-contact-id="${esc(c.id)}">İncele / cevapla</button></article>`).join('')||'<div class="empty-state"><h3>Eşleşen başvuru yok.</h3><p>Arama sözcüğünü veya tarih aralığını değiştirebilirsin.</p></div>'}`;
};
notificationsForUser=function(){
  if(!user)return [];const list=[],seen=notificationReads[user.nickname]||[];
  for(const t of topics.filter(canReadTopic))for(const r of t.replies||[]){
    if(r.author===user.nickname||(r.status&&r.status!=='published'))continue;
    const quoted=(t.replies||[]).find(x=>x.id===r.quote&&x.author===user.nickname&&(!x.status||x.status==='published'));
    if(quoted||t.author===user.nickname)list.push({id:(quoted?'quote:':'reply:')+r.id,type:'reply',topic:t.id,target:r.id,title:r.author+(quoted?' yorumunu alıntıladı':' konuna yanıt verdi'),text:t.title,date:r.date});
  }
  for(const c of contacts.filter(c=>c.author===user.nickname&&c.reply))list.push({id:'contact:'+c.id+':'+(c.replyAt||c.reply),type:'contact',target:c.id,title:(c.replyBy||'Yönetim')+' başvurunu yanıtladı',text:c.reply,date:c.replyAt||c.date});
  return list.filter(n=>!seen.includes(n.id)).sort((a,b)=>b.date-a.date);
};
notificationsModal=function(){if(!user){authModal('login');return}const list=notificationsForUser();openModal(`<div class="notification-heading"><h2>Bildirimler</h2><span class="count-pill">${list.length}</span></div>${list.length?'<button class="text-button" data-v4="read-notifications">Tümünü okundu işaretle</button>':''}<div class="notification-list">${list.map(n=>`<button class="notification-row" data-notification="${esc(n.id)}"><span class="notification-dot" aria-hidden="true"></span><span><strong>${esc(n.title)}</strong><small>${esc(n.text.slice(0,120))}</small><time>${displayDate(n.date)}</time></span>${icon('arrow')}</button>`).join('')||'<div class="empty-state"><h3>Yeni bildirimin yok.</h3><p>Yanıtlar ve alıntılar burada görünecek.</p></div>'}</div>`)};
const v7OpenNotification=openNotification;
openNotification=function(id){const n=notificationsForUser().find(n=>n.id===id);if(n?.type==='contact'){markNotification(n);closeModal();render();const c=contacts.find(c=>c.id===n.target&&c.author===user?.nickname);if(c)info('Başvuruna yanıt',`<p>${esc(c.body)}</p><blockquote><strong>${esc(c.replyBy||'Yönetim')}</strong><p>${esc(c.reply)}</p></blockquote>`);return}v7OpenNotification(id)};
window.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.v2==='inbox'||b.dataset.messageUser||b.dataset.peer){e.preventDefault();e.stopImmediatePropagation();if(b.dataset.messageUser)info(esc(b.dataset.messageUser),'<p>Oyuncularla forumdaki konular üzerinden iletişim kurabilirsin.</p>');return}
 if(b.dataset.v7==='clear-inbox'){e.preventDefault();e.stopImmediatePropagation();inboxFilters={keyword:'',sender:'',from:'',to:''};render()}
},true);
window.addEventListener('submit',e=>{if(e.target.id==='message-form'){e.preventDefault();e.stopImmediatePropagation()}},true);
