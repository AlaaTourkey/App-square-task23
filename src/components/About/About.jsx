import React from 'react'
import { connect } from 'react-redux'
import { search } from '../redux/actions'

function About(props) {
  return (
    <>
      <div className=" h-dvh flex items-center justify-center bg-gray-700 ">
        <div className="">
          <h1 className='text-3xl'>
            Welcome  About
          </h1>
          <p>{props.about} Search For :  {props.name}</p>
          <input onChange={props.search} type="text" className='py-2 px-8 my-5 rounded' />
        </div>


      </div></>
  )
}

function mapStateToProps(state) {
  return { 
    about: state.user,
    name:state.search,
  }
}


export default connect(mapStateToProps, {search})(About) 