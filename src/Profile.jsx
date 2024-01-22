export default function Profile() {

    return (

        <div className="Profile-timeline">
            <div className="img-keren">
                <div className="profiles-keren">
                    <span> Keren Happuc</span>
                    <p className="profile-color">0 posts</p>
                </div>

                <img src="src/images/image-3.png" alt="" />
            </div>

            <div className="raduis">
                {/* <img src="src/images/image-3.png" alt="" /> */}
                <div>
                    <p>Keren Happuc</p>
                    <p className="profile-color">@happuc83</p>
                    <p className="profile-color">Joined January 2024</p>
                </div>
                <div className="profile-following">
                    <p>1</p>
                    <p className="profiles-color"> Following</p>

                    <p>2</p>
                    <p className="profiles-color"> Following</p>
                </div>
            </div>
            <div className="profiles-text">
                <div>
                    <span>Poste</span>
                </div>
                <div>
                    <span>Replies</span>
                </div>
                <div>
                    <span>Highlights</span>
                </div>
                <div>
                    <span>Media</span>
                </div>
                <div>
                    <span>Likes</span>
                </div>

            </div>
            <div className="profile-images">
                <div>
                    <span> Let's get you set up</span>
                </div>
                <div className="classe">
                    <div className="profiles-feuille">
                        <img src="src/images/image-3.png" alt="" />                </div>
                    <div className="profiles-feuille">
                        <img src="src/images/image-3.png" alt="" />                </div>
                    <div className="profiles-feuille">
                        <img src="src/images/image-3.png" alt="" />                </div>

                    <div className="profiles-feuille">
                        <img src="src/images/image-3.png" alt="" />
                    </div>
                </div>


            </div>

        </div>



    )

}