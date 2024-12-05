import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    function handleChange(e) {
        setPrompt(e.target.value);
    }

    async function submitHandler(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/ai/prompt", { prompt });
        setResponse(response.data);
    }

    return (
        <div>
            <form className='flex flex-col gap-5 m-5r' onSubmit={submitHandler}>
                <input className='w-2/12 mx-auto fonnt-mono text-xl border-2 bg-red-500 text-black rounded-xl p-1 px-2 m-5' name='prompt' onChange={handleChange} />
                <button className='bg-yellow-400 w-1/12 mx-auto p-2 rounded-lg translate-x-[175%] translate-y-[-200%]' type="submit">Submit</button>
                <div className='w-8/12 mx-auto p-2 rounded-lg border-2 border-blue-500'>{response}</div>
            </form>
        </div>
    );
}

export default Search;
