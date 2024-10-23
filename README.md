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

#### EMBEDED

- Regex per individuare gli `embeded` e modificare come da esempio:

    ```markdown
    {% embed url="https://lolbas-project.github.io" %}
    ```

    in

    ```markdown
    [lolbas-project.github.io](https://lolbas-project.github.io)
    ```

    Regex per la ricerca tramite VSCode

    ```
    \{%\s*embed\s+url="([^"]+)"\s*%\}
    ``` 

    E stringa per la sostituzione
    ```
    [$1]($1)
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
    <div class='notice notice-$1'>
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