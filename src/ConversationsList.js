import React from "react";
import { Typography } from "antd";
import { Menu, Icon } from "antd";

import conversationsListStyles from "./assets/ConversationsList.module.css";
import conversationsItemStyles from "./assets/ConversationsItem.module.css";

import { joinClassNames } from "./utils/class-name";

const { Text } = Typography;

export class ConversationsList extends React.Component {
  render() {
    const mode = "inline";
    const theme = "light";

    const {
      conversations,
      selectedConversationSid,
      onConversationClick
    } = this.props;

    return (
      <Menu
        style={{
          width: 450,
          height: "100%",
          borderBottom: "1px solid #d9d9d9",
          borderLeft: "1px solid #d9d9d9"
        }}
        mode={mode}
        className={conversationsListStyles["conversations-list"]}
        theme={theme}
      >
        {" "}
        {conversations.map((item) => {
          const activeChannel = item.sid === selectedConversationSid;
          const conversationItemClassName = joinClassNames([
            conversationsItemStyles["conversation-item"],
            activeChannel &&
              conversationsItemStyles["conversation-item--active"]
          ]);

          return (
            <Menu.Item
              key={item.sid}
              onClick={() => onConversationClick(item)}
              className={conversationItemClassName}
            >
              <Icon type="message" theme="outlined" />
              <Text
                strong
                className={conversationsItemStyles["conversation-item-text"]}
              >
                {item.friendlyName || item.sid}
              </Text>
            </Menu.Item>
          );
        })}
      </Menu>
      // <List
      //     header={"Open Conversations"}
      //     className={conversationsListStyles['conversations-list']}
      //     bordered={true}
      //     loading={conversations.length === 0}
      //     dataSource={conversations}
      //     renderItem={item => {
      //         const activeChannel = item.sid === selectedConversationSid;
      //         const conversationItemClassName = joinClassNames([
      //             conversationsItemStyles['conversation-item'],
      //             activeChannel && conversationsItemStyles['conversation-item--active']
      //         ]);
      //         return (
      //             <List.Item
      //                 key={item.sid}
      //                 onClick={() => onConversationClick(item)}
      //                 className={conversationItemClassName}
      //             >
      //                 <Text
      //                     strong
      //                     className={conversationsItemStyles['conversation-item-text']}
      //                 >
      //                     {item.friendlyName || item.sid}
      //                 </Text>
      //             </List.Item>
      //         )
      //     }}
      // />
    );
  }
}
