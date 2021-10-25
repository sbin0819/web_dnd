import { Input } from '@components/common';
import useInputs from '@hooks/useInputs';

function SearchForm() {
  const { form, onChange, reset } = useInputs({ search: '' });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
        reset();
      }}
    >
      <Input
        type="submit"
        name={'search'}
        value={form.search}
        onChange={onChange}
        placeholder="search바에서 검색"
      />
    </form>
  );
}

export default SearchForm;
