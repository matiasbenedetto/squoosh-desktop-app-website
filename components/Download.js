export default () => (
    <section className="has-background-light">
        <style jsx>{`
            section{
                padding: 60px 0;
            }
            .card-image figure{
                display:flex;
                justify-content: center;
                padding:30px;
                text-align: center;
            }
            .card-image img{
                width: 150px;
                margin:auto;
                padding: 30px 0 0px 0;
            }
            a img{
                width: 40px;
                height: 40px;
            }

            .card .content .button{
                margin-bottom: 1em;
            }
            .card .content p{
                margin-bottom: 0;
            }
        `}</style>
        <div className="container">
            <h2 className="title is-2">Download</h2>
            <div className="columns platforms">
                

                <div className="column windows">
                    <div className="card">
                        <div className="card-image">
                            <figure class="image">
                                <img src="static/img/os/windows.svg" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="static/img/downloads/server.svg" alt="Download" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Windows</p>
                                    <p className="subtitle is-6">Download .exe</p>
                                </div>
                            </div>
                            <div className="content">
                                <a className="button is-large is-fullwidth is-primary" target="_blank" href="">
                                    <span>Download <b>.exe</b></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="column mac">
                    <div className="card">
                        <div className="card-image">
                            <figure class="image">
                                <img src="static/img/os/mac.svg" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="static/img/downloads/server.svg" alt="Download" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">Mac OS</p>
                                <p className="subtitle is-6">Download .dmg</p>
                            </div>
                            </div>
                            <div className="content">
                                <a className="button is-large is-fullwidth is-primary" href="https://github.com/matiasbenedetto/squoosh-desktop-app/raw/master/bin/mac/Squoosh%20Desktop-1.0.0.dmg">
                                    <span>Download <b>.dmg</b></span>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>



                <div className="column linux">
                    <div className="card">
                        <div className="card-image">
                            <figure class="image">
                                <img src="static/img/os/linux.svg" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="static/img/downloads/server.svg" alt="Download" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">Linux</p>
                                <p className="subtitle is-6">Download AppImage or .deb</p>
                            </div>
                            </div>
                            <div className="content">
                                
                                <p>Universal package:</p>
                                <a className="button is-large is-fullwidth is-primary" href="https://github.com/matiasbenedetto/squoosh-desktop-app/raw/master/bin/linux/Squoosh%20Desktop%201.0.0.AppImage">
                                    <span>Download <b>.AppImage</b></span>
                                </a>

                                <p>Ubuntu, Mint and Debian based distros:</p>
                                <a className="button is-large is-fullwidth is-primary" href="https://github.com/matiasbenedetto/squoosh-desktop-app/raw/master/bin/linux/squoosh-desktop-app_1.0.0_amd64.deb">
                                    <span>Download <b>.deb</b></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </section>
)