import React, { FunctionComponent, useEffect, useState } from 'react';
import memoji from '../img/memoji.png';

const Home: FunctionComponent = () => {
    const [state, setState] = useState({
        index: 0,
        aboutMeSnippet: 'make things'
    });

    useEffect(() => {
        const aboutStrings = [
            'make things',
            'break stuff',
            'like to learn new technologies',
            'EXECUTE ORDER 66',
            'am an F1 fanatic',
            'think Yu-Gi-Oh! > Pokémon',
            'peddle around on two wheels',
            '<3 movies',
            'think you\'re alright!'
        ];
        const index = state.index === aboutStrings.length - 1 ? 0 : state.index + 1;
        setTimeout(() => setState({
            aboutMeSnippet: aboutStrings[index],
            index: index
        }), 3000);
    }, [state])

    return (
        <div className="flex flex-col flex-wrap w-full h-full justify-center items-center">
            <img src={memoji} alt="My mind is blown, always!" className="h-48 w-48 flex-auto"/>
            <div className="flex flex-auto w-full justify-center">
                <div className="w-1/2 text-right text-2xl font-semibold">Hello there! I'm Mike and I </div>
                <div className="w-1/2 pl-1 text-2xl font-semibold animate-fade">{state.aboutMeSnippet}.</div>
            </div>
            <div className="flex-auto pt-5">
                I am currently a <a className="p-0 font-semibold">Software Engineer</a> at {' '}
                <a href="https://www.trelleborg.com/en/marine-and-infrastructure/products--solutions--and--services/marine/ship--performance--monitoring"
                   className="border-b-2 border-green-500 hover:text-green-500">Trelleborg Marine & Infrastructure</a>, developing performance monitoring systems for ships.
            </div>
        </div>
    );
}

export default Home;