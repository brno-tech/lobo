# 🐺 Lobo do Forró — Pegada Bruta

Landing page de divulgação para contratação de eventos musicais.

## 🚀 Setup rápido

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📋 Checklist antes de publicar

- [ ] **Vídeo**: Substituir o placeholder do Hero por um vídeo real (embed YouTube ou vídeo local)
- [ ] **Fotos**: Substituir os 6 placeholders da galeria por fotos reais do cantor
- [ ] **Depoimentos**: Trocar os depoimentos fictícios por reais
- [ ] **Meta Pixel**: Descomentar e configurar o pixel do Facebook/Meta no `index.html`
- [ ] **OG Image**: Trocar `/public/og-image.jpg` por uma imagem personalizada (1200x630px)
- [ ] **Domínio**: Configurar domínio e atualizar a URL no `og:image` para URL absoluta

## 🏗️ Estrutura do projeto

```
src/
├── assets/          # Logo WebP otimizado
├── components/      # Componentes da landing page
│   ├── ui/          # Componentes shadcn/ui
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── RepertoireSection.tsx
│   ├── GallerySection.tsx
│   ├── EventTypesSection.tsx
│   ├── FormatsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── LocationSection.tsx
│   ├── FinalCTASection.tsx
│   ├── Footer.tsx
│   └── WhatsAppFloat.tsx
├── hooks/           # Custom hooks (scroll animations)
├── lib/             # Constants e utils
└── pages/           # Páginas
```

## 📱 Contato

- **WhatsApp**: (31) 99786-3515
- **Instagram**: @lobo_do_forro_

## ⚡ Stack

React + TypeScript + Vite + Tailwind CSS + shadcn/ui
