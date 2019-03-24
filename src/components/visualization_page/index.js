import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVisualizationInfo } from '../../redux/actions/actions';
import Visualization from './Visualization';
import ShowSource from './ShowSource';

const mapStateToProps = (state) => {
    return {
        files_info: state.visualization.files_info,
        user_id: state.visualization.user_id,
        description: state.visualization.description
    }
}

class VisualizationPage extends Component {
    componentDidMount() {
        this.props.getVisualizationInfo(this.props.match.params.vis_id);
    }

    render() {
        return (
            <div>
                Visualization Page
                <div className='vis_title'>
                    {this.props.description}
                </div>
                <div>
                    <Visualization json_data={this.props.files_info['index.vega.json']} />
                </div>
                <div>
                    <ShowSource files_info={this.props.files_info} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    getVisualizationInfo
})(VisualizationPage);