import React from 'react'
import '../../../style/embed.scss'
import WidgetComponent from '../WidgetComponent'

const Embed = React.createClass({
  render () {
    return (
      <div className='col-md-offset-1 col-md-10'>
        <div id='features'>
          <div className='page-header'>
            <h1>Features</h1>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <h2>Timeline Component</h2>
              <p>
                The Timeline Component presents all the interesting events and life stations of composers. Here you can have access to very interesting facts - illustrated in a very lovely and easy understanding way.
              </p>
            </div>
            <div className='col-sm-6'>
              <h2>Relations Component</h2>
              <p>
                The relations component is a great way for users to explore interesting but less known facts about music pieces, composers and musicians. Users have the possibility to search and browse through all the relations and related entities of a given entity of interest.
              </p>
            </div>
            <div className='col-sm-6'>
              <h2>Map Component</h2>
              <p>
                The Map Component presents all the interesting events and life stations of composers. Here you can have access to very interesting facts - illustrated in a very lovely and easy understanding way.
              </p>
            </div>
          </div>
        </div>
        <div id='demo'>
          <div className='page-header'>
            <h1>Widget Demo</h1>
          </div>
          <div id='timelineComponent'>
            <h2>Timeline Component</h2>
            <WidgetComponent entityId='bb5e41c0-a0ad-4f38-8ee8-2f784a791e67' entityType='artists' widgetType='timeline' />
          </div>
          <div id='relationsComponent'>
            <h2>Relations Component</h2>
            <WidgetComponent entityId='bb5e41c0-a0ad-4f38-8ee8-2f784a791e67' entityType='artists' widgetType='relations' />
          </div>
          <div id='mapComponent'>
            <h2>Map Component</h2>
            <WidgetComponent entityType='artists' entityId='bb5e41c0-a0ad-4f38-8ee8-2f784a791e67' widgetType='map' />
          </div>
        </div>
        <div id='embedding'>
          <div className='page-header'>
            <h1>Embedding the Widget on your Website</h1>
          </div>
          <h3>HTML</h3>
          <figure className='highlight'>
            <pre><code className='language-html' data-lang='html'><span className='tag'>&lt;iframe</span> <span className='attr'>width=</span><span className='style'>'100%'</span> <span className='attr'>height=</span><span className='style'>'300px'</span> <span className='attr'>id='</span><span className='style'>widget</span><span className='attr'>'</span><span className='tag'>&gt;</span><br /><span className='tag'>&lt;/iframe&gt;</span></code></pre>
          </figure>
          <h3>JavaScript</h3>
          <figure className='highlight'>
            <pre>
              <code className='language-html' data-lang='html'>
                <div>{"function startWidget(widgetName, rootElement) { \n  const scripts = document.createElement('script'); \n  scripts.src = 'http://mcmwidgets.azurewebsites.net/widgets.js'; \n  scripts.type = 'text/javascript'; \n  scripts.onload = function() { \n    MCMWidgets.init({ widget: widgetName, rootElement: rootElement }); \n  }; \n  document.getElementsByTagName('head')[0].append(scripts); \n}\nstartWidget('timeline', document.getElementById('widget'));"} </div>
              </code>
            </pre>
          </figure>
          <div className='row'>
            <div className='col-sm-12'>
              <h4>Timeline Component</h4>
              <samp><span className='functionName'>startWidget(</span><span className='style'>'timeline'</span>, <span className='tag'>document</span>.getElementById(<span className='style'>'timelineWidget'</span>)<span className='functionName'>)</span>;</samp>
              <h4>Relations Component</h4>
              <samp><span className='functionName'>startWidget(</span><span className='style'>'relations'</span>, <span className='tag'>document</span>.getElementById(<span className='style'>'relationsWidget'</span>)<span className='functionName'>)</span>;</samp>
              <h4>Map Component</h4>
              <samp><span className='functionName'>startWidget(</span><span className='style'>'map'</span>, <span className='tag'>document</span>.getElementById(<span className='style'>'mapWidget'</span>)<span className='functionName'>)</span>;</samp>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Embed
