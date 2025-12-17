"use client";

import React, { useState } from "react";

export default function BlogGenerator() {
  const [platform, setPlatform] = useState("naver");
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const platforms = {
    naver: { name: "네이버 블로그", color: "green" },
    tistory: { name: "티스토리", color: "orange" },
    adsense: { name: "애드센스", color: "blue" },
    brand: { name: "브랜드 블로그", color: "purple" }
  };

  const handleGenerate = async () => {
    if (!topic) return alert("주제를 입력해주세요!");
    setIsLoading(true);
    
    try {
      // API 호출 (실제 구현 시)
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform, topic })
      });
      
      const data = await response.json();
      setResult(data.content);
    } catch (error) {
      // 임시 데모 데이터
      setTimeout(() => {
        const demoContent = platform === "naver" 
          ? `[제목]\n${topic} - 완벽 가이드\n\n[본문]\n${topic}에 대해 알아보겠습니다.\n\n2024년 통계에 따르면 많은 분들이 ${topic}에 관심을 가지고 계십니다. 오늘은 이에 대해 구체적으로 살펴보겠습니다.\n\n첫 번째로 중요한 것은 정확한 정보 파악입니다. ${topic}의 경우 다양한 방법이 있지만, 가장 효과적인 방법을 선택하는 것이 중요합니다. 실제 데이터를 분석해보면 약 70% 이상이 이 방법을 선호한다는 결과가 나옵니다.\n\n두 번째는 실천 가능한 계획 수립입니다. 단순히 정보만 아는 것이 아니라 실제로 적용할 수 있어야 합니다. 구체적인 단계별 접근이 필요하며, 각 단계마다 체크포인트를 설정하는 것이 좋습니다.\n\n세 번째로는 지속적인 관리입니다. 한 번 실천하고 끝나는 것이 아니라 꾸준히 관리하고 개선해나가야 합니다. 주기적으로 점검하고 필요한 부분을 보완하면 더 좋은 결과를 얻을 수 있습니다.\n\n[마무리]\n${topic}에 대해 알아보았습니다. 정확한 정보 파악, 실천 가능한 계획, 지속적인 관리가 핵심입니다. 이 세 가지만 잘 지켜도 원하는 결과를 얻을 수 있을 것입니다.\n\n[태그]\n#${topic.replace(/\s/g, '')} #가이드 #팁 #정보 #추천\n\n[썸네일 아이디어]\n1. "${topic}" 텍스트와 관련 아이콘을 배치한 심플한 디자인\n2. 주요 핵심 키워드 3가지를 강조한 인포그래픽 스타일`
          : `# ${topic} 완벽 가이드\n\n${topic}에 대해 알아보겠습니다.\n\n## 개요\n\n2024년 통계에 따르면 많은 분들이 ${topic}에 관심을 가지고 계십니다.\n\n## 핵심 포인트\n\n- 정확한 정보 파악\n- 실천 가능한 계획\n- 지속적인 관리\n\n---\n\n**태그**: ${topic}, 가이드, 팁\n\n**썸네일 아이디어**:\n1. 관련 이미지와 텍스트 조합\n2. 인포그래픽 스타일`;
        
        setResult(demoContent);
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert("본문이 복사되었습니다!");
  };

  const colorClasses = {
    green: {
      bg: "bg-green-600 hover:bg-green-700",
      ring: "focus:ring-green-500",
      badge: "bg-green-100 text-green-800"
    },
    orange: {
      bg: "bg-orange-600 hover:bg-orange-700",
      ring: "focus:ring-orange-500",
      badge: "bg-orange-100 text-orange-800"
    },
    blue: {
      bg: "bg-blue-600 hover:bg-blue-700",
      ring: "focus:ring-blue-500",
      badge: "bg-blue-100 text-blue-800"
    },
    purple: {
      bg: "bg-purple-600 hover:bg-purple-700",
      ring: "focus:ring-purple-500",
      badge: "bg-purple-100 text-purple-800"
    }
  };

  const currentColor = colorClasses[platforms[platform].color];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            AI Blog Writer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            플랫폼별 최적화된 고품질 블로그 글을 1초 만에 완성하세요.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-sm text-gray-500">Powered by</span>
            <a 
              href="https://github.com/qhddlfrla-arch/blog-writing-guide"
              target="_blank"
              className="text-sm font-semibold text-purple-600 hover:text-purple-700"
            >
              Blog Writing Guide
            </a>
          </div>
        </div>

        {/* 플랫폼 선택 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            플랫폼 선택
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(platforms).map(([key, { name, color }]) => (
              <button
                key={key}
                onClick={() => setPlatform(key)}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  platform === key
                    ? `${colorClasses[color].badge} ring-2 ring-offset-2 ${colorClasses[color].ring.replace('focus:', 'ring-')}`
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* 입력 섹션 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                블로그 주제
              </label>
              <input
                type="text"
                placeholder="예: 2025년 연말정산 꿀팁, AI 도구 활용법, 겨울철 난방비 절감 등"
                className={`w-full px-4 py-3 rounded-xl border border-gray-300 ${currentColor.ring} focus:border-transparent outline-none transition`}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <p className="mt-2 text-xs text-gray-500">
                ✓ 구체적인 수치/통계 포함 | ✓ 허위 체험담 금지 | ✓ 6-8문장 심층 작성
              </p>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className={`w-full py-4 rounded-xl font-bold text-white transition shadow-lg transform ${
                isLoading 
                ? "bg-gray-400 cursor-not-allowed" 
                : `${currentColor.bg} active:scale-95`
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  AI가 심층 분석하여 글을 쓰는 중...
                </span>
              ) : (
                `${platforms[platform].name} 고품질 글 생성하기`
              )}
            </button>
          </div>
        </div>

        {/* 결과 섹션 */}
        {result && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${currentColor.bg}`}></span>
                생성된 콘텐츠
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  전체 복사
                </button>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 min-h-[400px]">
              <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-sans text-sm">
                {result}
              </pre>
            </div>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>💡 Tip:</strong> 생성된 글은 {platforms[platform].name} 작성 규칙을 준수합니다. 
                필요시 수정하여 사용하세요.
              </p>
            </div>
          </div>
        )}

        {/* 푸터 */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Made with ❤️ for Better Blog Content</p>
          <p className="mt-2">
            <a 
              href="https://github.com/qhddlfrla-arch/blog-writing-guide" 
              target="_blank"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              GitHub Repository
            </a>
            {" · "}
            <a 
              href="https://qhddlfrla-arch.github.io/blog-writing-guide/" 
              target="_blank"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Guide Website
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
