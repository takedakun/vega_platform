import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserWorks } from '../../redux/actions/actions';
import { Container, Row, Col } from 'react-bootstrap';
import './user_page.css';

const mapStateToProps = (state) => {
    return {
        works_address: state.userWorksAddress.works_address
    }
}

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page_found: true
        }
    }

    componentDidMount() {
        this.props.getUserWorks(this.props.match.params.id)
    }

    showLinkToVisualization() {
        let links_list = [];
        let _link;
        let _len = this.props.works_address.length;
        for (let i = 0; i < _len; i++) {
            _link = '/' + this.props.match.params.id + '/' + this.props.works_address[i].id;
            links_list.push(
                <div key={i} className='linkto_vis' >
                    <a href={_link}>{this.props.works_address[i].description}</a>
                </div>
            );
        }
        return links_list
    }

    renderVisualizationPage() {
        if (this.state.page_found) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col md={{ span: 10, offset: 1 }}>
                                <div>Works of <a href={this.props.match.url}>{this.props.match.params.id}</a></div>
                                <div>
                                    {this.showLinkToVisualization()}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return (
                <div>Page not found.</div>
            )
        }
    }

    render() {
        return (
            this.renderVisualizationPage()
        )
    }
}

export default connect(mapStateToProps, {
    getUserWorks
})(UserPage);