export default () => (
    <section className="features has-background-light">
        <style jsx>{`
            section{
                padding: 60px 0;
                
            }
            h3, p{
                text-align:center;
            }
        `}</style>
        <div className="container">
            <h2 className="title is-2">Features</h2>
            <div className="columns">
                <div className="column">
                    <img src="static/img/features/easy.svg" alt="Easy image manipulation"/>
                    <h3 className="title is-4">Easy image manipulation</h3>
                    <p className="subtitle is-5">Optimize, resize, compress and convert your images.</p>
                </div>
                <div className="column">
                    <img src="static/img/features/eye.svg" alt="Best image quality"/>
                    <h3 className="title is-4">Best image quality</h3>
                    <p className="subtitle is-5">Squoosh put on your hands the best image codecs available.</p>
                </div>
                <div className="column">
                    <img src="static/img/features/unplugged.svg" alt="Unplugged"/>
                    <h3 className="title is-4">Unplugged</h3>
                    <p className="subtitle is-5">This a desktop app that works 100% offline. No internet connection needed.</p>
                </div>
                <div className="column">
                    <img src="static/img/features/quality.svg" alt="Great interface"/>
                    <h3 className="title is-4">Great interface</h3>
                    <p className="subtitle is-5">Simply drag and drop you image and Squoosh it to get the best.</p>
                </div>
                <div className="column">
                    <img src="static/img/features/flag.svg" alt="Free software"/>
                    <h3 className="title is-4">100% Free</h3>
                    <p className="subtitle is-5">Free to use, distribute and modify</p>
                </div>
            </div>
        </div>
    </section>
)