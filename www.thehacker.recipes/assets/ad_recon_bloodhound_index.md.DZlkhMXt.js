import{_ as h,c as d,a5 as n,G as i,w as t,B as l,o as p,j as e,a as s}from"./chunks/framework.B5CpDqM0.js";const c="/assets/Graph%20example.DMcy6EaN.png",u="/assets/BH4_SharpHound_Cheat.C309-NJA.png",v=JSON.parse('{"title":"BloodHound ⚙️","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"ad/recon/bloodhound/index.md","filePath":"ad/recon/bloodhound/index.md","lastUpdated":1724982529000}'),k={name:"ad/recon/bloodhound/index.md"};function g(m,a,b,f,y,F){const o=l("PluginTabsTab"),r=l("PluginTabs");return p(),d("div",null,[a[2]||(a[2]=n('<h1 id="bloodhound-⚙️" tabindex="-1">BloodHound ⚙️ <a class="header-anchor" href="#bloodhound-⚙️" aria-label="Permalink to &quot;BloodHound ⚙️&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p><a href="https://github.com/BloodHoundAD/BloodHound" target="_blank" rel="noreferrer">BloodHound</a> (Javascript webapp, compiled with Electron, uses <a href="https://neo4j.com/" target="_blank" rel="noreferrer">Neo4j</a> as graph DBMS) is an awesome tool that allows mapping of relationships within Active Directory environments. It mostly uses Windows API functions and LDAP namespace functions to collect data from domain controllers and domain-joined Windows systems.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><h3 id="collection" tabindex="-1">Collection <a class="header-anchor" href="#collection" aria-label="Permalink to &quot;Collection&quot;">​</a></h3><p>BloodHound needs to be fed JSON files containing info on the objects and relationships within the AD domain. This information are obtained with collectors (also called ingestors). The best way of doing this is using the official SharpHound (C#) collector.</p>',6)),i(r,null,{default:t(()=>[i(o,{label:"Windows"},{default:t(()=>a[0]||(a[0]=[e("p",null,[s("SharpHound ("),e("a",{href:"https://github.com/BloodHoundAD/SharpHound",target:"_blank",rel:"noreferrer"},"sources"),s(", "),e("a",{href:"https://github.com/BloodHoundAD/BloodHound/tree/master/Collectors",target:"_blank",rel:"noreferrer"},"builds"),s(") is designed targeting .Net 4.5. It can be used as a compiled executable.")],-1),e("p",null,[s("It must be run from the context of a domain user, either directly through a logon or through another method such as runas ("),e("code",null,"runas /netonly /user:$DOMAIN\\$USER"),s(") (see "),e("a",{href:"./../../movement/credentials/impersonation"},"Impersonation"),s("). Alternatively, SharpHound can be used with the "),e("code",null,"LdapUsername"),s(" and "),e("code",null,"LdapPassword"),s(" flags for that matter.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"SharpHound.exe"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --collectionmethods"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," All")])])])],-1),e("div",{class:"tip custom-block"},[e("p",null,[s("When running SharpHound from a "),e("code",null,"runas /netonly"),s("-spawned command shell, you may need to let SharpHound know what username you are authenticating to other systems as with the "),e("code",null,"OverrideUserName"),s(" flag")])],-1),e("p",null,"The previous commands are basic but some options (i.e. Stealth and Loop) can be very useful depending on the context",-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Perform stealth collection methods")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"SharpHound.exe"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --collectionmethods"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," All"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --Stealth")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Loop collections (especially useful for session collection)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# e.g. collect sessions every 10 minutes for 3 hours")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"SharpHound.exe"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --collectionmethods"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," Session"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --Loop"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --loopduration"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 03:00:00"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --loopinterval"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 00:10:00")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Use LDAPS instead of plaintext LDAP")]),s(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"SharpHound.exe"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --secureldap")])])])],-1),e("p",null,[s("More help on the CLI commands "),e("a",{href:"https://github.com/BloodHoundAD/SharpHound#cli",target:"_blank",rel:"noreferrer"},"here"),s(".")],-1),e("div",{class:"success custom-block"},[e("p",null,"Here are a few tips and tricks on the collection process"),e("ul",null,[e("li",null,[s("Testers can absolutely run SharpHound from a computer that is not enrolled in the AD domain, by running it in a domain user context (e.g. with runas, "),e("a",{href:"./../../movement/ntlm/pth"},"pass-the-hash"),s(" or "),e("a",{href:"./../../movement/kerberos/ptk"},"overpass-the-hash"),s("). This is useful when domain computers have antivirus or other protections preventing (or slowing) testers from using enumerate or exploitation tools.")]),e("li",null,"When obtaining a foothold on an AD domain, testers should first run SharpHound with all collection methods, and then start a loop collection to enumerate more sessions.")])],-1)])),_:1}),i(o,{label:"UNIX-like"},{default:t(()=>a[1]||(a[1]=[e("p",null,"From UNIX-like system, a non-official (but very effective nonetheless) Python version can be used.",-1),e("p",null,[e("a",{href:"https://github.com/fox-it/BloodHound.py",target:"_blank",rel:"noreferrer"},"BloodHound.py"),s(" is a Python ingestor for BloodHound.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"bloodhound.py"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --zip"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -c"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," All"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"-u"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $USERNAME "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"-p"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PASSWORD "),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"-dc"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $DOMAIN_CONTROLLER")])])])],-1),e("div",{class:"tip custom-block"},[e("p",null,"This ingestor is not as powerful as the C# one. It mostly misses GPO collection methods but a good news is that it can do pass-the-hash. It becomes really useful when compromising a domain account's NT hash.")],-1),e("p",null,[s("An alternative called "),e("a",{href:"https://github.com/OPENCYBER-FR/RustHound",target:"_blank",rel:"noreferrer"},"RustHound"),s(" (Rust) can be used as well.")],-1),e("div",{class:"language-bash vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"rusthound"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --zip"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -i"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '$USER@$DOMAIN'"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '$PASSWORD'"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -o"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "OUTDIR"')])])])],-1)])),_:1})]),_:1}),a[3]||(a[3]=n('<h3 id="analysis" tabindex="-1">Analysis <a class="header-anchor" href="#analysis" aria-label="Permalink to &quot;Analysis&quot;">​</a></h3><p>Once the collection is over, the data can be uploaded and analyzed in BloodHound by doing the following.</p><ul><li>Find paths between specified nodes</li><li>Run pre-built analytics queries to find common attack paths</li><li>Run custom queries to help in finding more complex attack paths or interesting objects</li><li>Run manual neo4j queries</li><li>Mark nodes as high value targets for easier path finding</li><li>Mark nodes as owned for easier path finding</li><li>Find information about selected nodes: sessions, properties, group membership/members, local admin rights, Kerberos delegations, RDP rights, outbound/inbound control rights (ACEs), and so on</li><li>Find help about edges/attacks (abuse, OPSEC considerations, references)</li></ul><p>Using BloodHound can help find attack paths and abuses like <a href="./../../movement/dacl/index">ACEs abuse</a>, <a href="./../../movement/kerberos/delegations/index">Kerberos delegations abuse</a>, <a href="./../../movement/credentials/dumping/index">credential dumping</a> and <a href="./../../movement/credentials/shuffling">credential shuffling</a>, <a href="./../../movement/group-policies">GPOs abuse</a>, <a href="./../../movement/kerberos/kerberoast">Kerberoast</a>, <a href="./../../movement/kerberos/asreproast">ASREProast</a>, <a href="./../../movement/trusts/index">domain trusts attacks</a>, etc.</p><p><img src="'+c+'" alt=""></p><p>For detailed and official documentation on the analysis process, testers can check the following resources: <a href="https://bloodhound.readthedocs.io/en/latest/data-analysis/bloodhound-gui.html" target="_blank" rel="noreferrer">the BloodHound GUI</a>, <a href="https://bloodhound.readthedocs.io/en/latest/data-analysis/nodes.html" target="_blank" rel="noreferrer">nodes</a> and <a href="https://bloodhound.readthedocs.io/en/latest/data-analysis/edges.html" target="_blank" rel="noreferrer">edges</a>.</p><div class="success custom-block"><p>Some custom queries can be used to go even further with the analysis of attack paths, such as <a href="https://github.com/ThePorgs/Exegol-images/blob/3d6d7a41e46acb6898da996c4198971be02e4d77/sources/bloodhound/customqueries.json" target="_blank" rel="noreferrer">Exegol&#39;s custom queries</a>.</p></div><div class="success custom-block"><p>Here are some examples of quick wins to spot with BloodHound</p><ul><li>shadow admins: users that are not members of privileged Active Directory groups but have sensitive privileges over the domain (run graph queries like &quot;find principals with <a href="./../../movement/credentials/dumping/dcsync">DCSync</a> rights&quot;, &quot;users with most local admin rights&quot;, or check &quot;inbound control rights&quot; in the domain and privileged groups node info panel)</li><li>other over-privileged users: user that can control many objects (<a href="./../../movement/dacl/index">ACEs</a>) and that often leads to admins, shadow admins or sensitive servers (check for &quot;outbound control rights&quot; in the node info panel)</li><li>over-privileged computers: find computers that can do <a href="./../../movement/kerberos/delegations/index">(un)constrained Kerberos delegation</a> (run graph queries like &quot;find computer with unconstrained delegations&quot;)</li><li>admin computers: find computers (A) that have admin rights against other computers (B). This can be exploited as follows: computer A triggered with an <a href="./../../movement/mitm-and-coerced-authentications/ms-rprn">MS-RPRN abuse (printerbug),</a> authentication is then <a href="./../../movement/ntlm/relay">relayed</a>, and credentials are <a href="./../../movement/credentials/dumping/index">dumped</a> on the computer B.</li></ul><p>Other quick wins can be easily found with the <a href="https://github.com/kaluche/bloodhound-quickwin" target="_blank" rel="noreferrer">bloodhound-quickwin</a> Python script</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bhqc.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $neo4juser </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $neo4jpassword</span></span></code></pre></div></div><div class="success custom-block"><p><a href="https://github.com/trustedsec/CrackHound" target="_blank" rel="noreferrer">CrackHound</a> (Python) can be used to populate BloodHound&#39;s database with password obtained during a pentest. This can help sort and report attack paths.</p></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><img src="'+u+'" alt=""></p><p><a href="https://github.com/SadProcessor/HandsOnBloodHound/blob/master/BH21/BH4_SharpHound_Cheat.pdf" target="_blank" rel="noreferrer">https://github.com/SadProcessor/HandsOnBloodHound/blob/master/BH21/BH4_SharpHound_Cheat.pdf</a></p><p><a href="https://blog.riccardoancarani.it/bloodhound-tips-and-tricks/" target="_blank" rel="noreferrer">https://blog.riccardoancarani.it/bloodhound-tips-and-tricks/</a></p><p><a href="https://bloodhound.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">https://bloodhound.readthedocs.io/en/latest/</a></p><p><a href="https://porterhau5.com/blog/extending-bloodhound-track-and-visualize-your-compromise/" target="_blank" rel="noreferrer">https://porterhau5.com/blog/extending-bloodhound-track-and-visualize-your-compromise/</a></p>',15))])}const B=h(k,[["render",g]]);export{v as __pageData,B as default};