import React from 'react';

function SideBox(props) {

const asidedata = {
  profile: [
    { username: "wecode",
      content:"사용자 이름1",
      src: "https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
  }],
  story: [
    { name:"looper",
      content:"사용자 이름2",
      src:"https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
    },
    { name:"lolo",
      content:"사용자 이름3",
      src:"https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
    },
    { name:"lololo",
      content: "1분전",
      src:"https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
    }
  ],
  recommend: [
    {
      name:"lolololo",
      content:"3분전",
      src:"https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
    },
    { name:"user_ryu",
      content: "user_wecode 외 2명이...",
      src:"https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
    }

  ]
}

const ImageList = asidedata.story.map( el => el.)

return (
 <div>

{ dkflfthiskll p }

 </div>

)
}


// class Side extends Component {
//   render() {
//     return (
//       <>
//         <aside>
//           <div className="main-right">
//             <div className="aside-1">
//               <img
//                 className="asideTop"
//                 src="https://scontent-icn1-1.cdninstagram.com/vp/91a4a6cf425350138a196ba4df885b9b/5DFE2D10/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"
//               />
//               <div className="asP">
//                 <div className="as as-us1">
//                   <p>user_wecode</p>
//                 </div>
//                 <div className="as as-us2">
//                   <p>사용자 이름</p>
//                 </div>
//               </div>
//             </div>
//             <div className="aside-2">
//               <div className="storyLine">
//                 <div className="story">
//                   <p>스토리</p>
//                 </div>
//                 <div className="showThemAll">
//                   <p>모두 보기</p>
//                 </div>
//               </div>
//             </div>
//             <div className="aside-3">
//               <div className="storyLine">
//                 <div className="story">
//                   <p>회원님을 위한 추천</p>
//                 </div>
//                 <div className="showThemAll">
//                   <p>모두 보기</p>
//                 </div>
//               </div>
//             </div>
//             <div className="info-1">
//               <p>
//                 Instagram 정보.지원.홍보 센터.API. 채용
//                 정보.개인정보처리방침.약관.디렉터리.프로필.해시태그.언어
//               </p>
//             </div>
//             <div className="info-1">
//               <p>2019 INSTAGRAM</p>
//             </div>
//           </div>
//         </aside>
//       </>
//     );
//   }
// }

export default Side;
