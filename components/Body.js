export default () => (
    <section className="has-background-light">
        <div className="container">
            <h2 className="title is-2">Download</h2>
            <div className="columns platforms">
                

                <div className="column windows">
                    <div className="card">
                    <div className="card-image">
                        <figure class="image">
                            <img src="static/img/icons/windows.svg" alt="Placeholder image" />
                        </figure>
                    </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">Windows</p>
                                <p className="subtitle is-6">Download .exe</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="column mac">
                    <div className="card">
                    <div className="card-image">
                        <figure class="image">
                            <img src="static/img/icons/mac.svg" alt="Placeholder image" />
                        </figure>
                    </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">Mac OS</p>
                                <p className="subtitle is-6">Download .dmg</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="column linux">
                    <div className="card">
                    <div className="card-image">
                        <figure class="image">
                            <img src="static/img/icons/linux.svg" alt="Placeholder image" />
                        </figure>
                    </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">Linux</p>
                                <p className="subtitle is-6">Download AppImage or .deb</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </section>
)