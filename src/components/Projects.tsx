import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

/*
  SEÇÃO DE PROJETOS
  Showcases dos projetos desenvolvidos com:
  - Cards informativos de cada projeto
  - Filtros por categoria/tecnologia
  - Links para demo e código
  - Descrições detalhadas
  - Screenshots/imagens dos projetos
*/

const Projects = () => {
  // Estado para controlar qual categoria está sendo filtrada
  const [activeFilter, setActiveFilter] = useState("todos");

  /*
    DADOS DOS PROJETOS
    Array com informações completas de cada projeto
    Cada projeto contém: título, descrição, tecnologias, links, categoria, imagem
  */
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados, painel administrativo e sistema de avaliações. Interface responsiva e experiência de usuário otimizada.",
      longDescription: "Este projeto foi desenvolvido com foco na experiência do usuário e performance. Inclui funcionalidades como busca avançada, filtros dinâmicos, wishlist, sistema de cupons e relatórios de vendas.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demoUrl: "https://demo.exemplo.com",
      githubUrl: "https://github.com/usuario/ecommerce",
      status: "Concluído",
      featured: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos, relatórios em tempo real e sistema de notificações. Interface intuitiva para tomada de decisões.",
      longDescription: "Sistema completo de analytics com integração a múltiplas fontes de dados, visualizações personalizáveis e alertas automatizados para métricas importantes.",
      technologies: ["React", "TypeScript", "Recharts", "Supabase", "Tailwind"],
      category: "frontend", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoUrl: "https://analytics.exemplo.com",
      githubUrl: "https://github.com/usuario/dashboard",
      status: "Concluído",
      featured: true
    },
    {
      id: 3,
      title: "API de Gestão",
      description: "API RESTful robusta para sistema de gestão empresarial com autenticação JWT, documentação completa e testes automatizados. Arquitetura escalável e segura.",
      longDescription: "API desenvolvida seguindo os princípios REST com foco em performance e segurança. Inclui rate limiting, logs detalhados e integração com serviços externos.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      demoUrl: null,
      githubUrl: "https://github.com/usuario/api-gestao",
      status: "Concluído",
      featured: false
    },
    {
      id: 4,
      title: "App de Tarefas",
      description: "Aplicativo mobile para gerenciamento de tarefas com sincronização offline, notificações push e interface intuitiva. Produtividade ao alcance das suas mãos.",
      longDescription: "App desenvolvido em React Native com foco na experiência mobile. Sincronização automática, widgets personalizáveis e integração com calendários.",
      technologies: ["React Native", "Expo", "AsyncStorage", "Push Notifications"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      demoUrl: "https://expo.dev/@usuario/task-app",
      githubUrl: "https://github.com/usuario/task-app",
      status: "Em desenvolvimento",
      featured: false
    },
    {
      id: 5,
      title: "Landing Page SaaS",
      description: "Landing page moderna e convertedora para startup de SaaS com animações suaves, seções otimizadas para conversão e integração com ferramentas de marketing.",
      longDescription: "Página desenvolvida com foco em conversão, incluindo A/B testing, analytics avançados, formulários otimizados e integração com CRM.",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      demoUrl: "https://saas-landing.exemplo.com",
      githubUrl: "https://github.com/usuario/saas-landing",
      status: "Concluído",
      featured: true
    },
    {
      id: 6,
      title: "Sistema de Blog",
      description: "CMS personalizado para blog com editor rico, sistema de comentários, SEO otimizado e painel administrativo completo. Perfeito para criadores de conteúdo.",
      longDescription: "Sistema completo de gerenciamento de conteúdo com editor WYSIWYG, upload de mídia, sistema de tags, comentários moderados e analytics de posts.",
      technologies: ["React", "Node.js", "PostgreSQL", "Rich Text Editor"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      demoUrl: "https://blog.exemplo.com",
      githubUrl: "https://github.com/usuario/cms-blog",
      status: "Concluído",
      featured: false
    }
  ];

  /*
    CATEGORIAS PARA FILTRO
    Lista das categorias disponíveis para filtrar os projetos
  */
  const categories = [
    { id: "todos", label: "Todos", icon: <Eye className="h-4 w-4" /> },
    { id: "frontend", label: "Frontend", icon: <Filter className="h-4 w-4" /> },
    { id: "backend", label: "Backend", icon: <Filter className="h-4 w-4" /> },
    { id: "fullstack", label: "Full Stack", icon: <Filter className="h-4 w-4" /> },
    { id: "mobile", label: "Mobile", icon: <Filter className="h-4 w-4" /> }
  ];

  /*
    FUNÇÃO PARA FILTRAR PROJETOS
    Retorna os projetos baseados na categoria ativa
  */
  const filteredProjects = projects.filter(project => 
    activeFilter === "todos" || project.category === activeFilter
  );

  /*
    FUNÇÃO PARA OBTER COR DO STATUS
    Retorna a cor apropriada baseada no status do projeto
  */
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído": return "bg-green-500/10 text-green-500";
      case "Em desenvolvimento": return "bg-yellow-500/10 text-yellow-500";
      case "Planejado": return "bg-blue-500/10 text-blue-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções.
          </p>
        </div>

        {/* FILTROS DE CATEGORIA */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`
                flex items-center space-x-2 transition-all duration-300
                ${activeFilter === category.id 
                  ? 'gradient-bg text-white shadow-lg' 
                  : 'hover:bg-primary/10 hover:text-primary hover:border-primary/50'
                }
              `}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.icon}
              <span>{category.label}</span>
            </Button>
          ))}
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className={`
                card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 
                hover:shadow-xl hover:shadow-primary/10 group overflow-hidden
                ${project.featured ? 'ring-1 ring-primary/20' : ''}
              `}
            >
              {/* IMAGEM DO PROJETO */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* OVERLAY COM LINKS */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  
                  {/* BOTÃO DEMO (se disponível) */}
                  {project.demoUrl && (
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  
                  {/* BOTÃO GITHUB */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>

                {/* BADGE DE PROJETO EM DESTAQUE */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-bg text-white">
                      ⭐ Destaque
                    </Badge>
                  </div>
                )}

                {/* BADGE DE STATUS */}
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* CONTEÚDO DO CARD */}
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* DESCRIÇÃO */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TECNOLOGIAS UTILIZADAS */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* BOTÕES DE AÇÃO */}
                <div className="flex space-x-2 pt-2">
                  {project.demoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* MENSAGEM QUANDO NÃO HÁ PROJETOS NO FILTRO */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-muted-foreground">
              Tente selecionar uma categoria diferente ou volte para "Todos".
            </p>
          </div>
        )}

        {/* CALL TO ACTION PARA MAIS PROJETOS */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais projetos ou discutir uma colaboração?
          </p>
          
          <Button 
            size="lg"
            className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Github className="mr-2 h-5 w-5" />
            Ver Mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;