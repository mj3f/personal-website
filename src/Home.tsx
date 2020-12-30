import React, { FunctionComponent } from 'react';
import memoji from './img/memoji.png';

const Home: FunctionComponent = () => (
    <div className="flex flex-col flex-wrap w-full h-full justify-center items-center">
        <img src={memoji} alt="memoji me" className="h-48 w-48 flex-auto" />
        <p className="flex-auto">Hello there!</p>
    </div>
);

export default Home;