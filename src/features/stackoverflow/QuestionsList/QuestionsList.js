import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native';

import { styles } from './QuestionsList.styles';

export type Props = {
  isLoading: boolean;
  pagination: {
    page: number;
    hasNext: boolean;
  };
  questions: string[];
  getQuestions: (page: number) => void;
};

export class QuestionsList extends Component<Props> {
  componentDidMount() {
    this.props.getQuestions(this.props.pagination.page);
  }

  render() {
    return this.props.isLoading
      ? this.renderLoadingMessage()
      : this.renderQuestions();
  }

  renderLoadingMessage() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          color={'#fff'}
          size={'large'}/>
        <Text style={styles.loadingTitle}>Loading</Text>
      </View>
    );
  }

  renderQuestions() {
    if (this.props.isLoading) {
      return null;
    }
    return (
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={this.props.questions}
        renderItem={({item, index}) => this.renderItem(item, index)}
        keyExtractor={this.keyExtractor}
        onEndReached={this.onLoadNext}
        ListEmptyComponent={this.renderEmptyItems}>
      </FlatList>
    );
  }

  onLoadNext = () => {
    if (!this.props.pagination.hasNext) {
      return;
    }
    this.props.getQuestions(this.props.pagination.page + 1);
  };

  keyExtractor = (item, index) => {
    return index.toString();
  };

  renderItem  = (item, index) => (
    <View style={[styles.questionContainer, {backgroundColor: (index % 2 === 0) ? '#e0e0e0' : 'white'}]}>
      <Text style={styles.questionTitle}>
        {item}
      </Text>
    </View>
  );

  renderEmptyItems = () => (
    <View  style={styles.container}>
      <Text>
        No items.
      </Text>
    </View>
  );
}
