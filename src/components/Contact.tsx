import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  Instagram
} from "lucide-react";

/*
  SEÇÃO DE CONTATO
  Formulário de contato e informações para comunicação
  Inclui:
  - Formulário funcional de contato
  - Informações de contato direto
  - Links para redes sociais
  - Validação de campos
  - Feedback visual para o usuário
*/

const Contact = () => {
  // Hook do toast para mostrar notificações
  const { toast } = useToast();
  
  // Estados para controlar o formulário
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    subject: "",
    message: ""
  });

  /*
    INFORMAÇÕES DE CONTATO DIRETO
    Array com diferentes formas de entrar em contato
  */
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "Andrewalbuquerquealves@gmail.com",
      description: "Respondo em até 24 horas",
      action: () => window.location.href = "mailto:andrewalbuquerquealves@gmail.com?subject=Contato&body=Olá Andrew, tudo bem?",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      value: "+55 (81) 97343-8226",
      description: "Segunda à Sexta, 9h às 18h",
      action: () => window.open("tel:+5581973438226"),
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      value: "Recife, PE",
      description: "Disponível para remoto",
      action: null,
      color: "text-purple-500", 
      bgColor: "bg-purple-500/10"
    },
  ];

  /*
    LINKS PARA REDES SOCIAIS
    Array com os perfis nas principais plataformas
  */
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "https://github.com/AndrewRivaldoDeAlbuquerque",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/andrew-rivaldo-10a17a206/",
      color: "hover:text-blue-500"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/find.andrew/", 
      color: "hover:text-sky-500"
    } 
  ];

  /*
    FUNÇÃO PARA ATUALIZAR OS DADOS DO FORMULÁRIO
    Atualiza o estado quando o usuário digita nos campos
  */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /*
    FUNÇÃO PARA VALIDAR O FORMULÁRIO
    Verifica se todos os campos obrigatórios estão preenchidos
  */
  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome.",
        variant: "destructive"
      });
      return false;
    }

    if (!email.trim() || !email.includes("@")) {
      toast({
        title: "Email inválido", 
        description: "Por favor, informe um email válido.",
        variant: "destructive"
      });
      return false;
    }

    if (!subject.trim()) {
      toast({
        title: "Assunto obrigatório",
        description: "Por favor, informe o assunto da mensagem.",
        variant: "destructive"
      });
      return false;
    }

    if (!message.trim() || message.length < 10) {
      toast({
        title: "Mensagem muito curta",
        description: "A mensagem deve ter pelo menos 10 caracteres.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  /*
    FUNÇÃO PARA ENVIAR O FORMULÁRIO
    Processa o envio da mensagem (simulação - em produção integraria com backend)
  */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valida os campos antes de enviar
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // SIMULAÇÃO DE ENVIO (em produção, faria requisição para API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Sucesso - limpa o formulário e mostra confirmação
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      toast({
        title: "Mensagem enviada! 🎉",
        description: "Obrigado pelo contato! Responderei em breve.",
        variant: "default"
      });
      
    } catch (error) {
      // Erro - mostra mensagem de erro
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema. Tente novamente ou me contate diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-muted/5 px-4 py-20">
      {/* 
        CONFIGURAÇÃO DA SEÇÃO:
        - bg-muted/5: fundo levemente diferente para destacar
      */}
      
      <div className="container mx-auto max-w-6xl">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          
          <div className="gradient-bg mx-auto mb-6 h-1 w-24 rounded-full"></div>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade!
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          
          {/* COLUNA ESQUERDA - INFORMAÇÕES DE CONTATO */}
          <div className="space-y-8">
            
            {/* INTRODUÇÃO */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Vamos trabalhar <span className="gradient-text">juntos</span>
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Estou sempre interessado em novos projetos e oportunidades. 
                Seja para uma consultoria, desenvolvimento de projeto ou apenas 
                para trocar ideias sobre tecnologia, ficarei feliz em conversar!
              </p>
            </div>

            {/* CARDS DE INFORMAÇÕES DE CONTATO */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`
                    card-gradient border-border/50 transition-all duration-300 hover:border-primary/30
                    ${info.action ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'}
                  `}
                  onClick={info.action || undefined}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      
                      {/* ÍCONE */}
                      <div className={`shrink-0 rounded-lg p-3 ${info.bgColor}`}>
                        <div className={info.color}>
                          {info.icon}
                        </div>
                      </div>
                      
                      {/* INFORMAÇÕES */}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="break-words font-medium text-primary">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* REDES SOCIAIS */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">
                Me siga nas redes sociais
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg bg-muted/20 p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - FORMULÁRIO DE CONTATO */}
          <Card className="card-gradient border-border/50">
            <CardHeader className="space-y-2 p-6 pb-4 sm:p-8 sm:pb-5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <span className="rounded-lg bg-primary/10 p-2 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </span>
                Envie uma mensagem
              </CardTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Preencha o formulário e conte um pouco sobre o seu projeto.
              </p>
            </CardHeader>

            <CardContent className="p-6 pt-2 sm:p-8 sm:pt-3">
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      autoComplete="name"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      autoComplete="email"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Como posso ajudar?"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou sua ideia..."
                    className="min-h-36 resize-y"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="gradient-bg w-full transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CALL TO ACTION FINAL */}
        <div className="card-gradient mt-12 rounded-2xl border border-border/50 p-6 text-center md:mt-16 md:p-8">
          <div className="mb-4 text-4xl">🚀</div>
          <h3 className="mb-2 text-2xl font-bold">
            Pronto para começar seu projeto?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Transforme sua ideia em realidade. Vamos criar algo incrível juntos!
          </p>
          
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button 
              size="lg"
              className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;