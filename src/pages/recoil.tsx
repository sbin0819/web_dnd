import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { pageNameState, getNameSelector } from '@store';
function Recoil() {
  const [pageName, setPageName] = useRecoilState(pageNameState);
  const name = useRecoilValueLoadable(getNameSelector);
  console.log(name);
  return (
    <div>
      <div>
        <h1>Index Page!</h1>
      </div>
      <div>
        <span>pageName 상태: {pageName}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setPageName('IndexPage');
          }}
        >
          현재 페이지 이름으로 상태 변경
        </button>
      </div>
      <div>
        <h1>{JSON.stringify(name.contents)}</h1>
      </div>
    </div>
  );
}

export default Recoil;
