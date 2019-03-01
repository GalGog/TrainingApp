import React from 'react'
import List from './List';
import Welcome from './Welcome';
import Clock from './Clock'
import Comment from "./Comment";
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import ShowAlert from './ShowAlert'
import ChangeInput from "./ChangeInput";

const App = () => {
    return (
        <div>
            App
            <List list="Perto"/>
            <hr/>
            <Welcome name="Sara" />

                <Comment
                    name="Sam"
                    date={new Date()}
                    text="My commit"
                    avatarUrl={faker.image.avatar()}
                    avatar="avatar"
                />

            <hr/>

                <ApprovalCard >
                    <Comment
                        name="Sam"
                        date={new Date()}
                        text="My commit"
                        avatarUrl={faker.image.avatar()}
                        avatar="avatar"
                    />
            </ApprovalCard>
            <hr/>
            <Clock />
            <hr/>
            <ShowAlert />
            <hr/>
            <ChangeInput />
            <hr/>

        </div>

    )
};

export default App;