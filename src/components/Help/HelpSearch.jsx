import React from 'react'
import './helpsearch.css'

export default function HelpSearch() {
  return (
    <div className='container'>
        <div className="help-header">
            <h2> Hi, how can we help you? </h2>
            <p class="secondary-header mb-5"><span class="trans">Use Knowledge Base search below or find answers in</span>
            <a className='flex items-center ml-[3px] text-light' href="#" target="_blank">
                <img src="https://hpanel-main.hostinger.com/assets/img/ic_help_outline.bd23a3f4.svg" alt="Knowledge Base" />
                <span className='leading-[18px] -mt-[6px]'>Tutorials</span></a></p>
        </div>
        <div className="help-search-bar">
            <form className='mb-none form-wrapper'>
                <div class="sm:mb-0 input-floating-label searchLabel">

                    <input className='input bgInput ' type="search" id="input" name="input" placeholder="Describe your issue" />
                    <label for="input labelSearch">Describe your issue</label>

                    <div className="searchicon">
                    <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-search" focusable="false" viewBox="0 0 24 24" class="h-icon icon-gray icon-static-view-box field__icon field__icon--left" width="24" height="24"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"></path></g></svg>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
