import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import ReactSwitch from 'react-switch';
import Footer from './Footer';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggle = () => setIsDarkMode(prevState => !prevState);

    const navLinkClass = 'uppercase p-2 text-gray-800 dark:text-white';
    const navLinkActiveClass = 'border-b-2 border-green-500';
    const marginRight2 = 'mr-2';

    return (
        <BrowserRouter>
            <div className={isDarkMode ? 'dark h-screen' : 'light h-screen'}>
                <div className="bg-white text-black dark:bg-gray-800 dark:text-white h-full p-2 flex flex-col justify-between">
                    <header>
                        <nav className="relative flex flex-row flex-wrap p-2 w-full">
                            <div className="w-1/2 flex justify-start">
                                <NavLink to="/" className={`${navLinkClass} ${marginRight2}`} exact activeClassName={`${navLinkActiveClass} ${marginRight2}`}>Home</NavLink>
                                <NavLink to="/projects" className={navLinkClass} exact activeClassName={navLinkActiveClass}>Projects</NavLink>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <div className="p-2">
                                    <ReactSwitch checked={isDarkMode} onChange={toggle} />
                                </div>
                            </div>
                        </nav>
                    </header>
                    <main className="p-5 mb-auto">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/projects" component={Projects} />
                        </Switch>
                    </main>
                    <footer className="h-20">
                        <Footer />
                    </footer>
                </div>
            </div>
          </BrowserRouter>
    );
}

export default App;
