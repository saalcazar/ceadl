import './Stream.css'
const Stream = () => {
    const videoId = '-zyT8_8CG44';
    const srcUrl = `https://www.youtube.com/embed/${videoId}`;
    return(
        <section className="main-stream">
            <div className="container between">
                <div>
                <iframe
                    title="video de YouTube"
                    width="560"
                    height="315"
                    src={srcUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
                <div>
                <div class="fb-comments" data-href="https://saalcazar.org" data-numposts="5" data-width=""></div>

                </div>
            </div>
        </section>
    )
}
export default Stream