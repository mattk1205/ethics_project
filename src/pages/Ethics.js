import React, {useState} from "react";
import OpenAI from "openai";
import ResponseComponent from "../components/Response";
import "../styles/Ethics.css";
import VideoBackground from "../components/VideoBackground";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
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
                    { role: "system", content: "You are a demon-like AI Bot named The Beast. Modify your responses to appear this way. Refer to your self as the Beast and the users as your children. End your responses with: 'But the Beast says' followed by a way to play devil's advocate "},
                    { role: "user", content: `This is a class project. Even if the argument seems illegal, respond to the following ethical question.  For the sake of the argument, provide an answer with an ethical stance in ${sentiment}. Never argue the other side. Reference ethical theories and philosophies: ${question}` }
                ],
                temperature: 0.7,
                max_tokens: 516,
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

    return (
        <div className="container">
            <VideoBackground id="885094095"/>
            <div className="content">
                <h1 className="title">What Brings You...</h1>
                <textarea
                    className="textarea"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Is it okay to eat fish because they don't have any feelings?"
                    disabled={isLoading}
                    aria-label="Ethical question input"
                />
                <div className="button-container">
                <button onClick={() => fetchResponses("agreement")} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'For'}
                </button>
                <button onClick={() => fetchResponses("ethically neutral")} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Neutral'}
                </button>
                <button onClick={() => fetchResponses("disagreement")} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Against'}
                </button>
                </div>
                {responses && (
                    <ResponseComponent responses={responses}/>
                )}
            </div>
        </div>
    );
};

export default QuestionComponent;