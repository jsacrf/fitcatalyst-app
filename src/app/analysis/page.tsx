"use client";

import { useState } from "react";
import { Heart, Upload, Loader2 } from "lucide-react";

export default function AnalysisPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage || !apiKey) return;

    setIsAnalyzing(true);
    setAnalysisResult("");

    try {
      const base64Image = imagePreview?.split(',')[1]; // Remove data:image/jpeg;base64,

      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: base64Image,
          apiKey,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setAnalysisResult(data.analysis);
      } else {
        setAnalysisResult(`Erro: ${data.error}`);
      }
    } catch (error) {
      setAnalysisResult("Erro ao analisar a imagem. Tente novamente.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Health App</h1>
            <p className="text-gray-600">Análise de Fotos - Faça upload de uma imagem para análise usando IA</p>
          </div>

          <div className="space-y-6">
            {/* API Key Input */}
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
                Chave da API OpenAI
              </label>
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecione uma imagem
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                  id="imageInput"
                />
                <label htmlFor="imageInput" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Clique para selecionar uma imagem</p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG até 10MB</p>
                </label>
              </div>
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="text-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Analyze Button */}
            <button
              onClick={analyzeImage}
              disabled={!selectedImage || !apiKey || isAnalyzing}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analisando...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  Analisar Imagem
                </>
              )}
            </button>

            {/* Analysis Result */}
            {analysisResult && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Resultado da Análise:</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{analysisResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}