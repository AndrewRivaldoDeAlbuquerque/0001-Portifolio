import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, BookOpen, Award, Heart } from "lucide-react";

/*
  SEÇÃO SOBRE MIM
  Esta seção apresenta informações pessoais e profissionais
  Inclui:
  - História profissional
  - Valores e filosofia
  - Experiências relevantes
  - Cards informativos organizados
*/

const About = () => {
  /*
    DADOS PARA OS CARDS INFORMATIVOS
    Array de objetos contendo as informações que serão exibidas
    Cada card tem um ícone, título, descrição e itens relacionados
  */
  const aboutCards = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Quem sou eu",
      description: "Desenvolvedor apaixonado por tecnologia com 1+ anos de experiência criando soluções web inovadoras.",
      items: ["Focado em qualidade", "Sempre aprendendo", "Orientado a resultados"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Formação",
      description: "Graduando em Tecnico em desenvolvimento de sistemas e em Engenharia de Software.",
      items: ["Desenvolvimento de Sistemas", "Cursos online especializados", "Certificações técnicas"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Experiência",
      description: "Trabalhei em projetos variados, desde startups até empresas consolidadas.",
      items: ["15+ projetos concluídos", "Metodologias ágeis", "Trabalho em equipe"]
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Paixões",
      description: "Além do código, tenho outros interesses que enriquecem minha perspectiva profissional.",
      items: ["Violão", "Música", "Motos", "Viagens", "Praia"]
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      {/* 
        CONFIGURAÇÃO DA SEÇÃO:
        - id="about": permite navegação direta
        - py-20: padding vertical de 20 (espaçamento superior e inferior)
        - px-4: padding horizontal para margens laterais
      */}
      
      <div className="container mx-auto max-w-6xl">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco da minha jornada, experiências e o que me motiva como desenvolvedor.
          </p>
        </div>

        {/* INTRODUÇÃO PESSOAL */}
        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              Sou um desenvolvedor <span className="text-primary font-semibold">Full Stack</span> pronto
              para criar experiências digitais que fazem a diferença. Minha jornada na programação começou há 
              alguns anos e desde então venho me especializando em tecnologias modernas como 
              <span className="text-accent font-semibold"> React, Spring boot, TypeScript</span> e muito mais.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Acredito que bom código vai além da funcionalidade - ele deve ser 
              <span className="text-primary font-semibold"> elegante, eficiente e sustentável</span>. 
              Cada projeto é uma oportunidade de aprender algo novo e criar soluções que realmente importam.
            </p>
          </div>
        </div>

        {/* GRID DE CARDS INFORMATIVOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group"
            >
              {/*
                CONFIGURAÇÃO DO CARD:
                - card-gradient: classe CSS personalizada para fundo com gradiente
                - hover:border-primary/30: muda a cor da borda no hover
                - transition-all duration-500: transição suave de 500ms
                - hover:shadow-lg: adiciona sombra no hover
                - group: permite aplicar estilos baseados no hover do card pai
              */}
              
              <CardContent className="p-6">
                
                {/* CABEÇALHO DO CARD */}
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>
                
                {/* DESCRIÇÃO DO CARD */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {card.description}
                </p>
                
                {/* LISTA DE ITENS */}
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEÇÃO DE VALORES E FILOSOFIA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Minha <span className="gradient-text">Filosofia</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* VALOR 1: SIMPLICIDADE */}
            <div className="p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Simplicidade</h4>
              <p className="text-sm text-muted-foreground">
                As melhores soluções são geralmente as mais simples e diretas.
              </p>
            </div>
            
            {/* VALOR 2: QUALIDADE */}
            <div className="p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Qualidade</h4>
              <p className="text-sm text-muted-foreground">
                Código limpo e bem estruturado é um investimento no futuro.
              </p>
            </div>
            
            {/* VALOR 3: INOVAÇÃO */}
            <div className="p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Inovação</h4>
              <p className="text-sm text-muted-foreground">
                Sempre busco as tecnologias e práticas mais atuais do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;