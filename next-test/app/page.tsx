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
  contentFour:string;
}

const contentText = `Lorem ipsum dolor sit amet consectetur. Mauris vitae nullam suspendisse ut amet quis nibh pellentesque. Non ut neque pellentesque nisl imperdiet turpis nulla ut. Ut id massa eu eu rhoncus elementum adipiscing metus. Mi risus nulla phasellus nisl molestie dignissim risus arcu elementum. Habitasse tortor tempus sed enim lectus duis volutpat. Pellentesque lacinia suspendisse sit malesuada sit a faucibus sed mattis. Egestas mauris id mattis id pulvinar nunc euismod id diam. Amet amet aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in egestas cursus sagittis sed in integer. Sed sed cursus tempor porttitor. Cras viverra arcu sed laoreet volutpat enim sem sapien. Est nibh velit eu ipsum praesent vitae vestibulum aliquam.
Sagittis nisi faucibus libero luctus tincidunt. Porttitor laoreet tellus maecenas tempor. Vehicula ut vulputate lorem congue. Eget dignissim aliquam integer tincidunt massa nulla duis mauris. Pellentesque aenean sit mauris morbi.
Dolor non aliquam elit risus elementum dictumst. Eu egestas turpis diam dictum. Dictumst leo senectus velit porta. Pretium tortor velit nulla sit ipsum vel sagittis. Eget elit donec sed amet vel in mattis aenean nibh. Fermentum et ac purus diam sit erat in vitae tellus. In at sit ornare fermentum. Risus blandit amet eget id."`

const contentTextTwo = `Lorem ipsum dolor sit amet consectetur. Consectetur morbi fames in id sit turpis eget lectus ut. Neque orci hendrerit scelerisque nam ac ac eu dui urna. Aliquet vulputate tortor odio ut. Turpis nam sagittis non iaculis. Eu purus mollis cursus sagittis sit. Tempor tempor tincidunt ac in. Ullamcorper eros ullamcorper tincidunt sagittis. Libero massa nec gravida libero. Volutpat orci bibendum morbi porta mauris pellentesque. Natoque gravida at penatibus vestibulum purus tristique mollis imperdiet amet. Sed magna dignissim luctus cras nulla. Ultrices sapien sed quis consectetur turpis fusce sem facilisis eget.
`


// 멤버 데이터 배열 생성
const memberData:Members[] = [
  { hash: '김우진', name: '김우진', content: '김우진 소개' , contentTwo: contentText , contentThree: '김우진 장점', contentFour: contentTextTwo },
  { hash: '김현', name: '김현', content: '김현 소개' , contentTwo: contentText , contentThree: '김현 장점', contentFour: contentTextTwo },
  { hash: '방승희', name: '방승희', content: '방승희 소개', contentTwo: contentText , contentThree: '방승희 장점', contentFour: contentTextTwo },
  { hash: '변호녕', name: '변호녕', content: '변호녕 소개' , contentTwo: contentText , contentThree: '변호녕 장점', contentFour: contentTextTwo },
  { hash: '소사무엘', name: '소사무엘', content: '소사무엘 소개' , contentTwo: contentText , contentThree: '소사무엘 장점', contentFour: contentTextTwo },
  { hash: '송영준', name: '송영준', content: '송영준 소개' , contentTwo: contentText , contentThree: '송영준 장점', contentFour: contentTextTwo },
  { hash: '신동현', name: '신동현', content: '신동현 소개' , contentTwo: contentText , contentThree: '신동현 장점', contentFour: contentTextTwo },
  { hash: '오승민', name: '오승민', content: '오승민 소개',  contentTwo: contentText , contentThree: '오승민 장점', contentFour: contentTextTwo },
  { hash: '유승민', name: '유승민', content: '유승민 소개',  contentTwo: contentText , contentThree: '유승민 장점', contentFour: contentTextTwo },
  { hash: '윤준현', name: '윤준현', content: '윤준현 소개' , contentTwo: contentText , contentThree: '윤준현 장점', contentFour: contentTextTwo },
  { hash: '이민구', name: '이민구', content: '이민구 소개' , contentTwo: contentText , contentThree: '이민구 장점', contentFour: contentTextTwo },
  { hash: '이유안', name: '이유안', content: '이유안 소개' , contentTwo: contentText , contentThree: '이유안 장점', contentFour: contentTextTwo },
  { hash: '이채이', name: '이채이', content: '이채이 소개' , contentTwo: contentText , contentThree: '이채이 장점', contentFour: contentTextTwo },
  { hash: '정영식', name: '정영식', content: '정영식 소개' , contentTwo: contentText , contentThree: '정영식 장점', contentFour: contentTextTwo },
  { hash: '최성민', name: '최성민', content: '최성민 소개' , contentTwo: contentText , contentThree: '최성민 장점', contentFour: contentTextTwo },
  { hash: '최은철', name: '최은철', content: '최은철 소개' , contentTwo: contentText , contentThree: '최은철 장점', contentFour: contentTextTwo },
  { hash: '홍문기', name: '홍문기', content: '홍문기 소개' , contentTwo: contentText , contentThree: '홍문기 장점', contentFour: contentTextTwo },
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
          <div key={hash} id={hash}  style={{ display: section === hash ? 'block' : 'none' }}>
            {contentTwo}
          </div>
        ))}
      {memberData.map(({ hash, contentThree })=> (
          <div key={hash} id={hash} style={{ display: section === hash ? 'block' : 'none' }}>
            {contentThree}
          </div>
        ))}
      {memberData.map(({ hash, contentFour })=> (
          <div key={hash} id={hash} style={{ display: section === hash ? 'block' : 'none' }}>
            {contentFour}
          </div>
        ))}
        <div>
          <label htmlFor="customInput"></label>
          <input type="text" name="customInput" placeholder='Write your name.'/>
        </div>
        {/* <button id="btn">Show</button> */}
        <div>
          <button >Show</button>
        </div>
        </div>
    </main>
  )
}
