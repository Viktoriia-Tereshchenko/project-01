// export default - чтобы функция была видна в другом месте

//Props - от properties
interface Props {
  name: string;
  age?: number;
}

// export default - чтобы функция была видна в другом месте
export default function Greeting(props: Props) {
  //  с помощью деструктуризации получили нужный параметр из пропсов
  const { name, age } = props;
  //const name = "Viktoria";

  // название переменных в {}
  return (
    <p>
      Hello, {name}! {age}
    </p>
  );
}

// export default Greeting;  - можно экспортировать после
