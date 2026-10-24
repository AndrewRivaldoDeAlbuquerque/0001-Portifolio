import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/*
  COMPONENTE DE NAVEGAÇÃO
  Este é o header/menu do nosso portfólio
  Funcionalidades:
  - Menu responsivo (mobile/desktop)  
  - Navegação suave entre seções
  - Estado ativo baseado na seção atual
  - Animações de entrada e hover
*/

const Navigation = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado para rastrear qual seção está atualmente visível na tela
  const [activeSection, setActiveSection] = useState("home");

  // Lista dos itens do menu com seus identificadores e nomes
  const menuItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },  
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" }
  ];

  /*
    EFEITO PARA DETECTAR QUAL SEÇÃO ESTÁ VISÍVEL
    useEffect monitora o scroll da página e determina qual seção 
    está atualmente na viewport (área visível da tela)
  */
  useEffect(() => {
    const handleScroll = () => {
      // Para cada item do menu, verifica se a seção correspondente está visível
      menuItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          // getBoundingClientRect() retorna a posição do elemento na tela
          const rect = element.getBoundingClientRect();
          
          // Se a seção está na metade superior da tela, marca como ativa
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
      
    };
    

    // Adiciona o listener de scroll quando o componente monta
    window.addEventListener("scroll", handleScroll);
    
    // Remove o listener quando o componente desmonta (cleanup)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array vazio significa que o efeito roda apenas uma vez

  /*
    FUNÇÃO DE NAVEGAÇÃO SUAVE
    Recebe o ID de uma seção e rola até ela de forma suave
  */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // scrollIntoView com behavior: 'smooth' cria animação de scroll
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    // Fecha o menu mobile após clicar em um item
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* 
        CONTAINER PRINCIPAL DA NAVEGAÇÃO
        - fixed: fixa o menu no topo da página
        - z-50: garante que o menu fique acima de outros elementos
        - bg-background/80: fundo semi-transparente (80% de opacidade)
        - backdrop-blur-md: efeito de desfoque no fundo (glassmorphism)
      */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* LOGO/NOME DO PORTFÓLIO */}
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer transition-transform hover:scale-105"
            onClick={() => scrollToSection("home")}
          >
            {/* gradient-text é uma classe CSS personalizada que aplicamos no index.css */}
            Portifólio de Andrew
          </div>

          {/* MENU DESKTOP - Visível apenas em telas médias e maiores */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  relative px-4 py-2 rounded-lg transition-all duration-300
                  hover:text-primary hover:scale-105
                  ${activeSection === id 
                    ? 'text-primary bg-primary/10' // Estilo para item ativo
                    : 'text-muted-foreground hover:text-foreground' // Estilo padrão
                  }
                `}
              >
                {label}
                
                {/* INDICADOR VISUAL DO ITEM ATIVO */}
                {activeSection === id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-glow" />
                )}
              </button>
            ))}
          </div>

          {/* BOTÃO DO MENU MOBILE - Visível apenas em telas pequenas */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Ícone muda baseado no estado do menu (hambúrguer ou X) */}
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* MENU MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            {/* animate-fade-in-up é uma animação personalizada definida no CSS */}
            <div className="flex flex-col space-y-2">
              {menuItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`
                    text-left px-4 py-3 rounded-lg transition-all duration-300
                    hover:bg-primary/10 hover:text-primary
                    ${activeSection === id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground'
                    }
                  `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;