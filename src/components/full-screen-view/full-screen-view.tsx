import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './full-screen-view.styles';

export const FullScreenView: FC<ViewProps> = ({ style, ...rest }) => (
  <View style={[styles.root, style]} {...rest} />
);
