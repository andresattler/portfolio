import React from 'react'

import style from './style.styl'

class Intro extends React.Component {
	render() {
		return (
      <div className={style.container}>
        <img className={style.picture} src='https://andresattler.com/blog/assets/profile.jpg'/>
        <h1 className={style.heading}>
          Hello I am Andre Sattler!
        </h1>
        <h2 className={style.description}>
          I am a curios JS Developer
        </h2>
        <h3 className={style.button}>
          View my Projects
        </h3>
      </div>
      )
	}
}

export default Intro
