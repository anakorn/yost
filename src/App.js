import React, { Component, PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Tracklist from './components/Tracklist.js';

class App extends Component {
    render() {
        return (
            <div className="main-view-container">
                <div className="hw-accelerate">
                    <nav>
                        <Link className="btn btn-green" to="/about">About</Link>
                    </nav>
                    <div>
                        <Route path="/" exact component={Login} />
                        <Route path="/playlist" component={Playlist} />
                    </div>
                </div>
            </div>
        );
    }
}

class Login extends PureComponent {
    render() {
        return <Link className="btn btn-green" to="/login">Login</Link>;
    }
}

class Playlist extends PureComponent {
    render() {
        const tracks = [{
            name: 'Jim Bob Goes to Neverland',
            artists: [{
                id: '12345abcdef',
                name: 'Jim Bob',
            }, {
                id: 'asdlkfjalsdfjas98d',
                name: 'Jimi Hendrix',
            }],
            album: {
                id: '098765ghijkl',
                name: 'Jim Bob Adventures!!',
            },
            isExplicit: false,
            duration: 3600
        }, {
            name: 'Jim Bob Goes to Neverland',
            artists: [{
                id: '12345abcdef',
                name: 'Jim Bob',
            }, {
                id: 'asdlkfjalsdfjas98d',
                name: 'Jimi Hendrix',
            }],
            album: {
                id: '098765ghijkl',
                name: 'Jim Bob Adventures!!',
            },
            isExplicit: false,
            duration: 3600
        }];
        return (
            <section className="content playlist contentSpacing">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-lg-9 col-xl-8">
                            <Tracklist tracks={tracks}></Tracklist>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
