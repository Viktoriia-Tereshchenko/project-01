/*
interface Props {
  avatar: string;
  name: string;
  description: string;
}

// export default function ProfileCard(props: Props) {
//   const { avatar, name, description } = props;
export default function ProfileCard({ avatar, name, description }: Props) {
  return (
    <div>
      <img src={avatar} alt="User avatar" style={{ height: "200px" }} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
*/

import type { FC } from "react";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  name: string;
  description: string;
}

const ProfileCard2: FC<ProfileCardProps> = ({ avatar, name, description }) => {
  return (
    <div className={styles.userCard}>
      <h2>{name}</h2>
      <img src={avatar} alt="avatar" />
      <p>{description}</p>
    </div>
  );
};

// BEM
export default ProfileCard2;
