# Resende — Link na bio

Página estática (HTML + CSS + JS puro), sem build e sem dependências. Carrega rápido no 4G.

## O que editar

| Arquivo | O que tem |
|---|---|
| `config.js` | **Link** do banner Protocolo Viral e se abre em nova aba |
| `index.html` | Textos (nome, "marketing viral", "Aprenda comigo", frase final) |
| `styles.css` | Cores no topo (`:root`), tamanhos e espaçamentos |
| `assets/perfil-360.webp`, `perfil.webp`, `perfil-360.png` | Foto de perfil recortada (fundo transparente, quadrada) |
| `assets/banner-protocolo.webp` | Arte do banner (retangular, ~1200 × 618 px) |
| `assets/perfil.jpg` | Imagem de prévia ao compartilhar o link (WhatsApp etc.) |

Para trocar uma imagem, substitua o arquivo mantendo o mesmo nome.

## Ver no computador

```bash
npx serve .
```

## Publicar na Vercel

Em vercel.com/new, importe este repositório do GitHub. Framework: **Other** (sem build). Cada `git push` atualiza o site.
