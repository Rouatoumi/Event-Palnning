import React from "react";
import "./Home.css";

function Home() {
  return (
    <div> 
        {/*Hero Section */} 
    <section className="hero-section mt-1">  
    <div className="card home text-center" >
  <div className="card-body">
    <h5 className=" hello pt-3">Explore Our Work</h5>
    <p className="card-text greeting pb-3">
    A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power.
    </p>
    
  </div>
</div>
   </section>
          {/*   <section className="hero-section mt-1"> 
     
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1543168256-8133cc8e3ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1562967005-a3c85514d3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
    </div>
  </div>

</div>
      </section> */}
   
      {/* Services */}
      <section className="featured-posts container pt-2 ">
        <h3 className="text-center  py-4 home-text"> Services </h3>
        <div className="row "> 
                    {/* First Card*/}

          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-photo/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons_8353-8415.jpg?w=996&t=st=1665265078~exp=1665265678~hmac=4693a72c270cc2afcfe60181cf3d97f937d02f3077434e4da9b76e3b67ce4b3a"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Weedings</h5>
                <p className="card-text body-text">
                
                </p> 
               
              
              </div>
            </div>
         
           
          </div>
          {/*Second Card */}  
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-photo/close-up-recording-video-with-smartphone-during-concert_1153-7311.jpg?w=996&t=st=1665264770~exp=1665265370~hmac=a035c6b65fdc104f92199aa38fba74ebb95dc5c8b518720bbd26af210d649fbe"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Parties</h5>
                <p className="card-text body-text">
                 
                </p> 
              
               
              </div>
            </div>
         
           
          </div>
          {/*Third Card */} 
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-photo/table-arrangement-birthday-event-with-cake-sweets_23-2149312368.jpg?w=996&t=st=1665265711~exp=1665266311~hmac=ed65d45b18d8c0a8c50e21e3a24888886873e6aec8e1f55dd5817684dbdf7ac4"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Birthdays</h5>
                <p className="card-text body-text">
                 
                </p>
               
              </div>
            </div>
         
           
          </div> 
          {/*Fourth Card */} 
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?w=996&t=st=1665264643~exp=1665265243~hmac=02baf084a851ee29627bf1e98f0e21d661b1e0e2e10a2300d27341c417816404"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Dinners</h5>
                <p className="card-text body-text">
                
                </p> 
              
                
              </div>
            </div>
         
           
          </div>
        </div>
      </section> 
        {/* Meet Our Team */}
      <section className="latest-post container pt-2">
        <h3 className="text-center  py-4 home-text">Meet Our Team </h3> 
        <div className="row "> 
                    {/* First Card*/}

          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZSUyMGF0JTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">CEO</h5>
                <p className="card-text text-center body-text">
                  Jessica
                </p> 
               
              
              </div>
            </div>
         
           
          </div>
          {/*Second Card */}  
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1581091870598-36ce9bad5c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Event Coordinator</h5>
                
                <p className="card-text text-center body-text">
                  Kira
                </p> 
               
              </div>
            </div>
         
           
          </div>
          {/*Third Card */} 
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Associate Producer </h5>
                <p className="card-text text-center body-text">
                  Carolina
                </p> 
                
              </div>
            </div>
         
           
          </div> 
          {/*Fourth Card */} 
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card home" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center body-title">Senior Designer</h5>
                
                <p className="card-text text-center body-text">
                  Kate 
                </p> 
                
              </div>
            </div>
         
           
          </div>
        </div>
      </section> 
        {/*Portfolio */}
      <section className="our-portfolio card home pt-2 mt-4 pb-4">
        <h3 className="text-center py-4 home-text">Our portfolio</h3> 
        <div className="container overflow-hidden text-center">
  <div className="row gy-5">
    <div className="col-6">
      <div className="p-3 ">    
        <img src="https://img.freepik.com/free-photo/groom-bride-together-are-holding-wedding-pink-bouquet_8353-9794.jpg?w=996&t=st=1665269595~exp=1665270195~hmac=f671632024b829df86e39275d22067b2355714398656ed9d87e741cdc8992560" className="d-block w-100" alt="..." />
</div>
    </div>
    <div className="col-6 ">
      <div className="p-3  ">    
        <img src="https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg?w=996&t=st=1665269496~exp=1665270096~hmac=c615f52f256d483dfe719bae69cfed49a26aa14eb3d692029b8862e5d98d2d24" className="d-block w-100" alt="..." />
</div>
    </div>
    <div className="col-6">
      <div className="p-3 ">    
        <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?w=996&t=st=1665269441~exp=1665270041~hmac=e0684e90d1f22ffe68c48e25114aa0007471859810c16a00f9d27953c76c6670" className="d-block w-100" alt="..." />
</div>
    </div>
    <div className="col-6">
      <div className="p-3 ">    
        <img src="https://img.freepik.com/free-photo/candy-bar-with-variety-sweets-holiday_8353-11473.jpg?w=996&t=st=1665269541~exp=1665270141~hmac=52ff13f4c4ab6bf0a6dec89b8594b1f4e4c1bd9ab5eaa67e0d2fd039f787dd71" className="d-block w-100" alt="..." />
</div>
    </div>
  </div>
</div>
      </section>
    </div>
  );
}

export default Home;
