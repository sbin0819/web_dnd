import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import { defaultCategory } from '@lib/CONST/commonInfo';

import { CategoryModal } from '@common/Modal';

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

const favCate = {
  title: '관심 카테고리',
  items: [
    { title: '일반 개발', loc: 'dev-0' },
    { title: '웹 개발', loc: 'dev-1' },
    { title: '일반 기획', loc: 'plan-0' },
    { title: '웹 기획', loc: 'plan-1' },
  ],
  type: 'main',
  include: ['dev', 'plan'],
};

// drop down 추가

function FavSidebar() {
  const [category, setCategory] = useState([favCate, ...defaultCategory]);
  const [activeCategory, setActiveCategory] = useState('관심 카테고리');
  const [activeItem, setActiveItem] = useState('');
  const [isOpen, setIsOpen] = useState(true);

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

  // useEffect(() => {
  //   setCategory((prev) => [favCate, ...prev]);
  // }, []);

  return (
    <>
      <Container>
        {isOpen && <CategoryModal />}
        {category.map((d, i) => (
          <div key={i}>
            <div
              className={
                d.title === activeCategory ? 'cate-title on' : 'cate-title '
              }
              onClick={handleActiveTitle}
            >
              <div>{d.title}</div>
              {i === 0 && (
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
                      item.title === activeItem ? 'cate-item on' : 'cate-item '
                    }
                    key={i}
                    onClick={handleActiveItem}
                  >
                    {item.title}
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
