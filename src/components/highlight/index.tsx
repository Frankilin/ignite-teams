import * as S from "./styled";
type Props = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: Props) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </>
  );
}
