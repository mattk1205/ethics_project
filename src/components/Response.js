import React, { useEffect, useState } from 'react';

export default function ResponseComponent({ responses }) {
    const [isVisible, setIsVisible] = useState(false);
    const splitResponses = responses.split(/(?=\d\. )/g);

    useEffect(() => {
        setIsVisible(true);
    }, [responses]); // Trigger the transition effect when responses are updated

    return (
        <div
            style={{
                position: 'relative',
                bottom: '20px',
                left: '20px',
                maxWidth: '1000px',
                maxHeight: '500px',
                padding: '20px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'lightgreen',
                borderRadius: '10px',
                transition: 'opacity 1s, transform 1s',
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`
            }}
        >
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Response:</div>
            {splitResponses.map((part, index) => (
                <div key={index} style={{ marginBottom: '5px' }}>
                    {part}
                </div>
            ))}
        </div>
    );
}