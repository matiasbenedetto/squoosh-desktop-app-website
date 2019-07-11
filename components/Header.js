export default () => (
    <header className="navbar is-spaced" role="navigation" aria-label="main navigation">
        <style jsx>
        {`
            header{
                background: transparent;
                border-bottom: 1px solid white;
                position: absolute;
                top:0;
                width: 100%;
                display: block;
            }
            .navbar-brand{
                min-height:auto;
            }
            .navbar-brand a{
                color: white;
                font-size: 20px;
                line-height: 1em;
            }
            .navbar-brand img{
                width:50px;
                height:50px;
                margin-right: 10px;
            }
        `}
        </style>
        <div className="navbar-brand">
            <img src="static/img/logo-1024x1024.png" alt="Squoosh logo"/>
            <a><b>Squoosh</b><br/>Desktop App</a>
        </div>

        <div className="navbar-menu">
        </div>
    </header>
)