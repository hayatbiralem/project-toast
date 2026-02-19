import React from 'react';

function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code !== 'Escape') {
                return;
            }

            if (!callback || typeof callback !== 'function') {
                return;
            }

            callback();
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);
}

export default useEscapeKey;