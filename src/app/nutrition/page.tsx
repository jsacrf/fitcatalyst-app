"use client";

import { useState } from "react";
import { Apple, Utensils, Heart } from "lucide-react";

export default function NutritionPage() {
  const [currentView, setCurrentView] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Apple className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Nutrição</h1>
            <p className="text-gray-600">Guia completo para uma alimentação saudável e equilibrada</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => setCurrentView("overview")}
              className={`p-4 rounded-lg border-2 transition-colors ${
                currentView === "overview"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <Utensils className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Visão Geral</h3>
            </button>

            <button
              onClick={() => setCurrentView("meals")}
              className={`p-4 rounded-lg border-2 transition-colors ${
                currentView === "meals"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <Apple className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Refeições</h3>
            </button>

            <button
              onClick={() => setCurrentView("tips")}
              className={`p-4 rounded-lg border-2 transition-colors ${
                currentView === "tips"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Dicas</h3>
            </button>
          </div>

          <div className="space-y-6">
            {currentView === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão Geral da Nutrição</h2>
                <p className="text-gray-700 mb-4">
                  Uma alimentação equilibrada é fundamental para manter a saúde, energia e bem-estar geral.
                  Foque em alimentos ricos em nutrientes, variedades e porções adequadas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Macronutrientes</h3>
                    <ul className="text-green-700 space-y-1">
                      <li>• Carboidratos: Energia principal</li>
                      <li>• Proteínas: Construção muscular</li>
                      <li>• Gorduras: Funções vitais</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Micronutrientes</h3>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Vitaminas: Sistema imunológico</li>
                      <li>• Minerais: Ossos e dentes</li>
                      <li>• Antioxidantes: Combate radicais livres</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentView === "meals" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Planejamento de Refeições</h2>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Café da Manhã</h3>
                    <p className="text-yellow-700">
                      Aveia com frutas, iogurte grego, ovos ou smoothies ricos em nutrientes.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Almoço</h3>
                    <p className="text-orange-700">
                      Proteína magra, vegetais, grãos integrais e gorduras saudáveis.
                    </p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Jantar</h3>
                    <p className="text-red-700">
                      Refeição leve com proteínas, vegetais e carboidratos complexos.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentView === "tips" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dicas Nutricionais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Hidratação</h4>
                      <p className="text-purple-700 text-sm">Beba pelo menos 2 litros de água por dia.</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-800">Porções</h4>
                      <p className="text-indigo-700 text-sm">Use o prato como guia: metade vegetais, quarto proteína, quarto carboidratos.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800">Variedade</h4>
                      <p className="text-pink-700 text-sm">Inclua cores variadas no prato para garantir diversidade nutricional.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-800">Consistência</h4>
                      <p className="text-teal-700 text-sm">Mantenha horários regulares para as refeições.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}