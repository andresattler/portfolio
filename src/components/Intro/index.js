import React from 'react'

import style from './style.styl'

class Intro extends React.Component {
	render() {
		return (
      <div className={style.container}>
        <img className={style.picture} src='https://avatars3.githubusercontent.com/u/17478790?s=400&u=01b91fc325e2b1176a4020f14c27be5a9c80ab1b&v=4'/>
        <h1 className={style.heading}>Hello I am Andre Sattler!</h1>
        <h2 className={style.description}>I am a curios JS Developer</h2>
        <h3 className={style.button}>View my Projects</h3>
      </div>
      )
	}
}

export default Intro
