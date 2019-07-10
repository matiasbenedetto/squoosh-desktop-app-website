export default () => (
    <div className="hero">
        <style jsx>{`
        .hero{
            background-image: url("static/img/stars1.jpg");
            background-size: cover;
            background-position: bottom;
            min-height: 80vh;
            display: flex;
            justify-content:center;
            padding: 50px;
        }
        .content{
            text-align: center;
        }
        h1{
            color: white;
        }
        p{
            color: white;
        }
      `}</style>
        <div className="content">
            <h1 className="title is-1">Squoosh your images to get the best</h1>
            <p className="subtitle is-5">Multiplatform Desktop app to compress, resize, and crop your images. <br/> It's completely free and for free!</p>
            <button className="button is-primary is-large">Download</button>
        </div>
    </div>
)