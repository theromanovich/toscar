import React, { useState, useEffect } from 'react';

function Hook() {
        const [count, setCount] = useState(10);

        // Подібно до componentDidMount та componentDidUpdate:
        useEffect(() => {
            // Оновлюємо заголовок документа, використовуючи API браузера
            document.title = `Ви натиснули ${count} разів`;
        });

        return (
            <div>
                <p>Ви натиснули {count} разів</p>
                <button onClick={() => setCount(count + 1)}>
                    Натисни мене
                </button>
            </div>
        );
    }

export default Hook;
