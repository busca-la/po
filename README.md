# Porsche — Concept Experience

Uma experiência editorial independente de portfólio, inspirada no universo do design automotivo Porsche. **Projeto conceitual não oficial**, sem vínculo, patrocínio ou endosso da Porsche AG.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 + CSS autoral
- Lucide React

## Execução local

Requer Node.js 20.19+ ou 22.12+ (recomendação do Vite 7).

```bash
npm install
npm run dev
```

Abra o endereço local indicado pelo Vite.

## Verificação

```bash
npm run typecheck
npm run build
npm run preview
```

O build gera a pasta `dist/`. Não há backend nem variáveis de ambiente.

## Publicação na Vercel (somente com sua autorização)

1. Na Vercel, selecione **Add New → Project** e importe o repositório `busca-la/po`.
2. Se as alterações ainda estiverem na Pull Request, faça o merge em `main` **após a revisão**.
3. Configure **Framework Preset: Vite**; **Build Command: `npm run build`**; **Output Directory: `dist`**.
4. Clique em **Deploy** somente quando quiser publicar. Não há necessidade de secrets.
5. Se desejar um domínio personalizado, adicione-o após a publicação.

## Organização

- `src/App.tsx`: layout, navegação, seções, galeria e lightbox acessível.
- `src/content.ts`: textos, modelos e catálogo de imagens com alternativas.
- `src/styles.css`: sistema visual, motion, responsividade e redução de movimento.
- `public/favicon.svg`: símbolo tipográfico original do projeto.
- `index.html`: título, descrição e metadados.

## Fotografias e direitos

As imagens são carregadas de provedores externos, com URLs de arquivos fotográficos encontrados publicamente. Fontes utilizadas incluem Porsche, Porsche Newsroom, Porsche București, Unsplash e editoriais automotivos. Os direitos das fotografias e da marca **Porsche** pertencem aos titulares correspondentes. **A presença pública da imagem não significa autorização de uso comercial**. Para publicação comercial, solicite licenças e substitua as URLs por assets sob seu controle.

As imagens possuem fallback visual e, quando disponível, URL alternativa para evitar ícones de imagem quebrada caso um provedor deixe de atender. Por serem recursos externos, sua disponibilidade futura não pode ser garantida.

## Recursos de UX

Navegação âncora; menu responsivo; revelações por IntersectionObserver; conteúdo interativo de experiência; galeria com visualização ampliada e controles de teclado; labels semânticos; `prefers-reduced-motion`; marcação clara de conceito não oficial.

Não existem formulários, fluxos de compra, preços ou especificações técnicas fictícias.
