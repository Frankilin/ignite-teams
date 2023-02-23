import { ButtonIcon } from "@components/buttonIcon";
import * as S from "./styles";

type PlayerProps = {
  name: string;
  onRemove(): void;
};

export function PlayerCard({ name, onRemove }: PlayerProps) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
}
