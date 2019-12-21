import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav-container">
          <div className="left-img">
            <img
              className="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <div className="between"></div>
            <img className="img2" src={instaimage} />
          </div>
          <input type="text" id="search" name="search" placeholder="검색" />
          <div className="right-img">
            <img
              className="img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              className="img"
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="img"
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
      </div>
    );
  }
}
