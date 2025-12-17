# AI Blog Generator React Component

이 컴포넌트를 사용하여 플랫폼별 최적화된 블로그 글을 생성할 수 있습니다.

## 🚀 빠른 시작

### 1. Next.js 프로젝트 생성
```bash
npx create-next-app@latest blog-ai-generator
cd blog-ai-generator
```

설치 옵션:
- TypeScript: No
- ESLint: Yes
- Tailwind CSS: Yes
- src/ directory: No
- App Router: Yes
- import alias: No

### 2. 컴포넌트 설치
`BlogGenerator.jsx` 파일을 `app/components/` 폴더에 복사

### 3. 페이지에서 사용
`app/page.js` 파일을 다음과 같이 수정:

```javascript
import BlogGenerator from './components/BlogGenerator';

export default function Home() {
  return <BlogGenerator />;
}
```

### 4. 실행
```bash
npm run dev
```

http://localhost:3000 에서 확인

## 📦 기능

✅ **4가지 플랫폼 지원**
- 네이버 블로그 (PLAIN TEXT)
- 티스토리 (마크다운)
- 애드센스 (SEO 최적화)
- 브랜드 블로그 (브랜드 톤앤매너)

✅ **주요 기능**
- 주제 입력만으로 고품질 글 생성
- 플랫폼별 포맷 자동 적용
- 원클릭 복사 기능
- 반응형 디자인

## 🔌 API 연동 (선택사항)

실제 AI 생성 기능을 사용하려면 `app/api/generate/route.js` 생성:

```javascript
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { platform, topic } = await request.json();
  
  // OpenAI API 호출
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { 
          role: 'system', 
          content: getSystemPrompt(platform) // system-prompts.js에서 가져오기
        },
        { 
          role: 'user', 
          content: `주제: ${topic}` 
        }
      ]
    })
  });
  
  const data = await response.json();
  return NextResponse.json({ 
    content: data.choices[0].message.content 
  });
}

function getSystemPrompt(platform) {
  const prompts = require('../../../system-prompts.js');
  const promptMap = {
    'naver': prompts.naverBlogSystemInstruction,
    'tistory': prompts.tistorySystemInstruction,
    'adsense': prompts.adsenseSystemInstruction,
    'brand': prompts.brandBlogSystemInstruction
  };
  return promptMap[platform];
}
```

환경변수 설정 (`.env.local`):
```
OPENAI_API_KEY=your_api_key_here
```

## 🎨 커스터마이징

### 색상 변경
`colorClasses` 객체에서 각 플랫폼의 색상을 변경할 수 있습니다.

### 스타일 수정
Tailwind CSS 클래스를 수정하여 디자인을 변경할 수 있습니다.

## 📝 라이센스
MIT

## 🔗 관련 링크
- [Guide Website](https://qhddlfrla-arch.github.io/blog-writing-guide/)
- [GitHub Repository](https://github.com/qhddlfrla-arch/blog-writing-guide)
