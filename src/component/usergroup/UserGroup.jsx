import React from 'react';
import { Table, Tag, Space } from "antd";
import request from "../../common/request.js";
class UserGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [
        {
          title: "用户组标识",
          dataIndex: "group_sign",
          width: 200,
        },
        {
          title: "用户组名称",
          dataIndex: "group_name",
          width: 300,
        },
        {
          title: "用户组描述",
          dataIndex: "group_describe",
          width: 300,
        },
        {
          title: "分厂唯一标识",
          dataIndex: "work_shop",
          width: 200,
        },
        {
          title: "分厂描述",
          dataIndex: "branch_describe",
          width: 200,
        },
        {
          title: "创建时间",
          dataIndex: "create_time",
          width: 300,
        },
        {
          title: "备注",
          dataIndex: "remark",
        },
      ],
    };
  }
  componentDidMount() {
    this.getDataSoure();
  }
   async getDataSoure(){
        let res1 = await request.get("/usergroup/list").then((res)=>{
          this.setState({
            dataSource:res.data
          });
 });
  }
  render() {
    return (
      // TODO:继续完善分页
      <Table
        columns={this.state.columns}
        dataSource={this.state.dataSource}
        rowKey={(record) => record.id}
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