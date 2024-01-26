function Like(props) {
    const { avatar, tittle, text, image } = props

    return (
        // tab.map((tweet, id) => (
        <div className='classetrois' >
            <div className="avatar">

                <div className="class-trois-1">

                    <img src={avatar} alt="" />
                    <div className="class-trois-1-cnn-ligne">
                        <p className="class-trois-1-cnn"> {tittle} </p>

                    </div>

                </div>
                <p className="text-lorem"> {text} </p>
                <img className="arbre" src={image} alt="" />
            </div>
           
        </div>
        // ))

    )
}

export default Like;


