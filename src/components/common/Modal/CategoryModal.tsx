import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultCategory } from '@lib/CONST/datas';
import { CategoryType, CategoryItemsType } from '@lib/CONST/types';

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

const Container = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  background: pink;
  width: 900px;
  height: 600px;
  color: white;
  border-radius: 50px;
`;

const handleActiveCate = (
  target: CategoryType[],
  validate: { items: CategoryItemsType[] },
) => {
  const validateArr = validate.items.map((i) => i.loc);
  return target.map((obj) => {
    return {
      ...obj,
      items: obj.items.map((item) => {
        return { ...item, seleted: validateArr.includes(item.loc) };
      }),
    };
  });
};

function CategoryModal() {
  const [active, setActive] = useState<CategoryType[]>([]);
  useEffect(() => {
    const result = handleActiveCate(defaultCategory, favCate);
    setActive(result);
  }, []);
  const handleActive = (e: any) => {
    // my 컨트롤
  };
  return <Container></Container>;
}

export default CategoryModal;
