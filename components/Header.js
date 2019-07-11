export default () => (
    <header className="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
        <style jsx>
        {`
            header{
                background: transparent;
                border-bottom: 1px solid white;
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
            <img src="static/img/icon.png" alt="Squoosh logo"/>
            <a><b>Squoosh</b><br/>Desktop App</a>
        </div>

        <div class="navbar-menu">
        </div>
    </header>
)