import { useRouter } from 'next/router';
import { Input } from '@components/common';
import useInputs from '@hooks/useInputs';

function SearchForm() {
  const router = useRouter();
  const { form, onChange, reset } = useInputs({ search: '' });
  const { search } = form;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (search) {
          reset();
          router.push(`https://www.google.com/search?q=${search}`);
        }
      }}
    >
      <Input
        type="submit"
        name={'search'}
        value={search}
        onChange={onChange}
        placeholder="Google에서 검색"
        width={300}
      />
    </form>
  );
}

export default SearchForm;
