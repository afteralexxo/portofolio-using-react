import './HomeLinks.css'
export default function HomeLinks(){
    return (
        <div class="home-links">
            <ul className='link-container'>
           <li><a href="" className="link-item"><i class="fa fa-instagram"></i></a></li>
           <li><a href="" className="link-item"><i class="fa fa-github"></i></a></li>
           <li><a href="" className="link-item"><i class="fa fa-twitter"></i></a></li>
           <li><a href="" className="link-item"><i class="fa fa-facebook"></i></a></li>
            </ul>
            <button>Email me</button>
        </div>
    )
}