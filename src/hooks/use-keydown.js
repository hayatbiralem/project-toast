import React from 'react';

function useKeydown(key, callback) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code !== key) {
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
    }, [callback]);
}

export default useKeydown;