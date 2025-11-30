'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Plano Básico',
    price: 'R$ 29,90',
    priceId: 'price_1234567890', // Substitua pelo seu price ID do Stripe
    features: [
      'Análise de fotos',
      'Treinos básicos',
      'Dicas de nutrição',
      'Relatórios mensais',
    ],
  },
  {
    name: 'Plano Premium',
    price: 'R$ 59,90',
    priceId: 'price_0987654321', // Substitua pelo seu price ID do Stripe
    features: [
      'Tudo do plano básico',
      'Treinos personalizados',
      'Plano alimentar completo',
      'Suporte prioritário',
      'Métricas avançadas',
    ],
    popular: true,
  },
  {
    name: 'Plano Pro',
    price: 'R$ 99,90',
    priceId: 'price_1122334455', // Substitua pelo seu price ID do Stripe
    features: [
      'Tudo do plano premium',
      'Consultoria com nutricionista',
      'Acompanhamento semanal',
      'Relatórios detalhados',
      'Acesso antecipado a novos recursos',
    ],
  },
];

export default function CheckoutPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setLoading(priceId);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(
        ({ loadStripe }) => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      );

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Escolha seu Plano</h1>
        <p className="text-muted-foreground">
          Desbloqueie todo o potencial do seu bem-estar com nossos planos premium
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-center">{plan.name}</CardTitle>
              <div className="text-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                onClick={() => handleCheckout(plan.priceId)}
                disabled={loading === plan.priceId}
              >
                {loading === plan.priceId ? 'Processando...' : 'Assinar Agora'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Pagamento seguro processado pelo Stripe. Cancele a qualquer momento.
        </p>
      </div>
    </div>
  );
}