"use client";

import { useState } from "react";
import { Home, User, Users, Calendar, Settings, Bell, Menu, X, Flame, Zap, Heart, CheckCircle2, Star, Plus, Minus, ArrowUp, ArrowDown, ChevronRight, Play, Clock, Circle, Dna, Syringe } from "lucide-react";

type Page = "dashboard" | "profile" | "nutrition" | "workouts" | "hydration" | "supplements" | "peptides" | "steroids" | "community";

export default function FitCatalyst() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                FitCatalyst
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <NavButton icon={Home} label="Dashboard" active={currentPage === "dashboard"} onClick={() => setCurrentPage("dashboard")} />
              <NavButton icon={User} label="Perfil" active={currentPage === "profile"} onClick={() => setCurrentPage("profile")} />
              <NavButton icon={Circle} label="🍎 Nutrição" active={currentPage === "nutrition"} onClick={() => setCurrentPage("nutrition")} />
              <NavButton icon={Circle} label="💪 Treinos" active={currentPage === "workouts"} onClick={() => setCurrentPage("workouts")} />
              <NavButton icon={Circle} label="💧 Hidratação" active={currentPage === "hydration"} onClick={() => setCurrentPage("hydration")} />
              <NavButton icon={Circle} label="Suplementos" active={currentPage === "supplements"} onClick={() => setCurrentPage("supplements")} />
              <NavButton icon={Dna} label="Peptídeos" active={currentPage === "peptides"} onClick={() => setCurrentPage("peptides")} />
              <NavButton icon={Syringe} label="Esteroides" active={currentPage === "steroids"} onClick={() => setCurrentPage("steroids")} />
              <NavButton icon={Users} label="Comunidade" active={currentPage === "community"} onClick={() => setCurrentPage("community")} />
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg hover:bg-white/5 transition-all duration-300 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full"></span>
              </button>
              <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg hover:bg-white/5 transition-all duration-300">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-purple-500/20 bg-black">
            <nav className="px-4 py-4 space-y-1">
              <MobileNavButton icon={Home} label="Dashboard" active={currentPage === "dashboard"} onClick={() => { setCurrentPage("dashboard"); setMenuOpen(false); }} />
              <MobileNavButton icon={User} label="Perfil" active={currentPage === "profile"} onClick={() => { setCurrentPage("profile"); setMenuOpen(false); }} />
              <MobileNavButton icon={Circle} label="🍎 Nutrição" active={currentPage === "nutrition"} onClick={() => { setCurrentPage("nutrition"); setMenuOpen(false); }} />
              <MobileNavButton icon={Circle} label="💪 Treinos" active={currentPage === "workouts"} onClick={() => { setCurrentPage("workouts"); setMenuOpen(false); }} />
              <MobileNavButton icon={Circle} label="💧 Hidratação" active={currentPage === "hydration"} onClick={() => { setCurrentPage("hydration"); setMenuOpen(false); }} />
              <MobileNavButton icon={Circle} label="💊 Suplementos" active={currentPage === "supplements"} onClick={() => { setCurrentPage("supplements"); setMenuOpen(false); }} />
              <MobileNavButton icon={Dna} label="Peptídeos" active={currentPage === "peptides"} onClick={() => { setCurrentPage("peptides"); setMenuOpen(false); }} />
              <MobileNavButton icon={Syringe} label="Esteroides" active={currentPage === "steroids"} onClick={() => { setCurrentPage("steroids"); setMenuOpen(false); }} />
              <MobileNavButton icon={Users} label="Comunidade" active={currentPage === "community"} onClick={() => { setCurrentPage("community"); setMenuOpen(false); }} />
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "profile" && <Profile />}
        {currentPage === "nutrition" && <Nutrition />}
        {currentPage === "workouts" && <Workouts />}
        {currentPage === "hydration" && <Hydration />}
        {currentPage === "supplements" && <Supplements />}
        {currentPage === "peptides" && <Peptides />}
        {currentPage === "steroids" && <Steroids />}
        {currentPage === "community" && <Community />}
      </main>
    </div>
  );
}

// Navigation Components
function NavButton({ icon: Icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-purple-500/20 text-purple-400"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {label}
      </span>
    </button>
  );
}

