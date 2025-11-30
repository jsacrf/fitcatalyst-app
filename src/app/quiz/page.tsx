'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    question: 'Quantas refeições você faz por dia?',
    options: ['1-2', '3', '4-5', 'Mais de 5'],
    correct: 2,
  },
  {
    question: 'Com que frequência você pratica exercícios físicos?',
    options: ['Nunca', '1-2 vezes por semana', '3-4 vezes por semana', 'Todos os dias'],
    correct: 3,
  },
  {
    question: 'Quanto tempo você dorme por noite?',
    options: ['Menos de 6 horas', '6-7 horas', '7-8 horas', 'Mais de 8 horas'],
    correct: 2,
  },
  {
    question: 'Você consome frutas e vegetais diariamente?',
    options: ['Nunca', 'Raramente', 'Às vezes', 'Sempre'],
    correct: 3,
  },
  {
    question: 'Como você avalia seu nível de estresse?',
    options: ['Muito alto', 'Alto', 'Moderado', 'Baixo'],
    correct: 3,
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      setScore(totalScore);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let message = '';
    if (percentage >= 80) {
      message = 'Excelente! Você tem hábitos muito saudáveis.';
    } else if (percentage >= 60) {
      message = 'Bom trabalho! Há espaço para melhorias.';
    } else {
      message = 'Considere melhorar seus hábitos para uma vida mais saudável.';
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Resultado do Quiz</CardTitle>
            <CardDescription>Veja como você se saiu!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">
                {score}/{questions.length}
              </div>
              <Progress value={percentage} className="mb-4" />
              <p className="text-lg mb-6">{message}</p>
              <Button onClick={resetQuiz}>Refazer Quiz</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Quiz de Saúde</CardTitle>
          <CardDescription>
            Responda às perguntas para avaliar seus hábitos saudáveis
          </CardDescription>
          <Progress value={(currentQuestion / questions.length) * 100} />
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Pergunta {currentQuestion + 1} de {questions.length}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}