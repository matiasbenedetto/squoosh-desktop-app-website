export default () => (
    <div className="hero">
        <style jsx>{`
        .hero{
            background-image: url("static/img/stars2.jpg");
            background-size: cover;
            background-position: bottom;
            height: 80vh;
            display: flex;
            justify-content:center;
            overflow: hidden;
        }
        .container{
            display: flex;
            align-items: center;
        }
        h1{
            color: white;
        }
        p{
            color: white;
        }
        figure{
            padding:0;
        }
      `}</style>
        <div className="container">
            <div className="text">
                <h1 className="title is-1">Squoosh your images to get the best</h1>
                <p className="subtitle is-5">Multiplatform Desktop app to compress, resize, and crop your images. <br/> It's completely free and for free!</p>
                <button className="button is-primary is-large">Download</button>
            </div>
            <div className="">
                <figure>
                    <img src="static/img/screenshot1.png" alt="Squoosh Desktop App screenshot" />
                </figure>
            </div>
        </div>
    </div>
)