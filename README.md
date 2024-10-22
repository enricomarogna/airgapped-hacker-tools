# Airgaped Hacker Tools

## Jekyll

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