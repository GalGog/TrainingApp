import React from 'react'
import List from './List';
import Welcome from './Welcome';
import Clock from './Clock'
import Comment from "./Comment";
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import ShowAlert from './ShowAlert'

const App = () => {
    return (
        <div>
            App
            <List list="Perto"/>
            <Welcome name="Sara" />

                <Comment
                    name="Sam"
                    date={new Date()}
                    text="My commit"
                    avatarUrl={faker.image.avatar()}
                    avatar="avatar"
                />



                <ApprovalCard >
                    <Comment
                        name="Sam"
                        date={new Date()}
                        text="My commit"
                        avatarUrl={faker.image.avatar()}
                        avatar="avatar"
                    />
            </ApprovalCard>

            <Clock />
            <ShowAlert />

        </div>

    )
};

export default App;