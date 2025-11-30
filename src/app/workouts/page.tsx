"use client";

import { useState } from "react";
import { Dumbbell, Calendar, Target, Clock } from "lucide-react";

export default function WorkoutsPage() {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const workouts = [
    {
      id: "strength",
      name: "Treino de Força",
      icon: Dumbbell,
      description: "Foco em ganho de massa muscular",
      duration: "45-60 min",
      exercises: ["Agachamento", "Supino", "Puxada", "Desenvolvimento"]
    },
    {
      id: "cardio",
      name: "Cardio",
      icon: Target,
      description: "Queima calórica e resistência cardiovascular",
      duration: "30-45 min",
      exercises: ["Corrida", "Ciclismo", "Natação", "Burpees"]
    },
    {
      id: "flexibility",
      name: "Flexibilidade",
      icon: Calendar,
      description: "Melhora mobilidade e previne lesões",
      duration: "20-30 min",
      exercises: ["Alongamento", "Yoga", "Pilates", "Mobilidade articular"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Dumbbell className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Treinos</h1>
            <p className="text-gray-600">Programas de exercícios personalizados para seus objetivos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {workouts.map((workout) => {
              const Icon = workout.icon;
              return (
                <button
                  key={workout.id}
                  onClick={() => setSelectedWorkout(selectedWorkout === workout.id ? null : workout.id)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedWorkout === workout.id
                      ? "border-orange-500 bg-orange-50 shadow-lg"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <Icon className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{workout.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{workout.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {workout.duration}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedWorkout && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {workouts.find(w => w.id === selectedWorkout)?.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Exercícios Principais:</h3>
                  <ul className="space-y-2">
                    {workouts.find(w => w.id === selectedWorkout)?.exercises.map((exercise, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Dicas:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Aquecimento de 5-10 minutos</li>
                    <li>• Técnica correta é essencial</li>
                    <li>• Progresão gradual de cargas</li>
                    <li>• Descanse entre séries</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Lembre-se: Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios.
            </p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Criar Plano Personalizado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}