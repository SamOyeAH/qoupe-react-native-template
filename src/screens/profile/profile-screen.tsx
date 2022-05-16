import { SectionListData, Text } from 'react-native';
import jwtDecode from 'jwt-decode';
import { useAuth } from '@auth/hooks';
import { FullScreenView } from '@components/full-screen-view';
import { ProfileList } from './components';

export const ProfileScreen = () => {
  const { accessToken } = useAuth();

  try {
    const data: Record<string, string> = jwtDecode(accessToken ?? '');
    const profile: Record<string, string> = {
      name: data.name,
      email: data.unique_name,
    };

    const reducedProfile = Object.keys(profile).map<SectionListData<string>>(
      key => ({
        title: key,
        data: [profile[key]],
      }),
    );

    return (
      <FullScreenView>
        <ProfileList profile={reducedProfile} />
      </FullScreenView>
    );
  } catch {
    return <Text>something went wrong</Text>;
  }
};
