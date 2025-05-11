import React from 'react'
import image from '../images/audience.jpg'

const Details2 = () => {
    return (
        <section class="details py-6 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img
                            src={image}
                            alt=""
                            class="img-fluid rounded-5 mb-4"
                        />
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-center">
                        <h2>Elevate Your Learning Journey with Expert Seminars</h2>
                        <p>
                            Join our expert-led seminars and unlock new possibilities in your
                            personal and professional development. Our seminars cover a
                            diverse range of topics, from leadership and innovation to
                            personal growth and productivity.
                        </p>
                        <p>
                            Immerse yourself in engaging discussions, interactive workshops,
                            and valuable networking opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Details2
