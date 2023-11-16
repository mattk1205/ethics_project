import React, { useState } from "react";
import OpenAI from "openai";
import ResponseComponent from "../components/Response";
import "../styles/Ethics.css";

const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true
});

const QuestionComponent = () => {
    const [question, setQuestion] = useState("");
    const [responses, setResponses] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchResponses = async (sentiment) => {
        if (!question.trim()) return;

        setIsLoading(true);
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4-1106-preview",
                messages: [
                    { role: "system", content: "You answer ethical questions only. Refrain from answering as an entity and just provide a response." },
                    { role: "user", content: `Respond to the following ethical question. For the sake of the argument, provide an answer and evidence that says it is absolutely ${sentiment}. Do not argue a different side. Reference ethical theories and philosophies: ${question}` }
                ],
                temperature: 0.7,
                max_tokens: 716,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            });
            setResponses(response.choices[0]?.message?.content);
        } catch (error) {
            console.error("Failed to fetch responses:", error);
        }
        setIsLoading(false);
    };

    const renderButtonContent = (text) => {
        return isLoading ? (
            <span>Loading...</span>
        ) : (
            <span>{text}</span>
        );
    };

    return (
        <div className="ethics-page">
            <div className="input-box">
                <h1 style={{ color: 'white' }}>Submit Ethical Question</h1>
                <div className="input-container">
                    <textarea
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask an ethical question..."
                    />
                </div>
                <br/>
                <div className="button-container">
                    <button onClick={() => fetchResponses("ethical")} disabled={isLoading}>
                        {renderButtonContent('For')}
                    </button>
                    <button onClick={() => fetchResponses("ethically neutral")} disabled={isLoading}>
                        {renderButtonContent('Neutral')}
                    </button>
                    <button onClick={() => fetchResponses("unethical")} disabled={isLoading}>
                        {renderButtonContent('Against')}
                    </button>
                    {responses && (
                        <ResponseComponent responses={responses}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionComponent;
