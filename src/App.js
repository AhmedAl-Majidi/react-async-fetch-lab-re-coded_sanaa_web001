import React, { Component } from 'react'

class App extends Component {
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then( (people) => {
            for (const person in people) {
                console.log(person.name);
                }
            }

        })


    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default App
