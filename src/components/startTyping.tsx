import React from 'react';
interface Data {
    slug?: string;
    results: any[];
    token: string;
}

const StartTyping = (data: Data): JSX.Element | undefined => {
    if (data.slug === '') {
        return (<div className='center'>Start typing to search in the spotify catalog</div>)
    }
}

export default StartTyping