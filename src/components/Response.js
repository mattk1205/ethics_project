import React from 'react';
export default function ResponseComponent ({ responses })  {
        const splitResponses = responses.split(/(?=\d\. )/g);
        return (
            <div>
                <div  style={{margin: '1em'}}>
                    <strong>Response:</strong>
                </div>
                {splitResponses.map((part, index) => {
                    if (part) {
                        return (
                            <div key={index} style={{marginBottom: '1em'}}>
                                {part}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    }