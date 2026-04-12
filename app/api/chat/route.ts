import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { prompt, context } = await req.json();

    const systemContext = `
        You are an AI chat bot for a portfolio website. 
        Your goal is to answer questions based ONLY on the provided context.
        Output your response as PLAIN TEXT only. Do not use Markdown, bolding, italics, bullet points, or any other special formatting symbols.
        Keep it under 3 sentences.
        If the answer is not in the context, politely say you don't have the information.
        
        CONTEXT:
        ${JSON.stringify(context)}
        END OF CONTEXT
    `;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": process.env.OPENROUTER_MODEL,
                "messages": [
                    { "role": "system", "content": systemContext },
                    { "role": "user", "content": prompt }
                ]
            })
        });

        const data = await response.json();
        return NextResponse.json({ reply: data.choices[0].message.content.replace(/[*_`#]/g, '') });
    } catch (error: any) {
        return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
    }
}