function MobileNavButton({ icon: Icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 ${
        active
          ? "bg-purple-500/20 text-purple-400"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
}

// Dashboard Page
function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Bem-vindo de volta, Atleta
        </h1>
        <p className="text-gray-400">Continue sua jornada de transformação</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Flame} label="Calorias Queimadas" value="2,847" unit="kcal" trend="+12%" color="from-orange-500 to-red-500" />
        <StatCard icon={Circle} label="Treinos Completos" value="18" unit="sessões" trend="+3" color="from-purple-400 to-pink-500" />
        <StatCard icon={Circle} label="Água Consumida" value="3.2" unit="litros" trend="80%" color="from-blue-500 to-cyan-500" />
        <StatCard icon={Heart} label="Frequência Cardíaca" value="72" unit="bpm" trend="Normal" color="from-pink-500 to-rose-500" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <div className="lg:col-span-2 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Progresso Semanal</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              Ver detalhes
            </button>
          </div>
          <div className="space-y-4">
            <ProgressBar label="Segunda" value={85} />
            <ProgressBar label="Terça" value={92} />
            <ProgressBar label="Quarta" value={78} />
            <ProgressBar label="Quinta" value={95} />
            <ProgressBar label="Sexta" value={88} />
            <ProgressBar label="Sábado" value={70} />
            <ProgressBar label="Domingo" value={60} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
            <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
            <div className="space-y-3">
              <QuickActionButton icon={Plus} label="Registrar Treino" />
              <QuickActionButton icon={Circle} label="Adicionar Refeição" />
              <QuickActionButton icon={Circle} label="Registrar Água" />
              <QuickActionButton icon={Play} label="Iniciar Workout" />
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold">Conquistas Recentes</h2>
            </div>
            <div className="space-y-3">
              <AchievementBadge icon={CheckCircle2} label="7 Dias Consecutivos" />
              <AchievementBadge icon={Flame} label="1000 Calorias Queimadas" />
              <AchievementBadge icon={Circle} label="Meta de Proteína Atingida" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Profile Page
function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Meu Perfil</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="md:col-span-1 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-1">João Silva</h2>
            <p className="text-gray-400 text-sm mb-4">Atleta Premium</p>
            <div className="w-full space-y-2">
              <InfoRow label="Idade" value="28 anos" />
              <InfoRow label="Altura" value="1.78m" />
              <InfoRow label="Peso" value="82kg" />
              <InfoRow label="IMC" value="25.9" />
            </div>
          </div>
        </div>

        {/* Stats & Goals */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-4">Estatísticas Gerais</h3>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard label="Treinos Totais" value="247" />
              <MetricCard label="Dias Ativos" value="189" />
              <MetricCard label="Calorias Totais" value="487k" />
              <MetricCard label="Sequência Atual" value="12 dias" />
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-4">Metas Mensais</h3>
            <div className="space-y-4">
              <GoalProgress label="Perder 2kg" current={1.3} target={2} unit="kg" />
              <GoalProgress label="20 Treinos" current={18} target={20} unit="treinos" />
              <GoalProgress label="100L de Água" current={87} target={100} unit="litros" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nutrition Page
function Nutrition() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Nutrição</h1>

      {/* Daily Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <MacroCard label="Calorias" current={1847} target={2200} unit="kcal" color="from-orange-500 to-red-500" />
        <MacroCard label="Proteínas" current={142} target={180} unit="g" color="from-purple-400 to-pink-500" />
        <MacroCard label="Carboidratos" current={198} target={250} unit="g" color="from-blue-500 to-cyan-500" />
        <MacroCard label="Gorduras" current={52} target={70} unit="g" color="from-yellow-500 to-amber-500" />
      </div>

      {/* Meals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MealCard 
          title="Café da Manhã" 
          time="07:30" 
          calories={520}
          items={["3 Ovos Mexidos", "2 Fatias de Pão Integral", "Abacate", "Café com Leite"]}
        />
        <MealCard 
          title="Almoço" 
          time="12:30" 
          calories={780}
          items={["Peito de Frango Grelhado (200g)", "Arroz Integral", "Brócolis", "Salada"]}
        />
        <MealCard 
          title="Lanche" 
          time="16:00" 
          calories={320}
          items={["Whey Protein", "Banana", "Pasta de Amendoim"]}
        />
        <MealCard 
          title="Jantar" 
          time="19:30" 
          calories={650}
          items={["Salmão Grelhado", "Batata Doce", "Aspargos", "Azeite"]}
        />
      </div>
    </div>
  );
}

// Workouts Page
function Workouts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Treinos</h1>

      {/* Today's Workout */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-purple-400">Treino de Hoje</h2>
            <p className="text-gray-400">Peito e Tríceps - 60 min</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105">
            Iniciar Treino
          </button>
        </div>
      </div>

      {/* Workout History */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkoutCard 
          title="Peito e Tríceps"
          date="Hoje"
          duration="60 min"
          exercises={8}
          calories={420}
          status="scheduled"
        />
        <WorkoutCard 
          title="Costas e Bíceps"
          date="Ontem"
          duration="55 min"
          exercises={7}
          calories={385}
          status="completed"
        />
        <WorkoutCard 
          title="Pernas"
          date="2 dias atrás"
          duration="70 min"
          exercises={9}
          calories={520}
          status="completed"
        />
        <WorkoutCard 
          title="Ombros e Abdômen"
          date="3 dias atrás"
          duration="50 min"
          exercises={6}
          calories={340}
          status="completed"
        />
        <WorkoutCard 
          title="Cardio HIIT"
          date="4 dias atrás"
          duration="30 min"
          exercises={5}
          calories={380}
          status="completed"
        />
        <WorkoutCard 
          title="Full Body"
          date="5 dias atrás"
          duration="65 min"
          exercises={10}
          calories={450}
          status="completed"
        />
      </div>
    </div>
  );
}

// Hydration Page
function Hydration() {
  const [glasses, setGlasses] = useState(8);
  const target = 10;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Hidratação</h1>

      {/* Water Progress */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm mb-8">
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-blue-400 mb-2">
            {glasses * 250}ml
          </div>
          <p className="text-gray-400">de {target * 250}ml consumidos hoje</p>
        </div>

        <div className="w-full bg-white/5 rounded-full h-4 mb-6">
          <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(glasses / target) * 100}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => setGlasses(Math.max(0, glasses - 1))}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Minus className="w-5 h-5" />
          </button>
          <span className="text-2xl font-bold">{glasses} copos</span>
          <button 
            onClick={() => setGlasses(Math.min(target, glasses + 1))}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Hydration Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TipCard 
          icon={Clock}
          title="Beba ao Acordar"
          description="Comece o dia com 500ml de água para reidratar o corpo"
        />
        <TipCard 
          icon={Circle}
          title="Durante Treinos"
          description="Consuma 200-300ml a cada 15-20 minutos de exercício"
        />
        <TipCard 
          icon={Circle}
          title="Antes das Refeições"
          description="Um copo de água 30 minutos antes ajuda na digestão"
        />
        <TipCard 
          icon={Bell}
          title="Configure Lembretes"
          description="Receba notificações para manter a hidratação regular"
        />
      </div>
    </div>
  );
}

