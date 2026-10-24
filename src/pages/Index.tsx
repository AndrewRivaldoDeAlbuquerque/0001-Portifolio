import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/*
  PÁGINA PRINCIPAL DO PORTFÓLIO
  Esta é a página principal que reúne todos os componentes do portfólio
  
  ESTRUTURA DO PORTFÓLIO:
  1. Navigation - Menu de navegação fixo no topo
  2. Hero - Seção de apresentação inicial  
  3. About - Informações pessoais e profissionais
  4. Skills - Habilidades técnicas e competências
  5. Projects - Projetos desenvolvidos e cases
  6. Contact - Formulário de contato e informações
  7. Footer - Rodapé com links e informações finais
  
  CARACTERÍSTICAS TÉCNICAS:
  - Design responsivo para todos os dispositivos
  - Navegação suave entre seções (smooth scroll)
  - Animações e transições elegantes
  - Sistema de cores e gradientes consistente
  - Componentes reutilizáveis e bem estruturados
  - Código totalmente comentado para aprendizado
*/

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 
        CONFIGURAÇÃO PRINCIPAL:
        - min-h-screen: garante altura mínima da tela
        - bg-background: cor de fundo do tema
        - text-foreground: cor do texto do tema
        
        Todas as cores são definidas no sistema de design (index.css)
        e aplicadas através das classes do Tailwind CSS
      */}
      
      {/* NAVEGAÇÃO - Menu fixo no topo */}
      <Navigation />
      
      {/* CONTEÚDO PRINCIPAL */}
      <main>
        {/* SEÇÃO HERO - Primeira impressão do visitante */}
        <Hero />
        
        {/* SEÇÃO SOBRE - História e apresentação pessoal */}
        <About />
        
        {/* SEÇÃO HABILIDADES - Competências técnicas */}
        <Skills />
        
        {/* SEÇÃO PROJETOS - Portfolio de trabalhos */}
        <Projects />
        
        {/* SEÇÃO CONTATO - Formulário e informações */}
        <Contact />
      </main>
      
      {/* RODAPÉ - Informações finais e links */}
      <Footer />
    </div>
  );
};

export default Index;
