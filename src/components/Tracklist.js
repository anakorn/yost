import React, { PureComponent } from 'react';
import moment from 'moment';

class Tracklist extends PureComponent {
    render() {
        return (
            <section className="tracklist-container">
                <ol className="tracklist">
                    { this.props.tracks.map(track => (<Track {...track}></Track>)) }
                </ol>
            </section>
        );
    }
}

class Track extends PureComponent {
    render() {
        const { name, artists, album, isExplicit, duration } = this.props;
        return (
            <div className="react-contextmenu-wrapper">
                <li className="tracklist-row" role="button" tabindex="0">
                    <div className="tracklist-col position-outer">
                        <div className="tracklist-play-pause tracklist-top-align">
                            <svg className="icon-play" viewBox="0 0 85 100">
                                <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                    <title>PLAY</title>
                                </path>
                            </svg>
                        </div>
                        <div className="position tracklist-top-align">
                            1.
                        </div>
                    </div>
                    <div className="tracklist-col name">
                        <div className="track-name-wrapper ellipsis-one-line tracklist-top-align">
                            <span className="tracklist-name">{ name }</span>
                            <span className="artists-album ellipsis-one-line">
                                { artists.map(artist => <ArtistByLine {...artist}></ArtistByLine>) }
                                <span className="artists-album-separator" aria-label="in album">
                                    •
                                </span>

                                { <AlbumByLine {...album}></AlbumByLine> }
                            </span>
                        </div>
                    </div>
                    <div className="tracklist-col more">
                        <div className="tracklist-top-align">
                            <div className="react-contextmenu-wrapper">
                                <button className="btn btn-transparent btn--narrow btn--no-margin btn--no-padding">
                                    <div className="spoticon-ellipsis-24">
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    { isExplicit ? (
                        <div className="tracklist-col tracklist-col-explicit">
                            <div className="tracklist-top-align">
                                <svg className="icon-explicit" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M9 9V7h4V5H7v10h6v-2H9v-2h4V9H9zM0 2.994C0 1.34 1.343 0 2.994 0h14.012C18.66 0 20 1.343 20 2.994v14.012C20 18.66 18.657 20 17.006 20H2.994C1.34 20 0 18.657 0 17.006V2.994z">
                                        <title>
                                            Explicit
                                        </title>
                                    </path>
                                </svg>
                            </div>
                        </div>
                    ) : null }
                    <div className="tracklist-col tracklist-col-duration">
                        <div className="tracklist-duration tracklist-top-align">
                            <span>
                                { moment().seconds(duration).format('hh:m:ss') }
                            </span>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

class ArtistByLine extends PureComponent {
    render() {
        const { id, name } = this.props;
        return (
            <span>
                <span className="react-contextmenu-wrapper">
                    <a tabindex="-1" className="link-subtle" href={`/artist/${id}`}>
                        { name }
                    </a>
                </span>
                ,&nbsp;
            </span>
        );
    }
}

class AlbumByLine extends PureComponent {
    render() {
        const { id, name } = this.props;
        return (
            <span className="react-contextmenu-wrapper">
                <a tabindex="-1" className="link-subtle" href={`/album/${id}`}>
                    { name }
                </a>
            </span>
        );
    }
}

export default Tracklist;
