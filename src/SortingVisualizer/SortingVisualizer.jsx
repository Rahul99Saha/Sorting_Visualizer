import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    };

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 150; i++) {
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({array});
    }
    mergeSort() {}

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    render() {
        const { array } = this.state;
        return (
              <div className="array-container">
                {
                    array.map((value, idx) => (
                        <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}>
                         {/* {value} */}
                        </div>
                    ))
                }
                <button onClick={()=> this.resetArray()}>Generate New Random Array</button>
                <button onClick={()=> this.resetArray()}>Merge Sort</button>
                <button onClick={()=> this.resetArray()}>Quick Sort</button>
                <button onClick={()=> this.resetArray()}>Heap Sort</button>
                <button onClick={()=> this.resetArray()}>Bubble Sort</button>
                </div>
        );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}