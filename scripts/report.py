"""Render our trusted, simple report Markdown without external dependencies."""
from pathlib import Path
import html,re
root=Path(__file__).resolve().parent.parent
s=(root/'docs/V5-FORUM-TASARIM-VE-ARAMA.md').read_text()
def inline(t):
    t=html.escape(t)
    t=re.sub(r'\[([^\]]+)\]\((https://[^)]+)\)',r'<a href="\2" target="_blank" rel="noopener noreferrer">\1</a>',t)
    return re.sub(r'\*\*([^*]+)\*\*',r'<strong>\1</strong>',t)
out=[];table=False;listing=False
for line in s.splitlines():
    if not line.startswith('|') and table: out.append('</tbody></table></div>');table=False
    bullet=re.match(r'(?:- |\d+\. )(.*)',line)
    if not bullet and listing:out.append('</ul>');listing=False
    if line.startswith('|'):
        if re.match(r'^\|[\s:|\-]+$',line):continue
        cells=[inline(x.strip()) for x in line.strip('|').split('|')]
        if not table:out.append('<div class="table-wrap"><table><thead><tr>'+''.join('<th>'+c+'</th>' for c in cells)+'</tr></thead><tbody>');table=True
        else:out.append('<tr>'+''.join('<td>'+c+'</td>' for c in cells)+'</tr>')
    elif bullet:
        if not listing:out.append('<ul>');listing=True
        out.append('<li>'+inline(bullet[1])+'</li>')
    elif line.startswith('#'):
        n=len(line)-len(line.lstrip('#'));out.append(f'<h{n}>'+inline(line[n:].strip())+f'</h{n}>')
    elif line.strip():out.append('<p>'+inline(line)+'</p>')
if table:out.append('</tbody></table></div>')
if listing:out.append('</ul>')
(root/'GELISTIRME-RAPORU.html').write_text('''<!doctype html><html lang="tr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Oyun Radarı v5 — Forum tasarımı ve arama</title><style>body{margin:0;background:#f3f6ef;color:#20382b;font:16px/1.8 system-ui}main{max-width:1080px;margin:auto;padding:36px 24px 90px}h1{font-size:34px;line-height:1.3}h2{margin-top:50px;border-bottom:2px solid #cde894;padding-bottom:12px}p,li{max-width:900px}a{color:#236d4c;text-underline-offset:3px}.table-wrap{overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px;background:white}td,th{border:1px solid #d7e0d1;padding:13px;text-align:left;vertical-align:top}th{background:#203f2c;color:white}tr:nth-child(even){background:#eef5e7}li{margin:10px 0}@media(prefers-color-scheme:dark){body{background:#12231b;color:#e4eedf}table{background:#1e3427}tr:nth-child(even){background:#274331}a{color:#cde894}}</style><main>'''+''.join(out)+'</main></html>')
print('GELISTIRME-RAPORU.html generated')
