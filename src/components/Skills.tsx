import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Palette, 
  Wrench, 
  Globe, 
  Smartphone,
  Server,
  GitBranch
} from "lucide-react";

/*
  SEÇÃO DE HABILIDADES
  Apresenta as competências técnicas organizadas por categoria
  Inclui:
  - Linguagens de programação
  - Frameworks e bibliotecas  
  - Ferramentas de desenvolvimento
  - Habilidades de design
  - Barras de progresso para nível de conhecimento
*/

const Skills = () => {
  /*
    DADOS DAS CATEGORIAS DE HABILIDADES
    Cada categoria contém um ícone, título, descrição e lista de tecnologias
    O campo 'level' representa o nível de conhecimento (0-100)
  */
  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend",
      description: "Criação de interfaces modernas e responsivas",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React.js", level: 80 },
        { name: "TypeScript", level: 25 },
        { name: "JavaScript", level: 70 },
        { name: "HTML5/CSS3", level: 80 },
        { name: "PHP", level: 60 }
      ]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      description: "Desenvolvimento de APIs e sistemas robustos",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Spring boot", level: 80 },
        { name: "Java", level: 85 },
        { name: "Python", level: 35 },
        { name: "API REST", level: 90 },
        { name: "Laravel", level: 65 }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Banco de Dados",
      description: "Modelagem e otimização de dados",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "PostgreSQL", level: 65 },
        { name: "MySQL", level: 80 },
        { name: "SQL", level: 58 }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "DevOps & Ferramentas",
      description: "Deployment, versionamento e automação",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "Docker", level: 5 },
        { name: "Linux", level: 10 }
      ]
    }
  ];

  /*
    TECNOLOGIAS COMPLEMENTARES
    Lista de outras tecnologias e ferramentas que complementam o skillset
  */
  const additionalSkills = [
    "Gimp", "Responsive Design", 
    "Performance Optimization", "Agile/Scrum", "Vite"
  ];

  /*
    FUNÇÃO PARA DETERMINAR A COR DA BARRA DE PROGRESSO
    Baseado no nível, retorna diferentes cores para indicar proficiência
  */
  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500"; // Verde para expert
    if (level >= 75) return "bg-blue-500";  // Azul para avançado  
    if (level >= 60) return "bg-yellow-500"; // Amarelo para intermediário
    return "bg-red-500"; // Vermelho para iniciante
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/5">
      {/* 
        CONFIGURAÇÃO DA SEÇÃO:
        - bg-muted/5: fundo levemente diferente para destacar a seção
      */}
      
      <div className="container mx-auto max-w-6xl">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
          </p>
        </div>

        {/* GRID DAS CATEGORIAS DE HABILIDADES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="pb-4">
                {/* CABEÇALHO DA CATEGORIA */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* LISTA DE HABILIDADES DA CATEGORIA */}
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    
                    {/* NOME DA HABILIDADE E NÍVEL PERCENTUAL */}
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* BARRA DE PROGRESSO */}
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted" 
                      />
                      
                      {/* 
                        INDICADOR VISUAL DO NÍVEL
                        A cor da barra muda baseada no nível de proficiência
                      */}
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${getProgressColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEÇÃO DE HABILIDADES COMPLEMENTARES */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">Outras</span> Tecnologias
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ferramentas e tecnologias complementares que utilizo em meus projetos.
          </p>
          
          {/* GRID DE BADGES COM AS TECNOLOGIAS */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* SEÇÃO DE ESTATÍSTICAS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Globe className="h-8 w-8 text-primary" />, number: "15+", label: "Projetos Web" },
            { icon: <Smartphone className="h-8 w-8 text-primary" />, number: "5+", label: "Apps Mobile" },
            { icon: <GitBranch className="h-8 w-8 text-primary" />, number: "500+", label: "Commits" },
            { icon: <Code2 className="h-8 w-8 text-primary" />, number: "3+", label: "Anos Coding" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;