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
                width:32px;
                height:32px;
                margin-right: 10px;
            }
        `}
        </style>
        <div className="navbar-brand">
            <img src="static/img/icon-32x32.png" alt="Squoosh logo"/>
            <a><b>Squoosh</b><br/>Desktop App</a>
        </div>

        <div class="navbar-menu">
        </div>
    </header>
)