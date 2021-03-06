import React, { PureComponent } from 'react';
import { 
  View,
  Text,
  NetInfo,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import parse from 'url-parse';

//impor style from styles
import { MainScreenStyle as styles } from '../styles/';



class UltimateFlatList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loadingTop: false,
      loadingTail: false,
    };

  }

  componentDidMount() {

    //simplify for simplify component
    const { simplify } = this.props;

      if (!simplify) {
          this.setState({
            loadingTop: true,
          });

          this.mountTimer = setTimeout(() => {
            this.setState({ loadingTop: false });
          }, 2000);
      }
  }

  componentWillUnmount() {
    clearTimeout(this.endReachedTimer);
    clearTimeout(this.mountTimer);
    clearTimeout(this.refreshTimer);
  }

  _onRefresh = (REFRESH_METHOD) => {
    //judge whether is loading, if it is, wait for loading
    if (this.state.loadingTop) {
      return;
    }

    this.setState({ loadingTop: true });

    const { token, dispatch, id } = this.props;

    REFRESH_METHOD.map((item, key) => {
      dispatch({ type: item, payload: { token, id, refresh: true } });
    })

    this.refreshTimer = setTimeout(() => {
      this.setState({ loadingTop: false });
    }, 2000);
  }


  renderNoMore = () => {
    return (
      <View style={styles.loadingMore}>
        <Text style={styles.loadingMoreText}>{this.props.footText}</Text>
      </View>
    )
  }

  hasMore = (data) => {
    //simplify for simplify component
    const { simplify } = this.props;

    if (simplify) {
      return;
    }

    if (data) {
      const next = data.get('next');
      return next !== null;
    }

    //initial data return true to show blank page
    return true;
  }

  _onEndReached = (data, METHOD) => {
    //simplify for simplify component
    const { simplify } = this.props;

    if (simplify) {
      return;
    }
    
    console.log('hhhhhhh', simplify);

    if (!this.hasMore(data) || this.state.loadingTail) {
      return;
    }

    if(data) {
      const next = data.get('next');

      this.setState({ loadingTail: true });
      const { dispatch, token, id } = this.props;
      const { query } = parse(next, true);


      dispatch({ type: METHOD, payload: { token, id, refresh: false, query } })
      

      this.endReachedTimer = setTimeout(() => {
        this.setState({ loadingTail: false });
      }, 2000);
    }
  }

  renderFoot = (data) => {

    //simplify for simplify component
    const { simplify } = this.props;

    if (simplify) {
      return <View style={styles.loadingMore} />;
    }

    if (!this.hasMore(data)) {
      return this.renderNoMore();
    }


    if (!data || !this.state.loadingTail) {
      return <View style={styles.loadingMore} />
    }

    return (
      <View style={styles.loadingMore}>
        <ActivityIndicator />
        <View style={styles.loadingTextBox}>
          <Text style={styles.loadingText}>加载中...</Text>
        </View>
      </View>
    )
  }

  render() {
    const { header, data, method, enableRefresh, refreshMethod, simplify } = this.props;
    let refreshComponent = null;
    if (enableRefresh) {
      refreshComponent = (
        <RefreshControl
            refreshing={this.state.loadingTop}
            onRefresh={() => this._onRefresh(refreshMethod || [])}
            title='拼命加载中...'
        />
      )
    }
    console.log('state', refreshMethod);

    return (
      <FlatList
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={(info) => {
            //because of bug of the flatlist or sectionlist, will triger twice on scroll to end
            //so, I add the onEndReachedCalledDuringMomentum for fix this bug
            if (!this.onEndReachedCalledDuringMomentum) {
              this._onEndReached(data, method);
              this.onEndReachedCalledDuringMomentum = true;
            }
          }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={16}
          style={this.props.listStyle}
          ListFooterComponent={() => this.renderFoot(data)}
          refreshControl={refreshComponent}
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          renderItem={({ item, index }) => this.props.renderItem(item)}
          data={this.props.listData}
          ListHeaderComponent={this.props.header}
          enableEmptySections
          initialNumToRender={5}
          removeClippedSubviews={false}
        />
    )
  }
}

export default UltimateFlatList;
