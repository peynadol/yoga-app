import { Pose } from "../types";

type CardProps = {
  pose: Pose;
};

export default function Card({ pose }: CardProps): JSX.Element {
  return (
    <>
      <p>{pose.english_name}</p>
    </>
  );
}
