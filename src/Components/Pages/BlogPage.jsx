import React from 'react'
import BodyContent from '../BodyContent/BodyContent'
import HeaderContent from '../HeaderContent/HeaderContent'
import { Outlet, Link } from "react-router-dom";

function BlogPage() {
  return (
    <div id='wrapper'>
      <BodyContent>
        <h1>Blog Page</h1>
      </BodyContent>
    </div>
  )
}

export default BlogPage