// Supplements Page
function Supplements() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Suplementos</h1>

      {/* Daily Stack */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8">
        <h2 className="text-xl font-bold mb-4">Stack Diário</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SupplementCard name="Whey Protein" dosage="30g" time="Pós-treino" taken={true} />
          <SupplementCard name="Creatina" dosage="5g" time="Pré-treino" taken={true} />
          <SupplementCard name="BCAA" dosage="10g" time="Intra-treino" taken={false} />
          <SupplementCard name="Ômega 3" dosage="2 cápsulas" time="Café da manhã" taken={true} />
        </div>
      </div>

      {/* Educational Content */}
      <h2 className="text-2xl font-bold mb-6">Guia de Suplementos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EducationalCard 
          title="Whey Protein"
          category="Proteína"
          description="Proteína de rápida absorção ideal para recuperação muscular pós-treino"
          benefits={["Recuperação muscular", "Síntese proteica", "Praticidade"]}
        />
        <EducationalCard 
          title="Creatina"
          category="Performance"
          description="Aumenta força, potência e massa muscular através da ressíntese de ATP"
          benefits={["Mais força", "Ganho de massa", "Energia celular"]}
        />
        <EducationalCard 
          title="BCAA"
          category="Aminoácidos"
          description="Aminoácidos essenciais que previnem catabolismo durante treinos intensos"
          benefits={["Anti-catabólico", "Recuperação", "Energia"]}
        />
        <EducationalCard 
          title="Ômega 3"
          category="Saúde"
          description="Ácidos graxos essenciais com propriedades anti-inflamatórias"
          benefits={["Saúde cardiovascular", "Anti-inflamatório", "Cognição"]}
        />
        <EducationalCard 
          title="Vitamina D"
          category="Vitaminas"
          description="Essencial para saúde óssea, imunidade e produção de testosterona"
          benefits={["Ossos fortes", "Imunidade", "Hormônios"]}
        />
        <EducationalCard 
          title="Cafeína"
          category="Pré-treino"
          description="Estimulante que aumenta foco, energia e performance física"
          benefits={["Mais energia", "Foco mental", "Performance"]}
        />
      </div>
    </div>
  );
}

// Peptides Page
function Peptides() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Peptídeos
        </h1>
        <p className="text-gray-400">Guia completo sobre peptídeos e suas aplicações no fitness</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
            <Bell className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-bold text-yellow-400 mb-2">⚠️ Aviso Importante</h3>
            <p className="text-sm text-gray-300">
              Este conteúdo é apenas informativo e educacional. Peptídeos são substâncias controladas que requerem prescrição médica. 
              Consulte sempre um médico especializado antes de considerar qualquer uso. O uso inadequado pode causar sérios riscos à saúde.
            </p>
          </div>
        </div>
      </div>

      {/* What are Peptides */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Dna className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl font-bold">O que são Peptídeos?</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Peptídeos são cadeias curtas de aminoácidos (geralmente 2-50 aminoácidos) que atuam como sinalizadores biológicos no corpo. 
          Eles podem estimular a produção de hormônios, melhorar a recuperação, aumentar a queima de gordura e promover o crescimento muscular. 
          Diferente dos esteroides anabolizantes, peptídeos trabalham estimulando processos naturais do corpo de forma mais seletiva.
        </p>
      </div>

      {/* Popular Peptides Grid */}
      <h2 className="text-2xl font-bold mb-6">Peptídeos Mais Utilizados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <PeptideCard 
          name="GHRP-6"
          category="Secretagogo de GH"
          description="Estimula a liberação natural de hormônio do crescimento (GH) pela glândula pituitária"
          benefits={["Aumento de massa muscular", "Recuperação acelerada", "Melhora do sono", "Aumento de apetite"]}
          dosage="100-300mcg, 2-3x ao dia"
          timing="Em jejum ou pós-treino"
          sideEffects={["Aumento de apetite", "Retenção leve de água", "Formigamento nas mãos"]}
        />
        
        <PeptideCard 
          name="CJC-1295"
          category="Análogo de GHRH"
          description="Aumenta os níveis de GH e IGF-1 de forma prolongada, com meia-vida estendida"
          benefits={["Crescimento muscular", "Queima de gordura", "Melhora da pele", "Recuperação articular"]}
          dosage="1-2mg por semana"
          timing="Antes de dormir"
          sideEffects={["Vermelhidão no local", "Dores de cabeça leves", "Tontura temporária"]}
        />

        <PeptideCard 
          name="Ipamorelin"
          category="Secretagogo de GH"
          description="Estimula GH de forma seletiva sem afetar cortisol ou prolactina, muito limpo"
          benefits={["Ganho de massa magra", "Perda de gordura", "Sem efeitos colaterais", "Melhora do sono"]}
          dosage="200-300mcg, 2-3x ao dia"
          timing="Manhã, pós-treino e antes de dormir"
          sideEffects={["Praticamente nenhum", "Muito bem tolerado"]}
        />

        <PeptideCard 
          name="BPC-157"
          category="Reparação Tecidual"
          description="Peptídeo de cura que acelera recuperação de lesões musculares, tendões e ligamentos"
          benefits={["Cura de lesões", "Proteção gástrica", "Redução de inflamação", "Recuperação de tendões"]}
          dosage="250-500mcg, 1-2x ao dia"
          timing="Próximo à área lesionada"
          sideEffects={["Raros", "Muito seguro", "Possível tontura leve"]}
        />

        <PeptideCard 
          name="TB-500"
          category="Reparação Tecidual"
          description="Promove crescimento de novos vasos sanguíneos e células, excelente para recuperação"
          benefits={["Recuperação de lesões", "Flexibilidade", "Redução de inflamação", "Crescimento capilar"]}
          dosage="2-5mg, 2x por semana"
          timing="Qualquer horário"
          sideEffects={["Dor de cabeça leve", "Letargia temporária", "Náusea rara"]}
        />

        <PeptideCard 
          name="Melanotan II"
          category="Bronzeamento"
          description="Estimula produção de melanina, promovendo bronzeamento e possível redução de apetite"
          benefits={["Bronzeamento natural", "Redução de apetite", "Aumento de libido", "Proteção UV"]}
          dosage="0.5-1mg, 2-3x por semana"
          timing="Antes da exposição solar"
          sideEffects={["Náusea inicial", "Rubor facial", "Aumento de libido", "Escurecimento de pintas"]}
        />

        <PeptideCard 
          name="AOD-9604"
          category="Queima de Gordura"
          description="Fragmento de GH focado especificamente em lipólise sem efeitos no crescimento"
          benefits={["Queima de gordura", "Preservação muscular", "Sem efeitos no açúcar", "Recuperação articular"]}
          dosage="300-600mcg por dia"
          timing="Manhã em jejum"
          sideEffects={["Raros", "Bem tolerado", "Possível dor de cabeça"]}
        />

        <PeptideCard 
          name="Hexarelin"
          category="Secretagogo de GH"
          description="Potente liberador de GH, mais forte que GHRP-6 mas com dessensibilização mais rápida"
          benefits={["Forte liberação de GH", "Ganho muscular", "Proteção cardíaca", "Força aumentada"]}
          dosage="100-200mcg, 2x ao dia"
          timing="Manhã e pós-treino"
          sideEffects={["Aumento de cortisol", "Retenção de água", "Dessensibilização"]}
        />

        <PeptideCard 
          name="Sermorelin"
          category="Análogo de GHRH"
          description="Estimula produção natural de GH, versão sintética do GHRH natural do corpo"
          benefits={["Aumento de GH natural", "Melhora do sono", "Recuperação", "Anti-envelhecimento"]}
          dosage="200-500mcg antes de dormir"
          timing="Antes de dormir"
          sideEffects={["Vermelhidão local", "Dor de cabeça", "Tontura leve"]}
        />
      </div>

      {/* Stacking Guide */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm mb-8">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Stacks Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StackCard 
            title="Stack de Crescimento"
            peptides={["CJC-1295 (2mg/semana)", "Ipamorelin (300mcg 3x/dia)", "GHRP-6 (200mcg 3x/dia)"]}
            goal="Máximo ganho de massa muscular e força"
            duration="12-16 semanas"
          />
          <StackCard 
            title="Stack de Recuperação"
            peptides={["BPC-157 (500mcg 2x/dia)", "TB-500 (5mg 2x/semana)", "Ipamorelin (200mcg 2x/dia)"]}
            goal="Cura de lesões e recuperação acelerada"
            duration="4-8 semanas"
          />
          <StackCard 
            title="Stack de Cutting"
            peptides={["AOD-9604 (600mcg/dia)", "Ipamorelin (300mcg 2x/dia)", "CJC-1295 (1mg/semana)"]}
            goal="Perda de gordura preservando massa muscular"
            duration="8-12 semanas"
          />
          <StackCard 
            title="Stack Anti-Aging"
            peptides={["Sermorelin (500mcg/dia)", "Ipamorelin (200mcg 2x/dia)", "BPC-157 (250mcg/dia)"]}
            goal="Rejuvenescimento e qualidade de vida"
            duration="Uso contínuo"
          />
        </div>
      </div>

      {/* Safety Guidelines */}
      <div className="bg-gradient-to-br from-red-500/10 to-pink-500/5 rounded-2xl p-6 border border-red-500/20 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Diretrizes de Segurança</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SafetyPoint 
            icon="🏥"
            title="Supervisão Médica"
            description="Sempre use sob orientação de médico especializado em medicina esportiva ou endocrinologia"
          />
          <SafetyPoint 
            icon="💉"
            title="Qualidade do Produto"
            description="Adquira apenas de fontes confiáveis com certificados de análise (COA) de laboratórios terceirizados"
          />
          <SafetyPoint 
            icon="📊"
            title="Exames Regulares"
            description="Faça exames de sangue antes, durante e após o ciclo para monitorar hormônios e marcadores de saúde"
          />
          <SafetyPoint 
            icon="⚖️"
            title="Dosagens Corretas"
            description="Nunca exceda as dosagens recomendadas. Mais não significa melhores resultados"
          />
          <SafetyPoint 
            icon="🧊"
            title="Armazenamento"
            description="Mantenha refrigerado (2-8°C) e protegido da luz. Peptídeos reconstituídos duram 30 dias"
          />
          <SafetyPoint 
            icon="⏱️"
            title="Ciclos e Pausas"
            description="Respeite períodos de descanso entre ciclos para evitar dessensibilização e manter eficácia"
          />
        </div>
      </div>
    </div>
  );
}

