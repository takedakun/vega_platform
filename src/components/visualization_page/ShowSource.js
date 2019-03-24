import React, { Component } from 'react';
import './visualization_page.css';
const ReactMarkdown = require('react-markdown');

export default class Visualization extends Component {
    insertSourceCode() {
        let source_code_list = [];
        if (typeof this.props['files_info']['README.md'] !== 'undefined') {
            source_code_list.push(
                <div key={0}>
                    <ReactMarkdown source={this.props['files_info']['README.md'].content} />
                </div>
            );
        }
        let key_id = 1;
        for (let file_name in this.props['files_info']) {
            if (file_name !== 'README.md' && file_name[0] !== '.') {
                source_code_list.push(
                    <div>
                        <div className='file_name' key={key_id}>#{file_name}</div>
                        <div className='file_description'>
                            <div className='source_code'>
                                <pre>{this.props['files_info'][file_name].content}</pre>
                            </div>
                        </div>
                    </div>
                );
            }
            key_id += 1;
        }

        return source_code_list
    }

    renderSouceCode() {
        return (
            <div className="source_code_container">
                {this.insertSourceCode()}
            </div>
        );
    }

    render() {
        return (
            this.renderSouceCode()
        )
    }
}
