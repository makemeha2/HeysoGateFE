import React, { useRef, useEffect } from "react";

export default function AutoResizingTextarea(props) {
    const textareaRef = useRef(null);

    const resizeTextarea = () => {
        const textarea = textareaRef.current;

        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useEffect(resizeTextarea, []);

    return (
        <textarea
            ref={textareaRef}
            rows={1}
            style={{ overflow: 'hidden', resize: 'none' }}
            onChange={resizeTextarea}
            onBlur={(e) => { e.target.value = e.target.value.trim(); resizeTextarea(); }}
            {...props} />
    );
}