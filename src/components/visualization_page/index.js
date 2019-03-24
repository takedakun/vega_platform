import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getVisualizationInfo } from '../../redux/actions/actions';
import Visualization from './Visualization';
import ShowSource from './ShowSource';
import './visualization_page.css';

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
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <a href={'/' + this.props.match.params.id}>{this.props.match.params.id}</a>'s Vega visualization <br />
                            <a href={this.props.match.url}>{this.props.match.params.vis_id}</a>
                            <div className='vis_title'>
                                {this.props.description}
                            </div>
                            <div>
                                <Visualization json_data={this.props.files_info['index.vega.json']} />
                            </div>
                            <div>
                                <ShowSource files_info={this.props.files_info} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    getVisualizationInfo
})(VisualizationPage);