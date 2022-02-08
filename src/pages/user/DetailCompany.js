import React from "react";

const DetailCompany = () => {
  return (
    <div>
      <div className="bg_color_1">
        <nav className="secondary_nav sticky_horizontal">
          <div className="container">
            <ul className="clearfix">
              <li><a href="#description" className="active">Description</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#sidebar">Booking</a></li>
            </ul>
          </div>
        </nav>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-8">
              <section id="description">
                <h3>Lowongan Magang</h3>
                <div id="instagram-feed-hotel" className="clearfix" />
                <hr />
                <div className="room_type first">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="img/gallery/hotel_list_1.jpg" className="img-fluid" alt />
                    </div>
                    <div className="col-md-8">
                      <h4>Single Room</h4>
                      <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                        pertinacia eum at.</p>
                      <ul className="hotel_facilities">
                        <li><img src="img/hotel_facilites_icon_2.svg" alt />Single Bed</li>
                        <li><img src="img/hotel_facilites_icon_4.svg" alt />Free Wifi</li>
                        <li><img src="img/hotel_facilites_icon_5.svg" alt />Shower</li>
                        <li><img src="img/hotel_facilites_icon_7.svg" alt />Air Condition</li>
                        <li><img src="img/hotel_facilites_icon_8.svg" alt />Hairdryer</li>
                      </ul>
                    </div>
                  </div>
                  {/* /row */}
                </div>
                {/* /rom_type */}
                <div className="room_type gray">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="img/gallery/hotel_list_2.jpg" className="img-fluid" alt />
                    </div>
                    <div className="col-md-8">
                      <h4>Double Room</h4>
                      <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                        pertinacia eum at.</p>
                      <ul className="hotel_facilities">
                        <li><img src="img/hotel_facilites_icon_3.svg" alt />Double Bed</li>
                        <li><img src="img/hotel_facilites_icon_4.svg" alt />Free Wifi</li>
                        <li><img src="img/hotel_facilites_icon_6.svg" alt />Bathtub</li>
                        <li><img src="img/hotel_facilites_icon_7.svg" alt />Air Condition</li>
                        <li><img src="img/hotel_facilites_icon_8.svg" alt />Hairdryer</li>
                      </ul>
                    </div>
                  </div>
                  {/* /row */}
                </div>
                {/* /rom_type */}
                <div className="room_type last">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="img/gallery/hotel_list_3.jpg" className="img-fluid" alt />
                    </div>
                    <div className="col-md-8">
                      <h4>Suite Room</h4>
                      <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                        pertinacia eum at.</p>
                      <ul className="hotel_facilities">
                        <li><img src="img/hotel_facilites_icon_3.svg" alt />King size Bed</li>
                        <li><img src="img/hotel_facilites_icon_4.svg" alt />Free Wifi</li>
                        <li><img src="img/hotel_facilites_icon_6.svg" alt />Bathtub</li>
                        <li><img src="img/hotel_facilites_icon_7.svg" alt />Air Condition</li>
                        <li><img src="img/hotel_facilites_icon_9.svg" alt />Swimming pool</li>
                        <li><img src="img/hotel_facilites_icon_3.svg" alt />Hairdryer</li>
                      </ul>
                    </div>
                  </div>
                  {/* /row */}
                </div>
                {/* /rom_type */}
              </section>
              {/* /section */}
              <hr />
            </div>
            {/* /col */}
            <aside className="col-lg-4">
              <div className="box_detail booking">
                <div className="price">
                  <span>Profile Perusahaan</span>
                </div>
                <div>
                  <img src="img/prakind/laptop.jpeg" alt height={120} width={120} />
                </div>
                <p />
                <div className="form-group input-dates">
                  <input className="form-control" type="text" name="dates" placeholder="When.." />
                  <i className="icon_calendar" />
                </div>
                <div className="panel-dropdown">
                  <a href="#">Guests <span className="qtyTotal">1</span></a>
                  <div className="panel-dropdown-content right">
                    <div className="qtyButtons">
                      <label>Adults</label>
                      <input type="text" name="qtyInput" defaultValue={1} />
                    </div>
                    <div className="qtyButtons">
                      <label>Childrens</label>
                      <input type="text" name="qtyInput" defaultValue={0} />
                    </div>
                  </div>
                </div>
                <div className="form-group clearfix">
                  <div className="custom-select-form">
                    <select className="wide">
                      <option>Room Type</option>
                      <option>Single Room</option>
                      <option>Double Room</option>
                      <option>Suite Room</option>
                    </select>
                  </div>
                </div>
                <a href="cart-1.html" className=" add_top_30 btn_1 full-width purchase">Purchase</a>
                <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart" /> Add to
                  wishlist</a>
                <div className="text-center"><small>No money charged in this step</small></div>
              </div>
              <ul className="share-buttons">
                <li><a className="fb-share" href="#0"><i className="social_facebook" /> Share</a></li>
                <li><a className="twitter-share" href="#0"><i className="social_twitter" /> Tweet</a></li>
                <li><a className="gplus-share" href="#0"><i className="social_googleplus" /> Share</a></li>
              </ul>
            </aside>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /bg_color_1 */}

    </div>
  )
}

export default DetailCompany;