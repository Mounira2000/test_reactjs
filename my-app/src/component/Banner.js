import '../style/Banner.css'
import leaf from '../assets/leaf.png'

function Banner (){
    return(<div className='tit-banner'
                /*style={{color: 'red',
                textAlign: 'right',
                padding: '32',
                borderBottom: 'solid 3px black'}}*/
            >
            <img src={leaf} className='lmj-logo' alt='La maison de la jungle'/>
            <h1>La maison jungle</h1>
            </div>);
}

export default Banner;



