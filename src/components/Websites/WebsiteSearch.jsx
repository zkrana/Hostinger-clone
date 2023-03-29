import React from 'react'
import './website.css'
export default function WebsiteSearch() {
  return (
    <div className='container'>
        <div className="status-bar">
            <div className="greetings">
                <div class="page-title">

                    <h2  class="page-breadcumnb">Websites</h2>
                    <div class="breadcrumb">
                        <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-home" focusable="false" viewBox="0 0 24 24" class="h-icon breadcrumb__icon" width="20" height="20" staticviewbox=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"></path></g></svg>
                        <span class="breadcrumb__route"> - <span class="breadcrumb__route__label">Websites</span></span>
                    </div>
                </div>
            </div>
            <form className='mb-none form-wrapper'>
                <div class="sm:mb-0 input-floating-label searchLabel">

                    <input className='input bgInput ' type="search" id="input" name="input" placeholder="Search" />
                    <label for="input labelSearch">Search for websites</label>

                    <div className="searchicon">
                    <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-search" focusable="false" viewBox="0 0 24 24" class="h-icon icon-gray icon-static-view-box field__icon field__icon--left" width="24" height="24"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"></path></g></svg>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
