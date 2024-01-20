export default function Text() {
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
                  <div >
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
                  <div >
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
                  <div >
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
export default Text