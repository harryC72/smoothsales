import React from 'react';
import './App.css';
import mondaySdk from 'monday-sdk-js';
import { ListComponent } from './components/ListComponent';
import _ from 'lodash';
import { salesRepHeader, salesReps } from './salesReps';
import { productHeader, products } from './products';
const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: '',
    };
  }

  componentDidMount() {
    monday.setToken(process.env.api);
    monday.listen('settings', (res) => {
      this.setState({ settings: res.data });
    });
  }

  sortedSalesReps = _.orderBy(salesReps, ['salesVolume'], ['desc']);

  renderSalesReps(salesRepArr) {
    return salesRepArr.map((item, index) => {
      return (
        <tr key={item._id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.salesVolume}</td>
        </tr>
      );
    });
  }

  renderProducts(productsArr) {
    const workArr = productsArr.slice(0, 10);
    return workArr.map((item, index) => {
      return (
        <tr key={item._id}>
          <td>{index + 1}</td>
          <td>{item.title}</td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.state.settings.background);
    return (
      <div style={{ background: this.state.settings.background }}>
        <ListComponent
          title={'Leaderboard'}
          headerArgs={salesRepHeader}
          content={this.renderSalesReps(this.sortedSalesReps)}
        />
        <ListComponent
          title={'Products-top-ten'}
          headerArgs={productHeader}
          content={this.renderProducts(products)}
        />
      </div>
    );
  }
}

export default App;
