# ADR 008: Conferences and Seminars com Padrão Repository e Visualizador Interativo de PDF

## Status
Aceite

## Contexto
O currículo Europass (`docs/files/CV-Europass.pdf`) contém uma secção dedicada a **Conferences and Seminars**, destacando a participação e apresentação oral de Fábio Paulo na 11.ª conferência internacional **ICEET 2025** na Malásia (*"RFID-Based Smart Climate Control in Student Residences: A Personalized and Energy-Efficient Approach"*).
Cada registo de conferência possui um comprovativo ou documento PDF associado (certificado ou apresentação). Para proporcionar uma experiência de utilizador rica e interativa:
1. Os dados da conferência devem ser desacoplados e centralizados num repositório local tipado (`LocalConferencesRepository`).
2. A interação deve suportar um modo expansível de pré-visualização: ao clicar na conferência, o layout reajusta-se (deslocando a informação do artigo para a esquerda) e abrindo um painel lateral direito animado com visualizador de PDF embutido utilizando o pacote `@embedpdf/viewer-react`.

## Decisões

1. **Repositório de Dados Isolado:**
   - Criada a pasta `src/repositories/local/conferences/` com:
     - `types.ts`: Interface `IConferenceItem` com campos para título da conferência, edição, acrónimo, papel/tipo de apresentação, datas, localização, título do artigo, link oficial, tópicos-chave e URI do certificado PDF (`certificatePdf`).
     - `data.ts`: Coleção de dados oficial contendo o registo da ICEET 2025.
     - `repository.ts`: Classe `LocalConferencesRepository` com métodos `getConferencesData()` e `getConferenceById(id)`.
     - `index.ts`: Ponto de exportação barrel integrado em `src/repositories/index.ts`.

2. **Transição de Layout Fluida (Master-Detail Split-View):**
   - Utilização de `framer-motion` (`layout` prop e transições `spring`/`tween`) para redimensionar o container da conferência quando um item está selecionado (`selectedConference`).
   - Quando nenhum item está ativo, o card é exibido centrado com largura otimizada (`max-w-3xl mx-auto`).
   - Ao selecionar a conferência, a coluna principal divide-se e um painel deslizante entra pela direita com animação suave de slide e opacidade (`x: [40, 0]`, `opacity: [0, 1]`).

3. **Integração do Visualizador de PDF (`@embedpdf/viewer-react`):**
   - O visualizador é encapsulado com barra de ações dedicada:
     - Botão de fechar pré-visualização.
     - Botão para download direto do PDF ou abertura em nova janela.
     - Painel estilizado com o design system *Deep Slate & Glassmorphism* (`bg-slate-900/90`, bordas translúcidas `border-slate-800`).
     - Gestão de URLs considerando `${import.meta.env.BASE_URL}` para compatibilidade total com o deploy em subdiretórios no GitHub Pages.

4. **Navegação e Ritmo Visual:**
   - Inserção da secção no `App.tsx` com `colorScheme="color-2"`.
   - Adicionada âncora `"conferences"` ao utilitário de navegação `src/components/navbar/utils.ts`.

## Consequências
- A experiência do utilizador é moderna e interativa, permitindo inspecionar o certificado ou documento da conferência diretamente no portfólio sem sair da página.
- A arquitetura preserva a separação de responsabilidades (dados no repositório, lógica de visualização desacoplada).
- Facilidade de adição de futuras conferências e seminários apenas atualizando `data.ts`.
