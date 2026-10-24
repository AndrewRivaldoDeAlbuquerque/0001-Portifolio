import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/*
  COMPONENTE FOOTER
  Rodapé do portfólio com informações finais
  Inclui:
  - Links de navegação
  - Informações de contato
  - Redes sociais
  - Botão para voltar ao topo
  - Copyright e créditos
*/

const Footer = () => {
  /*
    FUNÇÃO PARA ROLAR PARA O TOPO
    Quando clicado, leva o usuário de volta ao início da página
  */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  /*
    FUNÇÃO PARA ROLAR PARA UMA SEÇÃO ESPECÍFICA
    Recebe o ID da seção e rola suavemente até ela
  */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /*
    LINKS DE NAVEGAÇÃO DO FOOTER
    Mesmos links do menu principal, para facilitar a navegação
  */
  const footerLinks = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" }
  ];

  /*
    LINKS PARA REDES SOCIAIS
    Mesmos links da seção de contato, para consistência
  */
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/AndrewRivaldoDeAlbuquerque",
      description: "Veja meus projetos"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/andrew-rivaldo-10a17a206/",
      description: "Conecte-se comigo"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      name: "Email",
      url: "Andrewalbuquerquealves@gmail.com",
      description: "Entre em contato"
    }
  ];

  return (
    <footer className="relative border-t border-border bg-background">
      {/* 
        CONFIGURAÇÃO DO FOOTER:
        - relative: permite posicionamento de elementos filhos
        - border-t: borda superior para separar do conteúdo
        - bg-background: cor de fundo padrão do tema
      */}
      
      {/* EFEITO DECORATIVO DE FUNDO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 gradient-bg rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        
        {/* SEÇÃO PRINCIPAL DO FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* COLUNA 1: INFORMAÇÕES PESSOAIS */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* NOME/LOGO */}
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Andrew Alves
              </h3>
              
              {/* DESCRIÇÃO BREVE */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis. 
                Especializado em tecnologias modernas e sempre em busca de novos desafios.
              </p>
              
              {/* LOCALIZAÇÃO E DISPONIBILIDADE */}
              <div className="text-sm text-muted-foreground space-y-1">
                <p>📍 Recife, PE - Brasil</p>
                <p>💼 Disponível para novos projetos</p>
                <p>🌐 Trabalho remoto e presencial</p>
              </div>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Links Rápidos
            </h4>
            
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* COLUNA 3: CONTATO E REDES SOCIAIS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Conecte-se
            </h4>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-muted/10 group-hover:bg-primary/10 transition-colors duration-300">
                    {social.icon}
                  </div>
                  
                  <div>
                    <div className="font-medium">{social.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {social.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-border mb-8"></div>

        {/* SEÇÃO INFERIOR DO FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* COPYRIGHT E INFORMAÇÕES */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start">
              © 2025 Andrew Alves. Feito com 
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              e muito ☕
            </p>
            
            <p className="text-xs text-muted-foreground mt-1">
              Desenvolvido com React, TypeScript e Tailwind CSS
            </p>
          </div>

          {/* BOTÃO VOLTAR AO TOPO */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300 group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              Voltar ao Topo
            </Button>
          </div>
        </div>

        {/* INFORMAÇÕES TÉCNICAS ADICIONAIS */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              Este portfólio é open source e está disponível no GitHub
            </p>
            
            {/* TECNOLOGIAS UTILIZADAS */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React", "TypeScript", "Tailwind CSS", "Vite", 
                "Shadcn/ui", "Lucide Icons", "Framer Motion"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-md bg-primary/5 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EASTER EGG: MENSAGEM ESPECIAL */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground/50">
            🎉 Obrigado por chegar até aqui! Você é incrível! 🎉
          </p>
        </div>
      </div>

      {/* GRADIENTE DECORATIVO NO FINAL */}
      <div className="h-1 gradient-bg"></div>
    </footer>
  );
};

export default Footer;