import './HomeLinks.css'
export default function HomeLinks(){
    return (
        <div className="home-links">
            <ul className='link-container'>
           <li><a href="" className="link-item"><i className="fa fa-instagram"></i></a></li>
           <li><a href="https://github.com/afteralexxo" className="link-item"><i className="fa fa-github"></i></a></li>
           <li><a href="" className="link-item"><i className="fa fa-twitter"></i></a></li>
           <li><a href="" className="link-item"><i className="fa fa-facebook"></i></a></li>
            </ul>
            <button className='btn-mail'>Email me</button>
        </div>
    )
}