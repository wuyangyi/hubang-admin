import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Space } from 'antd';
import styles from './Welcome.less';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card title="用户管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>用户管理</a>
          <a>权限管理</a>
          <a>积分管理</a>
          <a>认证管理</a>
        </Space>
      </Card>
      <Card title="互帮管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>互帮列表</a>
          <a>互帮审核</a>
          <a>分类管理</a>
        </Space>
      </Card>
      <Card title="订单管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>订单列表</a>
          <a>待调解订单</a>
        </Space>
      </Card>
      <Card title="会话管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>临时会话</a>
          <a>群会话</a>
        </Space>
      </Card>
      <Card title="群管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>列表管理</a>
          <a>群审核</a>
        </Space>
      </Card>
      <Card title="帮圈管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>帮圈列表</a>
          <a>帮圈审核</a>
          <a>添加帮圈</a>
          <a>热门帮圈</a>
        </Space>
      </Card>
      <Card title="动态管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>动态列表</a>
          <a>评论管理</a>
        </Space>
      </Card>

      <Card title="文章资讯" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>文章列表</a>
          <a>添加文章</a>
          <a>广告位管理</a>
        </Space>
      </Card>
      <Card title="APP管理" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>版本列表</a>
          <a>发布版本</a>
          <a>APP下载</a>
        </Space>
      </Card>
      <Card title="其他" type="inner" size="small" className={styles.cardParent}>
        <Space size={[16, 10]} wrap>
          <a>短信日志</a>
          <a>用户反馈</a>
          <a>行业管理</a>
          <a>学校管理</a>
          <a>城市管理</a>
          <a>图片管理</a>
          <a>屏蔽词</a>
        </Space>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
