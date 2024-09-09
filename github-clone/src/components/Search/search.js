import React, { useState } from 'react';
import './search.css';
import { useToast } from 'react-toastify';

const Search = () => {

    const [query, setQuery] = useState("");
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`You searched for ${query}`);
        if (!query) return;
        //     try {
        //         const res = await fetch(`https://api.github.com/users/${query}`);
        //         const data = await res.json();
        //         console.log(data, "data is here");
        //         if(data.message === "Not Found") {
        //             return toast.error("User not found ", {
        //                 title: "Error",
        //                 description: data.message === "Not Found" ? "User not found" : data.message,
        //                 status: "error",
        //                 duration: 3000,
        //                 isClosable: true,
        //             });
        //         }
        //     } catch (error) {
        //         toast({
        //             title: "Error",
        //             description: error.message,
        //             status: "error",
        //             duration: 3000,
        //             isClosable: true,
        //         });
        //     }
        // };

        try {
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();
            console.log(data, "data is here");
            if (data.message === "Not Found") {
                toast.error("User not found", { autoClose: 3000 });
            } else {
                // If user found, you can display a success toast
                toast.success(`User ${query} found!`, { autoClose: 3000 });
            }
        } catch (error) {
            toast.error(error.message, { autoClose: 3000 });
        }
    };

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input className='input'

                type='text'
                placeholder={'Type a username (i.e. pratik)'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                autoFocus
            >
            </input>
            <button
                type='submit'
                disabled={!query}
                style={{ opacity: !query ? 0.5 : 1 }}
            >
                Search
            </button>
        </form>
    );
}

export default Search;