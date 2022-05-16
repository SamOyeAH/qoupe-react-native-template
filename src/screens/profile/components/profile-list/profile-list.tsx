import { FC } from 'react';
import { SectionList, SectionListData, Text } from 'react-native';
import styles from './profile-list.styles';

interface Props {
  profile: SectionListData<string>[];
}

export const ProfileList: FC<Props> = ({ profile }) => (
  <SectionList
    sections={profile}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.header}>{title}</Text>
    )}
    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
  />
);
