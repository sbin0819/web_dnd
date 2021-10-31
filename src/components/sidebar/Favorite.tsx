import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  gap: 15px;
  .cate-title {
    display: flex;
    justify-content: space-between;
    z-index: 1;
    color: #78797d;
    margin-bottom: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  .cate-item {
    padding: 8px 12px 8px 18px;
    z-index: 1;
    color: #78797d;
    transition: all 100ms ease;
    display: inline-block;
    width: 100%;
    position: relative;
    word-break: keep-all;
    cursor: pointer;
    font-size: 18px;
  }

  .on {
    color: #e8e9ee;
    font-weight: 700;
  }
`;

const cateInfo = [
  {
    title: '관심 카테고리',
    items: ['일반 개발', '웹 개발', '일반 기획', '일반 디자인'],
    active: false,
    setting: true,
  },
  {
    title: '개발',
    items: [
      '일반 개발',
      '웹 개발',
      'Javascript',
      'React',
      'Vue.js',
      'Angular',
      'Nodejs',
      'java',
      'Python',
    ],
    active: false,
  },
  {
    title: '기획',
    items: ['일반 기획', '웹 기획'],
    active: false,
  },
  {
    title: '디자인',
    items: ['일반 디자인', '웹 디자인'],
    active: false,
  },
  {
    title: '마케팅',
    items: ['일반 마케팅', '웹 마케팅'],
    active: false,
  },
  {
    title: '스타트업',
    items: ['일반 스타트업', '웹 스타트업'],
    active: true,
  },
];

function FavSidebar() {
  const [category, setCategory] = useState('');
  const [activeCategory, setActiveCategory] = useState('관심 카테고리');
  const [activeItem, setActiveItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleActiveTitle = (e: any) => {
    const { textContent } = e.target;
    setActiveCategory(textContent);
    setActiveItem('');
    // 카드 api 요청
  };

  const handleActiveItem = (e: any) => {
    const { textContent } = e.target;
    setActiveItem(textContent);
    // 카드 api 요청
  };

  useEffect(() => {}, []);
  return (
    <>
      {/* {isOpen && } */}
      <Container>
        {cateInfo.map((d, i) => (
          <div key={i}>
            <div
              className={
                d.title === activeCategory ? 'cate-title on' : 'cate-title '
              }
              onClick={handleActiveTitle}
            >
              <div>{d.title}</div>
              {d.setting && (
                <div onClick={() => {}}>
                  <BsThreeDots />
                </div>
              )}
            </div>
            <div>
              {d.title == activeCategory &&
                d.items.map((item, i) => (
                  <div
                    className={
                      item === activeItem ? 'cate-item on' : 'cate-item '
                    }
                    key={i}
                    onClick={handleActiveItem}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}

export default FavSidebar;
