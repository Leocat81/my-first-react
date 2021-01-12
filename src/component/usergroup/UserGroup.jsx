import React from 'react';
import { Table } from "antd";
import request from "../../common/request.js";
class UserGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [
        {
          title: "名字",
          dataIndex: "name",
          key:'name',
          width: 400,
        }
      ],
    };
  }
  componentDidMount() {
    this.getDataSoure();
  }
   async getDataSoure(){
        let res1 = await request.get("/usergroup/list").then((res)=>{
          debugger
          this.setState({
            dataSource:res.data
          });
 });
 console.log(res1);
  }
  render() {
    return (
      // TODO:继续完善分页
      <Table
        columns={this.state.columns}
        dataSource={this.state.dataSource}
        rowKey={(record) => record.key}
        pagination={{
          pageSizeOptions: ["10", "20", "30", "40", "100"],
          defaultCurrent: 1,
          defaultPageSize: 10,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `显示 ${range[0]} ~ ${range[1]} 条记录，共 ${total} 条记录`,
        }}
      />
    );
  }
}
 
export default UserGroup;