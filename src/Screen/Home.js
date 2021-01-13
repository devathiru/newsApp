import React, { Component } from "react";
import { Input, List, Icon, DatePicker, Card, Row, Col } from "antd";
import {  EditOutlined, EllipsisOutlined, SettingOutlined  } from '@ant-design/icons';
import '../index.css';
import "antd/dist/antd.css";

const { Meta } = Card;

let globalValue=[];
const newsUrl = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-13&sortBy=publishedAt&apiKey=d0885235740d4c67bff8f17468cd55d1';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
        }
        this.getResponseData();
    }


    componentDidMount() {
        // this.getResponseData();
    }
    async getResponseData() {
        //    alert("fsdfad"+JSON.stringify(arrayValue))
        try {
            fetch(newsUrl)
                .then(result => result.json())
                .then((resp) => {
                    let innerArr=[];
                    innerArr = resp;
                    if(Object.keys(innerArr).length > 0)
                    {
                        this.setState({ newsList: resp });
                        setTimeout(() => {
                            console.log("inside if", this.state.newsList.articles); 
                            globalValue = this.state.newsList.articles
                        }, 5000);
                        
                    }
                    
                })
        }
        catch (error) {
            console.log("error in componentDidMount  ", error)
        }
    }

    render() {
        const { newsList } = this.state;
        const result = newsList.totalResults;

         console.log("result ",globalValue);
        return (
            <div className="todoContainer">

        <div></div>
        <Row gutter={2} style={{ flexDirection: "column" , margin:15}}>
          <List
            // emptyText sets the text to display in an empty list
            locale={{ emptyText: "No list items" }}
            dataSource={this.state.newsList.articles}
            renderItem={(item) => (
              <Col className="gutter-row" span={5}style={{margin:10}}>
                <Card
                  hoverable
                  style={{ width: 250, }}
                  cover={
                    <img
                      alt="example"
                      src={item.urlToImage}
                      style={{width:250, height:200}}
                    />
                  }
                >
                  <div className="additional">
                    <p style={{fontWeight:'bold'}} >{item.title}</p>
                    <p >{item.content}<a href={item.url}>Read more</a> </p>
                    <p>{this.url}</p>
                    <p style={{textAlign:'right'}}>{item.publishedAt}</p>
                  </div>
                </Card>
              </Col>
            )}
          />
        </Row>
      </div>
        );
    }
}

export default Home;