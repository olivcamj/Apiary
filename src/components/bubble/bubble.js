import React from 'react';
import { Container, BubbleTitle, ChatWrapper, LeftTextWrapper, IconWrapper, IconImage, OrangeCard, RightTextWrapper, WhiteCard, DelegateTaskButtonWrapper, DelegateButton } from './bubble.styles';

import chatIcon from '../../images/ChatIcon.png';

const Bubble = () => {

    const conversation = [
        {
            chatLeft: true,
            chatText: "Practicum by Yandex is a kind of boot camp. Our goal is to help ambitious and passionate people to master it and find their first job. At the same time, the level of our training allows graduates to carry out high-quality real projects of companies under the review of experienced mentors."
        },
        {
            chatLeft: false,
            chatText: "Who will solve the problems? How much does it cost?"
        },
        {
            chatLeft: true,
            chatText: "It is a win-win situation: we take real tasks from real companies and give them to graduates of Data Science and Data Analytics courses. The results of these tasks will be repeatedly checked by curators and returned to the customer as ordered for free."
        },
        {
            chatLeft: false,
            chatText: "Why is it free?"
        },
        {
            chatLeft: true,
            chatText: "Because Practicum has students who are eager to gain real life experience, find them interesting and useful, and are ready to take on your tasks"
        },
        {
            chatLeft: false,
            chatText: "Wow! I'm ready to start!"
        }
    ]

    return (
        <Container>
            <BubbleTitle>What is Practicum by Yandex?</BubbleTitle>
            <ChatWrapper>
                {conversation.map((element, i) => {
                    return (
                        element.chatLeft ?
                            <LeftTextWrapper key={i}>
                                <IconWrapper>
                                    <IconImage src={chatIcon} />
                                </IconWrapper>
                                <OrangeCard chatText={conversation[i].chatText}></OrangeCard>
                            </LeftTextWrapper>
                            :
                            <RightTextWrapper key={i}>
                                <WhiteCard chatText={conversation[i].chatText}></WhiteCard>
                            </RightTextWrapper>
                            
                    )
                })}
                
            </ChatWrapper>

            <DelegateTaskButtonWrapper>
                <DelegateButton orange>Delegate a task</DelegateButton>
            </DelegateTaskButtonWrapper>

        </Container >
    )
}

export default Bubble;