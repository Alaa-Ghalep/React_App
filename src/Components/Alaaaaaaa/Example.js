import React from 'react';
import Swiper from 'react-slider-swiper';
 
export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }
 
  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }
 
  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }
 
  render() {
    const params = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      runCallbacksOnInit: true,
      onInit: (swiper) => {
        this.swiper = swiper
      }
    }
 
    return(
      <div>
        <Swiper {...params} />
        <button onClick={this.goNext}>Next</button>
        <button onClick={this.goPrev}>Prev</button>
      </div>
    )
  }
}