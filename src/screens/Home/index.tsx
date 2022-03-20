import { StatusBar } from 'expo-status-bar';
import Heading from '@components/Heading';

import * as S from './styles';
import { MotiView } from 'moti';

const Home = () => (
  <S.Wrapper>
    <StatusBar style="light" />
    <Heading color="#ffff">Funcionou!</Heading>
    <MotiView
      from={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
    >
      <S.StyledText>Presto consultoria chama de zap 🥵</S.StyledText>
      <S.StyledText>(11) 99654-2296 | Software Engineer</S.StyledText>
    </MotiView>

    <MotiView
      from={{ opacity: 0, translateX: 50 }}
      animate={{ opacity: 1, translateX: 0 }}
    >
      <S.StyledText>criado e mantido por Augusto Iryoda</S.StyledText>
    </MotiView>
  </S.Wrapper>
);

export default Home;
