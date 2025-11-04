import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    category: "Sobre a NxtAI",
    questions: [
      {
        q: "O que é a NxtAI?",
        a: "A NxtAI é uma empresa especializada em soluções de inteligência artificial aplicada à automação de processos e atendimento digital. Desenvolvemos agentes inteligentes capazes de responder dúvidas, qualificar leads, realizar agendamentos e interagir com clientes de forma rápida, natural e eficiente."
      },
      {
        q: "Onde a NxtAI está localizada?",
        a: "A NxtAI é uma empresa 100% digital, com base de operações no Rio Grande do Sul (Brasil). Atendemos clientes de todo o país de forma online."
      },
      {
        q: "A NxtAI é uma empresa brasileira?",
        a: "Sim! A NxtAI é uma empresa brasileira criada para democratizar o uso da Inteligência Artificial em pequenos e médios negócios."
      }
    ]
  },
  {
    category: "Contatos",
    questions: [
      {
        q: "Como posso entrar em contato com a NxtAI?",
        a: "Você pode falar conosco pelos seguintes canais:\n• Site oficial: https://nxtai.com.br\n• WhatsApp: https://wa.me/5551996226232\n• E-mail: contato@nxtai.com.br"
      },
      {
        q: "Qual é o horário de atendimento?",
        a: "Nosso atendimento humano funciona de segunda a sexta, das 9h às 18h. Nos demais horários, você pode interagir com nossos agentes inteligentes 24h por dia!"
      }
    ]
  },
  {
    category: "Produtos e Soluções",
    questions: [
      {
        q: "Quais produtos a NxtAI oferece?",
        a: "Atualmente, oferecemos uma linha de agentes inteligentes prontos para uso:\n• NxtAI Support – agente para atendimento ao cliente e FAQs\n• NxtAI Sales – agente para vendas SDR, captação e qualificação de leads\n• NxtAI Concierge – assistente para hotelaria, academias, restaurantes e clubes\n• NxtAI Docs – busca e análise de documentos\n• NxtAI Social – automação de conteúdo para redes sociais\n• NxtAI Finance – análise de despesas e receitas\n• NxtAI HR – FAQ para colaboradores"
      },
      {
        q: "Os agentes funcionam em quais plataformas?",
        a: "Os agentes NxtAI podem ser integrados a WhatsApp, sites, sistemas internos e redes sociais, dependendo do plano contratado."
      },
      {
        q: "Os agentes são personalizáveis?",
        a: "Sim! Todos os agentes podem ser treinados com informações da sua empresa, linguagem personalizada, documentos e regras específicas de atendimento."
      }
    ]
  },
  {
    category: "Planos e Contratação",
    questions: [
      {
        q: "Como contratar uma solução da NxtAI?",
        a: "Basta entrar em contato pelo WhatsApp. Nossa equipe fará um diagnóstico gratuito e indicará o plano ideal para sua necessidade."
      },
      {
        q: "A NxtAI oferece plano gratuito?",
        a: "Não, mas disponibilizamos uma versão Demo para uso e testes com dados fictícios. Consulte as condições no momento da contratação."
      },
      {
        q: "Preciso ter conhecimento técnico para usar os agentes?",
        a: "Não! A NxtAI entrega tudo pronto. Você só precisa fornecer o conteúdo (como perguntas frequentes, textos ou base de dados) e nós cuidamos da integração."
      }
    ]
  },
  {
    category: "Tecnologia e Integrações",
    questions: [
      {
        q: "Quais tecnologias a NxtAI utiliza?",
        a: "Usamos as tecnologias mais modernas do mercado:\n• Modelos de IA avançados (GPT, Gemini, Copilot, Claude, etc.)\n• Infraestrutura em nuvem (Docker, Postgres, FastAPI, n8n, Pinecone, etc.)\n• Integrações com CRMs, ERPs, WhatsApp, Chat no seu Site e APIs personalizadas"
      },
      {
        q: "Posso integrar o agente com meu sistema atual?",
        a: "Sim! Oferecemos integração via API RESTful, Webhook e bancos de dados."
      }
    ]
  },
  {
    category: "Privacidade e Segurança",
    questions: [
      {
        q: "Meus dados estão seguros com a NxtAI?",
        a: "Sim. Seguimos as melhores práticas de segurança e conformidade com a LGPD (Lei Geral de Proteção de Dados). As informações são criptografadas e utilizadas apenas para melhorar o atendimento e automação."
      },
      {
        q: "Posso excluir meus dados?",
        a: "Sim, basta solicitar a exclusão enviando um e-mail para privacity@nxtai.com.br"
      }
    ]
  },
  {
    category: "Outros Assuntos",
    questions: [
      {
        q: "A NxtAI desenvolve soluções sob medida?",
        a: "Sim! Além dos agentes prontos, também desenvolvemos soluções customizadas de acordo com a necessidade do cliente."
      },
      {
        q: "Existe limite de mensagens ou interações?",
        a: "Depende do plano contratado. Temos opções escaláveis para diferentes volumes de uso."
      },
      {
        q: "Quanto tempo leva para implementar um agente?",
        a: "A implementação básica pode ser feita em até 48 horas. Projetos customizados podem levar de 1 a 2 semanas."
      }
    ]
  }
];

const FAQSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          <span className="gradient-text">FAQ - Perguntas Frequentes</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Encontre respostas rápidas sobre nossos serviços ou use o chat para perguntar diretamente ao nosso agente.
        </p>

        <div className="space-y-8">
          {faqData.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-4 text-primary">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questions.map((item, qIdx) => (
                  <AccordionItem 
                    key={qIdx} 
                    value={`${idx}-${qIdx}`}
                    className="bg-card border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;