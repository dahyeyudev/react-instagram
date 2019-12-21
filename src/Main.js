import React, { Component } from 'react';
//import logo from './logo.svg';
import './Main.css';
// import Side from './component/Side';

class Main extends Component() {
  render() {
    return (
      <div>
        <div class="header">
          <nav class="nav-container">
            <div class="left-img">
              <img
                class="img"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              />
              <div class="between"></div>
              <img class="img2" src="img/logo_text.png" />
            </div>
            {/* <input
              type="text"
              id="search"
              name="search"
              onchange="hideIcon(this);"
              placeholder="검색"
            /> */}
            <div class="right-img">
              <img
                class="img"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                class="img"
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                class="img"
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </nav>
        </div>
        <main>
          <div class="feeds">
            <article>
              <div class="pho-to">
                <img
                  class="profile"
                  src="https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
                />
                <div class="wecode" value="wecode">
                  <p>wecode</p>
                </div>
                <div class="divThreeDots">
                  <img
                    class="threeDots"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  />
                </div>
              </div>
              <img src="https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1" />
              <div class="pho-bo">
                <div class="whoLikes">
                  <div class="pb-left">
                    <img
                      class="pb-img"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    />
                    <img
                      class="pb-img"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                    />
                    <img
                      class="pb-img"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                    />
                  </div>
                  <div class="div-bookmark">
                    <img
                      class="bookmark"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                    />
                  </div>
                </div>
                <div class="content">
                  <p class="like">
                    <span class="bold">wecode</span>님이 좋아합니다.
                  </p>
                  <p class="p">
                    <span class="bold">cannon_mj</span> 위워크에서 진행한..
                  </p>
                  <div class="showMore">
                    <p>더보기</p>
                  </div>
                  <img
                    class="smallHeart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <div class="before">
                    <p>43분 전</p>
                  </div>
                </div>
                <div class="comment-list">
                  <ul id="commentUl"></ul>
                </div>
              </div>
              <div class="div-comment">
                <input class="comment" type="text" placeholder="댓글달기..." />
                <button class="submit" type="submit">
                  게시
                </button>
              </div>
            </article>
          </div>
        </main>
      </div>
    );
  }
}
export default Main;
