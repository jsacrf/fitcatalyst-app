'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // You can fetch session details here if needed
    // For now, we'll just show a success message
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Pagamento Aprovado!</CardTitle>
          <CardDescription>
            Obrigado por se juntar a nós. Seu plano foi ativado com sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              Você agora tem acesso a todos os recursos premium do HealthApp.
              Comece a usar seus novos benefícios imediatamente!
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/analysis">Fazer Análise</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/workouts">Ver Treinos</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}