// Steroids Page
function Steroids() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Esteroides Anabolizantes
        </h1>
        <p className="text-gray-400">Guia educacional completo sobre esteroides e suas aplicações</p>
      </div>

      {/* Critical Warning Banner */}
      <div className="bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-2xl p-6 border border-red-500/30 backdrop-blur-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/30 flex items-center justify-center flex-shrink-0">
            <Bell className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h3 className="font-bold text-red-400 mb-2 text-lg">🚨 AVISO CRÍTICO - LEIA COM ATENÇÃO</h3>
            <p className="text-sm text-gray-200 leading-relaxed mb-3">
              Este conteúdo é ESTRITAMENTE educacional e informativo. Esteroides anabolizantes são substâncias controladas 
              que podem causar sérios danos à saúde quando usados inadequadamente. O uso sem prescrição médica é ILEGAL 
              em muitos países e pode resultar em consequências graves para sua saúde.
            </p>
            <p className="text-sm text-red-300 font-bold">
              ⚠️ SEMPRE consulte um médico endocrinologista especializado antes de considerar qualquer uso. 
              Exames regulares e acompanhamento profissional são OBRIGATÓRIOS.
            </p>
          </div>
        </div>
      </div>

      {/* What are Steroids */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Syringe className="w-6 h-6 text-red-400" />
          <h2 className="text-2xl font-bold">O que são Esteroides Anabolizantes?</h2>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          Esteroides anabolizantes androgênicos (EAA) são versões sintéticas da testosterona, o principal hormônio masculino. 
          Eles promovem crescimento muscular (efeito anabólico) e desenvolvimento de características masculinas (efeito androgênico). 
          Originalmente desenvolvidos para tratamento médico de condições como hipogonadismo e perda muscular severa.
        </p>
        <p className="text-gray-300 leading-relaxed">
          No contexto esportivo, são usados para acelerar ganhos de massa muscular, força e recuperação. Porém, vêm com 
          riscos significativos incluindo danos hepáticos, cardiovasculares, hormonais e psicológicos quando usados de forma inadequada.
        </p>
      </div>

      {/* Popular Steroids Grid */}
      <h2 className="text-2xl font-bold mb-6">Esteroides Mais Comuns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SteroidCard 
          name="Testosterona (Enantato/Cipionato)"
          category="Base de Ciclo"
          description="Forma injetável de testosterona com liberação prolongada. Considerado a base de praticamente todos os ciclos"
          benefits={["Ganho de massa muscular", "Aumento de força", "Melhora da libido", "Recuperação acelerada", "Densidade óssea"]}
          dosage="250-500mg por semana (iniciantes)"
          halfLife="7-10 dias"
          sideEffects={["Aromatização (conversão em estrogênio)", "Acne", "Retenção de água", "Supressão natural de testosterona", "Ginecomastia"]}
          riskLevel="Moderado"
        />

        <SteroidCard 
          name="Dianabol (Metandrostenolona)"
          category="Oral - Bulking"
          description="Esteroide oral potente para ganho rápido de massa e força. Muito popular entre iniciantes"
          benefits={["Ganhos rápidos de massa", "Força explosiva", "Bombeamento muscular", "Recuperação rápida", "Efeito motivacional"]}
          dosage="20-50mg por dia"
          halfLife="3-6 horas"
          sideEffects={["Hepatotoxicidade", "Retenção severa de água", "Pressão alta", "Ginecomastia", "Supressão hormonal"]}
          riskLevel="Alto"
        />

        <SteroidCard 
          name="Trembolona (Acetato/Enantato)"
          category="Avançado - Cutting/Bulking"
          description="Um dos esteroides mais potentes disponíveis. Extremamente eficaz mas com efeitos colaterais significativos"
          benefits={["Ganho de massa magra", "Queima de gordura", "Força extrema", "Vascularização", "Sem retenção de água"]}
          dosage="200-400mg por semana"
          halfLife="2-3 dias (acetato)"
          sideEffects={["Insônia severa", "Suores noturnos", "Ansiedade", "Agressividade", "Problemas cardiovasculares", "Supressão severa"]}
          riskLevel="Muito Alto"
        />

        <SteroidCard 
          name="Deca-Durabolin (Nandrolona)"
          category="Bulking - Articulações"
          description="Esteroide popular para ganho de massa com benefícios para articulações e tendões"
          benefits={["Ganho de massa muscular", "Alívio articular", "Aumento de colágeno", "Recuperação", "Menos androgênico"]}
          dosage="300-600mg por semana"
          halfLife="14 dias"
          sideEffects={["Deca dick (disfunção erétil)", "Retenção de água", "Supressão prolongada", "Progesterona elevada"]}
          riskLevel="Moderado-Alto"
        />

        <SteroidCard 
          name="Winstrol (Stanozolol)"
          category="Cutting - Definição"
          description="Popular para cutting e definição muscular. Disponível oral e injetável"
          benefits={["Definição muscular", "Vascularização", "Força sem ganho de peso", "Sem retenção de água", "Aparência seca"]}
          dosage="50mg por dia (oral) / 50mg EOD (injetável)"
          halfLife="9 horas (oral)"
          sideEffects={["Dores articulares", "Hepatotoxicidade", "Colesterol ruim", "Queda de cabelo", "Acne"]}
          riskLevel="Moderado-Alto"
        />

        <SteroidCard 
          name="Anavar (Oxandrolona)"
          category="Cutting - Leve"
          description="Esteroide oral considerado mais suave. Popular entre mulheres e iniciantes"
          benefits={["Ganho de massa magra", "Queima de gordura", "Força", "Poucos efeitos colaterais", "Seguro para mulheres"]}
          dosage="40-80mg por dia (homens) / 10-20mg (mulheres)"
          halfLife="9 horas"
          sideEffects={["Hepatotoxicidade leve", "Supressão hormonal", "Colesterol alterado", "Virilização (mulheres)"]}
          riskLevel="Baixo-Moderado"
        />

        <SteroidCard 
          name="Boldenona (Equipoise)"
          category="Bulking Lean"
          description="Esteroide veterinário adaptado para uso humano. Ganhos lentos mas de qualidade"
          benefits={["Ganho de massa magra", "Aumento de apetite", "Vascularização", "Resistência", "Poucos efeitos colaterais"]}
          dosage="400-600mg por semana"
          halfLife="14 dias"
          sideEffects={["Ansiedade", "Aumento de glóbulos vermelhos", "Supressão hormonal", "Acne"]}
          riskLevel="Moderado"
        />

        <SteroidCard 
          name="Masteron (Drostanolona)"
          category="Cutting - Estético"
          description="Excelente para definição e aparência estética. Popular em preparações para competições"
          benefits={["Definição extrema", "Aparência seca", "Densidade muscular", "Anti-estrogênico", "Força"]}
          dosage="300-500mg por semana"
          halfLife="2-3 dias"
          sideEffects={["Queda de cabelo", "Acne", "Agressividade", "Supressão hormonal"]}
          riskLevel="Moderado"
        />

        <SteroidCard 
          name="Primobolan (Metenolona)"
          category="Cutting - Premium"
          description="Esteroide suave e caro. Considerado um dos mais seguros mas menos potente"
          benefits={["Ganho de massa magra", "Preservação muscular", "Poucos efeitos colaterais", "Não aromatiza", "Seguro"]}
          dosage="400-800mg por semana"
          halfLife="10 dias"
          sideEffects={["Supressão hormonal", "Custo elevado", "Falsificações comuns"]}
          riskLevel="Baixo"
        />
      </div>

      {/* Cycle Examples */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-2xl p-6 border border-orange-500/20 backdrop-blur-sm mb-8">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Exemplos de Ciclos (Apenas Educacional)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CycleCard 
            title="Ciclo Iniciante - Bulking"
            compounds={["Testosterona Enantato 500mg/semana (12 semanas)", "Dianabol 30mg/dia (primeiras 6 semanas)"]}
            support={["Arimidex 0.5mg EOD (controle estrogênio)", "HCG 250ui 2x/semana (últimas 4 semanas)"]}
            pct="Clomid 50mg/dia + Nolvadex 20mg/dia (4 semanas)"
            duration="12 semanas + 4 semanas PCT"
          />
          
          <CycleCard 
            title="Ciclo Intermediário - Lean Bulk"
            compounds={["Testosterona Enantato 500mg/semana", "Deca-Durabolin 400mg/semana", "Dianabol 40mg/dia (primeiras 6 semanas)"]}
            support={["Arimidex 0.5mg EOD", "Cabergolina 0.25mg 2x/semana", "HCG 250ui 2x/semana"]}
            pct="Clomid 50mg/dia + Nolvadex 40mg/dia (6 semanas)"
            duration="16 semanas + 6 semanas PCT"
          />

          <CycleCard 
            title="Ciclo Avançado - Cutting"
            compounds={["Testosterona Propionato 100mg EOD", "Trembolona Acetato 75mg EOD", "Winstrol 50mg/dia (últimas 6 semanas)"]}
            support={["Arimidex 0.5mg EOD", "Cabergolina 0.5mg 2x/semana", "T3 25-50mcg/dia"]}
            pct="Clomid 50mg/dia + Nolvadex 40mg/dia + HCG (protocolo específico)"
            duration="12 semanas + 6 semanas PCT"
          />

          <CycleCard 
            title="Ciclo Feminino - Iniciante"
            compounds={["Anavar 10mg/dia (8 semanas)", "Primobolan 50mg/semana (opcional)"]}
            support={["Monitoramento de sinais de virilização", "Exames hormonais regulares"]}
            pct="Geralmente não necessário, mas monitoramento obrigatório"
            duration="8 semanas"
          />
        </div>
      </div>

      {/* PCT (Post Cycle Therapy) */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Terapia Pós-Ciclo (PCT)</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          A PCT é ESSENCIAL para restaurar a produção natural de testosterona após um ciclo. Sem PCT adequada, você pode 
          sofrer de baixa testosterona por meses ou até permanentemente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PCTCard 
            compound="Clomid (Clomifeno)"
            dosage="50-100mg por dia"
            duration="4-6 semanas"
            purpose="Estimula produção de LH e FSH"
          />
          <PCTCard 
            compound="Nolvadex (Tamoxifeno)"
            dosage="20-40mg por dia"
            duration="4-6 semanas"
            purpose="Bloqueia receptores de estrogênio"
          />
          <PCTCard 
            compound="HCG (Gonadotrofina)"
            dosage="250-500ui 2-3x/semana"
            duration="2-4 semanas (durante ciclo)"
            purpose="Mantém testículos ativos"
          />
        </div>
      </div>

      {/* Side Effects Management */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Controle de Efeitos Colaterais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SideEffectManagement 
            issue="Ginecomastia (Crescimento de mamas)"
            solutions={["Arimidex/Aromasin (inibidores de aromatase)", "Nolvadex (bloqueador de estrogênio)", "Reduzir dosagens"]}
          />
          <SideEffectManagement 
            issue="Acne e Pele Oleosa"
            solutions={["Accutane (casos severos)", "Sabonetes antibacterianos", "Trocar roupa de cama frequentemente"]}
          />
          <SideEffectManagement 
            issue="Pressão Alta"
            solutions={["Cardio regular", "Dieta com menos sódio", "Nebivolol (medicamento)", "Monitoramento constante"]}
          />
          <SideEffectManagement 
            issue="Colesterol Alterado"
            solutions={["Ômega 3 (4-6g/dia)", "Cardio regular", "Dieta rica em fibras", "Estatinas (se necessário)"]}
          />
          <SideEffectManagement 
            issue="Hepatotoxicidade (Orais)"
            solutions={["TUDCA/UDCA (500-1000mg/dia)", "NAC (N-Acetil Cisteína)", "Milk Thistle", "Exames hepáticos regulares"]}
          />
          <SideEffectManagement 
            issue="Queda de Cabelo"
            solutions={["Finasterida (bloqueia DHT)", "Minoxidil tópico", "Nizoral shampoo", "Evitar esteroides androgênicos"]}
          />
        </div>
      </div>

      {/* Critical Safety Guidelines */}
      <div className="bg-gradient-to-br from-red-500/10 to-pink-500/5 rounded-2xl p-6 border border-red-500/20 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Diretrizes de Segurança CRÍTICAS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SafetyPoint 
            icon="🏥"
            title="Exames Obrigatórios"
            description="Hemograma completo, perfil lipídico, função hepática, função renal, hormônios (testosterona, estradiol, LH, FSH, prolactina) ANTES, DURANTE e APÓS cada ciclo"
          />
          <SafetyPoint 
            icon="💊"
            title="Medicamentos de Suporte"
            description="Sempre tenha inibidores de aromatase, SERMs para PCT, e medicamentos para controle de pressão e colesterol disponíveis ANTES de começar"
          />
          <SafetyPoint 
            icon="⏰"
            title="Tempo ON = Tempo OFF"
            description="Regra básica: se fez 12 semanas de ciclo, faça NO MÍNIMO 12 semanas OFF (incluindo PCT) antes de considerar novo ciclo"
          />
          <SafetyPoint 
            icon="📊"
            title="Dosagens Realistas"
            description="Mais NÃO é melhor. Dosagens moderadas com dieta e treino corretos superam dosagens altas sem disciplina. Evite megadoses"
          />
          <SafetyPoint 
            icon="🚫"
            title="Idade Mínima"
            description="NUNCA use esteroides antes dos 25 anos. Seu sistema endócrino ainda está em desenvolvimento e danos podem ser permanentes"
          />
          <SafetyPoint 
            icon="💉"
            title="Técnica de Injeção"
            description="Aprenda técnica asséptica correta. Use agulhas novas, álcool 70%, e alterne locais de injeção. Infecções podem ser fatais"
          />
          <SafetyPoint 
            icon="🔬"
            title="Qualidade do Produto"
            description="Use apenas laboratórios confiáveis. Produtos falsificados ou contaminados são extremamente comuns e perigosos"
          />
          <SafetyPoint 
            icon="👨‍⚕️"
            title="Acompanhamento Médico"
            description="Idealmente, faça sob supervisão de endocrinologista especializado em TRT/HRT. Automedicação aumenta drasticamente os riscos"
          />
        </div>
      </div>

      {/* Long-term Risks */}
      <div className="bg-gradient-to-br from-gray-500/10 to-gray-700/5 rounded-2xl p-6 border border-gray-500/20 backdrop-blur-sm mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-300">Riscos de Longo Prazo</h2>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Cardiovascular:</strong> Hipertrofia ventricular esquerda, aterosclerose, aumento de risco de infarto e AVC</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Hormonal:</strong> Hipogonadismo permanente (testículos atrofiados), dependência de TRT vitalícia</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Hepático:</strong> Danos ao fígado, tumores hepáticos (especialmente com orais)</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Psicológico:</strong> Dependência psicológica, depressão pós-ciclo, alterações de humor permanentes</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Reprodutivo:</strong> Infertilidade (temporária ou permanente), disfunção erétil</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Community Page
function Community() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Comunidade</h1>

      {/* Create Post */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm mb-8">
        <textarea 
          placeholder="Compartilhe seu progresso, dicas ou conquistas..."
          className="w-full bg-white/5 rounded-lg p-4 text-white placeholder-gray-500 border border-white/10 focus:border-purple-400/50 focus:outline-none resize-none"
          rows={3}
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
              📷 Foto
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
              📊 Progresso
            </button>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg font-bold hover:opacity-90 transition-all duration-300">
            Publicar
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        <PostCard 
          author="Maria Santos"
          time="2h atrás"
          content="Finalmente consegui fazer 10 pull-ups seguidos! 💪 Meses de treino valeram a pena!"
          likes={47}
          comments={12}
          achievement="Meta de Pull-ups"
        />
        <PostCard 
          author="Carlos Oliveira"
          time="5h atrás"
          content="Dica: adicionar canela no shake de whey deixa muito mais gostoso e ainda ajuda no metabolismo!"
          likes={89}
          comments={23}
        />
        <PostCard 
          author="Ana Costa"
          time="1 dia atrás"
          content="Perdi 5kg em 2 meses seguindo o plano do FitCatalyst! Obrigada pela motivação, galera! 🎉"
          likes={156}
          comments={34}
          achievement="Meta de Peso"
        />
      </div>
    </div>
  );
}

// Reusable Components
function StatCard({ icon: Icon, label, value, unit, trend, color }: any) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-purple-400 text-sm font-bold">{trend}</span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xs text-gray-500 mt-1">{unit}</div>
    </div>
  );
}

function ProgressBar({ label, value }: any) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-bold text-purple-400">{value}%</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function QuickActionButton({ icon: Icon, label }: any) {
  return (
    <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
        <Icon className="w-5 h-5 text-purple-400" />
      </div>
      <span className="font-medium">{label}</span>
      <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-purple-400 transition-colors" />
    </button>
  );
}

