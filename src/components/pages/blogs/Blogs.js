import React from "react";
import './Blogs.scss';
import image1 from '../../../assets/images/middle.jpg';

import BlogItem from "../../blogItem/BlogItem";
import { BrowserRouter, NavLink, Link } from "react-router-dom";

class Blogs extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="blogs">
        <div className="blogs_left">
          <div className="blogs_left_item">
            <img className="item-img" src={image1} />
            <BlogItem>
              <p className="blog-content">“Mô tả em năm 100 tuổi.” Đó là đề bài Mỹ thuật của một
               trường tiểu học nọ. Với thái độ thẳng thắn và duy lý, một em học sinh vẽ vào giữa 
               bức tranh bia mộ của chính mình. Trong khi cô giáo cho tác phẩm điểm 2 và nói cần 
               xem lại đề bài, tôi thấy tác phẩm của em học sinh đã chạm tới một vấn đề triết học 
               lớn: Trí tưởng tượng của con người về tương lai của chính mình đã được sản tạo ra 
               như thế nào?... <Link>See More</Link> </p>
            </BlogItem>
          </div>
          <div className="blogs_left_item">
            <img className="item-img" src={image1} />
            <BlogItem>
              <p className="blog-content">“Mô tả em năm 100 tuổi.” Đó là đề bài Mỹ thuật của một
               trường tiểu học nọ. Với thái độ thẳng thắn và duy lý, một em học sinh vẽ vào giữa 
               bức tranh bia mộ của chính mình. Trong khi cô giáo cho tác phẩm điểm 2 và nói cần 
               xem lại đề bài, tôi thấy tác phẩm của em học sinh đã chạm tới một vấn đề triết học 
               lớn: Trí tưởng tượng của con người về tương lai của chính mình đã được sản tạo ra 
               như thế nào?... <Link>See More</Link> </p>
            </BlogItem>
          </div>
          <div className="blogs_left_item">
            <img className="item-img" src={image1} />
            <BlogItem>
              <p className="blog-content">“Mô tả em năm 100 tuổi.” Đó là đề bài Mỹ thuật của một
               trường tiểu học nọ. Với thái độ thẳng thắn và duy lý, một em học sinh vẽ vào giữa 
               bức tranh bia mộ của chính mình. Trong khi cô giáo cho tác phẩm điểm 2 và nói cần 
               xem lại đề bài, tôi thấy tác phẩm của em học sinh đã chạm tới một vấn đề triết học 
               lớn: Trí tưởng tượng của con người về tương lai của chính mình đã được sản tạo ra 
               như thế nào?... <Link>See More</Link> </p>
            </BlogItem>
          </div>
          <div className="blogs_left_item">
            <img className="item-img" src={image1} />
            <BlogItem>
              <p className="blog-content">“Mô tả em năm 100 tuổi.” Đó là đề bài Mỹ thuật của một
               trường tiểu học nọ. Với thái độ thẳng thắn và duy lý, một em học sinh vẽ vào giữa 
               bức tranh bia mộ của chính mình. Trong khi cô giáo cho tác phẩm điểm 2 và nói cần 
               xem lại đề bài, tôi thấy tác phẩm của em học sinh đã chạm tới một vấn đề triết học 
               lớn: Trí tưởng tượng của con người về tương lai của chính mình đã được sản tạo ra 
               như thế nào?... <Link>See More</Link> </p>
            </BlogItem>
          </div>
          <div className="blogs_left_item">
            <img className="item-img" src={image1} />
            <BlogItem>
              <p className="blog-content">“Mô tả em năm 100 tuổi.” Đó là đề bài Mỹ thuật của một
               trường tiểu học nọ. Với thái độ thẳng thắn và duy lý, một em học sinh vẽ vào giữa 
               bức tranh bia mộ của chính mình. Trong khi cô giáo cho tác phẩm điểm 2 và nói cần 
               xem lại đề bài, tôi thấy tác phẩm của em học sinh đã chạm tới một vấn đề triết học 
               lớn: Trí tưởng tượng của con người về tương lai của chính mình đã được sản tạo ra 
               như thế nào?... <Link>See More</Link> </p>
            </BlogItem>
          </div>
          <div className="blogs_left_item">
            <img className="item-img" src={image1} />
            <BlogItem>
              <p className="blog-content">“Mô tả em năm 100 tuổi.” Đó là đề bài Mỹ thuật của một
               trường tiểu học nọ. Với thái độ thẳng thắn và duy lý, một em học sinh vẽ vào giữa 
               bức tranh bia mộ của chính mình. Trong khi cô giáo cho tác phẩm điểm 2 và nói cần 
               xem lại đề bài, tôi thấy tác phẩm của em học sinh đã chạm tới một vấn đề triết học 
               lớn: Trí tưởng tượng của con người về tương lai của chính mình đã được sản tạo ra 
               như thế nào?... <Link>See More</Link> </p>
            </BlogItem>
          </div>
        </div>
        <div className="blogs_right">
          <BrowserRouter>
            <div className="category">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/"
                    activeClassName="selected"
                  ><span className="nav-item-text">LAST NEWS</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/"
                  ><span className="nav-item-text">POPULAR</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/"
                  >TOPIC</NavLink>
                </li>
              </ul>
            </div>
          </BrowserRouter>
          <div className="blog-list">
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;