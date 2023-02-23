import * as S from "./styled";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type ButtonProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: ButtonProps) {
  const navigation = useNavigation();
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButtom onPress={() => navigation.navigate('groups')}>
          <S.BackIcon />
        </S.BackButtom>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
