import React from 'react';
interface DataSlug {
    data: {
        slug: string;
    }
}

const StartTyping = ({data}: DataSlug): JSX.Element | null => {
    
    if (data.slug !== '') {
        return null
    }
    return (<div className='center'>Start typing to search in the spotify catalog</div>)
}

export default StartTyping