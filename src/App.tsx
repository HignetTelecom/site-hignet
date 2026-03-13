/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Wifi, 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Menu,
  X,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_URL = "https://wa.me/5591987240832?text=Olá,%20gostaria%20de%20contratar%20a%20internet%20da%20HIGNET";
const LOGIN_URL = "https://hignet.beesweb.com.br/login";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "Instalação grátis" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "30 dias para testar" },
    { icon: <Clock className="w-5 h-5" />, text: "Sem fidelidade" },
  ];

  const features = [
    { title: "100% Fibra Óptica", description: "Tecnologia de ponta para garantir a melhor estabilidade.", icon: <Wifi className="text-orange-500" /> },
    { title: "Wi-Fi 6 Incluso", description: "O roteador mais moderno do mercado para maior alcance e velocidade.", icon: <Zap className="text-orange-500" /> },
    { title: "Suporte Local", description: "Atendimento rápido e humanizado sempre que você precisar.", icon: <CheckCircle2 className="text-orange-500" /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="HIGNET Telecom" 
              className="h-12 md:h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback caso a imagem não exista
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
              referrerPolicy="no-referrer"
            />
            <div className="hidden flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Wifi className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                HIGNET<span className="text-orange-500">.</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-orange-500 transition-colors">Início</a>
            <a href="#planos" className="text-sm font-medium hover:text-orange-500 transition-colors">Planos</a>
            <a href="#beneficios" className="text-sm font-medium hover:text-orange-500 transition-colors">Benefícios</a>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-1">
              Segunda Via
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-200 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Assinar Agora
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#planos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Planos</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Benefícios</a>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-orange-600">Segunda Via</a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contratar pelo WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Disponível em sua região
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-slate-900 mb-6">
                Internet 100% Fibra, <br />
                <span className="text-orange-500">rápida e confiável</span> <br />
                para sua casa
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
                600 Mega de velocidade com Wi-Fi 6 incluso. A melhor experiência de navegação para sua família.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <div className="text-orange-500">{b.icon}</div>
                    {b.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-orange-500 text-white px-8 py-5 rounded-2xl text-lg font-black hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-200 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Contratar pelo WhatsApp
                </a>
                
                <div className="flex flex-col">
                  <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">A partir de</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-slate-900 font-bold">R$</span>
                    <span className="text-4xl font-black text-slate-900">89</span>
                    <span className="text-slate-500 font-medium">/mês</span>
                  </div>
                  <span className="text-orange-600 text-xs font-bold italic">*até o vencimento*</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="planos"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative scroll-mt-24"
            >
              <div className="absolute -inset-4 bg-orange-500/10 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-800 shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Wifi className="w-32 h-32 text-orange-500" />
                </div>
                
                <div className="relative z-10">
                  <div className="bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full inline-block mb-4 uppercase tracking-widest">
                    Oferta Especial
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Plano HIGNET</h3>
                  <div className="text-6xl font-black text-orange-500 mb-6">600<span className="text-2xl text-white ml-1">Mega</span></div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-orange-500 w-5 h-5" />
                      <span>Wi-Fi 6 de última geração</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-orange-500 w-5 h-5" />
                      <span>Download e Upload simétricos</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-orange-500 w-5 h-5" />
                      <span>Instalação Grátis</span>
                    </li>
                  </ul>

                  <div className="pt-6 border-t border-slate-800">
                    <div className="text-slate-400 text-sm mb-1">Valor mensal</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">R$ 89,00</span>
                      <span className="text-slate-500 line-through">R$ 100,00</span>
                    </div>
                    <p className="text-orange-500 text-xs font-bold mt-2">Valor promocional para pagamento até o vencimento.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="beneficios" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Por que escolher a HIGNET?</h2>
              <p className="text-slate-600">Levamos a sério a sua conexão. Conheça os diferenciais que fazem da nossa internet a melhor escolha para sua casa.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O que dizem nossos clientes</h2>
              <p className="text-slate-600">Satisfação comprovada de quem já usa HIGNET</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Olavo Soares Siqueira",
                  text: "Nunca tinha sido atendido com tanta gentileza.",
                  role: "Cliente HIGNET"
                },
                {
                  name: "Adila Lopes dos Santos",
                  text: "Sempre que acontece qualquer problema, eles tentam nos avisar antes mesmo de ligarmos pra lá.",
                  role: "Cliente HIGNET"
                },
                {
                  name: "Mercês Marques Braga",
                  text: "O reparo deles é muito rápido.",
                  role: "Cliente HIGNET"
                }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 flex-grow">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-orange-500 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-orange-200">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Pronto para navegar na velocidade da luz?</h2>
                <p className="text-orange-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Não perca mais tempo com internet lenta. Fale agora com um de nossos consultores e agende sua instalação.
                </p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl text-xl font-black hover:bg-orange-50 transition-all hover:scale-105 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chamar no WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/logo.png" 
                  alt="HIGNET Telecom" 
                  className="h-12 w-auto brightness-0 invert" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="hidden flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Wifi className="text-white w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black tracking-tighter">
                    HIGNET<span className="text-orange-500">.</span>
                  </span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Provedor de internet 100% fibra óptica focado em entregar a melhor experiência de conexão para você e sua família.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a></li>
                <li><a href="#planos" className="hover:text-orange-500 transition-colors">Planos</a></li>
                <li><a href="#beneficios" className="hover:text-orange-500 transition-colors">Benefícios</a></li>
                <li><a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Área do Cliente (2ª Via)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>(91) 98724-0832</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Mãe do Rio e região</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} HIGNET Telecom. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
