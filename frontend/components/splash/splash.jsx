class Splash extends React.Component {
    componentDidMount() {
        this.listenForScroll()
    }

    componentWillUnmount() {
        this.throttled.cancel();
    }

    listenForScroll() {
        this.throttled = throttle(300, () => check_if_scrolled());
        $(document).on('scroll', this.throttled);

        function check_if_scrolled() {
            let pixelsFromTop = $(window).scrollTop();

            pixelsFromTop > 70 ? $('.login-bar').addClass('scrolled') : (
                $('.login-bar').removeClass('scrolled')
            )
        }
    }

    render() {
        return (
            <div>
                <LoginBar />
                <section id="hero">
                    <div className='container'>
                        <div className="hero-text">
                            <h1>Meticulist lets you work together to accomplish more.</h1>
                            <p>Meticulist gives your projects visual structure.
                            Our boards, lists, and cards can help you
                                organize and prioritize your life.</p>
                        </div>
                        <img src="https://meticulist-seeds.s3-us-west-1.amazonaws.com/SiteAssets/coworkers.png" alt="coworkers" />
                    </div>
                </section>
                <section id="collaborate">
                    <div className='container'>

                    </div>
                </section>
                <section id="see-how">
                    <div className='container'>
                    </div>
                </section>
                <section id="get-started">
                    <div className='container'>

                    </div>
                </section>
                <footer>

                </footer>
            </div>
        )
    }
}