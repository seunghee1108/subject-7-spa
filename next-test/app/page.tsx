// import Image from 'next/image'

// export default function Home() {
//   return (

//   )
// }

'use client';
import styles from './page.module.css'
import { useState } from 'react';  // CSS 모듈(page.module.css)을 사용하여 컴포넌트에 스타일을 적용 

// 'Members'라는 인터페이스를 정의한다.
// 각 멤버의 정보를 담는 객체의 형태를 정의한 것이다.
interface Members{
  hash:string;
  name:string;
  content:string;
  contentTwo:string;
  contentThree:string;
  
}

const contentText = `Lorem ipsum dolor sit amet consectetur. Mauris vitae nullam suspendisse ut amet quis nibh pellentesque. Non ut neque pellentesque nisl imperdiet turpis nulla ut. Ut id massa eu eu rhoncus elementum adipiscing metus. Mi risus nulla phasellus nisl molestie dignissim risus arcu elementum. Habitasse tortor tempus sed enim lectus duis volutpat. Pellentesque lacinia suspendisse sit malesuada sit a faucibus sed mattis. Egestas mauris id mattis id pulvinar nunc euismod id diam. Amet amet aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in egestas cursus sagittis sed in integer. Sed sed cursus tempor porttitor. Cras viverra arcu sed laoreet volutpat enim sem sapien. Est nibh velit eu ipsum praesent vitae vestibulum aliquam.
Sagittis nisi faucibus libero luctus tincidunt. Porttitor laoreet tellus maecenas tempor. Vehicula ut vulputate lorem congue. Eget dignissim aliquam integer tincidunt massa nulla duis mauris. Pellentesque aenean sit mauris morbi.
Dolor non aliquam elit risus elementum dictumst. Eu egestas turpis diam dictum. Dictumst leo senectus velit porta. Pretium tortor velit nulla sit ipsum vel sagittis. Eget elit donec sed amet vel in mattis aenean nibh. Fermentum et ac purus diam sit erat in vitae tellus. In at sit ornare fermentum. Risus blandit amet eget id."`


// 멤버 데이터 배열 생성
const memberData:Members[] = [
  { hash: '김우진', name: '김우진', content: '김우진 소개' , contentTwo: contentText , contentThree : '김우진 장점' },
  { hash: '김현', name: '김현', content: '김현 소개' , contentTwo: contentText , contentThree : '김현 장점' },
  { hash: '방승희', name: '방승희', content: '방승희 소개', contentTwo: contentText , contentThree : '방승희 장점' },
  // { hash: '변호녕', name: '변호녕', content: '변호녕 소개' , contentTwo: '내용'},
  // { hash: '소사무엘', name: '소사무엘', content: '소사무엘 소개' , contentTwo: '내용'},
  // { hash: '송영준', name: '송영준', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '신동현', name: '신동현', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '오승민', name: '오승민', content: '최성민 소개', contentTwo: '내용' },
  // { hash: '유승민', name: '유승민', content: '최성민 소개', contentTwo: '내용' },
  // { hash: '윤준현', name: '윤준현', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '이민구', name: '이민구', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '이유안', name: '이유안', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '이채이', name: '이채이', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '정영식', name: '정영식', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '최성민', name: '최성민', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '최은철', name: '최은철', content: '최성민 소개' , contentTwo: '내용'},
  // { hash: '홍문기', name: '홍문기', content: '최성민 소개' , contentTwo: '내용'},
];



export default function Home() {
  // useState 훅을 이용한 상태 관리
  // section 이라는 상태 변수와 그 상태를 업데이트할 수 있는 useSection 함수를 생성한다. 
  const [section, setSection] = useState('');

  // 멤버의 이름이 클릭되었을 때 호출되는 함수이다.
  // 선택된 멤버의 'hash'값을 'section' 상태로 업데이트 하고, 현재 페이지의 해시 값을 변경한다.
  const nameClick = (targetSection:string) => {
    setSection(targetSection);
    window.location.hash = `#${targetSection}`;
  };

  
  // 페이지의 메인 컴포넌트를 정의한다.
  // 이 안에서 멤버 목록('ul')과 멤버 소개 내용('div')이 표시된다.
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <ul>
          {/* 멤버 목록 출력 : 멤버 데이터를 매핑하여 각 멤버의 이름을 목록으로 출력하고, 클릭시 'nameClick' 함수를 호출한다. */}
        {memberData.map(({ hash, name }) => (
          <li key={hash} onClick={() => nameClick(hash)}>{name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.board}>
        {/* 멤버 소개 내용 출력 : 멤버 데이터를 매핑하여 각 멤버의 소개 내용을 출력하고, 현재 선택된 멤버에 해당하는 내용만 보여주도록 스타일을 제어한다. */}
      {memberData.map(({ hash, content }) => (
        <div key={hash} id={hash} style={{ display: section === hash ? 'block' : 'none' }}>
            {content}
          </div>
        ))}
      {memberData.map(({ hash, contentTwo })=> (
          <div key={`${hash}-additional2`} id={`${hash}-additional2`}  style={{ display: section === hash ? 'block' : 'none' }}>
            {contentTwo}
          </div>
        ))}
      {memberData.map(({ hash, contentThree })=> (
          <div key={hash} id={hash} style={{ display: section === hash ? 'block'   : 'none' }}>
            {contentThree}
          </div>
        ))}
    

        </div>
    </main>
  )
}
