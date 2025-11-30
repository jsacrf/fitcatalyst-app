import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { image, apiKey } = await request.json();

    if (!image || !apiKey) {
      return NextResponse.json({ error: 'Imagem e chave da API são obrigatórias' }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Analise esta imagem e forneça informações relevantes sobre saúde, nutrição, fitness ou bem-estar. Seja detalhado e útil.',
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${image}`,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    });

    const analysis = response.choices[0]?.message?.content || 'Não foi possível analisar a imagem.';

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Erro na análise:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}