import{_ as a,c as i,a5 as s,o as n}from"./chunks/framework.B5CpDqM0.js";const k=JSON.parse('{"title":"Known vulnerabilities","description":"","frontmatter":{"authors":"KenjiEndo15, ShutdownRepo"},"headers":[],"relativePath":"web/recon/known-vulnerabilities.md","filePath":"web/recon/known-vulnerabilities.md","lastUpdated":1724982529000}'),t={name:"web/recon/known-vulnerabilities.md"};function l(r,e,o,h,p,c){return n(),i("div",null,e[0]||(e[0]=[s(`<h1 id="known-vulnerabilities" tabindex="-1">Known vulnerabilities <a class="header-anchor" href="#known-vulnerabilities" aria-label="Permalink to &quot;Known vulnerabilities&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>This step ends the reconnaissance phase. The previous steps were aimed at gaining knowledge about the attack surface</p><ul><li>Web server</li><li><a href="./cms">Content Management System (CMS)</a></li><li><a href="./waf-fingerprinting">Web Application Firewall (WAF)</a></li><li>JavaScript Frameworks</li><li>and other technologies</li></ul><p>Known vulnerabilities may then be identified depending on these information.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>Known vulnerabilities can be found from the following resources</p><ul><li><a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer">exploit-db.com</a>: an online exploit database</li><li><a href="https://www.exploit-db.com/searchsploit" target="_blank" rel="noreferrer">searchsploit</a> is a command-line utility that allows to do offline searches through the exploit-db</li><li><a href="https://www.cvedetails.com/" target="_blank" rel="noreferrer">CVE Details</a>, <a href="https://nvd.nist.gov/vuln/search" target="_blank" rel="noreferrer">NVD NIST</a> and <a href="https://cve.mitre.org/cve/search_cve_list.html" target="_blank" rel="noreferrer">MITRE</a> are online CVE (Common Vulnerabilities and Exposures) searches</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># search exploits for a technology</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">searchsploit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $technology</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Read an exploit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">searchsploit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $exploit_path</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Copy an exploit to the current directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">searchsploit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $exploit_path</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Update the searchsploit database</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">searchsploit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span></span></code></pre></div><p>When a vulnerability is found, one can research a Proof-Of-Concept (PoC) to try at exploiting the vulnerability. Most public PoCs can be found on <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>.</p>`,10)]))}const u=a(t,[["render",l]]);export{k as __pageData,u as default};