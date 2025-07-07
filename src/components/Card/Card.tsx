interface Props {
  url: string;
  alt?: string;
}

export default function Card(props: Props) {
  //export default function Card({url, alt} Props) {
  const { url, alt } = props;
  return (
    <div>
      <img src={url} alt={alt} style={{ width: "300px" }} />
    </div>
  );
}
