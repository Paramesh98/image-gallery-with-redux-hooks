import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, setImages } from '../../actions';
import Button from '../Button';
import Stats from '../Stats';

import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
//const key = '15276779-0a890273f64b1b88bf13c3696';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error, loadImages, isLoading, imageStats } = this.props;
        console.log(images);

        return (
            <div className="content">
                <section className="grid">
                    {images.length > 0 &&
                        images.map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <Stats stats={imageStats[image.id]} />
                                <img
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}

                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load More
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    images: state.images,
    error: state.error,
    imageStats: state.imageStats,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
