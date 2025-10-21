import {useRef} from 'react';

function focusInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Enter"
                ref={inputRef}
                style={{
                    padding: '8px',
                    marginRight: '10px',
                    width: '250px',
                    fontSize: '16px'
                }}
            />

            <button
                onClick={handleClick}
                style={{
                    padding: '8px 16px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Focus Input
            </button>
        </div>
    )
}

export default focusInput;