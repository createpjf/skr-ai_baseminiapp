import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { query, enableWebSearch = true, enableThinking = false } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // 模拟AI搜索响应
    const mockResponse = generateMockResponse(query, enableWebSearch, enableThinking);

    return NextResponse.json({ 
      result: mockResponse,
      query,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function generateMockResponse(query: string, enableWebSearch: boolean, enableThinking: boolean): string {
  const responses = {
    'hello': '你好！我是Skr.AI，您的智能搜索助手。我可以帮助您回答各种问题，进行实时搜索，并提供多语言支持。有什么我可以帮助您的吗？',
    'what is ai': '人工智能（AI）是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的系统。这包括学习、推理、问题解决、感知和语言理解等能力。',
    'how to learn programming': '学习编程的建议：\n1. 选择一门编程语言（如Python、JavaScript、Java等）\n2. 从基础语法开始学习\n3. 多做练习和项目\n4. 阅读优秀的代码\n5. 参与开源项目\n6. 持续学习和实践',
    'weather': '我无法获取实时天气信息，但您可以访问天气网站或使用天气应用来查看当前天气情况。',
    'news': '我无法获取最新新闻，但您可以访问新闻网站或使用新闻应用来获取最新资讯。'
  };

  // 简单的关键词匹配
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
    return responses['hello'];
  } else if (lowerQuery.includes('ai') || lowerQuery.includes('artificial intelligence')) {
    return responses['what is ai'];
  } else if (lowerQuery.includes('programming') || lowerQuery.includes('code') || lowerQuery.includes('learn')) {
    return responses['how to learn programming'];
  } else if (lowerQuery.includes('weather')) {
    return responses['weather'];
  } else if (lowerQuery.includes('news')) {
    return responses['news'];
  } else {
    // 默认响应
    return `关于"${query}"的信息：\n\n这是一个很好的问题！虽然我无法提供实时信息，但我可以帮您分析这个问题。\n\n${enableWebSearch ? '✓ 联网搜索已启用' : '✗ 联网搜索已关闭'}\n${enableThinking ? '✓ 推理模式已启用' : '✗ 推理模式已关闭'}\n\n在Base Mini App环境中，我为您提供智能搜索服务。您可以尝试更具体的问题，我会尽力为您提供帮助！`;
  }
}
