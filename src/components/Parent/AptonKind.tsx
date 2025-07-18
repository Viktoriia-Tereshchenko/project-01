import { memo, useEffect } from "react";

interface Props {
  toy: { title: string };
  paint: () => void;
}

// memo оборачиваем КОМПОНЕНТЫ
// используем memo для защиты компонентов от ненужных рендеров, если props не меняются
export default memo(function AptonKid(props: Props) {
  const { paint } = props;

  useEffect(() => {
    paint();
  }, [paint]);

  return (
    <div className="bg-blue-400 border mx-10 my-5">
      AptonKid Toy{props.toy.title}
    </div>
  );
});
