import * as S from "./styles";

type ListProps = {
  message: string;
};

export function ListEmpty({ message }: ListProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
