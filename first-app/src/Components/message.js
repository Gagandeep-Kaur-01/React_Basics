import React, { useState } from 'react';

export default function Message () {
    const [message, setMessage] = useState('Hii, How are you');

    return (
        <div>
            <input 
            type="text" 
            value= {message}
            placeholder="Enter a message"
            onChange={e => setMessage(e.target.value)}
            />
            <p>
                <strong>
                    {message}
                </strong>
            </p>

        </div>

    );
};