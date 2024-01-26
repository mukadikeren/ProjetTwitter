import { Link } from "react-router-dom";
import Share from "./images/Share.svg"
import Liké from "./Liké";
import Profile from "./Profile";

// const tab = [
//   {
//     "author_avatar": "https://picsum.photos/200?random=1604299903000",
//     "source": "Twitter",
//     "date": 1604299903000,
//     "favorites": "92746",
//     "id": "1323155810910982145",
//     "isVerified": true,
//     "replies": "24785",
//     "retweets": "16287",
//     "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1609942590000",
//     "source": "Apple",
//     "date": 1609942590000,
//     "favorites": "396603",
//     "id": "1346822958006886400",
//     "isVerified": false,
//     "replies": "896",
//     "retweets": "54694",
//     "text": "Even Mexico uses Voter I.D.",
//     "image": "https://picsum.photos/1024/200?random=1346822958006886400"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1604231375000",
//     "source": "Twitter for iPhone",
//     "date": 1604231375000,
//     "favorites": "124689",
//     "id": "1322868385361891328",
//     "isVerified": true,
//     "replies": "8",
//     "retweets": "22972",
//     "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",
//     "image": "https://picsum.photos/200/800?random=1322868385361891328"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1604084613000",
//     "source": "CNN",
//     "date": 1604084613000,
//     "favorites": "44842",
//     "id": "1322252819299135488",
//     "isVerified": false,
//     "replies": "1024",
//     "retweets": "9563",
//     "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",
//     "image": "https://picsum.photos/200?random=1322252819299135488"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1603037689000",
//     "source": "Trump D.",
//     "date": 1603037689000,
//     "favorites": 62414,
//     "id": "1317861704819118080",
//     "isVerified": false,
//     "replies": "258",
//     "retweets": 16811,
//     "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1602377246000",
//     "source": "Lauraine L.",
//     "date": 1602377246000,
//     "favorites": 34952,
//     "id": "1315091604496158720",
//     "isVerified": true,
//     "replies": "85",
//     "retweets": 10008,
//     "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",
//     "image": "https://picsum.photos/200?random=1315091604496158720"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1601996447000",
//     "source": "Mexico City",
//     "date": 1601996447000,
//     "favorites": 58201,
//     "id": "1313494418314457090",
//     "isVerified": true,
//     "replies": "0",
//     "retweets": 14359,
//     "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1554075712000",
//     "source": "New York Times",
//     "date": 1554075712000,
//     "favorites": 58201,
//     "id": "1313494418314457090",
//     "isVerified": true,
//     "replies": "0",
//     "retweets": 14359,
//     "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1604231375000",
//     "source": "Twitter for iPhone",
//     "date": 1601996447000,
//     "favorites": 58201,
//     "id": "1313494418314457090",
//     "isVerified": true,
//     "replies": "0",
//     "retweets": 14359,
//     "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"
//   },
//   {
//     "author_avatar": "https://picsum.photos/200?random=1548956601000",
//     "source": "Samsung",
//     "date": 1601996447000,
//     "favorites": 58201,
//     "id": "1313494418314457090",
//     "isVerified": true,
//     "replies": "0",
//     "retweets": 14359,
//     "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",
//     "image": "https://picsum.photos/2048/1024?random=1313494418314457090"
//   }
// ]

