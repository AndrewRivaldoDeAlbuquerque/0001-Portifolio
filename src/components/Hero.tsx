import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/hero-perfil.png";

/*
  SEÇÃO HERO (APRESENTAÇÃO PRINCIPAL)
  Esta é a primeira seção que os visitantes veem
  Inclui:
  - Nome e título profissional
  - Descrição breve
  - Botões de ação (CTA - Call to Action)  
  - Links para redes sociais
  - Animações e efeitos visuais
*/

const Hero = () => {
  /*
    FUNÇÃO PARA ROLAR PARA A PRÓXIMA SEÇÃO
    Quando o usuário clica na seta, rola suavemente para a seção "Sobre"
  */
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* 
        CONFIGURAÇÃO DA SEÇÃO:
        - id="home": permite navegação direta para esta seção
        - min-h-screen: altura mínima da tela completa
        - flex items-center justify-center: centraliza o conteúdo
        - relative: permite posicionamento absoluto de elementos filhos
        - overflow-hidden: esconde elementos que saem da área
      */}
      
      {/* EFEITO DE FUNDO DECORATIVO */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos decorativos com gradiente e animação */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 gradient-bg rounded-full opacity-20 animate-float blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 gradient-bg rounded-full opacity-10 animate-float blur-3xl" 
             style={{ animationDelay: "2s" }} />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        
        {/* FOTO DE PERFIL */}
        <div className="animate-fade-in-up mb-8">
          {/* 
            COMPONENTE AVATAR:
            - Avatar: container principal do componente
            - AvatarImage: exibe a imagem importada
            - AvatarFallback: mostra as iniciais caso a imagem não carregue
            - w-32 h-32: define largura e altura (128px)
            - mx-auto: centraliza horizontalmente
            - border-4: borda de 4px
            - border-primary/20: cor da borda com transparência
            - shadow-lg: sombra elegante
            - hover:scale-105: efeito de zoom no hover
            - transition-transform: animação suave
          */}
          <Avatar className="w-52 h-52 mx-auto border-4 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <AvatarImage 
              src={profilePhoto} 
              alt="Foto de perfil de Andrew Alves"
              className="object-cover" 
            />
            <AvatarFallback className="text-2xl font-bold gradient-text">
              JS
            </AvatarFallback>
          </Avatar>
        </div>

        {/* SAUDAÇÃO INICIAL */}
        <div className="animate-fade-in-up mb-6" style={{ animationDelay: "0.1s" }}>
          <span className="text-lg md:text-xl text-muted-foreground mb-4 block">
            Olá, eu sou
          </span>
          
          {/* NOME PRINCIPAL COM GRADIENTE */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">
              Andrew Alves
            </span>
          </h1>
          
          {/* TÍTULO PROFISSIONAL */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Desenvolvedor Full Stack
          </h2>
        </div>

        {/* DESCRIÇÃO PROFISSIONAL */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Apaixonado por criar experiências digitais incríveis. 
            Especializado em React, Spring boot e tecnologias modernas de desenvolvimento web.
            Transformo ideias em soluções funcionais e elegantes.
          </p>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="animate-fade-in-up mb-12 flex flex-col sm:flex-row gap-4 justify-center" 
             style={{ animationDelay: "0.5s" }}>
          
          {/* BOTÃO PRIMÁRIO - VER PROJETOS */}
          <Button 
            size="lg" 
            className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Projetos
          </Button>
          
          {/* BOTÃO SECUNDÁRIO - CONTATO */}
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Entre em Contato
          </Button>
        </div>

        {/* LINKS PARA REDES SOCIAIS */}
        <div className="animate-fade-in-up mb-16" style={{ animationDelay: "0.7s" }}>
          <p className="text-muted-foreground mb-4">Me encontre em:</p>
          
          <div className="flex justify-center space-x-6">
            {/* LINK GITHUB */}
            <a 
              href="https://github.com/AndrewRivaldoDeAlbuquerque" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            {/* LINK LINKEDIN */}
            <a 
              href="https://www.linkedin.com/in/andrew-rivaldo-10a17a206/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            {/* LINK EMAIL */}
            <a 
              href="andrewalbuquerquealves@gmail.com"
              className="p-3 rounded-full bg-muted/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* SETA PARA ROLAR PARA BAIXO */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <button 
            onClick={scrollToAbout}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
          >
            <span className="mr-2 text-sm">Continue explorando</span>
            
            {/* ÍCONE DA SETA COM ANIMAÇÃO */}
            <div className="p-2 rounded-full border border-muted-foreground/30 group-hover:border-primary/50 transition-all duration-300">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;