import{_ as a,c as t,a5 as r,o as s}from"./chunks/framework.B5CpDqM0.js";const k=JSON.parse('{"title":"ASREQroast","description":"","frontmatter":{"authors":"ShutdownRepo, sckdev"},"headers":[],"relativePath":"ad/movement/kerberos/asreqroast.md","filePath":"ad/movement/kerberos/asreqroast.md","lastUpdated":1724982529000}'),i={name:"ad/movement/kerberos/asreqroast.md"};function n(o,e,c,h,p,l){return s(),t("div",null,e[0]||(e[0]=[r(`<h1 id="asreqroast" tabindex="-1">ASREQroast <a class="header-anchor" href="#asreqroast" aria-label="Permalink to &quot;ASREQroast&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>The Kerberos authentication protocol works with tickets in order to grant access. A ST (Service Ticket) can be obtained by presenting a TGT (Ticket Granting Ticket). That prior TGT can be obtained by validating a first step named &quot;pre-authentication&quot; (except if that requirement is explicitly removed for some accounts, making them vulnerable to <a href="./asreproast">ASREProast</a>).</p><p>The pre-authentication requires the requesting user to supply its secret key (DES, RC4, AES128 or AES256) derived from the user password. Technically, when asking the KDC (Key Distribution Center) for a TGT (Ticket Granting Ticket), the requesting user needs to validate pre-authentication by sending a timestamp encrypted with it&#39;s own credentials in an <code>AS_REQ</code> message. It ensures the user is requesting a TGT for himself. When attackers obtain a man-in-the-middle position, they are sometimes able to capture pre-authentication messages, including the encrypted timestamps. Attackers can try to crack those encrypted timestamps to retrieve the user&#39;s password.</p><p>This technique is similar to <a href="./asreproast">ASREProasting</a> but doesn&#39;t rely on a misconfiguration. It relies instead on an attacker successfully obtain a powerful enough <a href="./../mitm-and-coerced-authentications/">man-in-the-middle</a> position (i.e. <a href="./../mitm-and-coerced-authentications/arp-poisoning">ARP poisoning</a>, <a href="./../mitm-and-coerced-authentications/icmp-redirect">ICMP redirect</a>, <a href="./../mitm-and-coerced-authentications/dhcpv6-spoofing">DHCPv6 spoofing</a>).</p><p>This technique can be categorized as a <a href="./../credentials/dumping/network-protocols">plaintext protocol credential dumping</a> technique.</p><h2 id="practice" tabindex="-1">Practice <a class="header-anchor" href="#practice" aria-label="Permalink to &quot;Practice&quot;">​</a></h2><p>Once network traffic is hijacked and goes through an attacker-controlled equipement, valuable information can searched through captured (with <a href="https://www.tcpdump.org/manpages/tcpdump.1.html" target="_blank" rel="noreferrer">tcpdump</a>, <a href="https://www.wireshark.org/docs/man-pages/tshark.html" target="_blank" rel="noreferrer">tshark </a>or <a href="https://www.wireshark.org/" target="_blank" rel="noreferrer">wireshark</a>) or through live traffic.</p><p><a href="https://github.com/lgandx/PCredz" target="_blank" rel="noreferrer">PCredz </a>(Python) is a good example and allows extraction of credit card numbers, NTLM (DCE-RPC, HTTP, SQL, LDAP, etc), Kerberos (AS-REQ Pre-Auth etype 23), HTTP Basic, SNMP, POP, SMTP, FTP, IMAP, etc from a pcap file or from a live interface.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># extract credentials from a pcap file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Pcredz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;file-to-parse.pcap&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># extract credentials from all pcap files in a folder</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Pcredz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/path/to/pcaps/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># extract credentials from a live packet capture on a network interface</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Pcredz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INTERFACE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-v</span></span></code></pre></div><p>Captured encrypted timestamps can then be cracked with <a href="https://hashcat.net/hashcat/" target="_blank" rel="noreferrer">hashcat</a> (C), mode 7500.</p><div class="tip custom-block"><p>Read the <a href="./../credentials/cracking">Cracking</a> article for more insight</p></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://dumpco.re/blog/asreqroast" target="_blank" rel="noreferrer">https://dumpco.re/blog/asreqroast</a></p>`,14)]))}const u=a(i,[["render",n]]);export{k as __pageData,u as default};