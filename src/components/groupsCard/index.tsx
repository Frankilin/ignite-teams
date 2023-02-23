import * as S from "./styled";
import { TouchableOpacityProps } from "react-native";

type CardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: CardProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
