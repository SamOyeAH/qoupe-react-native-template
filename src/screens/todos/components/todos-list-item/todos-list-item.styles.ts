import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: 1,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
  },
});