function AchievementBadge({ icon: Icon, label }: any) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
      <Icon className="w-5 h-5 text-purple-400" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function InfoRow({ label, value }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function MetricCard({ label, value }: any) {
  return (
    <div className="bg-white/5 rounded-lg p-4">
      <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function GoalProgress({ label, current, target, unit }: any) {
  const percentage = (current / target) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-gray-400">{current}/{target} {unit}</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function MacroCard({ label, current, target, unit, color }: any) {
  const percentage = (current / target) * 100;
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
      <div className="text-sm text-gray-400 mb-2">{label}</div>
      <div className="text-3xl font-bold mb-1">{current}<span className="text-lg text-gray-400">/{target}</span></div>
      <div className="text-xs text-gray-500 mb-3">{unit}</div>
      <div className="w-full bg-white/5 rounded-full h-2">
        <div 
          className={`bg-gradient-to-r ${color} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}

function MealCard({ title, time, calories, items }: any) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-purple-400">{calories}</div>
          <div className="text-xs text-gray-400">kcal</div>
        </div>
      </div>
      <ul className="space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkoutCard({ title, date, duration, exercises, calories, status }: any) {
  return (
    <div className={`bg-white/5 rounded-2xl p-6 border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
      status === 'scheduled' ? 'border-purple-400/30' : 'border-white/10'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        {status === 'scheduled' && (
          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-bold">
            Hoje
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
        <div className="flex items-center gap-2">
          <Circle className="w-4 h-4" />
          {exercises} exercícios
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4" />
          {calories} kcal
        </div>
      </div>
      {status === 'completed' && (
        <div className="mt-4 flex items-center gap-2 text-purple-400 text-sm font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Concluído
        </div>
      )}
    </div>
  );
}

function TipCard({ icon: Icon, title, description }: any) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function SupplementCard({ name, dosage, time, taken }: any) {
  return (
    <div className={`bg-white/5 rounded-xl p-4 border backdrop-blur-sm transition-all duration-300 ${
      taken ? 'border-purple-400/30' : 'border-white/10'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold">{name}</h4>
        {taken ? (
          <CheckCircle2 className="w-5 h-5 text-purple-400" />
        ) : (
          <Circle className="w-5 h-5 text-gray-500" />
        )}
      </div>
      <div className="text-sm text-gray-400 space-y-1">
        <div>{dosage}</div>
        <div className="text-xs">{time}</div>
      </div>
    </div>
  );
}

function EducationalCard({ title, category, description, benefits }: any) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-bold">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="space-y-2">
        <div className="text-xs font-bold text-purple-400 mb-2">Benefícios:</div>
        {benefits.map((benefit: string, i: number) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
}

function PeptideCard({ name, category, description, benefits, dosage, timing, sideEffects }: any) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-purple-400">{name}</h3>
        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-bold">
          {category}
        </span>
      </div>
      
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-4">
        <div>
          <div className="text-xs font-bold text-purple-400 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Benefícios:
          </div>
          <ul className="space-y-1">
            {benefits.map((benefit: string, i: number) => (
              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div>
            <div className="text-xs font-bold text-blue-400 mb-1">Dosagem:</div>
            <div className="text-sm text-gray-300">{dosage}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 mb-1">Timing:</div>
            <div className="text-sm text-gray-300">{timing}</div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="text-xs font-bold text-yellow-400 mb-2">Efeitos Colaterais:</div>
          <ul className="space-y-1">
            {sideEffects.map((effect: string, i: number) => (
              <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
                {effect}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SteroidCard({ name, category, description, benefits, dosage, halfLife, sideEffects, riskLevel }: any) {
  const getRiskColor = (level: string) => {
    switch(level) {
      case "Baixo": return "text-green-400 bg-green-500/20";
      case "Baixo-Moderado": return "text-yellow-400 bg-yellow-500/20";
      case "Moderado": return "text-orange-400 bg-orange-500/20";
      case "Moderado-Alto": return "text-orange-500 bg-orange-600/20";
      case "Alto": return "text-red-400 bg-red-500/20";
      case "Muito Alto": return "text-red-500 bg-red-600/20";
      default: return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-red-400/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-red-400">{name}</h3>
        <span className={`px-3 py-1 text-xs rounded-full font-bold ${getRiskColor(riskLevel)}`}>
          {riskLevel}
        </span>
      </div>
      
      <span className="inline-block px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full font-bold mb-3">
        {category}
      </span>
      
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-4">
        <div>
          <div className="text-xs font-bold text-green-400 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Benefícios:
          </div>
          <ul className="space-y-1">
            {benefits.map((benefit: string, i: number) => (
              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-400"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div>
            <div className="text-xs font-bold text-blue-400 mb-1">Dosagem Típica:</div>
            <div className="text-sm text-gray-300">{dosage}</div>
          </div>
          <div>
            <div className="text-xs font-bold text-blue-400 mb-1">Meia-vida:</div>
            <div className="text-sm text-gray-300">{halfLife}</div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="text-xs font-bold text-red-400 mb-2">Efeitos Colaterais:</div>
          <ul className="space-y-1">
            {sideEffects.map((effect: string, i: number) => (
              <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-red-400"></div>
                {effect}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CycleCard({ title, compounds, support, pct, duration }: any) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-orange-500/20 backdrop-blur-sm">
      <h3 className="text-lg font-bold mb-3 text-orange-400">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <div className="text-xs font-bold text-white mb-2">Compostos:</div>
          {compounds.map((compound: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300 mb-1">
              <Syringe className="w-4 h-4 text-red-400 flex-shrink-0" />
              {compound}
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-white/5">
          <div className="text-xs font-bold text-white mb-2">Suporte:</div>
          {support.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-400 mb-1">
              <div className="w-1 h-1 rounded-full bg-blue-400"></div>
              {item}
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-white/5">
          <div className="text-xs font-bold text-white mb-2">PCT:</div>
          <div className="text-sm text-gray-300">{pct}</div>
        </div>

        <div className="pt-3 border-t border-white/5">
          <div className="text-xs text-gray-400">
            <span className="font-bold text-white">Duração Total:</span> {duration}
          </div>
        </div>
      </div>
    </div>
  );
}

function PCTCard({ compound, dosage, duration, purpose }: any) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-blue-500/20 backdrop-blur-sm">
      <h4 className="font-bold text-blue-400 mb-2">{compound}</h4>
      <div className="space-y-2 text-sm">
        <div className="text-gray-300">
          <span className="font-bold">Dosagem:</span> {dosage}
        </div>
        <div className="text-gray-300">
          <span className="font-bold">Duração:</span> {duration}
        </div>
        <div className="text-gray-400 text-xs pt-2 border-t border-white/5">
          {purpose}
        </div>
      </div>
    </div>
  );
}

function SideEffectManagement({ issue, solutions }: any) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-purple-500/20 backdrop-blur-sm">
      <h4 className="font-bold text-purple-400 mb-3 text-sm">{issue}</h4>
      <div className="space-y-2">
        {solutions.map((solution: string, i: number) => (
          <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
            <CheckCircle2 className="w-3 h-3 text-purple-400 flex-shrink-0 mt-0.5" />
            {solution}
          </div>
        ))}
      </div>
    </div>
  );
}

function StackCard({ title, peptides, goal, duration }: any) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-purple-400/20 backdrop-blur-sm">
      <h3 className="text-lg font-bold mb-3 text-purple-400">{title}</h3>
      <div className="space-y-3 mb-4">
        {peptides.map((peptide: string, i: number) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
            {peptide}
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-white/5 space-y-2">
        <div className="text-xs text-gray-400">
          <span className="font-bold text-white">Objetivo:</span> {goal}
        </div>
        <div className="text-xs text-gray-400">
          <span className="font-bold text-white">Duração:</span> {duration}
        </div>
      </div>
    </div>
  );
}

function SafetyPoint({ icon, title, description }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-red-500/10">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function PostCard({ author, time, content, likes, comments, achievement }: any) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold">{author}</div>
          <div className="text-xs text-gray-400">{time}</div>
        </div>
      </div>
      
      {achievement && (
        <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
          <Star className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-purple-400">{achievement}</span>
        </div>
      )}
      
      <p className="text-gray-300 mb-4">{content}</p>
      
      <div className="flex items-center gap-6 text-sm text-gray-400">
        <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
          <Heart className="w-4 h-4" />
          {likes}
        </button>
        <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
          <Circle className="w-4 h-4" />
          {comments}
        </button>
        <button className="flex items-center gap-2 hover:text-purple-400 transition-colors ml-auto">
          <Circle className="w-4 h-4" />
          Compartilhar
        </button>
      </div>
    </div>
  );
}
