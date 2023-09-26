import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../../api/Assets/img/post-landscape-3.jpg'
import writer from '../../../api/Assets/img/person-2.jpg'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'

const BlogList = () => {
  return (
    <>
    <Navbar/>
    <section id="search-result" className="search-result">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="category-title">Search Results</h3>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to='/blogs/singleblog'  className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>

      
        {/* Paging */}
        <div className="text-start py-4">
          <div className="custom-pagination">
            <Link to="#" className="prev">Prevous</Link>
            <Link to="#" className="active">1</Link>
            <Link to="#">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#">5</Link>
            <Link to="#" className="next">Next</Link>
          </div>
        </div>{/* End Paging */}
      </div>
      
      
     
    </div>
  </div>
</section>
<Footer/>

    
    </>
  )
}

export default BlogList