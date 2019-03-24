import React, { Component } from 'react';
import * as vega from 'vega';
import './visualization_page.css';

export default class Visualization extends Component {
    componentDidMount() {
        this.renderVega(this.props);
    }

    componentDidUpdate() {
        this.renderVega(this.props);
    }

    renderVega(props) {
        if (typeof props.json_data !== 'undefined') {
            this.vis.style.width = this.vis.getBoundingClientRect().width + 'px';
            let runtime;
            let view;
            try {
                runtime = vega.parse(JSON.parse(props.json_data.content));
                view = new vega.View(runtime)
                    .logLevel(vega.Warn)
                    .initialize(this.vis)
                    .renderer('svg');
                view.hover();
                view.run();
            } catch (err) {
                throw err;
            }
            this.vis.style.width = 'auto';
        }
    }

    renderVisualization() {
        return (
            <div>
                <div className='visualization_container'>
                    <div ref={(c) => { this.vis = c }}></div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.renderVisualization()
        )
    }
}

