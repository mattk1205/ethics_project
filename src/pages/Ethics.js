import React, {useState} from "react";
import OpenAI from "openai";
import ResponseComponent from "../components/Response";
import "../styles/Ethics.css";

const openai = new OpenAI({
    apiKey: "", // Replace with your actual API key
    dangerouslyAllowBrowser: true
});

const QuestionComponent = () => {
    const [question, setQuestion] = useState("");
    const [responses, setResponses] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchResponses = async (sentiment) => {
        console.log(sentiment)
        if (!question.trim()) return;

        setIsLoading(true);
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: `Respond to the following ethical question. Take a ${sentiment} stance. Reference ethical theories and philosophies: ${question}` }
                ],
                temperature: 0.7,
                max_tokens: 716,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            });
            setResponses(response.choices[0]?.message?.content); // Adjust according to the actual response structure
        } catch (error) {
            console.error("Failed to fetch responses:", error);
        }
        setIsLoading(false);
    };

    return (
        <div className="input-box">
            <h1>Submit Ethical Question</h1>
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
                <button onClick={() => fetchResponses("for")} disabled={isLoading}>For</button>
                <button onClick={() => fetchResponses("neutral")} disabled={isLoading}>Neutral</button>
                <button onClick={() => fetchResponses("against")} disabled={isLoading}>Against</button>
                    {responses ? (
                        <ResponseComponent responses={responses}/>
                    ) : null}
            </div>
        </div>
    );
};

export default QuestionComponent;