import OpenAI from "openai";
import React from 'react'

// const openai = new OpenAI({
//     apiKey: "", dangerouslyAllowBrowser: true
// });
//
// const response = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [{"role": "user", "content": "{Create create 3 responses to the following ethical question. One should be for and one should be against: Should robots be able to kill humans?}"}],
//     temperature: 0.7,
//     max_tokens: 716,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0
// });
//const data = response.choices[0]
export default function Ethics(){
    return (
        <div className="ethics">
            <h1>Ethical Questions</h1>
            <div>Here will be responses</div>
            <div>Response 1 - For: Robots, when programmed with a strict set of protocols and guidelines, could be used as an effective tool in war or defense situations, potentially reducing the risk to human soldiers. If a robot is designed to kill in these specific circumstances, it would be carrying out a mission just as a human soldier would, but without the emotional trauma or risk to human life. This could arguably be seen as a more ethical choice. Response 2 - Against: Allowing robots to have the ability to take human lives is a dangerous path to tread down. This could lead to a lack of accountability and the devaluing of human life. It also opens up the possibility of these robots being used unethically or falling into the wrong hands. It's a slippery slope that ultimately puts more lives at risk than it protects. Response 3 - Neutral: The question of whether robots should be allowed to kill humans is not a straightforward one. It heavily depends on the context, purpose, and regulations surrounding their use. The potential benefits and drawbacks are significant and should be carefully considered. It is a complex issue that needs to be addressed on a case-by-case basis, taking into account the potential for abuse and the potential for saving human lives.</div>
        </div>
    );
};

