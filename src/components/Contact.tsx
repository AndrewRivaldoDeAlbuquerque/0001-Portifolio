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
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Agenda",
      value: "Agendar reunião",
      description: "Vamos conversar sobre seu projeto",
      action: () => window.open("https://calendly.com/usuario"),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
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
    <section id="contact" className="py-20 px-4 bg-muted/5">
      {/* 
        CONFIGURAÇÃO DA SEÇÃO:
        - bg-muted/5: fundo levemente diferente para destacar
      */}
      
      <div className="container mx-auto max-w-6xl">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUNA ESQUERDA - INFORMAÇÕES DE CONTATO */}
          <div className="space-y-8">
            
            {/* INTRODUÇÃO */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Vamos trabalhar <span className="gradient-text">juntos</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre interessado em novos projetos e oportunidades. 
                Seja para uma consultoria, desenvolvimento de projeto ou apenas 
                para trocar ideias sobre tecnologia, ficarei feliz em conversar!
              </p>
            </div>

            {/* CARDS DE INFORMAÇÕES DE CONTATO */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`
                    card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 
                    ${info.action ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'}
                  `}
                  onClick={info.action || undefined}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      
                      {/* ÍCONE */}
                      <div className={`p-3 rounded-lg ${info.bgColor}`}>
                        <div className={info.color}>
                          {info.icon}
                        </div>
                      </div>
                      
                      {/* INFORMAÇÕES */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium">
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
              <h4 className="text-lg font-semibold mb-4">
                Me siga nas redes sociais
              </h4>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-3 rounded-lg bg-muted/20 text-muted-foreground transition-all duration-300 
                      hover:scale-110 hover:bg-primary/10 ${social.color}
                    `}
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
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                Envie uma mensagem
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* CAMPO NOME */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                </div>

                {/* CAMPO EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                </div>

                {/* CAMPO ASSUNTO */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Assunto *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de falar?"
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                </div>

                {/* CAMPO MENSAGEM */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto, ideias ou como posso ajudar..."
                    rows={5}
                    className="w-full resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                  
                  {/* CONTADOR DE CARACTERES */}
                  <div className="text-right text-xs text-muted-foreground mt-1">
                    {formData.message.length} caracteres
                  </div>
                </div>

                {/* BOTÃO DE ENVIO */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CALL TO ACTION FINAL */}
        <div className="text-center mt-16 p-8 rounded-2xl card-gradient border border-border/50">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transforme sua ideia em realidade. Vamos criar algo incrível juntos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gradient-bg hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://calendly.com/usuario", '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Reunião
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;