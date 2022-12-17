import './HomeLinks.css'
export default function HomeLinks(){
    return (
        <div className="home-links">
            <ul className='link-container'>
           <li><a href="https://instagram.com/alexundertwod/" className="link-item"><i className="fa fa-instagram"></i></a></li>
           <li><a href="https://github.com/afteralexxo/" className="link-item"><i className="fa fa-github"></i></a></li>
           <li><a href="https://twitter.com/creativetwod/" className="link-item"><i className="fa fa-twitter"></i></a></li>
           <li><a href="https://facebook.com/100037514192921/" className="link-item"><i className="fa fa-facebook"></i></a></li>
            <button className='btn-mail'>Email me</button>
            </ul>
        </div>
    )
}