import React, { Component } from 'react';

class Carousel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          slideNum: 0,
          maxSlides: 9,
        };
        this.sliderRef = React.createRef();
      }
    
      componentDidMount() {
        this.getMaxSlides();
        window.addEventListener('resize', this.handleResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }
    
      handleResize = () => {
        this.setState({ slideNum: 0 });
        this.getMaxSlides();
      };
    
      getMaxSlides() {
        const w = window.innerWidth;
        if (w <= 500) this.setState({ maxSlides: 5 });
        else if (w <= 1000) this.setState({ maxSlides: 3 });
        else this.setState({ maxSlides: 2 });
      }
    
      moveRight() {
        this.getMaxSlides();
        const { slideNum, maxSlides } = this.state;
        let newSlideNum = slideNum;
        if (newSlideNum >= maxSlides) {
          newSlideNum = -1;
        }
        newSlideNum+=1;
        this.setState({ slideNum: newSlideNum });
        this.sliderRef.current.style.transform = `translateX(-${newSlideNum * 100}%)`;
      }
    
      moveLeft() {
        this.getMaxSlides();
        const { slideNum, maxSlides } = this.state;
        let newSlideNum = slideNum;
        if (newSlideNum == -1 | newSlideNum == 0) {
          newSlideNum = maxSlides + 1;
        }
        newSlideNum-=1;
        this.setState({ slideNum: newSlideNum });
        this.sliderRef.current.style.transform = `translateX(-${newSlideNum * 100}%)`;
      }

    handleResize = () => {
        this.setState({ slideNum: -1 });
        this.moveRight();
        this.moveLeft();
        this.getMaxSlides();
    };

    render() {
        return(
            <div className="carousel-container">
                <button className="slider-button left-handle" onClick={this.moveLeft.bind(this)}>
                    <div className="text">&#8249;</div>
                </button>
                <div ref={this.sliderRef} className="slider">
                    <img id="img-1" src="https://via.placeholder.com/210/FFCCCB?text=A"/>
                    <img id="img-2" src="https://via.placeholder.com/220/FFCCCB?text=B"/>
                    <img id="img-3" src="https://via.placeholder.com/230/FFCCCB?text=C"/>
                    <img id="img-4" src="https://via.placeholder.com/240/FFCCCB?text=D"/>
                    <img id="img-5" src="https://via.placeholder.com/250/FFCCCB?text=E"/>
                    <img id="img-6" src="https://via.placeholder.com/260/FFCCCB?text=F"/>
                    <img id="img-7" src="https://via.placeholder.com/270/FFCCCB?text=G"/>
                    <img id="img-8" src="https://via.placeholder.com/280/FFCCCB?text=H"/>
                    <img id="img-9" src="https://via.placeholder.com/250/FFCCCB?text=I"/>
                    <img id="img-10" src="https://via.placeholder.com/260/FFCCCB?text=J"/>
                    <img id="img-11" src="https://via.placeholder.com/270/FFCCCB?text=K"/>
                    <img id="img-12" src="https://via.placeholder.com/280/FFCCCB?text=L"/>
                    <img id="img-13" src="https://via.placeholder.com/250/FFCCCB?text=M"/>
                    <img id="img-14" src="https://via.placeholder.com/260/FFCCCB?text=N"/>
                    <img id="img-15" src="https://via.placeholder.com/270/FFCCCB?text=O"/>
                    <img id="img-16" src="https://via.placeholder.com/280/FFCCCB?text=P"/>
                </div>
                <button className="slider-button right-handle" onClick={this.moveRight.bind(this)}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
        );
    }
}

export default Carousel;