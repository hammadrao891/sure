import React from 'react'

const TeamsVideo = () => {
  return (
    <div>
      <section class="shared-section section-video">
                <div class="decor">
                    <img 
                        class="colors d-none d-md-block"
                        src="img/teams/ColorsVideo.svg"
                        alt=""
                    />
                    <img 
                        class="colors d-block d-md-none"
                        src="img/teams/ColorsVideo@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="content">
                        <h3 class="heading">See Our Team Solution<br/> in Action</h3>
                    </div>
                    <div class="video">
                        <video controls>
                            <source src="img/teams/video-solution.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default TeamsVideo
