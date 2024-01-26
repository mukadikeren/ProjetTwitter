
import Cnn from "./images/cnn.svg"
import Noir from "./images/noir-blanc.svg"

export default function Follow() {
     
    return(

        <div className='bloc-final'>
        <div className='bloc-dernier'>
          <ul className='bloc-ul'>
            <div className='ul-Who'>
              <span>Who to follow</span>
            </div>
            <div className='colone-cnn'>
              <img src={Noir} alt="" />
              <div>
                <div>
                  <span >The New York Times</span>
                  <img src="src/images/Verified.svg" alt="" />
                </div>
                <p className='cnn'>@nytimes</p>
              </div>
              <div className='classe-pour-follow-1' >
                <button className='Follow'>Follow</button>
              </div>
            </div>

            <div className='colone-cnn'>
              <img src={Cnn} alt="" />
              <div>
                <div>
                  <span >CNN</span>
                  <img src="src/images/Verified.svg" alt="" />
                </div>
                <p className='cnn'>@cnn</p>
              </div>
              <div className='classe-pour-follow' >
                <button className='Follow'>Follow</button>
              </div>
            </div>

            <div className='colone-cnn'>
              <img src="src/images/twiterbleu.svg" alt="" />
              <div>
                <div>
                  <span >Twitter</span>
                  <img src="src/images/Verified.svg" alt="" />
                </div>
                <p className='cnn'>@Twitter</p>
              </div>
              <div className='classe-pour-follow-3'>
                <button className='Follow'>Follow</button>
              </div>
            </div>
            <div className='show-more'>
              <span>Show more</span>
            </div>
          </ul>
        </div>
      </div>
    )
}