function Like(props) {

  return (
    // tab.map((tweet, id) => (
    <div className='classetrois' >
      <div className="avatar">

        <div className="class-trois-1">
        {/* <Link to="Profile"><img src={Profil} /></Link> */}

         <Link to={Profile}> <img src="src/images/cnn.svg" alt="" /> </Link>
          <div className="class-trois-1-cnn-ligne">
            <p className="class-trois-1-cnn">CNN </p>
            <div>
              <img src="src/images/Verified.svg" alt="" />

            </div>
          </div>
          {/* <%= useStatedata %> */}
          <div className="cnn-27">
            <div>
            </div>
            <p> @CNN </p>
            <div> <p> . 27min</p></div>
            {/* <% date %> */}
          </div>
        </div>
        <p className="text-lorem">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</p>
        <img className="arbre" src="src/images/lunetterose.png" alt="" />
      </div>
      <div className='like'>
        <span>{props.text}</span>
        <div className='fleure'>

          {<img src={props.image} alt="" />}
        </div>

        <div className='image-cnn'>
          {/* <img className="hover-1" src="src/images/Reply.svg" alt="" /> */}
          <svg className="hover-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0459 2.242L9.89795 2.232H9.89595C5.52195 2.232 2.09595 5.659 2.09595 10.034C2.09595 14.132 5.28195 17.24 9.56095 17.404V21.232C9.56095 21.34 9.60495 21.518 9.68095 21.635C9.82295 21.86 10.0649 21.982 10.3129 21.982C10.4509 21.982 10.5899 21.944 10.7149 21.864C10.9789 21.696 17.1879 17.724 18.8029 16.358C20.7049 14.748 21.8429 12.388 21.8459 10.046V10.029C21.8399 5.662 18.4159 2.242 14.0459 2.241V2.242ZM17.8329 15.214C16.6989 16.174 12.9709 18.619 11.0609 19.857V16.67C11.0609 16.256 10.7259 15.92 10.3109 15.92H9.91495C6.25495 15.92 3.59695 13.444 3.59695 10.034C3.59695 6.5 6.36495 3.732 9.89695 3.732L14.0439 3.742H14.0459C17.5779 3.742 20.3459 6.508 20.3479 10.038C20.3449 11.948 19.4059 13.882 17.8339 15.214H17.8329Z" />
          </svg>
          <p> {props.replies} </p>
          <p>57</p>

          {/* <img className="hover-2" src="src/images/Buton.svg" alt="" /> */}
          <svg className="hover-3" width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="34" height="34" rx="17" fill="black" />
            <path d="M26.8083 20.5583C26.565 20.3142 26.1692 20.3142 25.925 20.5583L24.075 22.4083V13.875C24.075 12.1517 22.6725 10.75 20.95 10.75H16.075C15.73 10.75 15.45 11.03 15.45 11.375C15.45 11.72 15.73 12 16.075 12H20.95C21.9833 12 22.825 12.8417 22.825 13.875V22.4083L20.975 20.5583C20.7308 20.3142 20.335 20.3142 20.0917 20.5583C19.8483 20.8025 19.8467 21.1983 20.0917 21.4417L23.0083 24.3583C23.1292 24.4808 23.2892 24.5417 23.45 24.5417C23.6108 24.5417 23.7692 24.4817 23.8917 24.3583L26.8083 21.4417C27.0533 21.1983 27.0533 20.8025 26.8083 20.5583ZM17.925 23.2917H13.05C12.0167 23.2917 11.175 22.45 11.175 21.4167V12.8833L13.025 14.7333C13.1483 14.8558 13.3083 14.9167 13.4683 14.9167C13.6283 14.9167 13.7883 14.8558 13.91 14.7333C14.1542 14.4892 14.1542 14.0933 13.91 13.85L10.9933 10.9333C10.7492 10.6883 10.3533 10.6883 10.11 10.9333L7.19333 13.85C6.94833 14.0933 6.94833 14.4892 7.19333 14.7333C7.43833 14.9775 7.8325 14.9775 8.07667 14.7333L9.92667 12.8833V21.4167C9.92667 23.14 11.3292 24.5417 13.0517 24.5417H17.9267C18.2717 24.5417 18.5517 24.2617 18.5517 23.9167C18.5517 23.5717 18.2708 23.2917 17.9267 23.2917H17.925Z" />
          </svg>
          <p>144</p>


          <Liké/>
          {/* <img className="hover-3" src="src/images/React.svg" alt="" /> */}
          {/* <svg className="hover-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z" />
          </svg> */}
          <p> {props.retweets} </p>
          {/* <p>184</p> */}
          {/* {like && like [0] && like [0].likes_user_like.?.(
          <img src="" alt="" />
          )  } */}


          <img className="hover-3" src={Share} alt="" />
          <p>{props.Share}</p>
        </div>

      </div>
      {/* { JSON.stringify(nav)} */}
    </div>
    // ))

  )
}

export default Like;


