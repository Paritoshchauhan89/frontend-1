import React from 'react'
import comment1 from '../../../api/Assets/img/person-5.jpg'
import comment2 from '../../../api/Assets/img/person-2.jpg'
import reply1 from '../../../api/Assets/img/person-4.jpg'
import reply2 from '../../../api/Assets/img/person-3.jpg'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import {getNewss }  from '../../../api/Api';

const Singleblog = () => {


  const [newss, setNewss]= useState ([]);


  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async(id)=>{
    let response =  await getNewss(id);
    setNewss(response.data);
 
   }
  

  
  return (
    <>
 
<Navbar/>
   <section className="single-post-content mx-4">
   <div className="row">
      <div className="col-md-12 post-content" data-aos="fade-up">
       {newss.map((news)=>(
         <div key={news._id} className="single-post">
         <div className="post-meta"><span className="date">Time</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
         <h1 className="mb-5">{news.title}</h1>
         <p><span className="firstcharacter"></span>{news.description1}</p>
       
          <figure className="my-4 text-center">
          <img src={news.image} width='500px' alt='news' className="img-fluid" />
          <figcaption>{news.keypoints}</figcaption>
        </figure>
    
         <p>{news.description2}</p>
         {/* <figure className="my-4">
           <img src={post1} alt='news' className="img-fluid" />
           <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit? </figcaption>
         </figure> */}
         {/* <p>Quis molestiae, dolorem consequuntur labore perferendis enim accusantium commodi optio, sequi magnam ad consectetur iste omnis! Voluptatibus, quia officia esse necessitatibus magnam tempore reprehenderit quo aspernatur! Assumenda, minus dolorem repellendus corporis corrupti quia temporibus repudiandae in. Sit rem aut, consectetur repudiandae perferendis nemo alias, iure ipsam omnis quam soluta, nobis animi quis aliquam blanditiis at. Dicta nemo vero sequi exercitationem.</p>
         <p>Architecto ex id at illum aperiam corporis, quidem magnam doloribus non eligendi delectus laborum porro molestiae beatae eveniet dolor odit optio soluta dolores! Eaque odit a nihil recusandae, error repellendus debitis ex autem ab commodi, maiores officiis doloribus provident optio, architecto assumenda! Nihil cum laboriosam eos dolore aliquid perferendis amet doloremque quibusdam odio soluta vero odit, ipsa, quisquam quod nulla.</p>
         <p>Consequuntur corrupti fugiat quod! Ducimus sequi nemo illo ad necessitatibus amet nobis corporis et quasi. Optio cum neque fuga. Ad excepturi magnam quisquam ex voluptatibus vitae aut nam quidem doloribus, architecto perspiciatis sit consequatur pariatur alias animi expedita quas? Et doloribus voluptatibus perferendis qui fugiat voluptatum autem facere aspernatur quidem quae assumenda iste, sit similique, necessitatibus laborum magni. Ea, dolores!</p>
         <p>Possimus temporibus rerum illo quia repudiandae provident sed quas atque. Ipsam adipisci accusamus iste optio illo aliquam molestias? Voluptatibus, veniam recusandae facilis nobis perspiciatis rem similique, nisi ad explicabo ipsa voluptatum, inventore molestiae natus adipisci? Fuga delectus quia assumenda totam aspernatur. Nobis hic ea rem, quaerat voluptate vero illum laboriosam omnis aspernatur labore, natus ex iusto ducimus exercitationem a officia.</p> */}
       </div>
       ))}
        <div className="comments">
          <h5 className="comment-title py-4">2 Comments</h5>
          <div className="comment d-flex mb-4">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img className="avatar-img" src={comment1} alt='news' />
              </div>
            </div>
            <div className="flex-grow-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex align-items-baseline">
                <h6 className="me-2">Jordan Singer</h6>
                <span className="text-muted">2d</span>
              </div>
              <div className="comment-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit aliquam eligendi repellendus excepturi quibusdam nobis esse accusantium.
              </div>
              <div className="comment-replies bg-light p-3 mt-3 rounded">
                <h6 className="comment-replies-title mb-4 text-muted text-uppercase">2 replies</h6>
                <div className="reply d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img className="avatar-img" src={reply1} alt='news' />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="reply-meta d-flex align-items-baseline">
                      <h6 className="mb-0 me-2">Brandon Smith</h6>
                      <span className="text-muted">2d</span>
                    </div>
                    <div className="reply-body">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div className="reply d-flex">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img className="avatar-img" src={reply2} alt='news' />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="reply-meta d-flex align-items-baseline">
                      <h6 className="mb-0 me-2">James Parsons</h6>
                      <span className="text-muted">1d</span>
                    </div>
                    <div className="reply-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore sed eos sapiente, praesentium.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment d-flex">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img className="avatar-img" src={comment2} alt='news' />
              </div>
            </div>
            <div className="flex-shrink-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex">
                <h6 className="me-2">Santiago Roberts</h6>
                <span className="text-muted">4d</span>
              </div>
              <div className="comment-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum in corrupti dolorum, quas delectus nobis porro accusantium molestias sequi.
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-12">
            <h5 className="comment-title">Leave a Comment</h5>
            <div className="row">
            
            
              <div className="col-12 mb-3">
                <label htmlFor="comment-message">Message</label>
                <textarea className="form-control" id="comment-message" placeholder="Enter your name" cols={30} rows={10} defaultValue={""} />
              </div>
              <div className="col-12">
                <input type="submit" className="btn btn-dark" defaultValue="Post comment" />
              </div>
            </div>
          </div>
        </div>{/* End Comments Form */}
      </div>
     
    </div>
</section>
  <Footer/>

    
    </>
  )
}

export default Singleblog