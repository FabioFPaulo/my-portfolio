# Funcionalidades Implementadas (`docs/features.md`)

Este documento cataloga todas as funcionalidades ativas, módulos funcionais e recursos rascunhados/desativados no código atual.

---

## 1. Matriz de Funcionalidades

| Funcionalidade | Localização no Código | Estado | Descrição |
| :--- | :--- | :--- | :--- |
| **Ecrã de Carregamento (Preloader)** | `src/components/loading/` | **Ativo** | Animação geométrica contínua que bloqueia o ecrã até que 6 imagens críticas sejam carregadas. |
| **Navbar Desktop com Rolagem Suave** | `src/components/navbar/horizontal/` | **Ativo** | Barra fixa de navegação superior com links âncora e destaque da secção ativa (`activeClass`). |
| **Menu Gaveta Mobile (Drawer)** | `src/components/navbar/vertical/` | **Ativo** | Menu lateral retrátil acionado por ícone hambúrguer para dispositivos móveis. |
| **Hero Banner & Download de CV** | `src/sections/banner/` | **Ativo** | Apresentação com dados pessoais, foto com efeitos de filtro e botão 3D para descarregar o PDF do currículo. |
| **Secção de Formação Académica** | `src/sections/academic/` | **Ativo** | Cartões modernos com o novo `logo_upb.svg`, 4 formações oficiais (MSc, Licenciatura, CTeSP e Secundário), médias finais e repositório local. |
| **Histórico de Experiências Profissionais** | `src/sections/experiences/` | **Ativo** | Linha temporal detalhando estágios e cargos técnicos (CeDRI, Techwelf). |
| **Montra de Projetos (Portfolio Showcase)**| `src/sections/projects/` | **Ativo** | Grelha de logotipos e títulos de projetos desenvolvidos (Pin2Give, CeDRI, Swopi, Thermalconf). |
| **Competências & Linguagens** | `src/sections/languages/` | **Ativo** | Apresentação de competências com gráficos circulares de percentagem e ícones SVG. |
| **Rodapé Institucional** | `src/sections/footer/` | **Ativo** | Informação de direitos de autor e ligação direta para o perfil GitHub. |
| **Secção "About Me"** | `src/sections/about/` | **Ativo** | Apresentação biográfica completa extraída do CV Europass, destaques académicos e de investigação, consumindo `src/repositories/local`. |
| **Secção "Contact Me"** | `src/components/navbar/utils.ts` | **Pendente** | Rota/âncora prevista no menu, mas sem componente de formulário associado. |

---

## 2. Detalhe das Funcionalidades Ativas

### 2.1. Preloader Inteligente com Contagem de Assets
* **Mecanismo:** A aplicação não depende de um timer artificial; consome o estado `isLoading` derivado de `imagesCounter < totalImages` fornecido pelo `AppContext`.
* **Animação:** O componente `LoadingComponent` usa o Framer Motion para alternar o elemento de quadrado para círculo e rotações em loop (`scale`, `rotate`, `borderRadius`).

### 2.2. Navegação Responsiva
* **Desktop:** Navbar minimalista translúcida ou integrada no topo com offsets calculados para não sobrepor títulos durante a rolagem (`offset={-60}`).
* **Mobile:** Botão hambúrguer com transição de opacidade e gaveta com efeito sanfona animada.

### 2.3. Secção Hero (Banner)
* Apresenta o título "Fábio Paulo" e subtítulo "I'm a Web Developer".
* Tabela de metadados pessoais (Data de nascimento, morada, e-mail e telefone).
* Botão de conversão direto com target `_blank` apontando para o ficheiro estático `cv.pdf`.

### 2.4. Linha de Tempo de Experiência
* Suporta formatação de datas via função `formatStartEndDate`.
* Renderiza descrições ricas com formatação HTML (`dangerouslySetInnerHTML`), permitindo parágrafos e ênfases no texto descritivo.

### 2.5. Gráficos Circulares de Linguagens
* Utiliza a biblioteca `react-circular-progressbar`.
* Exibe a proficiência em TypeScript, Python e JavaScript com percentuais customizados e ícones SVG inline de alta resolução.

---

## 3. Funcionalidades Incompletas ou Ocultas no Código

1. **Secção About (`src/components/about/`):**
   * Possui ficheiro `index.tsx`, `index.scss`, `types.ts` e `utils.ts`.
   * Contém estrutura para listar pontos fortes, biografia expandida e estatísticas, mas foi comentada no ficheiro `App.tsx` raiz.
2. **Formulário de Contacto:**
   * O menu de navegação tinha a entrada `"contact me"` prevista com a âncora `contact-me`.
   * Atualmente, o utilizador só tem acesso ao email direto no banner, sem formulário de envio de mensagens integrado.
3. **Links de Projetos Detalhados:**
   * A lista `projectsList` em `src/sections/projects/utils.ts` contém campos `description` vazios e nenhum link direto para repositórios ou demonstrações online dos projetos.
